import { SITE, ARTICLES } from '../lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const paths = ['', 'offres/', 'references/', 'ia-en-action/', 'veille-ia/', 'signaux-faibles/', 'diagnostic-ia/', 'blog/', 'a-propos/', 'contact/', 'mentions-legales/'];
  const now = new Date();
  const articles = ARTICLES.filter((a) => a.statut === 'publie' && a.slug).map((a) => `blog/${a.slug}/`);
  return [...paths, ...articles].map((p) => ({ url: `${SITE.url}/${p}`, lastModified: now }));
}
