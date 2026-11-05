import Link from 'next/link';
import { SEMAINE, SECTORS, REFERENCES, PUBLISHED, UPCOMING, SITE } from '../lib/site';
import { Bullets, CaseCard, ArticleCard } from './Parts';
import CompteurChiffres from './CompteurChiffres';

// Blocs partagés par les deux maquettes de la page d'accueil (refonte de l'interface, novembre 2026).

export const CHIFFRES = [
  { v: '12 ans', l: 'd’IA, ML et IA générative' },
  { v: '8', l: 'missions en 2026, de l’idée à l’autonomie' },
  { v: 'Missions augmentées par l’IA', long: true },
  { v: 'Expérience de terrain et recul académique', long: true },
];

export const REALISATIONS = [
  { img: '/realisations/eklalight-cctp.jpg', qui: 'Eklalight · grossiste en luminaires', titre: 'Analyse de cahier des charges et devis', chip: 'En production', alt: 'Outil d’analyse de CCTP : besoins, références fournisseurs proposées, création du devis' },
  { img: '/realisations/positionnement-prix-litre.jpg', qui: 'Fabricant de peintures et finitions', titre: 'Positionnement prix face aux concurrents', chip: 'Analyse livrée', alt: 'Comparaison des prix au litre de 5 produits face à 21 produits concurrents', pos: 'top left' },
  { img: '/realisations/peinture-chiffrage.jpg', qui: 'Entreprise de peinture', titre: 'Chiffrage d’un lot sur plan', chip: 'Prototype', alt: 'Outil de chiffrage : repérage des surfaces sur plan, comparaison avec le DPGF' },
];

export const INTERVENTIONS = [
  { date: 'Novembre 2026', titre: 'Masterclass IA', lieu: 'Union Patronale de la Charente' },
  { date: 'Novembre 2026', titre: 'Table ronde « Sécurité économique et IA »', lieu: 'Préfecture de la Charente' },
  { date: 'Juillet 2026', titre: 'Intervention en comité de direction', lieu: 'Acteur des services aux émetteurs' },
  { date: 'Juin 2026', titre: 'Conférence IA', lieu: 'Alliance Entreprises' },
];

export function Label({ children }) {
  return <p className="mq-label">[ {children} ]</p>;
}

export function Chiffres({ dark }) {
  return <CompteurChiffres items={CHIFFRES} dark={dark} />;
}

// Bandeau discret de la veille de la semaine, en bas du premier écran.
export function FilVeille() {
  const sujets = SEMAINE.topics.slice(0, 3);
  const ligne = (cle) => (
    <span className="mq-fil-ligne" key={cle} aria-hidden={cle === 'b' ? 'true' : undefined}>
      {sujets.map((s) => (<a key={cle + s.t} href="/veille-ia/" tabIndex={cle === 'b' ? -1 : undefined}>{s.t}</a>))}
    </span>
  );
  return (
    <div className="mq-fil">
      <span className="mq-fil-titre"><i aria-hidden="true" /> Veille IA de la semaine</span>
      <div className="mq-fil-defile">{ligne('a')}{ligne('b')}</div>
    </div>
  );
}

export function Realisations() {
  return (
    <div className="mq-real">
      {REALISATIONS.map((r) => (
        <figure key={r.img} className="mq-shot">
          <div className="mq-frame"><span className="mq-dots" aria-hidden="true"><i /><i /><i /></span><img src={r.img} alt={r.alt} loading="lazy" style={r.pos ? { objectPosition: r.pos } : undefined} /></div>
          <figcaption><span className="mq-chip">{r.chip}</span><strong>{r.titre}</strong><span className="small muted">{r.qui}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Interventions() {
  return (
    <div className="mq-interv">
      <img src="/interventions/table-ronde-prefecture-2026-11.jpg" alt="Denis Oblin, micro en main, lors de la table ronde « Sécurité économique et IA » organisée par la préfecture de la Charente, novembre 2026" loading="lazy" />
      <ol>
        {INTERVENTIONS.map((i) => (<li key={i.titre}><span className="small muted">{i.date}</span><strong>{i.titre}</strong><span className="muted">{i.lieu}</span></li>))}
      </ol>
    </div>
  );
}

export function VeilleSemaine({ dark }) {
  return (
    <div className={`mq-veille${dark ? ' dark' : ''}`}>
      {SEMAINE.topics.slice(0, 3).map((s) => (
        <article key={s.t}>
          <h3>{s.t}</h3>
          <Bullets items={s.ideas.slice(0, 2)} className="bullets muted" />
          <a className="link small" href={s.url} target="_blank" rel="noopener noreferrer">{s.src} · {s.d}</a>
        </article>
      ))}
    </div>
  );
}

export function Secteurs() {
  return (
    <div className="grid">
      {SECTORS.map((s) => (
        <article className="card" key={s.id}>
          <p className="small muted">{s.label} · {s.edition}</p>
          <h3 className="h3">{s.headline}</h3>
          <Bullets items={s.home} className="bullets muted" />
          <Link className="link" href={`/signaux-faibles/#${s.id}`}>Lire le rapport du mois →</Link>
        </article>
      ))}
    </div>
  );
}

export function Cas() {
  return <div className="grid">{REFERENCES.filter((r) => r.home).map((r) => <CaseCard key={r.titre} r={r} />)}</div>;
}

export function Articles() {
  return <div className="grid">{[...PUBLISHED, ...UPCOMING].slice(0, 3).map((a) => <ArticleCard key={a.titre} a={a} />)}</div>;
}

export function Clients() {
  return <ul className="clients" aria-label="Clients">{REFERENCES.filter((r) => r.nom).map((r) => <li key={r.nom}>{r.nom}</li>)}</ul>;
}

export { SEMAINE, SITE };
