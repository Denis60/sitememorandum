import Link from 'next/link';
import DiagSection from '../../components/DiagSection';

export const metadata = {
  title: 'Analyse de potentiel IA par l’IA',
  description: 'Notre agent IA dialogue avec vous et vos équipes, présente les innovations de votre secteur et analyse vos documents. Restitution de vive voix, rapport détaillé offert.',
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
