// Contrôle des contenus avant chaque build : un fichier mal formé ou une donnée privée bloque la mise en ligne.
import { readFileSync } from 'node:fs';

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

const signaux = read('signaux-faibles.json');
for (const s of signaux.sectors || []) {
  if (!s.id || !s.label || !Array.isArray(s.signals)) errors.push(`signaux-faibles.json : secteur incomplet « ${s.label || s.id} ».`);
}

const refs = read('references.json');
for (const r of refs.references || []) {
  if (typeof r.enLigne !== 'boolean') errors.push(`references.json : « enLigne » manquant pour « ${r.titre} ».`);
  if (r.enLigne && (!r.probleme || !r.resultat || !(r.fait || []).length)) errors.push(`references.json : fiche en ligne incomplète « ${r.titre} ».`);
}

read('blog.json');

// Garde-fous de confidentialité : aucune adresse privée ni nom de client confidentiel ne doit être publié.
const all = ['veille-ia.json', 'signaux-faibles.json', 'references.json', 'blog.json'].map((f) => readFileSync(new URL(`../content/${f}`, import.meta.url), 'utf8')).join('\n');
const forbidden = [/boards\.trello\.com/i, /Mode d'emploi vocal/i, /\bUptevia\b/i, /\bMorelet\b/i, /\bTeract\b/i, /Jardiland|Gamm vert/i];
for (const re of forbidden) if (re.test(all)) errors.push(`Contenu interdit détecté : ${re}.`);

if (errors.length) {
  console.error('Contrôle des contenus : échec\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('Contrôle des contenus : OK');
