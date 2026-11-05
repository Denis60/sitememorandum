import Link from 'next/link';
import DiagSection from '../../components/DiagSection';
import { Label, Chiffres, Realisations, Interventions, VeilleSemaine, Secteurs, Cas, Articles, Clients, REALISATIONS, SEMAINE, SITE } from '../../components/Maquette';

export const metadata = { title: 'Maquette B — produit IA', robots: { index: false, follow: false } };

export default function MaquetteB() {
  const r = REALISATIONS[0];
  return (
    <div className="mq mq-b">
      <section className="band night mq-glow">
        <div className="wrap stack lg">
          <div className="hero" style={{ alignItems: 'center' }}>
            <div className="stack hero-text">
              <Label>Conseil et intégration IA pour les PME</Label>
              <h1 className="h1">Intégrez l’IA <em>maintenant</em>, en profondeur, durablement.</h1>
              <p className="lead">3 semaines peuvent suffire pour faire évoluer un processus, en en gardant la maîtrise complète.</p>
              <div className="btns">
                <Link className="btn gold" href="/#diagnostic">Lancer le diagnostic personnalisé</Link>
                <Link className="btn ghost" href="/ia-en-action/">Voir l’IA en action</Link>
              </div>
            </div>
            <figure className="mq-shot mq-hero-shot">
              <div className="mq-frame"><span className="mq-dots" aria-hidden="true"><i /><i /><i /></span><img src={r.img} alt={r.alt} /></div>
              <figcaption><span className="mq-chip">{r.chip}</span><strong>{r.titre}</strong><span className="small muted">{r.qui}</span></figcaption>
            </figure>
          </div>
          <Chiffres dark />
        </div>
      </section>

      <section className="band night mq-night2">
        <div className="wrap stack lg">
          <div className="mq-head"><div className="stack"><Label>Veille IA de la semaine · {SEMAINE.label}</Label><h2 className="h2">L’IA lit l’actualité. <em>Nous</em> en tirons les leçons.</h2></div><Link className="link" href="/veille-ia/">Toute la veille IA →</Link></div>
          <VeilleSemaine dark />
        </div>
      </section>

      <section className="band">
        <div className="wrap stack lg">
          <div className="stack" style={{ maxWidth: 760 }}><Label>Réalisations</Label><h2 className="h2">De vrais outils. De <em>vrais</em> dossiers.</h2><p className="muted">Construits avec les équipes de nos clients, utilisés au quotidien, modifiables par eux.</p></div>
          <Realisations />
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
          <div className="stack" style={{ maxWidth: 760 }}><Label>L’IA en action</Label><h2 className="h2">Des secteurs analysés <em>en continu</em>.</h2><p className="muted">Trois exemples variés de suivis sectoriels (dont le nôtre), alimentés automatiquement chaque mois.</p></div>
          <Secteurs />
        </div>
      </section>

      <section className="band tint">
        <div className="wrap stack lg">
          <div className="stack" style={{ maxWidth: 760 }}><Label>Interventions et conférences</Label><h2 className="h2">Sur le terrain, <em>devant</em> les dirigeants.</h2></div>
          <Interventions />
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
