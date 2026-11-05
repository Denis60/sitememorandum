'use client';
import { useRef, useState } from 'react';
import { SITE } from '../lib/site';

export default function CopyMail() {
  const ref = useRef(null);
  const [msg, setMsg] = useState('');
  function copy() {
    const fallback = () => {
      const r = document.createRange();
      r.selectNodeContents(ref.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      setMsg('Adresse sélectionnée : copiez-la avec Ctrl+C.');
    };
    try { navigator.clipboard.writeText(SITE.email).then(() => setMsg('Adresse copiée.'), fallback); } catch { fallback(); }
  }
  return (
    <>
      <div className="copy">
        <a ref={ref} href={`mailto:${SITE.email}`} style={{ fontSize: 18, fontWeight: 600 }}>{SITE.email}</a>
        <button className="btn outline icon" type="button" onClick={copy} aria-label="Copier l’adresse" title="Copier l’adresse">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
          </svg>
        </button>
      </div>
      <p className="small muted" role="status">{msg}</p>
    </>
  );
}
