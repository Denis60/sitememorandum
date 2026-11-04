import Link from 'next/link';
import { PageHead } from '../../components/Parts';

export const metadata = { title: 'Offres', description: 'Conseil et cadrage, automatisation et intégration de l’IA, transmission par l’exemple : comment se passe une mission Memorandum.', alternates: { canonical: '/offres/' } };

export default function Offres() {
  return (
    <>
      <PageHead eyebrow="Offres" title="Une transformation IA, une étape après l’autre." lead="Partir de votre métier, pas de l’outil. Livrer vite un premier usage réel. Vous laisser autonome." />
      <section className="band">
        <div className="wrap stack lg">
          <div className="grid">
            <div className="card"><span className="tag">Cadrer</span><h2 className="h3">Conseil et cadrage</h2><ul className="bullets muted"><li>Entretiens avec la direction et les équipes, y compris par un intervieweur IA.</li><li>Cartographie des processus et des pistes où l’IA aide vraiment.</li><li>Choix du premier cas d’usage, avec ses coûts complets et ses limites.</li></ul></div>
            <div className="card"><span className="tag">Construire</span><h2 className="h3">Automatisation et intégration</h2><ul className="bullets muted"><li>Assistants et workflows construits avec vos équipes, sur vos outils.</li><li>L’IA prépare, l’humain valide à chaque étape.</li><li>Tout reste lisible et modifiable : pas de boîte noire.</li></ul></div>
            <div className="card"><span className="tag">Transmettre</span><h2 className="h3">Former par l’exemple</h2><ul className="bullets muted"><li>Vos équipes apprennent en construisant leur propre processus.</li><li>À la fin de la mission, elles l’améliorent seules.</li><li>Un bilan objective le temps gagné, l’appropriation et les coûts.</li></ul></div>
          </div>
          <div className="card soft">
            <h2 className="h3">Comment se passe une mission</h2>
            <ol className="bullets">
              <li><strong>Diagnostic</strong> : gratuit, lancé depuis ce site ou lors d’un premier rendez-vous.</li>
              <li><strong>Cadrage</strong> : un cas d’usage choisi avec vous, un objectif mesurable.</li>
              <li><strong>Prototype</strong> : testé sur vos vrais dossiers, ajusté avec les utilisateurs.</li>
              <li><strong>Déploiement</strong> : partagé dans l’équipe, amélioré chaque semaine.</li>
              <li><strong>Bilan</strong> : pertinence, appropriation, coûts complets.</li>
            </ol>
          </div>
          <div className="btns"><Link className="btn primary" href="/diagnostic-ia/">Commencer par le diagnostic</Link><Link className="btn outline" href="/references/">Voir des missions réalisées</Link></div>
        </div>
      </section>
    </>
  );
}
