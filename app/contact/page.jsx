import Link from 'next/link';
import { PageHead } from '../../components/Parts';
import CopyMail from '../../components/CopyMail';

export const metadata = { title: 'Prendre rendez-vous', description: 'Un premier échange gratuit pour voir où l’IA peut aider votre entreprise.', alternates: { canonical: '/contact/' } };

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Rendez-vous" title="Parlons de votre entreprise." lead="Un premier échange gratuit pour voir où l’IA peut vous aider. Écrivez-moi en indiquant votre entreprise et vos disponibilités." />
      <section className="band">
        <div className="wrap grid">
          <div className="card"><h2 className="h3">Par e-mail</h2><CopyMail /></div>
          <div className="card soft">
            <h2 className="h3">Ou laissez l’IA commencer</h2>
            <p className="muted">Le diagnostic IA prépare notre rendez-vous : vous arrivez avec une première synthèse sur votre entreprise.</p>
            <Link className="btn primary" href="/diagnostic-ia/" style={{ alignSelf: 'flex-start' }}>Demander mon diagnostic</Link>
          </div>
        </div>
      </section>
    </>
  );
}
