import { PageHead } from '../../components/Parts';

export const metadata = { title: 'À propos', description: 'Denis Oblin, consultant en data et intelligence artificielle, enseignant à Polytechnique, basé à Cognac.', alternates: { canonical: '/a-propos/' } };

export default function APropos() {
  return (
    <>
      <PageHead eyebrow="À propos" title="Denis Oblin" lead="Consultant indépendant en data et intelligence artificielle, fondateur de Memorandum AI." />
      <section className="band">
        <div className="wrap hero" style={{ alignItems: 'start' }}>
          <div className="stack">
            <p>De l’IA prédictive à l’IA générative, j’ai mené des transformations jusqu’au bout en entreprise : modèles d’assortiment pour un réseau de distribution, diagnostic de performance d’un réseau de pharmacies, assistants IA pour une TPE comme pour un grand groupe industriel.</p>
            <p>J’enseigne à Polytechnique. J’interviens aussi en conférence, comme à Dataquitaine en mars 2025 sur l’animation d’un réseau de distribution avec une IA sobre.</p>
            <p>Basé à Cognac, j’interviens à Angoulême, Bordeaux, Toulouse, Paris et à distance.</p>
          </div>
          <div className="stack">
            <h2 className="h3">Quatre convictions</h2>
            <ol className="messages">
              <li>S’adapter vite : l’IA impose une adaptation rapide.</li>
              <li>L’IA est une opportunité, pas une contrainte subie.</li>
              <li>La question n’est plus l’outil, mais l’organisation et les décisions du dirigeant.</li>
              <li>L’exécution devient simple ; la valeur est dans les idées et les usages.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
