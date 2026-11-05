export const metadata = { title: 'Mentions légales et confidentialité', alternates: { canonical: '/mentions-legales/' }, robots: { index: true } };

export default function Mentions() {
  return (
    <section className="band">
      <div className="wrap stack" style={{ maxWidth: 780 }}>
        <h1 className="h2">Mentions légales et confidentialité</h1>
        <p><strong>Éditeur :</strong> Memorandum AI, [FORME JURIDIQUE], [ADRESSE], SIRET [NUMÉRO]. Directeur de la publication : Denis Oblin.</p>
        <p><strong>Hébergement :</strong> Netlify, Inc., [ADRESSE À REPRENDRE DES CONDITIONS DE NETLIFY].</p>
        <p><strong>Contenus produits avec l’IA :</strong> la veille IA et les rapports de signaux faibles sont produits et publiés automatiquement par des dispositifs IA, sources citées. Les articles du blog sont rédigés avec l’IA, puis relus et validés par Denis Oblin.</p>
        <p><strong>Données personnelles :</strong> Memorandum AI traite l’adresse e-mail saisie et les informations publiques de l’entreprise (registre national des entreprises) uniquement pour réaliser le diagnostic demandé et préparer sa restitution. Données conservées 6 mois au plus. Le formulaire est protégé par Cloudflare Turnstile. Sous-traitants : Anthropic, Render, Cloudflare, Netlify. Vous pouvez demander l’accès, la rectification ou la suppression de vos données à l’adresse denis.oblin@memorandum-ai.com.</p>
        <p><strong>Mesure d’audience :</strong> sans cookie publicitaire.</p>
      </div>
    </section>
  );
}
