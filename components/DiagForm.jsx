'use client';
import { useState } from 'react';
import Link from 'next/link';

// Adresse du webhook n8n qui reçoit les demandes (variable Netlify NEXT_PUBLIC_DIAG_WEBHOOK_URL).
const WEBHOOK = process.env.NEXT_PUBLIC_DIAG_WEBHOOK_URL || '';

const PUBLIC_DOMAINS = ['gmail.com', 'googlemail.com', 'yahoo.fr', 'yahoo.com', 'hotmail.com', 'hotmail.fr', 'outlook.com', 'outlook.fr', 'live.fr', 'live.com', 'msn.com', 'orange.fr', 'wanadoo.fr', 'free.fr', 'sfr.fr', 'neuf.fr', 'laposte.net', 'icloud.com', 'me.com', 'gmx.fr', 'gmx.com', 'bbox.fr', 'aol.com', 'protonmail.com', 'proton.me'];

function luhn(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let d = +s[s.length - 1 - i];
    if (i % 2) { d *= 2; if (d > 9) d -= 9; }
    sum += d;
  }
  return sum % 10 === 0;
}

export default function DiagForm() {
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | sent | failed

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const mail = f.mail.value.trim().toLowerCase();
    const siren = f.siren.value.replace(/\s/g, '');
    const dom = mail.split('@')[1] || '';
    const err = {};
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/.test(mail)) err.mail = 'Saisissez une adresse e-mail complète, par exemple prenom.nom@entreprise.fr.';
    else if (PUBLIC_DOMAINS.includes(dom)) err.mail = 'Utilisez votre adresse professionnelle : les messageries grand public ne sont pas acceptées.';
    if (!/^\d{9}$/.test(siren)) err.siren = 'Le SIREN compte 9 chiffres.';
    else if (!luhn(siren)) err.siren = 'Ce numéro n’est pas un SIREN valide : vérifiez les chiffres.';
    if (!f.consent.checked) err.consent = 'Cochez la case pour accepter l’utilisation de vos données.';
    setErrors(err);
    if (Object.keys(err).length) return;
    if (f.site.value) { setState('sent'); return; } // champ piège anti-robots
    if (!WEBHOOK) { setState('failed'); return; }
    setState('sending');
    try {
      const r = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: mail, siren, consentement: true, source: 'site-memorandum-ai', date: new Date().toISOString() }),
      });
      setState(r.ok ? 'sent' : 'failed');
    } catch {
      setState('failed');
    }
  }

  return (
    <form className="panel" onSubmit={onSubmit} noValidate>
      <h2 className="h3">Demander mon diagnostic</h2>
      <div className="field">
        <label htmlFor="diag-mail">Adresse e-mail professionnelle</label>
        <input id="diag-mail" name="mail" type="email" autoComplete="email" placeholder="prenom.nom@entreprise.fr" aria-invalid={!!errors.mail} aria-describedby="diag-mail-err" />
        {errors.mail ? <span className="error" id="diag-mail-err">{errors.mail}</span> : null}
      </div>
      <div className="field">
        <label htmlFor="diag-siren">SIREN de l’entreprise</label>
        <input id="diag-siren" name="siren" inputMode="numeric" autoComplete="off" placeholder="9 chiffres" aria-invalid={!!errors.siren} aria-describedby="diag-siren-hint diag-siren-err" />
        <span className="hint" id="diag-siren-hint">Il figure sur vos factures et votre extrait Kbis.</span>
        {errors.siren ? <span className="error" id="diag-siren-err">{errors.siren}</span> : null}
      </div>
      <div className="field" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label htmlFor="diag-site">Ne pas remplir</label>
        <input id="diag-site" name="site" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="check" htmlFor="diag-consent"><input id="diag-consent" name="consent" type="checkbox" /><span>J’accepte que mes données soient utilisées pour réaliser le diagnostic, selon la <Link href="/mentions-legales/">politique de confidentialité</Link>.</span></label>
      {errors.consent ? <span className="error">{errors.consent}</span> : null}
      <button className="btn primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}</button>
      <div role="status" aria-live="polite">
        {state === 'sent' ? <p className="notice ok">Demande reçue. Vous allez recevoir un e-mail pour confirmer votre adresse. Après validation, le lien vers l’entretien vous sera envoyé.</p> : null}
        {state === 'failed' ? <p className="notice">La demande n’a pas pu être envoyée. Écrivez-nous à denis.oblin@memorandum-ai.com en indiquant votre entreprise.</p> : null}
      </div>
      <p className="small muted">Vous préférez parler directement ? <Link className="link" href="/contact/">Prendre rendez-vous</Link></p>
    </form>
  );
}
