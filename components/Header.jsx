'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '../lib/site';

const SECTION_OF = { 'veille-ia': 'ia-en-action', 'signaux-faibles': 'ia-en-action', 'diagnostic-ia': 'ia-en-action' };

export default function Header() {
  const path = usePathname() || '/';
  const first = path.split('/').filter(Boolean)[0] || '';
  const current = SECTION_OF[first] || first;
  return (
    <header className="top">
      <div className="wrap">
        <Link className="brand" href="/">
          <img alt="" src="/logo-m.png" width="44" height="38" />
          <span>MEMORANDUM AI</span>
        </Link>
        <nav className="nav" aria-label="Navigation principale">
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
