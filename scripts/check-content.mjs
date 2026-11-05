// Contrôle des contenus avant chaque build : un fichier mal formé ou une donnée privée bloque la mise en ligne.
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const read = (f) => JSON.parse(readFileSync(new URL(`../content/${f}`, import.meta.url), 'utf8'));
const errors = [];
const isUrl = (u) => typeof u === 'string' && /^https:\/\//.test(u);

const veille = read('veille-ia.json');
if (!Array.isArray(veille.days) || !veille.days.length) errors.push('veille-ia.json : aucun jour.');
for (const d of veille.days || []) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d.date)) errors.push(`veille-ia.json : date invalide « ${d.date} ».`);
  for (const t of d.topics || []) {
    if (!t.t || !Array.isArray(t.ideas) || !t.ideas.length) errors.push(`veille-ia.json ${d.date} : sujet incomplet.`);
    if (!isUrl(t.url)) errors.push(`veille-ia.json ${d.date} : source sans lien https pour « ${t.t} ».`);
  }
}

if (veille.semaine) {
  const sem = veille.semaine;
  if (!sem.label || !Array.isArray(sem.topics) || sem.topics.length < 1 || sem.topics.length > 3) errors.push('veille-ia.json : « semaine » doit avoir un libellé et 1 à 3 sujets.');
  for (const t of sem.topics || []) {
    if (!t.t || !Array.isArray(t.ideas) || !t.ideas.length || !t.src || !t.d) errors.push(`veille-ia.json semaine : sujet incomplet « ${t.t} ».`);
    if (!isUrl(t.url)) errors.push(`veille-ia.json semaine : source sans lien https pour « ${t.t} ».`);
  }
}

const signaux = read('signaux-faibles.json');
for (const s of signaux.sectors || []) {
  if (!s.id || !s.label || !Array.isArray(s.signals)) errors.push(`signaux-faibles.json : secteur incomplet « ${s.label || s.id} ».`);
}

const refs = read('references.json');
for (const r of refs.references || []) {
  if (typeof r.enLigne !== 'boolean') errors.push(`references.json : « enLigne » manquant pour « ${r.titre} ».`);
  if (r.enLigne && (!r.probleme || !r.resultat || !(r.fait || []).length)) errors.push(`references.json : fiche en ligne incomplète « ${r.titre} ».`);
}

const blog = read('blog.json');
const slugs = new Set();
for (const a of blog.articles || []) {
  if (!a.titre || !a.theme) errors.push(`blog.json : article incomplet « ${a.titre || a.slug} ».`);
  if (a.slug && slugs.has(a.slug)) errors.push(`blog.json : slug en double « ${a.slug} ».`);
  if (a.slug) slugs.add(a.slug);
  if (a.statut === 'publie') {
    if (!/^[a-z0-9-]+$/.test(a.slug || '')) errors.push(`blog.json : slug invalide pour « ${a.titre} ».`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a.date || '')) errors.push(`blog.json : date invalide pour « ${a.titre} ».`);
    if (!a.accroche) errors.push(`blog.json : accroche manquante pour « ${a.titre} ».`);
    if (!['denis', 'ia'].includes(a.auteur)) errors.push(`blog.json : auteur (denis | ia) manquant pour « ${a.titre} ».`);
    if (!existsSync(new URL(`../content/blog/${a.slug}.md`, import.meta.url))) errors.push(`blog : fichier content/blog/${a.slug}.md manquant.`);
  }
}

// Garde-fous de confidentialité : aucune adresse privée ni nom de client confidentiel ne doit être publié.
const mds = readdirSync(new URL('../content/blog/', import.meta.url)).filter((f) => f.endsWith('.md')).map((f) => `blog/${f}`);
const all = ['veille-ia.json', 'signaux-faibles.json', 'references.json', 'blog.json', ...mds].map((f) => readFileSync(new URL(`../content/${f}`, import.meta.url), 'utf8')).join('\n');
const forbidden = [/boards\.trello\.com/i, /Mode d'emploi vocal/i, /\bUptevia\b/i, /\bMorelet\b/i, /\bTeract\b/i, /Jardiland|Gamm vert/i];
for (const re of forbidden) if (re.test(all)) errors.push(`Contenu interdit détecté : ${re}.`);

if (errors.length) {
  console.error('Contrôle des contenus : échec\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('Contrôle des contenus : OK');
