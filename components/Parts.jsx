import Link from 'next/link';
import { MESSAGES, dateFr } from '../lib/site';
import { g } from '../lib/glossaire';

export function Bullets({ items, className = 'bullets', seen = new Set() }) {
  return <ul className={className}>{items.map((i) => <li key={i}>{g(i, seen)}</li>)}</ul>;
}

export function Source({ s }) {
  return (
    <p className="src">Source : <a href={s.url} target="_blank" rel="noopener noreferrer">{s.src}</a> · {s.d}</p>
  );
}

export function PageHead({ eyebrow, title, lead, crumb, night, compact, photo, children }) {
  return (
    <section className={`band ${night ? 'night' : 'tint'}${compact ? ' compact' : ''}`}>
      <div className="wrap stack">
        {crumb ? <p className="small muted"><Link href="/ia-en-action/">L’IA en action</Link> › {crumb}</p> : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {photo ? (
          <div className="head-photo"><h1 className="h1">{title}</h1><img src={photo.src} alt={photo.alt} width="132" height="132" /></div>
        ) : <h1 className="h1">{title}</h1>}
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function MessageTag({ m }) {
  return m ? <span className="tag">{MESSAGES[m]}</span> : null;
}

// Chiffre clé et son libellé sur une même ligne (« ÷ 2 à 5 le temps d’analyse… ») : sans retour à la ligne, la phrase reste lisible.
export function BigFigure({ r, seen }) {
  return <p className="big-line"><span className="big">{r.big}</span> <span className="muted">{g(r.bigTxt, seen)}</span></p>;
}

export const STATUT_CLASSE = { 'Résultat obtenu': 'ok', 'Prototype validé': 'proto', 'Mission en cours': 'encours' };

export function Secteur({ r }) {
  return r.secteur ? <p className="mq-label">[ {r.secteur} ]</p> : null;
}

export function CaseCard({ r, seen = new Set() }) {
  return (
    <article className="card">
      <Secteur r={r} />
      <p className="small muted">{r.who}</p>
      {r.statut ? <span className={`statut ${STATUT_CLASSE[r.statut] || ''}`}>{r.statut}</span> : null}
      <h3 className="h3">{g(r.titre, seen)}</h3>
      {r.big ? BigFigure({ r, seen }) : <p className="muted">{g(r.resultat, seen)}</p>}
      {r.cite ? <blockquote>« {r.cite} »</blockquote> : null}
    </article>
  );
}

export function ArticleCard({ a, seen }) {
  return (
    <article className="card" style={{ borderTop: '3px solid var(--gold)', borderRadius: 0, borderLeft: 0, borderRight: 0, borderBottom: 0, padding: '20px 0 0' }}>
      <p className="small muted">{a.theme} · {a.statut === 'publie' ? dateFr(a.date) : 'à paraître'}</p>
      <h3 style={{ fontSize: 20, fontWeight: 600 }}>{a.statut === 'publie' && a.slug ? <Link href={`/blog/${a.slug}/`}>{a.titre}</Link> : a.titre}</h3>
      {a.accroche ? <p className="muted">{g(a.accroche, seen)}</p> : null}
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
