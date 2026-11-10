import { REFERENCES } from '../../lib/site';
import { PageHead, Bullets, MessageTag, STATUT_CLASSE, BigFigure, Secteur } from '../../components/Parts';
import { g } from '../../lib/glossaire';

export const metadata = { title: 'Références', description: 'Missions IA menées pour Safran, Eklalight, Camaëlle, Hygie31 et d’autres entreprises : le problème, la solution, le résultat.', alternates: { canonical: '/references/' } };

export default function References() {
  const seen = new Set();
  return (
    <>
      <PageHead eyebrow="Références" title="Notre livrable, au forfait, est votre transformation effective." lead="Chaque cas suit la même trame : le problème, ce qui a été mis en place, le résultat. Les clients nommés ont donné leur accord ; les autres sont présentés de façon anonyme." />
      <section className="band">
        <div className="wrap">
          {REFERENCES.map((r) => (
            <article className="ref" key={r.titre}>
              <div className="stack">
                <Secteur r={r} />
                <p className="small muted">{r.who}</p>
                {r.statut ? <span className={`statut ${STATUT_CLASSE[r.statut] || ''}`}>{r.statut}</span> : null}
                {r.calendrier ? <p className="small muted"><strong>Calendrier :</strong> {g(r.calendrier, seen)}</p> : null}
                <h2 className="h3" style={{ fontSize: 24 }}>{g(r.titre, seen)}</h2>
                {r.big ? BigFigure({ r, seen }) : null}
                {r.cite ? <blockquote>« {r.cite} »</blockquote> : null}
                <MessageTag m={r.msg} />
              </div>
              <div className="facts">
                <h3 style={{ margin: 0, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-text)', fontFamily: 'var(--body)' }}>Le problème</h3>
                <p>{g(r.probleme, seen)}</p>
                <h3 style={{ margin: 0, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-text)', fontFamily: 'var(--body)' }}>Ce qui a été mis en place</h3>
                {Bullets({ items: r.fait, seen })}
                <h3 style={{ margin: 0, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-text)', fontFamily: 'var(--body)' }}>Le résultat</h3>
                <p>{g(r.resultat, seen)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
