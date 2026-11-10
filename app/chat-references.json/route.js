import refs from '../../content/references.json';
import missions from '../../content/missions.json';
import { AUTRES_CLIENTS } from '../../components/Maquette';

// Base de connaissances publique du chat des références (lue par n8n à chaque question).
// Uniquement des informations déjà publiées : fiches « enLigne » et descriptifs de content/missions.json.
export const dynamic = 'force-static';

export function GET() {
  const fiches = refs.references.filter((r) => r.enLigne).map((r) => ({
    client: r.nom || null,
    description: r.who,
    secteur: r.secteur,
    titre: r.titre,
    statut: r.statut,
    calendrier: r.calendrier,
    chiffre_cle: r.big ? `${r.big} ${r.bigTxt}` : undefined,
    probleme: r.probleme,
    ce_qui_a_ete_fait: r.fait,
    resultat: r.resultat,
    citation_client: r.cite,
  }));
  return Response.json({
    source: 'https://memorandum-ai.com/references/',
    fiches,
    autres_clients_cites_sans_fiche: AUTRES_CLIENTS,
    descriptifs_de_missions: missions.missions,
    offres: {
      diagnostic: 'Diagnostic de potentiel IA, offert, environ 1 semaine : un agent IA dialogue avec le dirigeant et les personnes désignées ; restitution de vive voix et rapport détaillé.',
      sprint_pilote: 'Un processus transformé, à partir de 5 000 € HT, environ 3 semaines : prototype testé sur les vrais dossiers, équipes formées par l’exemple, bilan du temps gagné et des coûts complets.',
      deploiement: 'L’IA dans plusieurs services, sur devis, 1 à 3 mois.',
    },
    contact: 'https://memorandum-ai.com/contact/',
  });
}
