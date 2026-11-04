import DiagForm from './DiagForm';

export default function DiagSection({ headingLevel = 2 }) {
  const H = headingLevel === 1 ? 'h1' : 'h2';
  return (
    <section className="band night" id="diagnostic">
      <div className="wrap hero" style={{ alignItems: 'start' }}>
        <div className="stack" style={{ gap: 24 }}>
          <p className="eyebrow">Diagnostic IA</p>
          <H className={headingLevel === 1 ? 'h1' : 'h2'}>Diagnostic de potentiel IA — offert</H>
          <p className="lead">En une semaine, nous identifions avec vos équipes les usages concrets de l’IA dans votre entreprise. Les résultats vous sont présentés de vive voix par Denis Oblin.</p>
          <ol className="steps">
            <li><b>1</b><span>Vous laissez votre e-mail et votre SIREN.</span></li>
            <li><b>2</b><span>Vous confirmez par mail ; nous préparons votre diagnostic.</span></li>
            <li><b>3</b><span>Vous recevez votre lien d’entretien avec notre assistant.</span></li>
          </ol>
        </div>
        <DiagForm />
      </div>
    </section>
  );
}
