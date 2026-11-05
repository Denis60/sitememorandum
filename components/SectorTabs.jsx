'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SectorTabs({ sectors }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const pick = () => {
      const k = sectors.findIndex((s) => '#' + s.id === window.location.hash);
      if (k >= 0) setI(k);
    };
    pick();
    window.addEventListener('hashchange', pick);
    return () => window.removeEventListener('hashchange', pick);
  }, [sectors]);
  const s = sectors[i];
  return (
    <section className="band">
      <div className="wrap stack lg">
        <div className="chips" role="group" aria-label="Choisir un secteur">
          {sectors.map((x, k) => (
            <button key={x.id} type="button" className="chip" aria-pressed={k === i} onClick={() => setI(k)}>{x.label}</button>
          ))}
          <Link className="chip add" href="/contact/">+ Ajouter votre secteur</Link>
        </div>
        <div className="split">
          <div className="stack lg" style={{ flex: '999 1 560px', minWidth: 0 }}>
            <div className="stack" style={{ gap: 8 }}>
              <p className="eyebrow">{s.edition}</p>
              <h2 className="h2">{s.headline}</h2>
              <p className="muted">{s.scope}</p>
            </div>
            <section className="stack">
              <h3 className="h3">Résumé du mois</h3>
              <ul className="bullets">{s.resume.map((r) => <li key={r}>{r}</li>)}</ul>
              <p className="reco"><strong>{s.recoLabel} : </strong>{s.reco}</p>
            </section>
            <section className="stack">
              <h3 className="h3">Les signaux du mois</h3>
              <ol className="signals">
                {s.signals.map((g, k) => (
                  <li key={g[0]}><b>{String(k + 1).padStart(2, '0')}</b><span className="stack" style={{ gap: 2 }}><strong style={{ fontWeight: 600 }}>{g[0]}</strong><span className="small muted">{g[1]}</span></span></li>
                ))}
              </ol>
            </section>
          </div>
          <aside>
            <div className="card"><h2 style={{ fontSize: 17 }}>Cette édition</h2><p className="small muted">{s.meta}</p><p className="small muted">Nouvelle édition chaque mois</p></div>
            <div className="card"><h2 style={{ fontSize: 17 }}>Comment ce rapport est produit</h2><p className="small muted">Une IA parcourt chaque mois la presse, les régulateurs et les acteurs du secteur. Chaque signal est daté, sourcé et noté, puis comparé aux éditions précédentes pour repérer ce qui devient une tendance.</p></div>
            <div className="night-card" style={{ background: 'var(--night)' }}>
              <h2 style={{ fontSize: 18, color: 'var(--on-night)' }}>Le même rapport pour votre secteur ?</h2>
              <p className="small" style={{ color: 'var(--on-night-muted)' }}>Nous lançons la veille de votre secteur et vous présentons le premier rapport lors d’un rendez-vous gratuit.</p>
              <Link className="btn gold" href="/contact/" style={{ alignSelf: 'flex-start' }}>Prendre rendez-vous</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
