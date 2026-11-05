import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Memorandum AI — L’IA au cœur des PME', template: '%s · Memorandum AI' },
  description: 'Conseil, automatisation et intégration de l’IA pour les PME. Veille IA quotidienne, signaux faibles sectoriels et diagnostic IA gratuit.',
  openGraph: { type: 'website', locale: 'fr_FR', siteName: 'Memorandum AI', images: ['/logo.png'] },
  icons: { icon: '/logo-m.png' },
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Memorandum AI',
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  founder: { '@type': 'Person', name: 'Denis Oblin', jobTitle: 'Consultant en data et intelligence artificielle' },
  address: { '@type': 'PostalAddress', addressLocality: 'Cognac', addressCountry: 'FR' },
  areaServed: SITE.areas.map((name) => ({ '@type': 'City', name })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
