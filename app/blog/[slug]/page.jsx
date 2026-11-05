import { readFileSync } from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { PUBLISHED, SITE, dateFr, byline } from '../../../lib/site';

// Un article = une entrée « publie » de content/blog.json + son texte content/blog/<slug>.md (Markdown).
const publies = () => PUBLISHED;
const article = (slug) => publies().find((a) => a.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  const p = publies().map((a) => ({ slug: a.slug }));
  // L'export statique refuse une liste vide : page témoin (404) tant qu'aucun article n'est publié.
  return p.length ? p : [{ slug: 'aucun' }];
}

export function generateMetadata({ params }) {
  const a = article(params.slug);
  if (!a) return {};
  return {
    title: a.titre,
    description: a.accroche,
    alternates: { canonical: `/blog/${a.slug}/` },
    openGraph: { type: 'article', title: a.titre, description: a.accroche, publishedTime: a.date },
  };
}

export default function Article({ params }) {
  const a = article(params.slug);
  if (!a) notFound();
  const md = readFileSync(path.join(process.cwd(), 'content', 'blog', `${a.slug}.md`), 'utf8');
  const html = marked.parse(md);
  const ld = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.titre, description: a.accroche,
    datePublished: a.date, author: a.auteur === 'ia' ? { '@type': 'Organization', name: SITE.name, url: SITE.url } : { '@type': 'Person', name: 'Denis Oblin', url: SITE.linkedin },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url }, mainEntityOfPage: `${SITE.url}/blog/${a.slug}/`,
  };
  return (
    <>
      <section className="band tint compact">
        <div className="wrap stack" style={{ maxWidth: 780 }}>
          <p className="small muted"><Link href="/blog/">Blog</Link> › {a.theme}</p>
          <h1 className="h1">{a.titre}</h1>
          <p className="lead">{a.accroche}</p>
          <p className="small muted">{byline(a)} · {dateFr(a.date)}</p>
        </div>
      </section>
      <section className="band" style={{ paddingTop: 32 }}>
        <article className="wrap prose" style={{ maxWidth: 780 }} dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
