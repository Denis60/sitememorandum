import Link from 'next/link';
import { DAYS, SECTORS, lowerFirst } from '../../lib/site';
import { PageHead } from '../../components/Parts';

export const metadata = { title: 'L’IA en action', description: 'Veille IA quotidienne, signaux faibles sectoriels et diagnostic IA : trois dispositifs qui tournent en continu sur ce site.', alternates: { canonical: '/ia-en-action/' } };

export default function IaEnAction() {
  return (
    <>
      <PageHead night eyebrow="L’IA en action" title="Ce site travaille pendant que vous le lisez." lead="Trois dispositifs IA tournent en continu. Ce sont les mêmes que ceux que nous construisons pour nos clients." />
      <section className="band">
        <div className="wrap grid">
          <div className="card"><span className="tag">Chaque jour</span><h2 className="h3">Veille IA quotidienne</h2><p className="muted">5 à 7 sujets choisis pour un dirigeant de PME, avec leurs idées fortes et leur source.</p><p className="small muted">Dernière édition : {lowerFirst(DAYS[0].label)}</p><Link className="link" href="/veille-ia/">Lire la veille →</Link></div>
          <div className="card"><span className="tag">Chaque mois</span><h2 className="h3">Signaux faibles par secteur</h2><p className="muted">Les signaux et tendances d’un secteur, datés, sourcés et classés. Trois secteurs suivis à titre d’exemple.</p><p className="small muted">Dernière édition : {[...SECTORS].sort((a, b) => (b.date || '').localeCompare(a.date || ''))[0].edition.split(' · ')[1]}</p><Link className="link" href="/signaux-faibles/">Voir les rapports →</Link></div>
          <div className="card"><span className="tag">À la demande</span><h2 className="h3">Diagnostic IA</h2><p className="muted">Un entretien par chat sur votre entreprise, une recherche sur votre secteur, une synthèse restituée en rendez-vous.</p><p className="small muted">Gratuit, après validation de la demande</p><Link className="link" href="/diagnostic-ia/">Demander mon diagnostic →</Link></div>
        </div>
      </section>
    </>
  );
}
