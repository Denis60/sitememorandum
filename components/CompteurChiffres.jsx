'use client';
import { useEffect, useRef } from 'react';
import { g } from '../lib/glossaire';

// Fait défiler les nombres des chiffres clés de 0 à leur valeur quand le bloc devient visible.
export default function CompteurChiffres({ items, dark }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cibles = [...el.querySelectorAll('[data-n]')];
    cibles.forEach((s) => { s.textContent = '0'; });
    const obs = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      obs.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / 1400);
        const e = 1 - Math.pow(1 - k, 3);
        cibles.forEach((s) => { s.textContent = String(Math.round(Number(s.dataset.n) * e)); });
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const decoupe = (v) => v.split(/(\d+)/).map((p, i) => (/^\d+$/.test(p) ? <span key={i} data-n={p}>{p}</span> : p));
  return (
    <dl ref={ref} className={`mq-chiffres${dark ? ' dark' : ''}`}>
      {items.map((c) => (<div key={c.v} className={c.long ? 'long' : undefined}><dt>{c.long ? c.v : decoupe(c.v)}</dt>{c.l ? <dd>{g(c.l)}</dd> : null}</div>))}
    </dl>
  );
}
