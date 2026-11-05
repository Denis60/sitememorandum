import Link from 'next/link';
import { SEMAINE, SECTORS, REFERENCES, PUBLISHED, UPCOMING, SITE } from '../lib/site';
import { Bullets, CaseCard, ArticleCard, MESSAGES_LIST } from '../components/Parts';
import DiagSection from '../components/DiagSection';

export default function Home() {
  const today = SEMAINE;
  const sectors = SECTORS;
  return (
    <>
      <section className="band night">
        <div className="wrap hero" style={{ alignItems: 'start' }}>
          <div className="stack hero-text">
            <h1 className="h1">Intégrez l’IA maintenant, en profondeur, durablement.</h1>
            <p className="lead">3 semaines peuvent suffire pour faire évoluer un processus, en en gardant la maîtrise complète.</p>
            <div className="btns">
              <Link className="btn gold" href="#diagnostic">Lancer le diagnostic personnalisé</Link>
              <Link className="btn ghost" href="/ia-en-action/">Voir l’IA en action</Link>
            </div>
            <p className="hero-proof"><strong>÷ 2 à 5</strong><span>Analyse d’un cahier des charges 2 à 5 fois plus rapide, testée sur 9 dossiers réels — Eklalight. <Link className="link" href="/blog/analyser-cahier-des-charges-ia/">Lire le cas →</Link></span></p>
          </div>
          <div className="night-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 18, fontWeight: 600 }}>Veille IA de la semaine</h2>
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
          <div className="stack">
            <p className="eyebrow">L’IA en action</p>
            <h2 className="h2">Notre IA analyse la transformation de secteurs d’activité en continu. Voici des exemples.</h2>
            <p className="muted" style={{ maxWidth: 760 }}>Nous réalisons des veilles sectorielles continues : repérer les signaux faibles au fil de l’eau et en déduire des tendances. Voici trois exemples variés de suivis sectoriels (dont le nôtre). Ces signaux faibles sont accumulés automatiquement chaque mois et alimentent une analyse plus profonde sur les tendances de transformation (exploitation des signaux des 6 ou 12 derniers mois).</p>
            <p className="muted" style={{ maxWidth: 760 }}>Vous voulez ce type de suivi pour votre secteur ? <Link className="link" href="/contact/">Dites-le nous !</Link></p>
          </div>
          <div className="grid">
            {sectors.map((s) => (
              <article className="card" key={s.id}>
                <p className="small muted">{s.label} · {s.edition}</p>
                <h3 className="h3">{s.headline}</h3>
                <Bullets items={s.home} className="bullets muted" />
                <Link className="link" href={`/signaux-faibles/#${s.id}`}>Lire le rapport du mois →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
            <div className="stack"><p className="eyebrow">Références</p><h2 className="h2 one-line">Des PME aux grands groupes industriels.</h2></div>
            <Link className="link" href="/references/">Autres références des 12 derniers mois →</Link>
          </div>
          <ul className="clients" aria-label="Clients">
            {REFERENCES.filter((r) => r.nom).map((r) => <li key={r.nom}>{r.nom}</li>)}
          </ul>
          <div className="grid">
            {REFERENCES.filter((r) => r.home).map((r) => <CaseCard key={r.titre} r={r} />)}
          </div>
        </div>
      </section>

      <DiagSection />

      <section className="band">
        <div className="wrap stack lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
            <div className="stack" style={{ maxWidth: 720 }}><p className="eyebrow">Blog</p><h2 className="h2">Une réflexion continue, ouverte.</h2></div>
            <Link className="link" href="/blog/">Le blog →</Link>
          </div>
          <div className="grid">{[...PUBLISHED, ...UPCOMING].slice(0, 3).map((a) => <ArticleCard key={a.titre} a={a} />)}</div>
        </div>
      </section>

      <section className="band tint">
        <div className="wrap hero">
          <div className="stack">
            <p className="eyebrow">Le fondateur</p>
            <h2 className="h2"><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">Denis Oblin</a></h2>
            <ul className="bullets muted">
              <li>Mastère spécialisé en IA à Télécom Paris et certificat « AI for Business » de l’École polytechnique</li>
              <li>Enseignant en « AI Business Transformation » à l’<a className="link" href="https://e4h.ip-paris.fr/sites/default/files/pages/documents/2022-08/Master_Data_Science_syllabus.pdf" target="_blank" rel="noopener noreferrer">Institut Polytechnique de Paris</a></li>
              <li>Ambassadeur du programme <a className="link" href="https://www.economie.gouv.fr/actualites/osez-lia-un-plan-pour-diffuser-lia-dans-toutes-les-entreprises" target="_blank" rel="noopener noreferrer">Osez l’IA</a> du ministère de l’Économie (<a className="link" href="https://nouvelle-aquitaine.dreets.gouv.fr/sites/nouvelle-aquitaine.dreets.gouv.fr/IMG/pdf/amabassadeursia2-5.pdf" target="_blank" rel="noopener noreferrer">liste des ambassadeurs IA en Nouvelle-Aquitaine</a>)</li>
              <li>Cofondateur de Rendez-vous en terrain numérique (RTN), l’événement digital mensuel d’Angoulême : <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSdoK-db3MX8OSTDcKy6phXWfcXxs46Ox_xmTnMmXpevObmzaQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">inscrivez-vous</a></li>
            </ul>
            <Link className="link" href="/a-propos/">En savoir plus →</Link>
          </div>
          <ol className="messages" aria-label="Quatre convictions">{MESSAGES_LIST.map((m) => <li key={m}>{m}</li>)}</ol>
        </div>
      </section>
    </>
  );
}
