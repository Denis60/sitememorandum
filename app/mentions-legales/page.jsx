export const metadata = { title: 'Mentions légales et confidentialité', alternates: { canonical: '/mentions-legales/' }, robots: { index: true } };

export default function Mentions() {
  return (
    <section className="band">
      <div className="wrap stack" style={{ maxWidth: 780 }}>
        <h1 className="h2">Mentions légales et confidentialité</h1>
        <p><strong>Éditeur :</strong> Memorandum AI, [FORME JURIDIQUE], [ADRESSE], SIRET [NUMÉRO]. Directeur de la publication : Denis Oblin.</p>
        <p><strong>Hébergement :</strong> Netlify, Inc., [ADRESSE À REPRENDRE DES CONDITIONS DE NETLIFY].</p>
        <p><strong>Contenus produits avec l’IA :</strong> la veille IA et les rapports de signaux faibles sont produits et publiés automatiquement par des dispositifs IA, sources citées. Les articles du blog sont rédigés avec l’IA, puis relus et validés par Denis Oblin.</p>
        <p><strong>Données personnelles :</strong> les données saisies pour le diagnostic (adresse professionnelle, SIREN, réponses à l’entretien) servent uniquement à le réaliser et à préparer le rendez-vous. Durée de conservation : [À PRÉCISER]. Sous-traitants : Anthropic, n8n, Airtable, Netlify. Vous pouvez demander l’accès, la rectification ou la suppression de vos données à l’adresse denis.oblin@memorandum-ai.com.</p>
        <p><strong>Mesure d’audience :</strong> sans cookie publicitaire.</p>
        <p><strong>Archive :</strong> le concours d’idées IA de 2026 reste consultable en archive.</p>
      </div>
    </section>
  );
}
