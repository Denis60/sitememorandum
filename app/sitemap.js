import { SITE } from '../lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const paths = ['', 'offres/', 'references/', 'ia-en-action/', 'veille-ia/', 'signaux-faibles/', 'diagnostic/', 'blog/', 'a-propos/', 'contact/', 'mentions-legales/'];
  const now = new Date();
  return paths.map((p) => ({ url: `${SITE.url}/${p}`, lastModified: now }));
}
