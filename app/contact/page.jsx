import { PageHead } from '../../components/Parts';
import CopyMail from '../../components/CopyMail';
import Agenda from '../../components/Agenda';
import DiagForm from '../../components/DiagForm';

export const metadata = { title: 'Prendre rendez-vous', description: 'Un premier échange gratuit pour voir où l’IA peut aider votre entreprise.', alternates: { canonical: '/contact/' } };

export default function Contact() {
  return (
    <>
      <PageHead compact eyebrow="Rendez-vous" title="Parlons de votre entreprise." lead="Un premier échange gratuit de 30 minutes, en visio Teams, pour voir où l’IA peut vous aider. Choisissez un créneau ou écrivez-nous.">
        <CopyMail />
      </PageHead>
      <section className="band" style={{ paddingTop: 32 }}>
        <div className="wrap grid" style={{ alignItems: 'start' }}>
          <div className="stack">
            <h2 className="h3">Rencontrons-nous</h2>
            <div className="card">
              <p className="muted">Choisissez un créneau de 30 minutes : l’invitation Teams vous est envoyée aussitôt.</p>
              <Agenda />
            </div>
          </div>
          <div className="stack">
            <h2 className="h3">Ou laissez l’IA commencer</h2>
            <DiagForm sansLienRdv />
          </div>
        </div>
      </section>
    </>
  );
}
