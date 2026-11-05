'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV } from '../lib/site';

const SECTION_OF = { 'veille-ia': 'ia-en-action', 'signaux-faibles': 'ia-en-action', 'diagnostic-ia': 'ia-en-action' };

export default function Header() {
  const path = usePathname() || '/';
  const first = path.split('/').filter(Boolean)[0] || '';
  const current = SECTION_OF[first] || first;
  const [ouvert, setOuvert] = useState(false);
  useEffect(() => { setOuvert(false); }, [path]);
  return (
    <header className="top">
      <div className="wrap">
        <Link className="brand" href="/">
          <img alt="" src="/logo-m.png" width="44" height="38" />
          <span>MEMORANDUM AI</span>
        </Link>
        <button type="button" className="menu-btn" aria-expanded={ouvert} aria-controls="nav-principale" onClick={() => setOuvert((o) => !o)}>
          <span aria-hidden="true">{ouvert ? '✕' : '☰'}</span> Menu
        </button>
        <nav id="nav-principale" className={`nav${ouvert ? ' open' : ''}`} aria-label="Navigation principale" onClick={(e) => { if (e.target.closest('a')) setOuvert(false); }}>
          {NAV.map((n) => (
            <Link key={n.key} href={n.href} aria-current={current === n.key ? 'page' : undefined}>{n.label}</Link>
          ))}
          <Link href="/contact/" aria-current={current === 'contact' ? 'page' : undefined}>Contact</Link>
          <Link className="btn primary" href={path === '/' ? '#diagnostic' : '/diagnostic-ia/'}>Lancer le diagnostic personnalisé</Link>
        </nav>
      </div>
    </header>
  );
}
