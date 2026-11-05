'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Service Diag IA (variables Netlify : NEXT_PUBLIC_DIAG_API_URL, NEXT_PUBLIC_TURNSTILE_SITE_KEY).
const API = (process.env.NEXT_PUBLIC_DIAG_API_URL || 'https://diag-ia-backend.onrender.com').replace(/\/$/, '');
const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
const CONTACT = 'denis.oblin@memorandum-ai.com';

const MSG_UNAVAILABLE = `Le service est momentanément indisponible. Réessayez dans quelques minutes ou écrivez à ${CONTACT}.`;

function cleanSiren(v) {
  return v.replace(/[\s.]/g, '');
}

function luhnOk(s) {
  if (s === '356000000') return true; // La Poste
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let d = +s[s.length - 1 - i];
    if (i % 2) { d *= 2; if (d > 9) d -= 9; }
    sum += d;
  }
  return sum % 10 === 0;
}

function sirenValid(s) {
  return /^\d{9}$/.test(s) && luhnOk(s);
}

const SECTEURS = [
  'Industrie', 'BTP et construction', 'Commerce de gros', 'Commerce de détail', 'Transport et logistique',
  'Hôtellerie et restauration', 'Santé et médico-social', 'Services aux entreprises', 'Conseil et ingénierie',
  'Expertise comptable et juridique', 'Banque, finance et assurance', 'Immobilier', 'Agriculture et viticulture',
  'Agroalimentaire', 'Informatique et numérique', 'Formation et enseignement', 'Services à la personne', 'Collectivité et association',
];

function cleanSite(v) {
  const t = v.trim();
  if (!t) return '';
  const u = /^https?:\/\//i.test(t) ? t : `https://${t}`;
  try {
    const x = new URL(u);
    return /\.[a-z]{2,}$/i.test(x.hostname) ? `${x.protocol}//${x.hostname}${x.pathname === '/' ? '' : x.pathname}` : null;
  } catch {
    return null;
  }
}

function readUtm() {
  try {
    const p = new URLSearchParams(window.location.search);
    const utm = {};
    for (const k of ['source', 'medium', 'campaign', 'term', 'content']) {
      const v = p.get('utm_' + k);
      if (v) utm[k] = v.slice(0, 200);
    }
    return Object.keys(utm).length ? utm : undefined;
  } catch {
    return undefined;
  }
}

export default function DiagForm({ onDark }) {
  const [errors, setErrors] = useState({});
  const [phase, setPhase] = useState('idle'); // idle | sending | done
  const [slow, setSlow] = useState(false);
  const [notice, setNotice] = useState('');
  const [success, setSuccess] = useState('');
  const [company, setCompany] = useState(null); // { text, warn }
  const tsRef = useRef(null);
  const tsWidget = useRef(null);
  const tsToken = useRef('');
  const lookupSeq = useRef(0);

  // Widget Cloudflare Turnstile (mode managed)
  useEffect(() => {
    if (!TURNSTILE_KEY) return undefined;
    let cancelled = false;
    function render() {
      if (cancelled || !window.turnstile || !tsRef.current || tsWidget.current !== null) return;
      tsWidget.current = window.turnstile.render(tsRef.current, {
        sitekey: TURNSTILE_KEY,
        language: 'fr',
        callback: (t) => { tsToken.current = t; },
        'expired-callback': () => { tsToken.current = ''; },
        'error-callback': () => { tsToken.current = ''; },
      });
    }
    if (window.turnstile) render();
    else {
      let s = document.getElementById('cf-turnstile-script');
      if (!s) {
        s = document.createElement('script');
        s.id = 'cf-turnstile-script';
        s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
      }
      s.addEventListener('load', render);
    }
    return () => { cancelled = true; };
  }, []);

  function resetTurnstile() {
    tsToken.current = '';
    try { if (window.turnstile && tsWidget.current !== null) window.turnstile.reset(tsWidget.current); } catch { /* rien */ }
  }

  // Confirmation du nom d'entreprise (registre public), sans jamais bloquer l'envoi
  async function lookup(raw) {
    const siren = cleanSiren(raw);
    const seq = ++lookupSeq.current;
    if (!sirenValid(siren)) { setCompany(null); return; }
    try {
      const r = await fetch(`https://recherche-entreprises.api.gouv.fr/search?q=${siren}&per_page=1`);
      const j = await r.json();
      if (seq !== lookupSeq.current) return;
      const e = (j.results || []).find((x) => x.siren === siren);
      if (!e) { setCompany({ text: 'Entreprise non trouvée, vérifiez le SIREN', warn: true }); return; }
      if (e.etat_administratif === 'C') { setCompany({ text: 'Cette entreprise est indiquée comme cessée', warn: true }); return; }
      const ville = e.siege && (e.siege.libelle_commune || e.siege.commune);
      setCompany({ text: `✓ ${e.nom_complet}${ville ? ' — ' + ville : ''}`, warn: false });
    } catch {
      if (seq === lookupSeq.current) setCompany({ text: 'Entreprise non trouvée, vérifiez le SIREN', warn: true });
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (phase !== 'idle') return;
    const f = e.currentTarget;
    const email = f.email.value.trim().toLowerCase();
    const siren = cleanSiren(f.siren.value);
    const secteur = f.secteur.value.trim().replace(/\s+/g, ' ');
    const site = cleanSite(f.site_web.value);
    const err = {};
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) err.email = 'Adresse e-mail invalide.';
    if (secteur.length < 2) err.secteur = 'Merci d’indiquer votre secteur d’activité.';
    if (site === null) err.site_web = 'Adresse de site invalide (exemple : www.entreprise.fr).';
    if (siren && !sirenValid(siren)) err.siren = 'SIREN invalide : 9 chiffres attendus.';
    if (!f.consentement.checked) err.consentement = 'Merci de cocher la case de consentement.';
    setErrors(err);
    setNotice('');
    if (Object.keys(err).length) return;

    // Champ piège rempli : on n'envoie rien et on affiche le succès
    if (f.website.value) {
      setSuccess(successText(email));
      setPhase('done');
      return;
    }

    setPhase('sending');
    setSlow(false);
    const slowTimer = setTimeout(() => setSlow(true), 8000);
    const ctrl = new AbortController();
    const killTimer = setTimeout(() => ctrl.abort(), 60000);
    const body = { email, secteur, consentement: true, turnstile_token: tsToken.current, page: window.location.origin + window.location.pathname };
    const utm = readUtm();
    if (utm) body.utm = utm;
    if (siren) body.siren = siren;
    if (site) body.site_web = site;

    let status = 0;
    let code = '';
    try {
      const r = await fetch(`${API}/v1/public/demandes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: ctrl.signal,
        credentials: 'omit',
        referrerPolicy: 'strict-origin',
      });
      status = r.status;
      try { code = (await r.json()).code || ''; } catch { code = ''; }
    } catch {
      status = 0;
    } finally {
      clearTimeout(slowTimer);
      clearTimeout(killTimer);
    }

    if (status === 202 && code === 'confirmation_envoyee') {
      setSuccess(successText(email));
      setPhase('done');
      return;
    }

    setPhase('idle');
    setSlow(false);
    if (status === 400 && code === 'email_invalide') setErrors({ email: 'Adresse e-mail invalide.' });
    else if (status === 400 && code === 'siren_invalide') setErrors({ siren: 'SIREN invalide : 9 chiffres attendus.' });
    else if (status === 400 && code === 'secteur_requis') setErrors({ secteur: 'Merci d’indiquer votre secteur d’activité.' });
    else if (status === 400 && code === 'site_web_invalide') setErrors({ site_web: 'Adresse de site invalide (exemple : www.entreprise.fr).' });
    else if (status === 400 && code === 'consentement_requis') setErrors({ consentement: 'Merci de cocher la case de consentement.' });
    else if (status === 403 && code === 'captcha_invalide') { setNotice('Vérification anti-robot échouée, merci de réessayer.'); resetTurnstile(); }
    else if (status === 404 && code === 'siren_inconnu') setErrors({ siren: 'Nous ne trouvons pas d’entreprise active avec ce SIREN.' });
    else if (status === 429 && code === 'trop_de_demandes') setNotice(`Trop de demandes depuis votre connexion. Réessayez plus tard ou écrivez à ${CONTACT}.`);
    else setNotice(MSG_UNAVAILABLE);
    if (status !== 403) resetTurnstile();
  }

  return (
    <form className="panel" onSubmit={onSubmit} noValidate aria-labelledby="diag-form-title">
      <h2 className="h3" id="diag-form-title">Demander mon diagnostic IA</h2>

      <div className="field">
        <label htmlFor="diag-email">E-mail professionnel</label>
        <input id="diag-email" name="email" type="email" required autoComplete="email" placeholder="prenom.nom@entreprise.fr"
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'diag-email-err' : undefined} disabled={phase === 'done'} />
        {errors.email ? <span className="error" id="diag-email-err">{errors.email}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="diag-secteur">Secteur d’activité</label>
        <input id="diag-secteur" name="secteur" type="text" required list="diag-secteurs" autoComplete="off" maxLength={120} placeholder="Exemple : négoce de matériaux"
          aria-invalid={!!errors.secteur} aria-describedby={errors.secteur ? 'diag-secteur-err' : undefined} disabled={phase === 'done'} />
        <datalist id="diag-secteurs">{SECTEURS.map((x) => <option key={x} value={x} />)}</datalist>
        {errors.secteur ? <span className="error" id="diag-secteur-err">{errors.secteur}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="diag-site">Site web <span className="muted">(facultatif)</span></label>
        <input id="diag-site" name="site_web" type="text" inputMode="url" autoComplete="url" maxLength={200} placeholder="www.entreprise.fr"
          aria-invalid={!!errors.site_web} aria-describedby={errors.site_web ? 'diag-site-err' : undefined} disabled={phase === 'done'} />
        {errors.site_web ? <span className="error" id="diag-site-err">{errors.site_web}</span> : null}
      </div>

      <div className="field">
        <label htmlFor="diag-siren">SIREN <span className="muted">(facultatif, pour personnaliser l’approche)</span></label>
        <input id="diag-siren" name="siren" type="text" inputMode="numeric" autoComplete="off" placeholder="9 chiffres"
          onChange={(e) => lookup(e.target.value)}
          aria-invalid={!!errors.siren} aria-describedby={`diag-siren-hint diag-siren-co${errors.siren ? ' diag-siren-err' : ''}`} disabled={phase === 'done'} />
        <span className="hint" id="diag-siren-hint">9 chiffres, sur votre Kbis ou sur annuaire-entreprises.data.gouv.fr</span>
        <span className={company && company.warn ? 'hint warn' : 'hint ok'} id="diag-siren-co" aria-live="polite">{company ? company.text : ''}</span>
        {errors.siren ? <span className="error" id="diag-siren-err">{errors.siren}</span> : null}
      </div>

      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="diag-website">Site web</label>
        <input id="diag-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="check" htmlFor="diag-consentement">
        <input id="diag-consentement" name="consentement" type="checkbox" required aria-describedby={errors.consentement ? 'diag-consent-err' : undefined} disabled={phase === 'done'} />
        <span>J’accepte que Memorandum AI traite mon adresse e-mail et les informations publiques de mon entreprise pour réaliser le diagnostic demandé. Données conservées 6 mois au plus. <Link href="/mentions-legales/">Politique de confidentialité</Link></span>
      </label>
      {errors.consentement ? <span className="error" id="diag-consent-err">{errors.consentement}</span> : null}

      {TURNSTILE_KEY ? <div ref={tsRef} className="turnstile" /> : null}

      {phase !== 'done' ? (
        <button className="btn primary" type="submit" disabled={phase === 'sending'}>
          {phase === 'sending' ? 'Envoi en cours…' : 'Demander mon diagnostic IA'}
        </button>
      ) : null}

      <div aria-live="polite" role="status">
        {phase === 'sending' && slow ? <p className="small muted">Merci de patienter quelques secondes.</p> : null}
        {success ? <p className="notice ok">{success}</p> : null}
        {notice ? <p className="notice">{notice}</p> : null}
      </div>

      <p className="small muted">Vous préférez parler directement ? <Link className="link" href="/contact/">Prendre rendez-vous</Link></p>
    </form>
  );
}

function successText(email) {
  return `Merci ! Un e-mail de confirmation vient de vous être envoyé à ${email}. Cliquez sur le lien qu’il contient pour lancer la préparation de votre diagnostic. Pensez à vérifier vos indésirables.`;
}
