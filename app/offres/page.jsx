import Link from 'next/link';
import { PageHead } from '../../components/Parts';

export const metadata = { title: 'Offres', description: 'Conseil et cadrage, automatisation et intégration de l’IA, transmission par l’exemple : comment se passe une mission Memorandum.', alternates: { canonical: '/offres/' } };

const FAQ = [
  ['Que deviennent nos données ?', 'Nous travaillons sur vos documents avec des offres professionnelles d’IA dont les fournisseurs s’engagent à ne pas entraîner leurs modèles sur vos données. Un accord de confidentialité peut être signé avant toute transmission de document.'],
  ['Où sont hébergés les outils construits ?', 'De préférence dans vos propres environnements (Microsoft 365, Google Workspace, vos logiciels métier). Les modèles d’IA peuvent traiter les données hors de l’Union européenne : nous vous indiquons, pour chaque projet, où passent vos données et comment ces transferts sont encadrés.'],
  ['À qui appartient ce qui est construit ?', 'À vous. Consignes, workflows, documents et paramétrages vous sont remis et restent modifiables par votre équipe.'],
  ['Et après la mission, qui maintient l’outil ?', 'Vos équipes : elles ont construit le processus avec nous et savent le faire évoluer. Un accompagnement ponctuel peut être prévu, sur devis.'],
  ['Sommes-nous dépendants d’un modèle d’IA ?', 'Le moins possible. Les consignes et les règles métier sont écrites en clair et peuvent être reprises avec un autre modèle. Nous choisissons les outils pour limiter l’enfermement chez un fournisseur.'],
  ['Que change l’AI Act pour nous ?', 'Depuis février 2025, les entreprises qui utilisent l’IA doivent veiller à ce que leurs équipes en aient une maîtrise suffisante. Nous identifions avec vous les autres obligations qui vous concernent, selon vos usages (transparence, usages à haut risque).'],
  ['Existe-t-il des aides pour financer le projet ?', 'Le diagnostic est offert. Selon votre région et votre situation, des dispositifs publics peuvent financer une partie d’un projet de transformation numérique : nous vous orientons vers les interlocuteurs compétents.'],
];

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
          <div className="stack">
            <h2 className="h2">Trois niveaux d’intervention</h2>
            <div className="grid">
              <div className="card soft niveau"><span className="tag">1 · Diagnostic</span><h3 className="h3">Diagnostic de potentiel IA</h3><p className="niveau-prix">Offert · environ 1 semaine</p><ul className="bullets muted"><li>Notre agent dialogue avec vous et les personnes que vous désignez.</li><li>Il repère les irritants, les outils et les données, et chiffre les gains possibles.</li><li>Restitution de vive voix ; le rapport détaillé vous est remis.</li></ul></div>
              <div className="card soft niveau"><span className="tag">2 · Sprint pilote</span><h3 className="h3">Un processus transformé</h3><p className="niveau-prix">À partir de 5 000 € HT · environ 3 semaines</p><ul className="bullets muted"><li>Un processus choisi avec vous, un objectif mesurable.</li><li>Un prototype construit et testé sur vos vrais dossiers, ajusté avec les utilisateurs.</li><li>Vos équipes formées par l’exemple ; bilan du temps gagné et des coûts complets.</li></ul></div>
              <div className="card soft niveau"><span className="tag">3 · Déploiement</span><h3 className="h3">L’IA dans plusieurs services</h3><p className="niveau-prix">Sur devis · 1 à 3 mois</p><ul className="bullets muted"><li>Généralisation à d’autres processus ou services.</li><li>Branchement sur vos outils existants.</li><li>Accompagnement jusqu’à l’autonomie complète de vos équipes.</li></ul></div>
            </div>
          </div>
          <div className="stack">
            <h2 className="h2">Questions fréquentes</h2>
            <div className="faq">
              {FAQ.map(([q, r]) => (<details key={q}><summary>{q}</summary><p className="muted">{r}</p></details>))}
            </div>
          </div>
          <div className="btns"><Link className="btn primary" href="/diagnostic-ia/">Commencer par le diagnostic</Link><Link className="btn outline" href="/references/">Voir des missions réalisées</Link></div>
        </div>
      </section>
    </>
  );
}
