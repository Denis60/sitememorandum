import DiagForm from './DiagForm';

export default function DiagSection({ headingLevel = 2 }) {
  const H = headingLevel === 1 ? 'h1' : 'h2';
  return (
    <section className="band night" id="diagnostic">
      <div className="wrap hero" style={{ alignItems: 'start' }}>
        <div className="stack" style={{ gap: 24 }}>
          <p className="eyebrow">Diagnostic IA</p>
          <H className={headingLevel === 1 ? 'h1' : 'h2'}>Demandez à l’IA de faire votre analyse de potentiel IA</H>
          <p className="lead">Notre agent dialogue avec vous, présente les innovations de votre secteur, analyse les documents que vous partagez et contacte les personnes que vous souhaitez associer à la réflexion. Cette analyse vous est restituée de vive voix, et le rapport détaillé vous est offert.</p>
          <ol className="steps">
            <li><b>1</b><span>Vous laissez votre e-mail et votre SIREN.</span></li>
            <li><b>2</b><span>Memorandum AI valide sous 24 h la prise en charge de votre diagnostic, à nos frais.</span></li>
            <li><b>3</b><span>Vous recevez votre lien d’entretien avec notre assistant.</span></li>
          </ol>
        </div>
        <DiagForm />
      </div>
    </section>
  );
}
