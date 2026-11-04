import { DAYS } from '../../lib/site';
import { PageHead } from '../../components/Parts';
import DayPicker from '../../components/DayPicker';

export const metadata = { title: 'Veille IA quotidienne', description: 'Chaque matin, les sujets IA utiles à un dirigeant de PME : idées fortes et sources.', alternates: { canonical: '/veille-ia/' } };

export default function VeilleIa() {
  return (
    <>
      <PageHead crumb="Veille IA" title="Veille IA quotidienne" lead="Chaque matin, une IA parcourt une trentaine de sources et retient les sujets utiles à un dirigeant de PME. Pour chacun : les idées fortes et la source." />
      <DayPicker days={DAYS.slice(0, 14)} />
    </>
  );
}
