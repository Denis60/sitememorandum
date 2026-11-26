Brancher un assistant IA sur sa messagerie, ses fichiers ou son logiciel de gestion prend aujourd’hui quelques minutes. Un clic, une autorisation, et l’outil lit, trie, répond. C’est une excellente nouvelle : ce qui demandait un projet informatique devient accessible à toute PME.

Mais chaque branchement est un accès. Et les publications de cette semaine montrent que ces accès s’ouvrent souvent sans que personne ne les ait vraiment décidés. Donner des clés à l’IA se décide comme on le ferait pour un nouveau collaborateur ou un prestataire. C’est un sujet de management, pas un sujet technique.

## Une extension, c’est un prestataire que personne n’a choisi

Les assistants IA s’enrichissent d’extensions : de petits modules qui leur apprennent une tâche, téléchargeables sur des places de marché publiques. Quatre chercheurs ont examiné 726 de ces extensions réelles. Selon [leur étude](https://arxiv.org/abs/2611.26747), 563 manipulent des données personnelles. Parmi elles, 307, soit 54,5 %, présentent au moins un risque pour la vie privée : déductions sensibles, usage des données au-delà de la tâche annoncée, envoi à des destinataires inattendus.

Le point important est ailleurs : ces risques ne viennent pas d’un piratage. Ils naissent du fonctionnement normal de l’extension. Limite : il s’agit d’une prépublication, pas encore relue par d’autres chercheurs, et les extensions ont été analysées sans être exécutées.

Pour une PME, la leçon est simple. Installer une extension trouvée en ligne revient à ouvrir vos fichiers à un inconnu, sans contrat ni vérification.

## Le moins cher n’est pas toujours le plus sûr

Deuxième signal, du côté des intermédiaires. Beaucoup d’entreprises n’appellent pas directement les grands modèles d’IA : elles passent par des plateformes qui revendent l’accès à prix réduit. La société de sécurité Dragos a voulu savoir ce que devenaient les données envoyées. De juillet à novembre 2026, elle a envoyé environ deux millions de requêtes contenant de faux identifiants piégés, qui signalent toute tentative d’utilisation.

Selon [son rapport](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens), les données d’au moins trois fournisseurs ont été exposées. Dans le cas le plus grave, un attaquant a utilisé environ deux cents clés d’accès à des serveurs. Sur les places de marché, un revendeur pouvait lire les requêtes simplement en proposant un modèle au prix le plus bas. Et les engagements de « non-conservation des données » étaient souvent ignorés. La plateforme OpenRouter a [retiré trois fournisseurs](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) et suspendu cet engagement pour 125 points d’accès.

Limite : il s’agit d’une expérience menée par une seule société, et les fournisseurs en cause ne sont pas nommés. Le mécanisme, lui, vaut partout : vos requêtes contiennent vos clients, vos prix et parfois vos mots de passe.

## Les attaquants trouvent vos portes oubliées en quelques minutes

Troisième signal : l’IA sert aussi à attaquer. Le centre britannique de cybersécurité (NCSC) constate depuis septembre 2026 une nette hausse des attaques assistées par l’IA. Selon [son analyse](https://www.ncsc.gov.uk/blogs/familiar-weaknesses-exploited-faster-defending-against-agentic-cyber-attacks), aucune des failles exploitées n’est nouvelle. Ce sont des mots de passe laissés par défaut, des identifiants oubliés dans le code, des réglages mal faits, des accès entre logiciels mal protégés. Ce qui change, c’est la vitesse : l’outil d’attaque passe de la découverte à l’exploitation en quelques minutes.

Limite : ce sont les constats d’une agence publique britannique, sans chiffres détaillés. Mais la conclusion vaut pour une PME française. L’accès qu’on « fermera plus tard » est désormais trouvé avant.

## Les éditeurs traitent déjà l’assistant comme un collaborateur

Les grands éditeurs en tirent eux-mêmes la conséquence. Microsoft a présenté Autopilot, un assistant autonome qui suit les canaux de Teams, relance les e-mails et gère des projets récurrents. Selon [son annonce](https://www.microsoft.com/en-us/copilot/blog/2026/11/17/copilot-at-microsoft-ignite-expanding-whats-possible-with-intelligence-built-for-work/), chaque assistant a sa propre identité et un responsable nommé. Ses connexions et ses actions sont enregistrées à son nom, et le service informatique peut limiter ses accès ou le bloquer à tout moment.

Limite : c’est une annonce commerciale, pour un programme en avant-première. Mais le modèle est le bon : un assistant qui agit seul se gère comme une personne, avec un responsable, des droits limités et un journal.

## Les précautions à prendre

- **Tenir la liste des branchements.** Quels outils d’IA sont reliés à quels logiciels, avec quels droits, et qui l’a décidé.
- **Nommer un responsable par assistant.** Comme pour un collaborateur : quelqu’un qui valide ses accès et répond de ce qu’il fait.
- **Donner le minimum de droits.** Lecture plutôt qu’écriture, un dossier plutôt que tout le disque, et jamais de mots de passe dans une requête.
- **Choisir ses intermédiaires comme un prestataire sensible.** Contrat, localisation des serveurs, engagements écrits sur les données, et pas seulement le prix.
- **Fermer les portes oubliées maintenant.** Mots de passe par défaut, anciens comptes, accès ouverts sur internet : ce ménage ne peut plus attendre.

Le diagnostic IA de Memorandum AI fait l’inventaire de vos outils et de ce qu’ils permettent de brancher. Il repère où l’IA peut vous faire gagner du temps, et quels accès il faut décider et encadrer avant de l’y autoriser.

**[Lancer mon diagnostic IA](/diagnostic-ia/)**

### À retenir

- Brancher l’IA sur vos outils est devenu facile : chaque branchement est un accès à décider.
- Plus de la moitié des extensions qui manipulent des données personnelles présentent un risque, sans aucun piratage.
- Les intermédiaires bon marché peuvent lire vos requêtes : choisissez-les comme un prestataire sensible.
- Un assistant qui agit seul se gère comme un collaborateur : un responsable, des droits limités, un journal.

### Sources

- [SkillPrivus: Uncovering PRIVacy of USe Harms in Agentic Skills — Fernandez-Espinosa, Ngong, Murugesan et Natesan Ramamurthy, arXiv, 2026](https://arxiv.org/abs/2611.26747) — 726 extensions issues de places de marché publiques, analysées sans exécution ; prépublication déposée le 19 novembre 2026, non relue par des pairs
- [Three breaches, endless leaks: Your AI supply chain needs canaries — HD Moore, Dragos, 2026](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens) — environ deux millions de requêtes piégées, de juillet à novembre 2026 ; expérience d’une seule société, fournisseurs non nommés ; relayé par [The Decoder, 22 novembre 2026](https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/)
- [Data Processing Incidents on Inference Providers — OpenRouter, 2026](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) — mesures prises par la plateforme, 22 novembre 2026
- [Familiar weaknesses, exploited faster: defending against agentic cyber attacks — NCSC, 2026](https://www.ncsc.gov.uk/blogs/familiar-weaknesses-exploited-faster-defending-against-agentic-cyber-attacks) — constats de l’agence britannique de cybersécurité, publiés le 24 novembre 2026, sans données chiffrées
- [Copilot at Microsoft Ignite: Expanding what’s possible with intelligence built for work — Microsoft, 2026](https://www.microsoft.com/en-us/copilot/blog/2026/11/17/copilot-at-microsoft-ignite-expanding-whats-possible-with-intelligence-built-for-work/) — annonce commerciale du 17 novembre 2026, programme en avant-première
