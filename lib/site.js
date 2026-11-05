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

export const SECTORS = signaux.sectors;

/** Seules les références « enLigne » sont publiées. */
export const REFERENCES = refs.references.filter((r) => r.enLigne);

export const ARTICLES = blog.articles;

export const NAV = [
  { href: '/offres/', label: 'Offres', key: 'offres' },
  { href: '/references/', label: 'Références', key: 'references' },
  { href: '/ia-en-action/', label: 'L’IA en action', key: 'ia-en-action' },
  { href: '/blog/', label: 'Blog', key: 'blog' },
  { href: '/a-propos/', label: 'À propos', key: 'a-propos' },
];

export function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}
