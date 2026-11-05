import { PUBLISHED, UPCOMING } from '../../lib/site';
import { PageHead, ArticleCard } from '../../components/Parts';

export const metadata = { title: 'Blog', description: 'Chaque semaine, ce que la veille IA enseigne aux dirigeants pour transformer leur entreprise, et les retours de terrain de Denis Oblin.', alternates: { canonical: '/blog/' } };

export default function Blog() {
  const published = PUBLISHED;
  const next = UPCOMING;
  return (
    <>
      <PageHead eyebrow="Blog" title="Une question de dirigeant par semaine." lead="Chaque semaine, notre IA tire de la veille les enseignements et les précautions utiles à votre transformation IA. Denis Oblin y ajoute ses articles et ses retours de terrain. L’auteur est indiqué sur chaque article." />
      <section className="band">
        <div className="wrap stack lg">
          {published.length ? <><h2 className="h3">Derniers articles</h2><div className="grid">{published.map((a) => <ArticleCard key={a.titre} a={a} />)}</div></> : null}
          {next.length ? <><h2 className="h3">Prochains sujets</h2><div className="grid">{next.map((a) => <ArticleCard key={a.titre} a={a} />)}</div></> : null}
        </div>
      </section>
    </>
  );
}
