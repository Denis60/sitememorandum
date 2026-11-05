export const metadata = { title: 'Mentions légales et confidentialité', alternates: { canonical: '/mentions-legales/' }, robots: { index: true } };

export default function Mentions() {
  return (
    <section className="band">
      <div className="wrap stack" style={{ maxWidth: 780 }}>
        <h1 className="h2">Mentions légales et confidentialité</h1>
        <p><strong>Éditeur :</strong> MEMORANDUM, SARL (marque Memorandum AI), 1 route de Veillard, 16200 Bourg-Charente. SIRET 818 096 992 00024. Directeur de la publication : Denis Oblin. Contact : denis.oblin@memorandum-ai.com.</p>
        <p><strong>Hébergement :</strong> Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, États-Unis.</p>
        <p><strong>Contenus produits avec l’IA :</strong> la veille IA et les rapports de signaux faibles sont produits et publiés automatiquement par des dispositifs IA, sources citées. Les articles du blog sont rédigés avec l’IA, puis relus et validés par Denis Oblin.</p>
        <p><strong>Données personnelles :</strong> Memorandum AI traite l’adresse e-mail saisie et les informations publiques de l’entreprise (registre national des entreprises) uniquement pour réaliser le diagnostic demandé et préparer sa restitution. Pour une prise de rendez-vous, le nom, l’adresse e-mail, l’entreprise et le message saisis servent uniquement à organiser l’échange (invitation Teams). Données conservées 6 mois au plus. Les formulaires sont protégés par Cloudflare Turnstile. Sous-traitants : Anthropic, Render, Supabase, Resend, Microsoft (Outlook, Teams), Cloudflare, Netlify. Vous pouvez demander l’accès, la rectification ou la suppression de vos données à l’adresse denis.oblin@memorandum-ai.com.</p>
        <p><strong>Mesure d’audience :</strong> sans cookie publicitaire.</p>
      </div>
    </section>
  );
}
