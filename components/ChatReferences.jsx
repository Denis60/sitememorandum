'use client';
import { useEffect, useRef, useState } from 'react';

// Chat des références : questions des visiteurs, réponses de Claude à partir des seules fiches publiées (workflow n8n).
const API = process.env.NEXT_PUBLIC_CHAT_API_URL || 'https://n8n-memorandum.app.n8n.cloud/webhook/chat-references';
const SUGGESTIONS = [
  'Quels résultats avez-vous obtenus pour une PME ?',
  'Avez-vous travaillé dans l’industrie ?',
  'Comment se déroule une mission type ?',
];

function sessionId() {
  try {
    let s = window.sessionStorage.getItem('chat-ref-session');
    if (!s) { s = Math.random().toString(36).slice(2) + Date.now().toString(36); window.sessionStorage.setItem('chat-ref-session', s); }
    return s;
  } catch { return 'anonyme'; }
}

// Texte simple → paragraphes, avec les adresses du site rendues cliquables.
function Texte({ t }) {
  return t.split(/\n+/).map((p, i) => (
    <p key={i}>{p.split(/(https:\/\/memorandum-ai\.com\/[\w\-/#]*)/g).map((m, k) => (
      /^https:\/\/memorandum-ai\.com\//.test(m) ? <a key={k} href={m.replace('https://memorandum-ai.com', '')}>{m.replace('https://', '')}</a> : m
    ))}</p>
  ));
}

export default function ChatReferences() {
  const [ouvert, setOuvert] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [saisie, setSaisie] = useState('');
  const [attente, setAttente] = useState(false);
  const fil = useRef(null);
  const champ = useRef(null);

  useEffect(() => { if (fil.current) fil.current.scrollTop = fil.current.scrollHeight; }, [msgs, attente]);
  useEffect(() => { if (ouvert && champ.current) champ.current.focus(); }, [ouvert]);

  async function envoyer(question) {
    const q = (question || saisie).trim();
    if (!q || attente) return;
    const historique = msgs.slice(-8);
    setMsgs((m) => [...m, { role: 'user', content: q }]);
    setSaisie('');
    setAttente(true);
    let reponse = '';
    try {
      const ctrl = new AbortController();
      const minuteur = setTimeout(() => ctrl.abort(), 60000);
      const r = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, history: historique, session: sessionId(), page: window.location.pathname }),
        signal: ctrl.signal,
      });
      clearTimeout(minuteur);
      const d = await r.json().catch(() => ({}));
      reponse = d.reponse || '';
    } catch { reponse = ''; }
    setMsgs((m) => [...m, { role: 'assistant', content: reponse || 'Le service ne répond pas pour le moment. Vous pouvez écrire à Denis Oblin : https://memorandum-ai.com/contact/' }]);
    setAttente(false);
  }

  return (
    <>
      <button type="button" className={`chatref-bouton${ouvert ? ' ouvert' : ''}`} onClick={() => setOuvert((o) => !o)} aria-expanded={ouvert} aria-controls="chatref">
        {ouvert ? 'Fermer' : 'Interroger nos références'}
      </button>
      {ouvert ? (
        <section id="chatref" className="chatref" aria-label="Questions sur nos références">
          <header>
            <strong>Questions sur nos missions</strong>
            <span>Vous dialoguez avec une IA, qui ne s’appuie que sur les fiches publiées. Ne saisissez pas de données personnelles.</span>
          </header>
          <div className="chatref-fil" ref={fil} aria-live="polite">
            {msgs.length === 0 ? (
              <div className="chatref-suggestions">
                {SUGGESTIONS.map((s) => <button key={s} type="button" onClick={() => envoyer(s)}>{s}</button>)}
              </div>
            ) : null}
            {msgs.map((m, i) => (
              <div key={i} className={`chatref-msg ${m.role === 'user' ? 'moi' : 'ia'}`}>{m.role === 'user' ? <p>{m.content}</p> : <Texte t={m.content} />}</div>
            ))}
            {attente ? <div className="chatref-msg ia attente"><p>Je consulte nos fiches…</p></div> : null}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); envoyer(); }}>
            <label htmlFor="chatref-saisie" className="sr-only">Votre question</label>
            <input id="chatref-saisie" ref={champ} value={saisie} onChange={(e) => setSaisie(e.target.value)} maxLength={500} placeholder="Votre question sur nos missions" autoComplete="off" />
            <button type="submit" className="btn gold" disabled={attente || !saisie.trim()}>Envoyer</button>
          </form>
        </section>
      ) : null}
    </>
  );
}
