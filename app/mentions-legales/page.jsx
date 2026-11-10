import { Terme } from '../../lib/glossaire';
export const metadata = { title: 'Mentions légales et confidentialité', alternates: { canonical: '/mentions-legales/' }, robots: { index: true } };

export default function Mentions() {
  return (
    <section className="band">
      <div className="wrap stack" style={{ maxWidth: 780 }}>
        <h1 className="h2">Mentions légales et confidentialité</h1>
        <p><strong>Éditeur :</strong> MEMORANDUM, SARL (marque Memorandum AI), 1 route de Veillard, 16200 Bourg-Charente. SIRET 818 096 992 00024. Directeur de la publication : Denis Oblin. Contact : denis.oblin@memorandum-ai.com.</p>
        <p><strong>Hébergement :</strong> Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, États-Unis.</p>
        <p><strong>Contenus produits avec l’IA :</strong> la veille IA et les rapports de signaux faibles sont produits et publiés automatiquement par des dispositifs IA, sources citées. Sur le blog, l’auteur est indiqué sur chaque article : les articles signés Denis Oblin sont rédigés avec l’IA puis relus et validés par lui ; l’article hebdomadaire tiré de la veille est rédigé et publié automatiquement par l’IA, sources citées.</p>
        <h2 className="h3" id="donnees">Données personnelles</h2>
        <p><strong>Responsable du traitement :</strong> MEMORANDUM, SARL (marque Memorandum AI), 1 route de Veillard, 16200 Bourg-Charente. Contact : denis.oblin@memorandum-ai.com.</p>
        <p><strong>Demande de diagnostic :</strong> nous traitons l’adresse e-mail, le secteur d’activité, le site web et le SIREN saisis, ainsi que les informations publiques de l’entreprise (registre national des entreprises), pour réaliser le diagnostic demandé et préparer sa restitution. Base légale : votre consentement, recueilli par la case à cocher du formulaire, et les mesures précontractuelles prises à votre demande.</p>
        <p><strong>Prise de rendez-vous :</strong> le nom, l’adresse e-mail, l’entreprise et le message saisis servent uniquement à organiser l’échange (invitation Teams). Base légale : les mesures précontractuelles prises à votre demande.</p>
        <p><strong>Chat des références :</strong> les questions posées et les réponses de l’IA sont conservées, sans votre nom, votre adresse e-mail ni votre adresse IP, pour améliorer nos fiches et nos réponses. Ne saisissez pas de données personnelles dans le chat. Base légale : notre intérêt légitime à répondre aux visiteurs et à améliorer le service.</p>
        <p><strong>Protection contre les robots :</strong> les formulaires sont protégés par Cloudflare Turnstile. Base légale : notre intérêt légitime à sécuriser le site.</p>
        <p><strong>Durée de conservation :</strong> 6 mois au plus, puis suppression.</p>
        <p><strong>Destinataires et sous-traitants :</strong> les données ne sont ni vendues ni cédées. Elles sont accessibles à Denis Oblin et à nos sous-traitants techniques : Anthropic (IA), Render (serveur), <Terme id="supabase">Supabase</Terme> (base de données, Union européenne), Resend (envoi d’e-mails), Microsoft (Outlook, Teams), n8n (automatisation), Cloudflare (sécurité), Netlify (hébergement du site).</p>
        <p><strong>Transferts hors de l’Union européenne :</strong> certains de ces sous-traitants traitent des données aux États-Unis. Ces transferts sont encadrés par le cadre de protection des données UE–États-Unis (Data Privacy Framework) pour les sous-traitants certifiés, ou à défaut par les clauses contractuelles types de la Commission européenne.</p>
        <p><strong>Vos droits :</strong> vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la limitation du traitement ou sa portabilité, vous opposer au traitement et retirer votre consentement à tout moment, en écrivant à denis.oblin@memorandum-ai.com. Nous répondons sous un mois.</p>
        <p><strong>Réclamation :</strong> si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (<a className="link" href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</p>
        <p><strong>Mesure d’audience :</strong> sans cookie publicitaire.</p>
      </div>
    </section>
  );
}
