import Link from 'next/link';
import { PageHead } from '../../components/Parts';
import { SITE } from '../../lib/site';

export const metadata = { title: 'À propos', description: 'Denis Oblin, intégrateur d’IA prédictive et générative depuis 2014, enseignant de la transformation IA à l’Institut Polytechnique de Paris, basé à Cognac.', alternates: { canonical: '/a-propos/' } };

export default function APropos() {
  return (
    <>
      <PageHead eyebrow="À propos" title="Denis Oblin" photo={{ src: '/denis-oblin.jpg', alt: 'Portrait de Denis Oblin' }} lead="J’intègre l’IA prédictive et générative en entreprise depuis 2014 et j’enseigne la transformation IA à l’Institut Polytechnique de Paris." />
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
              <li>Le carburant de l’IA vient pour l’essentiel d’hors d’Europe (centres de données, modèles) ; l’intelligence économique qui va avec est à développer ici, et maintenant.</li>
              <li>La sécurité des données et le risque de dépendance sont de vrais sujets : des réponses graduées permettent de se transformer vite et d’internaliser ce qui doit l’être.</li>
              <li>Les PME et TPE sont les premières bénéficiaires de cette transformation : l’investissement est minime et la transformation rapide, quand elle est bien plus difficile à conduire dans une ETI. On peut rester petit et acquérir les attributs des grands.</li>
              <li>L’IA ne nivelle pas les marchés, comme si la même IA servait partout la même réponse : elle permet au contraire de se différencier chaque jour un peu plus, en ajoutant, par simple demande, de nouvelles optimisations à ses traitements.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
