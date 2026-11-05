import Link from 'next/link';
import { PageHead } from '../../components/Parts';
import { SITE } from '../../lib/site';

export const metadata = { title: 'À propos', description: 'Denis Oblin, consultant en data et intelligence artificielle, enseignant à l’Institut Polytechnique de Paris, basé à Cognac.', alternates: { canonical: '/a-propos/' } };

export default function APropos() {
  return (
    <>
      <PageHead eyebrow="À propos" title="Denis Oblin" photo={{ src: '/denis-oblin.jpg', alt: 'Portrait de Denis Oblin' }} lead="Consultant indépendant en data et intelligence artificielle, fondateur de Memorandum AI." />
      <section className="band">
        <div className="wrap hero" style={{ alignItems: 'start' }}>
          <div className="stack">
            <p>J’ai démarré dans le conseil en stratégie et organisation, puis exercé plusieurs années en direction opérationnelle dans la banque et l’assurance.</p>
            <p>Depuis 2014, après un an de formation à Télécom Paris, je me consacre au conseil en transformation des entreprises par l’IA, prédictive puis générative.</p>
            <p>Basé à Cognac, j’interviens à Angoulême, Bordeaux, Toulouse, Paris et à distance.</p>
            <p><Link className="btn primary" href="/contact/">Rencontrons-nous</Link> <a className="link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 16 }}>Mon profil LinkedIn →</a></p>
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
