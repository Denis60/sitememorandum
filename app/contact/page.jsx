import Link from 'next/link';
import { PageHead } from '../../components/Parts';
import CopyMail from '../../components/CopyMail';
import { SITE } from '../../lib/site';

export const metadata = { title: 'Prendre rendez-vous', description: 'Un premier échange gratuit pour voir où l’IA peut aider votre entreprise.', alternates: { canonical: '/contact/' } };

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Rendez-vous" title="Parlons de votre entreprise." lead="Un premier échange gratuit de 30 minutes, en visio Teams, pour voir où l’IA peut vous aider. Choisissez un créneau ou écrivez-moi." />
      <section className="band">
        <div className="wrap stack lg">
          <div className="card">
            <h2 className="h3">Choisir un créneau</h2>
            <p className="muted">Mes disponibilités, à jour en temps réel : la réservation crée directement l’invitation Teams.</p>
            <iframe className="agenda" src={SITE.bookings} title="Prendre rendez-vous avec Denis Oblin" loading="lazy" />
            <a className="link small" href={SITE.bookings} target="_blank" rel="noopener noreferrer">L’agenda ne s’affiche pas ? Ouvrir la page de réservation →</a>
          </div>
        </div>
      </section>
      <section className="band" style={{ paddingTop: 0 }}>
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
