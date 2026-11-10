'use client';
import { useState } from 'react';
import { MESSAGES } from '../lib/site';
import { g } from '../lib/glossaire';

export default function DayPicker({ days }) {
  const [i, setI] = useState(0);
  const v = days[i];
  const seen = new Set();
  return (
    <section className="band">
      <div className="wrap stack lg">
        <div className="chips" role="group" aria-label="Choisir un jour">
          {days.map((d, k) => (
            <button key={d.date} type="button" className="chip" aria-pressed={k === i} onClick={() => setI(k)}>{d.label.split(' ').slice(0, 3).join(' ')}</button>
          ))}
        </div>
        <div>
          <h2 className="h2" style={{ marginBottom: 8 }}>{v.label} · {v.topics.length} sujets</h2>
          {v.topics.map((s) => (
            <article className="article" key={s.t}>
              <div className="stack" style={{ gap: 10 }}>
                <span className="tag">{MESSAGES[s.m]}</span>
                <h3>{g(s.t, seen)}</h3>
                <p className="src">Source : <a href={s.url} target="_blank" rel="noopener noreferrer">{s.src}</a> · {s.d}</p>
              </div>
              <ul className="ideas">{s.ideas.map((x) => <li key={x}>{g(x, seen)}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
