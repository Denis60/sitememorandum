import data from '../content/glossaire.json';

// Infobulles des termes techniques (content/glossaire.json).
// Chaque terme est expliqué à sa première apparition : `seen` (un Set) retient les termes déjà annotés dans la page.
const TERMES = data.termes.map((t) => ({ ...t, re: new RegExp(t.motif, t.casse ? '' : 'i') }));
const PAR_ID = Object.fromEntries(TERMES.map((t) => [t.id, t]));

export function Terme({ id, t = PAR_ID[id], children }) {
  if (!t) return children;
  return (
    <span className="terme" tabIndex={0}>
      {children}
      <span className="terme-bulle" role="tooltip">{t.def}. <a href={t.url} target="_blank" rel="noopener noreferrer">En savoir plus</a></span>
    </span>
  );
}

function reperer(text, seen) {
  const hits = [];
  for (const t of TERMES) {
    if (seen.has(t.id)) continue;
    const m = t.re.exec(text);
    if (m) hits.push({ t, i: m.index, s: m[0] });
  }
  hits.sort((a, b) => a.i - b.i);
  const garde = [];
  let fin = 0;
  for (const h of hits) {
    if (h.i < fin) continue;
    garde.push(h);
    fin = h.i + h.s.length;
    seen.add(h.t.id);
  }
  return garde;
}

/** Texte → texte avec infobulles (éléments React). */
export function g(text, seen = new Set()) {
  if (typeof text !== 'string' || !text) return text;
  const hits = reperer(text, seen);
  if (!hits.length) return text;
  const out = [];
  let pos = 0;
  hits.forEach((h, k) => {
    if (h.i > pos) out.push(text.slice(pos, h.i));
    out.push(<Terme key={k} t={h.t}>{h.s}</Terme>);
    pos = h.i + h.s.length;
  });
  if (pos < text.length) out.push(text.slice(pos));
  return out;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** HTML (article de blog) → HTML avec infobulles, hors liens, titres et code. */
export function glossHtml(html, seen = new Set()) {
  const parts = html.split(/(<[^>]+>)/);
  let interdit = 0;
  return parts.map((p) => {
    if (p.startsWith('<')) {
      if (/^<(a|code|pre|h[1-6])[\s>]/i.test(p)) interdit += 1;
      else if (/^<\/(a|code|pre|h[1-6])>/i.test(p)) interdit = Math.max(0, interdit - 1);
      return p;
    }
    if (interdit || !p.trim()) return p;
    const hits = reperer(p, seen);
    if (!hits.length) return p;
    let out = '';
    let pos = 0;
    for (const h of hits) {
      out += p.slice(pos, h.i)
        + `<span class="terme" tabindex="0">${h.s}<span class="terme-bulle" role="tooltip">${esc(h.t.def)}. <a href="${esc(h.t.url)}" target="_blank" rel="noopener noreferrer">En savoir plus</a></span></span>`;
      pos = h.i + h.s.length;
    }
    return out + p.slice(pos);
  }).join('');
}
