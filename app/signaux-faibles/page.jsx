import { SECTORS } from '../../lib/site';
import { PageHead } from '../../components/Parts';
import SectorTabs from '../../components/SectorTabs';

export const metadata = { title: 'Signaux faibles et tendances', description: 'Rapports mensuels de signaux faibles et de tendances, produits par l’IA, pour deux secteurs suivis.', alternates: { canonical: '/signaux-faibles/' } };

export default function Signaux() {
  return (
    <>
      <PageHead crumb="Signaux faibles" title="Signaux faibles et tendances" lead="Chaque mois, un dispositif IA repère, source et classe les signaux qui comptent pour un secteur. Le rapport se met à jour seul, le 4 de chaque mois." />
      <SectorTabs sectors={SECTORS} />
    </>
  );
}
