import Link from 'next/link';
import { SITE } from '../lib/site';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <strong>MEMORANDUM AI</strong>
        <span>{SITE.email} · {SITE.city}</span>
        <nav aria-label="Liens de pied de page">
          <Link href="/offres/">Offres</Link>
          <Link href="/references/">Références</Link>
          <Link href="/ia-en-action/">L’IA en action</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/mentions-legales/">Mentions légales</Link>
        </nav>
      </div>
    </footer>
  );
}
