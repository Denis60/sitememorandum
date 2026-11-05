import veille from '../content/veille-ia.json';
import signaux from '../content/signaux-faibles.json';
import refs from '../content/references.json';
import blog from '../content/blog.json';

export const SITE = {
  name: 'Memorandum AI',
  url: 'https://memorandum-ai.com',
  email: 'denis.oblin@memorandum-ai.com',
  linkedin: 'https://www.linkedin.com/in/denisoblin/',
  bookings: 'https://bookings.cloud.microsoft/bookwithme/user/122e4893e92b4386b97d8570cd25a06c@memorandum-ai.com/meetingtype/8qROyj5sHECCrTBGYf6bvw2?anonymous&ismsaljsauthenabled',
  city: 'Cognac',
  areas: ['Cognac', 'Angoulême', 'Bordeaux', 'Toulouse', 'Paris'],
};

export const MESSAGES = veille.messages;

/** Jours de veille, du plus récent au plus ancien. */
export const DAYS = [...veille.days].sort((a, b) => (a.date < b.date ? 1 : -1));
// Encart de l'accueil : les 3 sujets de la semaine choisis chaque jeudi (repli : le dernier jour publié).
export const SEMAINE = veille.semaine && Array.isArray(veille.semaine.topics) && veille.semaine.topics.length
  ? veille.semaine
  : { label: DAYS[0]?.label, topics: DAYS[0]?.topics || [] };

export const SECTORS = signaux.sectors;

/** Seules les références « enLigne » sont publiées. */
export const REFERENCES = refs.references.filter((r) => r.enLigne);

export const ARTICLES = blog.articles;
// Articles publiés, du plus récent au plus ancien (à date égale : ordre du fichier).
export const PUBLISHED = ARTICLES.map((a, i) => ({ ...a, i })).filter((a) => a.statut === 'publie' && a.slug)
  .sort((x, y) => (y.date || '').localeCompare(x.date || '') || x.i - y.i);
export const UPCOMING = ARTICLES.filter((a) => a.statut !== 'publie');
export const dateFr = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' });
export const byline = (a) => (a.auteur === 'ia' ? 'Rédigé par l’IA de Memorandum AI à partir de sa veille' : 'Denis Oblin');

export const NAV = [
  { href: '/offres/', label: 'Offres', key: 'offres' },
  { href: '/ia-en-action/', label: 'L’IA en action', key: 'ia-en-action' },
  { href: '/references/', label: 'Références', key: 'references' },
  { href: '/blog/', label: 'Blog', key: 'blog' },
  { href: '/a-propos/', label: 'À propos', key: 'a-propos' },
];

export function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
