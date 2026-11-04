import Link from 'next/link';
import { DAYS, SECTORS, REFERENCES, ARTICLES, lowerFirst } from '../lib/site';
import { Bullets, CaseCard, ArticleCard, MESSAGES_LIST, Steps } from '../components/Parts';

export default function Home() {
  const today = DAYS[0];
  const lastSector = SECTORS[0];
  return (
    <>
      <section className="band night">
        <div className="wrap hero">
          <div className="stack" style={{ gap: 24 }}>
            <p className="fresh"><i aria-hidden="true"></i><span>Veille IA du {lowerFirst(today.label)} · Signaux faibles : {lowerFirst(lastSector.edition.split(' · ')[1])}</span></p>
            <h1 className="h1">L’IA au service des dirigeants de PME. Concrète, utile, déjà à l’œuvre.</h1>
            <p className="lead">Memorandum accompagne votre entreprise de l’idée au nouveau processus qui tourne. Et le prouve ici même : veilles, analyses et diagnostic sont produits par l’IA, sous vos yeux.</p>
            <div className="btns">
              <Link className="btn gold" href="/diagnostic/">Lancer mon diagnostic IA</Link>
              <Link className="btn ghost" href="/ia-en-action/">Voir l’IA en action</Link>
            </div>
          </div>
          <div className="night-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 18, fontWeight: 600 }}>Veille IA du jour</h2>
              <span className="small muted">{today.label}</span>
            </div>
            <div className="stack">
              {today.topics.slice(0, 3).map((s) => (
                <article className="topic" key={s.t}>
                  <h3>{s.t}</h3>
                  <Bullets items={s.ideas.slice(0, 2)} className="" />
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.src} · {s.d}</a>
                </article>
              ))}
            </div>
            <Link className="link small" href="/veille-ia/">Toute la veille IA →</Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div className="stack" style={{ maxWidth: 760 }}>
            <p className="eyebrow">Ce que fait Memorandum</p>
            <h2 className="h2">De l’idée au processus qui tourne, sans boîte noire.</h2>
          </div>
          <div className="grid">
            <div className="card"><h3 className="h3">Conseil et cadrage</h3><p className="muted">Identifier où l’IA crée de la valeur dans votre métier, choisir le premier cas d’usage, décider en connaissant les coûts et les limites.</p></div>
            <div className="card"><h3 className="h3">Automatisation et intégration</h3><p className="muted">Construire avec vos équipes des assistants et des workflows qui s’appuient sur vos outils, vos documents et vos règles métier.</p></div>
            <div className="card soft"><h3 className="h3">La méthode : former par l’exemple</h3><p className="muted">À la fin de la mission, vous êtes autonome sur votre nouveau processus. Tout ce qui est construit vous appartient et reste modifiable par votre équipe.</p></div>
          </div>
          <Link className="link" href="/offres/">Comment se passe une mission →</Link>
        </div>
      </section>

      <section className="band tint">
        <div className="wrap stack lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
            <div className="stack" style={{ maxWidth: 720 }}><p className="eyebrow">Références</p><h2 className="h2">Des PME aux grands groupes industriels.</h2></div>
            <Link className="link" href="/references/">Toutes les références →</Link>
          </div>
          <ul className="clients" aria-label="Clients">
            {REFERENCES.filter((r) => r.nom).map((r) => <li key={r.nom}>{r.nom}</li>)}
          </ul>
          <div className="grid">
            {REFERENCES.filter((r) => r.home).map((r) => <CaseCard key={r.titre} r={r} />)}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div className="stack" style={{ maxWidth: 760 }}>
            <p className="eyebrow">L’IA en action</p>
            <h2 className="h2">Ce que l’IA détecte ce mois-ci dans les secteurs suivis.</h2>
            <p className="muted">Chaque mois, un dispositif IA repère, source et classe les signaux faibles d’un secteur. Deux secteurs sont suivis à titre d’exemple.</p>
          </div>
          <div className="grid">
            {SECTORS.map((s) => (
              <article className="card" key={s.id}>
                <p className="small muted">{s.label} · {s.edition}</p>
                <h3 className="h3">{s.headline}</h3>
                <Bullets items={s.home} className="bullets muted" />
                <Link className="link" href={`/signaux-faibles/#${s.id}`}>Lire le rapport du mois →</Link>
              </article>
            ))}
            <article className="card soft">
              <h3 className="h3">Et votre secteur ?</h3>
              <p className="muted">Nous pouvons suivre votre secteur et vous présenter le premier rapport lors d’un rendez-vous gratuit.</p>
              <Link className="btn primary" href="/contact/" style={{ alignSelf: 'flex-start' }}>Ajouter mon secteur</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="band night">
        <div className="wrap hero">
          <div className="stack" style={{ gap: 20 }}>
            <p className="eyebrow">Diagnostic IA gratuit</p>
            <h2 className="h2">Laissez l’IA vous interviewer sur votre entreprise.</h2>
            <p className="lead">Un entretien par chat, à votre rythme, puis une première synthèse restituée lors d’un rendez-vous gratuit.</p>
            <div className="btns"><Link className="btn gold" href="/diagnostic/">Demander mon diagnostic</Link><Link className="btn ghost" href="/contact/">Prendre rendez-vous directement</Link></div>
          </div>
          <Steps />
        </div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
            <div className="stack" style={{ maxWidth: 720 }}><p className="eyebrow">Blog</p><h2 className="h2">Une question de dirigeant par semaine.</h2></div>
            <Link className="link" href="/blog/">Le blog →</Link>
          </div>
          <div className="grid">{ARTICLES.slice(0, 3).map((a) => <ArticleCard key={a.titre} a={a} />)}</div>
        </div>
      </section>

      <section className="band tint">
        <div className="wrap hero">
          <div className="stack">
            <p className="eyebrow">Qui je suis</p>
            <h2 className="h2">Denis Oblin, consultant en data et intelligence artificielle</h2>
            <p className="muted">De l’IA prédictive à l’IA générative, des transformations menées jusqu’au bout en entreprise. J’enseigne à Polytechnique et j’interviens en conférence, comme à Dataquitaine en 2025.</p>
            <Link className="link" href="/a-propos/">En savoir plus →</Link>
          </div>
          <ol className="messages" aria-label="Quatre convictions">{MESSAGES_LIST.map((m) => <li key={m}>{m}</li>)}</ol>
        </div>
      </section>
    </>
  );
}
