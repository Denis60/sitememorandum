'use client';
import { useEffect, useRef, useState } from 'react';
import { SITE } from '../lib/site';

// Créneaux calculés par le service Diag IA à partir de l'agenda Outlook (2 jours × 2 h par semaine).
const API = (process.env.NEXT_PUBLIC_DIAG_API_URL || 'https://diag-ia-backend.onrender.com').replace(/\/$/, '');
const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
const fmtJour = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/Paris' });
const fmtHeure = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' });
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function useTurnstile(ref) {
  const widget = useRef(null);
  const token = useRef('');
  useEffect(() => {
    if (!TURNSTILE_KEY) return undefined;
    let cancelled = false;
    const render = () => {
      if (cancelled || !window.turnstile || !ref.current || widget.current !== null) return;
      widget.current = window.turnstile.render(ref.current, {
        sitekey: TURNSTILE_KEY, language: 'fr',
        callback: (t) => { token.current = t; },
        'expired-callback': () => { token.current = ''; },
        'error-callback': () => { token.current = ''; },
      });
    };
    if (window.turnstile) render();
    else {
      let s = document.getElementById('cf-turnstile-script');
      if (!s) {
        s = document.createElement('script');
        s.id = 'cf-turnstile-script';
        s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        s.async = true;
        document.head.appendChild(s);
      }
      s.addEventListener('load', render);
    }
    return () => { cancelled = true; };
  });
  const reset = () => {
    token.current = '';
    try { if (window.turnstile && widget.current !== null) window.turnstile.reset(widget.current); } catch { /* rien */ }
  };
  return { token, reset };
}

export default function Agenda() {
  const [etat, setEtat] = useState('chargement'); // chargement | pret | vide | indisponible | envoi | confirme
  const [jours, setJours] = useState([]);
  const [choix, setChoix] = useState('');
  const [notice, setNotice] = useState('');
  const [confirme, setConfirme] = useState('');
  const tsRef = useRef(null);
  const ts = useTurnstile(tsRef);

  async function charger() {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 60000);
      const r = await fetch(`${API}/v1/public/creneaux`, { credentials: 'omit', signal: ctrl.signal, cache: 'no-store' });
      clearTimeout(t);
      if (!r.ok) throw new Error(String(r.status));
      const j = await r.json();
      setJours(j.jours || []);
      setEtat((j.jours || []).length ? 'pret' : 'vide');
    } catch {
      setEtat('indisponible');
    }
  }
  useEffect(() => { charger(); }, []);

  async function reserver(e) {
    e.preventDefault();
    const f = e.currentTarget;
    setNotice('');
    if (f.website.value) { setConfirme(choix); setEtat('confirme'); return; }
    setEtat('envoi');
    let status = 0;
    let code = '';
    try {
      const r = await fetch(`${API}/v1/public/rendez-vous`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'omit',
        body: JSON.stringify({
          debut: choix, nom: f.nom.value.trim(), email: f.email.value.trim().toLowerCase(),
          entreprise: f.entreprise.value.trim(), message: f.message.value.trim(), turnstile_token: ts.token.current,
        }),
      });
      status = r.status;
      try { code = (await r.json()).code || ''; } catch { code = ''; }
    } catch { status = 0; }
    if (status === 200 && code === 'rendez_vous_confirme') { setConfirme(choix); setEtat('confirme'); return; }
    setEtat('pret');
    ts.reset();
    if (code === 'email_invalide') setNotice('Adresse e-mail invalide.');
    else if (code === 'nom_requis') setNotice('Merci d’indiquer votre nom.');
    else if (code === 'creneau_indisponible') { setNotice('Ce créneau vient d’être pris. Choisissez-en un autre.'); setChoix(''); charger(); }
    else if (code === 'captcha_invalide') setNotice('Vérification anti-robot échouée, merci de réessayer.');
    else if (code === 'trop_de_demandes') setNotice(`Trop de demandes. Écrivez-moi à ${SITE.email}.`);
    else setNotice(`La réservation n’a pas abouti. Réessayez ou écrivez-moi à ${SITE.email}.`);
  }

  if (etat === 'chargement') return <p className="muted">Chargement de mes disponibilités…</p>;
  if (etat === 'indisponible' || etat === 'vide') {
    return (
      <div className="stack">
        <p className="muted">{etat === 'vide' ? 'Aucun créneau libre dans les trois prochaines semaines.' : 'L’agenda est momentanément indisponible.'}</p>
        <a className="btn primary" href={SITE.bookings} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>Voir mes disponibilités</a>
      </div>
    );
  }
  if (etat === 'confirme') {
    const d = new Date(confirme);
    return <p className="notice ok" role="status">Merci ! Rendez-vous noté le {fmtJour.format(d)} à {fmtHeure.format(d)}. L’invitation Teams arrive dans votre boîte mail.</p>;
  }
  return (
    <div className="stack">
      <div className="agenda-jours">
        {jours.map((j) => (
          <div key={j.jour} className="agenda-jour">
            <p className="small" style={{ fontWeight: 600 }}>{cap(fmtJour.format(new Date(j.creneaux[0])))}</p>
            <div className="agenda-creneaux">
              {j.creneaux.map((c) => (
                <button key={c} type="button" className={`chip${choix === c ? ' on' : ''}`} aria-pressed={choix === c} onClick={() => setChoix(c)}>
                  {fmtHeure.format(new Date(c))}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {choix ? (
        <form className="stack" onSubmit={reserver} noValidate>
          <p className="small muted">Créneau choisi : {fmtJour.format(new Date(choix))} à {fmtHeure.format(new Date(choix))} (30 min, Teams)</p>
          <div className="field"><label htmlFor="rdv-nom">Nom</label><input id="rdv-nom" name="nom" required autoComplete="name" /></div>
          <div className="field"><label htmlFor="rdv-email">E-mail</label><input id="rdv-email" name="email" type="email" required autoComplete="email" /></div>
          <div className="field"><label htmlFor="rdv-entreprise">Entreprise</label><input id="rdv-entreprise" name="entreprise" autoComplete="organization" /></div>
          <div className="field"><label htmlFor="rdv-message">Votre sujet (facultatif)</label><textarea id="rdv-message" name="message" rows={3} /></div>
          <div style={{ display: 'none' }} aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
          {TURNSTILE_KEY ? <div ref={tsRef} className="turnstile" /> : null}
          <button className="btn primary" type="submit" disabled={etat === 'envoi'} style={{ alignSelf: 'flex-start' }}>
            {etat === 'envoi' ? 'Réservation…' : 'Réserver ce créneau'}
          </button>
        </form>
      ) : null}
      <div aria-live="polite">{notice ? <p className="notice">{notice}</p> : null}</div>
    </div>
  );
}
