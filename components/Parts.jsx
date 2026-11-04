import Link from 'next/link';
import { MESSAGES } from '../lib/site';

export function Bullets({ items, className = 'bullets' }) {
  return <ul className={className}>{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

export function Source({ s }) {
  return (
    <p className="src">Source : <a href={s.url} target="_blank" rel="noopener noreferrer">{s.src}</a> · {s.d}</p>
  );
}

export function PageHead({ eyebrow, title, lead, crumb, night }) {
  return (
    <section className={`band ${night ? 'night' : 'tint'}`}>
      <div className="wrap stack">
        {crumb ? <p className="small muted"><Link href="/ia-en-action/">L’IA en action</Link> › {crumb}</p> : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="h1">{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
    </section>
  );
}

export function MessageTag({ m }) {
  return m ? <span className="tag">{MESSAGES[m]}</span> : null;
}

export function CaseCard({ r }) {
  return (
    <article className="card">
      <p className="small muted">{r.who}</p>
      <h3 className="h3">{r.titre}</h3>
      {r.big ? (<><p className="big">{r.big}</p><p className="muted">{r.bigTxt}</p></>) : <p className="muted">{r.resultat}</p>}
      {r.cite ? <blockquote>« {r.cite} »</blockquote> : null}
    </article>
  );
}

export function ArticleCard({ a }) {
  return (
    <article className="card" style={{ borderTop: '3px solid var(--gold)', borderRadius: 0, borderLeft: 0, borderRight: 0, borderBottom: 0, padding: '20px 0 0' }}>
      <p className="small muted">{a.theme} · {a.statut === 'publie' ? a.date : 'à paraître'}</p>
      <h3 style={{ fontSize: 20, fontWeight: 600 }}>{a.titre}</h3>
      {a.accroche ? <p className="muted">{a.accroche}</p> : null}
    </article>
  );
}

export function Steps({ detailed }) {
  return (
    <ol className="steps">
      <li><b>1</b><span><strong>Vous déclarez</strong> votre adresse professionnelle et votre entreprise.</span></li>
      <li><b>2</b><span><strong>Denis valide</strong> votre demande{detailed ? ', en général sous un jour ouvré' : ''}.</span></li>
      <li><b>3</b><span><strong>Vous recevez un lien</strong> vers l’entretien par chat. Vous pouvez y joindre des documents et inviter des collègues.</span></li>
      <li><b>4</b><span><strong>Nous restituons</strong> la synthèse lors d’un rendez-vous gratuit.</span></li>
    </ol>
  );
}

export const MESSAGES_LIST = [
  'S’adapter vite.',
  'L’IA est une opportunité, pas un boulet.',
  'C’est un sujet de management, plus un sujet technique.',
  'Faire est facile, avoir des idées est difficile.',
];
