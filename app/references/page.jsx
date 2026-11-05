import { REFERENCES } from '../../lib/site';
import { PageHead, Bullets, MessageTag } from '../../components/Parts';

export const metadata = { title: 'Références', description: 'Missions IA menées pour Safran, Eklalight, Camaëlle, Hygie31 et d’autres entreprises : le problème, la solution, le résultat.', alternates: { canonical: '/references/' } };

export default function References() {
  return (
    <>
      <PageHead eyebrow="Références" title="Notre livrable, au forfait, est votre transformation effective." lead="Chaque cas suit la même trame : le problème, ce qui a été mis en place, le résultat. Les clients nommés ont donné leur accord ; les autres sont présentés de façon anonyme." />
      <section className="band">
        <div className="wrap">
          {REFERENCES.map((r) => (
            <article className="ref" key={r.titre}>
              <div className="stack">
                <p className="small muted">{r.who}</p>
                <h2 className="h3" style={{ fontSize: 24 }}>{r.titre}</h2>
                {r.big ? (<><p className="big">{r.big}</p><p className="muted">{r.bigTxt}</p></>) : null}
                {r.cite ? <blockquote>« {r.cite} »</blockquote> : null}
                <MessageTag m={r.msg} />
              </div>
              <div className="facts">
                <h3 style={{ margin: 0, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-text)', fontFamily: 'var(--body)' }}>Le problème</h3>
                <p>{r.probleme}</p>
                <h3 style={{ margin: 0, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-text)', fontFamily: 'var(--body)' }}>Ce qui a été mis en place</h3>
                <Bullets items={r.fait} />
                <h3 style={{ margin: 0, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-text)', fontFamily: 'var(--body)' }}>Le résultat</h3>
                <p>{r.resultat}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
