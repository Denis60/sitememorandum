import Link from 'next/link';
import DiagSection from '../../components/DiagSection';

export const metadata = {
  title: 'Diagnostic de potentiel IA — offert',
  description: 'En une semaine, nous identifions avec vos équipes les usages concrets de l’IA dans votre entreprise. Résultats présentés de vive voix par Denis Oblin.',
  alternates: { canonical: '/diagnostic-ia/' },
};

export default function DiagnosticIa() {
  return (
    <>
      <div className="band night" style={{ paddingBlock: '24px 0' }}>
        <div className="wrap"><p className="small" style={{ color: 'var(--on-night-muted)' }}><Link href="/ia-en-action/">L’IA en action</Link> › Diagnostic IA</p></div>
      </div>
      <DiagSection headingLevel={1} />
    </>
  );
}
