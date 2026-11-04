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
        <button className="btn outline" type="button" onClick={copy}>Copier l’adresse</button>
      </div>
      <p className="small muted" role="status">{msg}</p>
    </>
  );
}
