import { SECTORS } from '../../lib/site';
import { PageHead } from '../../components/Parts';
import SectorTabs from '../../components/SectorTabs';

export const metadata = { title: 'Signaux faibles et tendances', description: 'Rapports mensuels de signaux faibles et de tendances, produits par l’IA, pour trois secteurs suivis.', alternates: { canonical: '/signaux-faibles/' } };

export default function Signaux() {
  return (
    <>
      <PageHead crumb="Signaux faibles" title="Signaux faibles et tendances" lead="Chaque mois, un dispositif IA repère, source et classe les signaux qui comptent pour un secteur, puis en déduit des tendances. Trois secteurs sont suivis à titre d’exemple." />
      <SectorTabs sectors={SECTORS} />
    </>
  );
}
