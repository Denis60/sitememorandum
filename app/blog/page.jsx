import { ARTICLES } from '../../lib/site';
import { PageHead, ArticleCard } from '../../components/Parts';

export const metadata = { title: 'Blog', description: 'Une question de dirigeant de PME par semaine sur l’IA, avec un exemple tiré de nos missions.', alternates: { canonical: '/blog/' } };

export default function Blog() {
  const published = ARTICLES.filter((a) => a.statut === 'publie');
  const next = ARTICLES.filter((a) => a.statut !== 'publie');
  return (
    <>
      <PageHead eyebrow="Blog" title="Une question de dirigeant par semaine." lead="Chaque article répond à une question précise, avec un exemple tiré de nos missions. Rédigé avec l’IA, relu et validé par Denis Oblin." />
      <section className="band">
        <div className="wrap stack lg">
          {published.length ? <><h2 className="h3">Derniers articles</h2><div className="grid">{published.map((a) => <ArticleCard key={a.titre} a={a} />)}</div></> : null}
          {next.length ? <><h2 className="h3">Premiers articles à paraître</h2><div className="grid">{next.map((a) => <ArticleCard key={a.titre} a={a} />)}</div></> : null}
        </div>
      </section>
    </>
  );
}
