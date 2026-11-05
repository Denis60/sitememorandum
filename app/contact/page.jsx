import Link from 'next/link';
import { PageHead } from '../../components/Parts';
import CopyMail from '../../components/CopyMail';
import Agenda from '../../components/Agenda';

export const metadata = { title: 'Prendre rendez-vous', description: 'Un premier échange gratuit pour voir où l’IA peut aider votre entreprise.', alternates: { canonical: '/contact/' } };

export default function Contact() {
  return (
    <>
      <PageHead compact eyebrow="Rendez-vous" title="Parlons de votre entreprise." lead="Un premier échange gratuit de 30 minutes, en visio Teams, pour voir où l’IA peut vous aider. Choisissez un créneau ou écrivez-moi.">
        <CopyMail />
      </PageHead>
      <section className="band" style={{ paddingTop: 32 }}>
        <div className="wrap grid" style={{ alignItems: "start" }}>
          <div className="card">
            <h2 className="h3">Rencontrons-nous</h2>
            <p className="muted">Choisissez un créneau de 30 minutes : l’invitation Teams vous est envoyée aussitôt.</p>
            <Agenda />
          </div>
          <div className="card soft">
            <h2 className="h3">Ou laissez l’IA commencer</h2>
            <p className="muted">Le diagnostic IA prépare notre rendez-vous : vous arrivez avec une première synthèse sur votre entreprise.</p>
            <Link className="btn primary" href="/diagnostic-ia/" style={{ alignSelf: 'flex-start' }}>Lancer mon diagnostic IA</Link>
          </div>
        </div>
      </section>
    </>
  );
}
