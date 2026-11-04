import Link from 'next/link';
import { Steps } from '../../components/Parts';
import DiagForm from '../../components/DiagForm';

export const metadata = { title: 'Diagnostic IA gratuit', description: 'Un intervieweur IA vous pose les bonnes questions sur votre entreprise ; la synthèse vous est restituée lors d’un rendez-vous gratuit.', alternates: { canonical: '/diagnostic/' } };

export default function Diagnostic() {
  return (
    <section className="band night">
      <div className="wrap hero" style={{ alignItems: 'start' }}>
        <div className="stack" style={{ gap: 24 }}>
          <p className="small" style={{ color: 'var(--on-night-muted)' }}><Link href="/ia-en-action/">L’IA en action</Link> › Diagnostic IA</p>
          <h1 className="h1">Votre diagnostic IA, gratuit</h1>
          <p className="lead">Un intervieweur IA vous pose les bonnes questions sur votre entreprise, recueille vos documents et peut interroger vos collègues. En parallèle, une recherche approfondie analyse votre secteur. Nous vous restituons une première synthèse lors d’un rendez-vous.</p>
          <Steps detailed />
        </div>
        <DiagForm />
      </div>
    </section>
  );
}
