import Link from 'next/link';
import { PageHead } from '../../components/Parts';
import { g } from '../../lib/glossaire';
import data from '../../content/applications.json';

export const metadata = {
  title: 'Nos applications',
  description: 'Nous appliquons d’abord nos conseils à nous-mêmes : communication, suivi commercial, diagnostic, conseil et mise en relation tournent chez nous avec l’IA.',
  alternates: { canonical: '/nos-applications/' },
};

// Lien interne (Link) ou externe (nouvel onglet).
function Lien({ href, children, className }) {
  return href.startsWith('/')
    ? <Link className={className} href={href}>{children}</Link>
    : <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Application({ a, seen }) {
  const img = <img src={a.image} alt={a.titre} width="830" height="462" loading="lazy" />;
  return (
    <article className="app">
      {a.lien ? <Lien href={a.lien.href} className="app-img">{img}</Lien> : <div className="app-img">{img}</div>}
      <p className="muted">{g(a.texte, seen)}</p>
      {a.lien ? <Lien className="link" href={a.lien.href}>{a.lien.label} →</Lien> : null}
    </article>
  );
}

export default function NosApplications() {
  const seen = new Set();
  return (
    <>
      <PageHead
        eyebrow="Nos applications"
        title="Nous appliquons d’abord nos conseils à nous-mêmes."
        lead="Avant de les proposer à nos clients, nous faisons tourner ces applications pour notre propre activité. Certaines sont ouvertes : vous pouvez les essayer."
      />
      {data.groupes.map((grp) => (
        <section key={grp.id} className="band apps-band" aria-labelledby={`grp-${grp.id}`}>
          <div className="wrap stack lg">
            <div className="stack">
              <p className="mq-label">[ {grp.label} ]</p>
              <h2 className="h2" id={`grp-${grp.id}`}>{grp.titre}</h2>
            </div>
            <div className="apps">
              {grp.applications.map((a) => <Application key={a.image} a={a} seen={seen} />)}
            </div>
          </div>
        </section>
      ))}
      <section className="band tint">
        <div className="wrap stack">
          <h2 className="h2">Une de ces applications vous parle ?</h2>
          <p className="lead">Nous construisons la vôtre de la même façon : une première version qui tourne vite, ajustée avec vous.</p>
          <div className="btns">
            <Link className="btn primary" href="/diagnostic-ia/">Lancer le diagnostic personnalisé</Link>
            <Link className="btn outline" href="/contact/">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
