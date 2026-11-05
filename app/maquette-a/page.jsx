import Link from 'next/link';
import DiagSection from '../../components/DiagSection';
import { Label, Chiffres, FilVeille, Realisations, Interventions, VeilleSemaine, Secteurs, Cas, Articles, Clients, SEMAINE, SITE } from '../../components/Maquette';

export const metadata = { title: 'Maquette A — cabinet sobre', robots: { index: false, follow: false } };

export default function MaquetteA() {
  return (
    <div className="mq mq-a">
      <section className="mq-hero-photo">
        <div className="mq-hero-fond" aria-hidden="true" />
        <div className="mq-halo" aria-hidden="true" />
        <div className="wrap"><div className="stack hero-text">
          <Label>Conseil et intégration IA · Charente, Bordeaux, Toulouse, Paris</Label>
          <h1 className="h1">Intégrez l’IA <em>maintenant</em>, en profondeur, durablement.</h1>
          <p className="lead">3 semaines peuvent suffire pour faire évoluer un processus, en en gardant la maîtrise complète.</p>
          <div className="btns">
            <Link className="btn gold" href="/#diagnostic">Lancer le diagnostic personnalisé</Link>
            <Link className="btn ghost" href="/references/">Voir nos réalisations</Link>
          </div>
          <Chiffres dark />
        </div></div>
        <div className="wrap"><FilVeille /></div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div className="mq-head"><div className="stack"><Label>Veille IA de la semaine · {SEMAINE.label}</Label><h2 className="h2">Ce qui change, <em>cette semaine</em>, pour une PME.</h2></div><Link className="link" href="/veille-ia/">Toute la veille IA →</Link></div>
          <VeilleSemaine />
        </div>
      </section>

      <section className="band night">
        <div className="wrap stack lg">
          <div className="stack"><Label>Réalisations</Label><h2 className="h2">Des outils qui <em>tournent</em> chez nos clients.</h2><p className="muted">Construits avec les équipes, sur leurs vrais dossiers. Tout reste modifiable par le client.</p></div>
          <Realisations />
        </div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div className="stack"><Label>Ce que nous faisons</Label><h2 className="h2">De l’idée au processus qui tourne, <em>sans boîte noire</em>.</h2></div>
          <div className="grid">
            <div className="card"><h3 className="h3">Conseil et cadrage</h3><p className="muted">Identifier où l’IA crée de la valeur dans votre métier, choisir le premier cas d’usage, décider en connaissant les coûts et les limites.</p></div>
            <div className="card"><h3 className="h3">Automatisation et intégration</h3><p className="muted">Construire avec vos équipes des assistants et des workflows qui s’appuient sur vos outils, vos documents et vos règles métier.</p></div>
            <div className="card"><h3 className="h3">Former par l’exemple</h3><p className="muted">À la fin de la mission, vous êtes autonome sur votre nouveau processus. Tout ce qui est construit vous appartient.</p></div>
          </div>
          <Link className="link" href="/offres/">Nos trois niveaux d’intervention →</Link>
        </div>
      </section>

      <section className="band tint">
        <div className="wrap stack lg">
          <div className="mq-head"><div className="stack"><Label>Références</Label><h2 className="h2">Des PME aux <em>grands groupes</em> industriels.</h2></div><Link className="link" href="/references/">Autres références des 12 derniers mois →</Link></div>
          <Clients />
          <Cas />
        </div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div className="stack"><Label>Interventions et conférences</Label><h2 className="h2">Partager ce que <em>nous voyons</em> sur le terrain.</h2></div>
          <Interventions />
        </div>
      </section>

      <section className="band tint">
        <div className="wrap stack lg">
          <div className="stack"><Label>L’IA en action</Label><h2 className="h2">Notre IA analyse la transformation de secteurs d’activité <em>en continu</em>.</h2><p className="muted">Trois exemples variés de suivis sectoriels (dont le nôtre), alimentés automatiquement chaque mois.</p></div>
          <Secteurs />
        </div>
      </section>

      <DiagSection />

      <section className="band">
        <div className="wrap stack lg">
          <div className="mq-head"><div className="stack"><Label>Blog</Label><h2 className="h2">Une réflexion <em>continue</em>, ouverte.</h2></div><Link className="link" href="/blog/">Le blog →</Link></div>
          <Articles />
        </div>
      </section>

      <section className="band tint">
        <div className="wrap mq-founder">
          <img src="/denis-oblin.jpg" alt="Portrait de Denis Oblin" width="160" height="160" />
          <div className="stack"><Label>Le fondateur</Label><h2 className="h2"><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">Denis Oblin</a></h2><p className="muted">Mastère spécialisé en IA (Télécom Paris), enseignant à l’Institut Polytechnique de Paris, ambassadeur Osez l’IA, cofondateur de Rendez-vous en terrain numérique.</p><Link className="link" href="/a-propos/">En savoir plus →</Link></div>
        </div>
      </section>
    </div>
  );
}
