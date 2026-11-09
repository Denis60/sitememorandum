Début novembre, les acteurs économiques du département étaient réunis par la préfecture de Charente pour une demi-journée consacrée à l’IA et à la sécurité économique. Le préfet l’a résumé en une phrase : « L’IA est là, qu’on le veuille ou pas. Maintenant, il faut savoir s’en servir, savoir se protéger, savoir en faire une ressource stratégique. » Il a ajouté que cette appropriation devait se faire « dans un cadre maîtrisé ».

Tout est dit. Rester à l’écart n’est pas une option. Y aller sans précaution non plus.

## Un exemple : un grossiste en luminaires

Un grossiste en luminaires veut répondre plus vite aux cahiers des charges techniques de ses clients. Il s’agit d’interpréter les besoins, de choisir chez ses fournisseurs les luminaires les plus adaptés, puis de préparer le devis.

Nous avons d’abord tenté la voie la plus « industrielle » : un mois à construire des automatisations complètes avec n8n, un outil d’automatisation qui peut être hébergé dans l’entreprise et qui appelle ponctuellement des IA externes, comme des consommables remplaçables.

C’était une erreur. Nous pensions le processus mécanique : retrouver les bonnes caractéristiques techniques. Il demande en fait beaucoup d’interprétation liée au contexte (une salle d’opération, par exemple), et des caractéristiques importantes ne figurent pas dans les catalogues. L’enjeu n’est pas d’automatiser, mais d’assister : organiser la coordination entre l’IA et l’expert.

Nous avons basculé sur une plateforme d’IA du marché, Claude, dans son offre professionnelle, connectée à certains dossiers de l’entreprise. n8n n’est resté que pour orchestrer quelques accès : retrouver les tarifs négociés chez les fournisseurs, créer le devis dans le logiciel de gestion commerciale. La bascule a apporté de la fluidité, de la maîtrise et une meilleure coordination entre l’expert et la machine : ouvrir un dialogue, montrer les visuels, permettre de corriger.

La conception a pris quelques semaines. Elle a permis de tester plusieurs approches et de garder ce qui marche, de comprendre quelle taille de modèle il fallait pour une analyse pertinente, et de trouver la bonne répartition des rôles entre l’humain et l’IA. Cette phase agile a fait gagner des mois. Le dispositif fonctionne, et il continue de s’améliorer au quotidien en mémorisant de nouvelles consignes.

Revers de la réussite : l’entreprise dépend désormais fortement de cette plateforme en ligne. Une interruption de service d’une semaine la mettrait en danger. L’étape suivante est donc de réinternaliser, moins pour des raisons de sécurité des données que de dépendance. Il s’agit de rapatrier tout ou partie du processus sur ses propres serveurs, avec n8n ou peut-être Mistral Studio (pas encore testé), tout en continuant d’appeler des modèles étrangers pour certaines tâches d’analyse. Un modèle de secours, choisi et testé à l’avance, prend le relais si l’un d’eux devient inaccessible. Tout internaliser, modèle compris, n’est pas d’actualité.

La leçon : commencer par l’étape la plus internalisée aurait coûté des mois, sans savoir encore ce qu’il fallait protéger. On explore d’abord, sur un socle de sécurité déjà solide. On renforce ensuite, à la mesure de ce qu’on a appris.

## Beaucoup d’entreprises attendent, par prudence

Sur le terrain, nous voyons beaucoup d’entreprises à l’arrêt. La raison invoquée est presque toujours la même : la sécurité des données. Leurs équipes, elles, avancent quand même, au besoin avec leurs propres outils d’IA.

Cette prudence mérite d’être regardée de près. Une entreprise qui détient un actif stratégique (un procédé, un savoir-faire rare, un fichier sensible) le sait, en général. Elle ne le dépose pas sur SharePoint ni sur Google Drive. Elle ne le confiera donc pas non plus à une plateforme d’IA étrangère. Ce réflexe est sain. Attention toutefois : la valeur peut aussi naître de l’assemblage. Des données anodines, une à une, peuvent devenir stratégiques une fois réunies.

Pour tout le reste, le risque stratégique est ailleurs. Les offres professionnelles des grandes plateformes, bien configurées, apportent un socle de garanties adapté au RGPD pour les usages autorisés. **Le vrai risque est de ne pas inventer assez vite l’intelligence économique qui va avec ce nouveau carburant** que sont les data centers. Le danger n’est pas tant de mal protéger vos données d’aujourd’hui. Il est de ne pas trouver votre place dans la nouvelle économie.

Nous allons tous tâtonner. Ceux qui commencent tôt inventeront ce qui méritera, demain, d’être protégé.

## Un cadre tout de suite, pour avancer et pour se protéger

Cet article propose une démarche souple pour se transformer maintenant. Elle a un second avantage : un outil officiel, proposé tout de suite, réduit le risque le plus répandu, le shadow IA (l’usage par les salariés d’outils d’IA personnels, hors de tout contrôle). Quand l’entreprise ne propose rien, ses équipes utilisent quand même l’IA, avec leurs comptes gratuits. Et leurs documents partent là où personne ne regarde. L’outil ne suffit pas à lui seul : il faut aussi une règle d’usage simple, une formation et quelques contrôles.

Ce cadre tient en quelques règles :

- on explore avec des données autorisées, non stratégiques et réduites au nécessaire ;
- non stratégique ne veut pas dire non sensible : une donnée personnelle ou confidentielle reste à protéger ;
- les connecteurs (les accès de l’IA à vos dossiers et logiciels) ont des droits minimaux, en lecture seule par défaut, avec une trace de ce qu’ils font ;
- une personne valide avant toute action importante : un envoi, une commande, une modification de données.

La CNIL propose des [fiches pratiques pour les TPE et PME](https://cnil.fr/fr/utiliser-lia-generative-dans-les-tpe-et-pme) qui utilisent l’IA générative, dont une sur la manière de « se prémunir contre la perte de savoir et la dépendance ».

## Une échelle à trois niveaux

**L’échelle ne mesure pas un niveau de sécurité** qui monterait tout seul. Elle mesure la maîtrise : de vos flux de données, de vos dépendances, de votre autonomie. Chaque niveau repose sur le même socle de garanties.

### Niveau 1 : une plateforme d’IA professionnelle, comme vos outils bureautiques

Claude, ChatGPT, Copilot, Gemini ou Mistral, dans leurs offres pour les entreprises. Leurs garanties sont comparables à celles de SharePoint ou de Google Workspace, que vous utilisez déjà :

- un contrat de traitement des données conforme au RGPD ;
- le chiffrement des données, pendant leur transfert et quand elles sont stockées ;
- l’engagement que vos données ne servent pas à entraîner les modèles ;
- une connexion avec les comptes de l’entreprise et une gestion des droits d’accès ;
- selon les offres, des journaux d’activité et des règles de conservation.

![L’échelle de maîtrise de l’IA en trois niveaux : explorer sur une plateforme pro (quelques dizaines d’euros par utilisateur et par mois), internaliser le processus qui décrit votre façon de travailler (petit serveur, modèles étrangers ou hébergés en France), maîtriser en gardant tout chez soi (2 000 € à 400 000 $). Une question de tri : « Le mettriez-vous sur SharePoint ou Google Drive ? ». L’essentiel des usages reste en bas ; on ne monte que si nécessaire.](/blog/echelle-securite-ia-3-niveaux.png)

Deux précisions. La comparaison porte sur les garanties de la plateforme, pas sur le risque de chaque usage. Et ces garanties dépendent de l’offre choisie et de sa configuration.

Le démarrage et la première utilisation se font dans l’heure, pour un abonnement de quelques dizaines d’euros par utilisateur et par mois, résiliable simplement.

Ces éditeurs sont souvent américains, donc soumis au Cloud Act. Cette loi de 2018 permet aux autorités des États-Unis d’exiger, dans le cadre d’une procédure judiciaire, des données détenues par un fournisseur américain, [quel que soit leur lieu de stockage](https://www.insideprivacy.com/cloud-computing/cloud-act-creates-new-framework-for-cross-border-data-access/). Ce n’est pas un accès automatique. C’est exactement la situation de SharePoint et de Google. Si vous acceptez ce risque pour vos documents de travail, il est cohérent de l’accepter ici.

À ce niveau, tout vit sur la plateforme : les conversations, les documents, les consignes, la mémoire, la façon de travailler. Si elle s’arrête, tout s’arrête.

### Niveau 2 : l’intelligence de l’entreprise chez elle, l’IA comme consommable

Au niveau 2, le cœur change de place. L’intelligence de l’entreprise est dans son processus automatisé : les étapes, les règles, les contrôles, les exemples, les critères de qualité. C’est ce qui la différencie de ses concurrents, et c’est devenu hautement évolutif. Ce processus vous appartient et tourne hors des grandes plateformes.

Les modèles d’IA externes deviennent des consommables. Le processus les appelle ponctuellement, par une API (une porte d’accès entre logiciels), pour des tâches précises, avec les seuls extraits utiles. Ils sont facilement remplaçables : le changement est simple techniquement, mais il se valide par des tests sur vos cas réels. Vérifiez aussi, pour chaque fournisseur, les garanties propres à son API : durée de conservation des données (certaines offres n’en gardent rien), localisation, absence d’entraînement.

**Où héberger le processus ?** Dans l’entreprise, avec un outil d’automatisation comme n8n, ou avec Mistral Studio, dont les traitements peuvent tourner sur vos serveurs, le pilotage restant chez Mistral. Sinon chez un hébergeur européen : OVHcloud en France, ou Mistral, qui [stocke par défaut les données dans l’Union européenne](https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data). Comptez quelques dizaines d’euros par mois pour un petit serveur.

**Quels modèles appeler ?** Trois options, combinables dans un même processus :

- **Les modèles américains** (Claude, GPT, Gemini), pour les tâches potentiellement complexes mais peu sensibles. Ce sont souvent les plus performants, avec la même réserve sur le Cloud Act qu’au niveau 1.
- **Les modèles européens**, pour les données sensibles. Mistral les propose directement. [OVHcloud AI Endpoints](https://corporate.ovhcloud.com/en/newsroom/news/ai-endpoints/) propose des modèles open source (dont les paramètres sont publics et réutilisables), parmi lesquels des modèles de Mistral, depuis son centre de données de Gravelines, dans le Nord. Le prix reste modeste : moins d’un euro par million de tokens (unités de texte, un mot ou un morceau de mot) pour un modèle comme [Mistral Small 3.2](https://www.ovhcloud.com/fr/public-cloud/ai-endpoints/catalog/mistral-small-3-2-24b-instruct-2506/). En contrepartie, ces modèles ont souvent un temps de retard sur les meilleurs.
- **Un petit modèle sur un PC de l’entreprise**, pour les tâches sensibles, ponctuelles et simples. Il est aujourd’hui assez simple d’installer un modèle sur la carte graphique d’un PC. Dans mon activité, je m’en sers pour pseudonymiser à la source (remplacer les noms et identifiants par des codes) les documents que me remettent mes clients, avant tout autre traitement. Cela fonctionne même pour des vidéos.

### Niveau 3 : tout chez vous

Le processus et le modèle tournent sur vos propres machines. Un modèle modeste tient sur un PC équipé d’une carte graphique de 24 Go, pour environ 2 000 à 4 000 €. Il suffit pour résumer, classer ou extraire des informations. Un gros modèle demande un serveur à huit cartes graphiques spécialisées, de l’ordre de [250 000 à 400 000 dollars](https://intuitionlabs.ai/articles/data-center-gpu-prices), plus une équipe pour l’exploiter. Mistral Studio peut aussi être déployé entièrement sur site, modèles compris, pour les grandes entreprises ([options de déploiement](https://docs.mistral.ai/studio/deployments)).

Les données ne partent plus chez un fournisseur d’IA. Mais d’autres portes restent à surveiller : les mises à jour, les sauvegardes, les journaux, le support à distance, les connecteurs.

Plus on internalise, plus on maîtrise les flux, la conservation, les accès, les dépendances et les solutions de repli, et moins on est exposé à un fournisseur. En contrepartie, une part croissante de la sécurité repose sur l’entreprise elle-même. Et plus on internalise, plus c’est cher, plus il faut de compétences, et moins on va vite. L’ANSSI recommande d’ailleurs une « posture de prudence » quand on intègre une IA générative à son système d’information.

## Une approche dynamique : chaque processus trouve sa marche

La marche de l’échelle ne se choisit pas une fois pour toutes, pour toute l’entreprise. Elle se choisit processus par processus, et elle évolue.

- **Ce qui est déjà stratégique va directement au niveau 3.** Inutile de l’exposer pour apprendre.
- **L’essentiel des processus peut démarrer au niveau 1**, avec des données autorisées, non stratégiques et réduites au nécessaire. Dans les entreprises que nous accompagnons, c’est de l’ordre de neuf sur dix ; c’est un retour d’expérience, pas une règle. On y découvre très vite un processus repensé, dopé à l’IA. Beaucoup y resteront, en s’améliorant chaque jour avec les idées de ceux qui les pilotent.
- **Les plus sensibles, ou ceux qui le deviennent, sont internalisés (niveau 2).** Deux signaux doivent alerter : une dépendance qui s’installe envers un fournisseur, ou des données qui deviennent stratégiques. Réévaluez donc la sensibilité à mesure que le processus accumule consignes, exemples, données et connexions.

Renforcer ne veut pas toujours dire monter. On peut d’abord réduire la durée de conservation des données, choisir une API qui ne garde rien, cloisonner les données, passer à un fournisseur européen ou répartir les tâches entre plusieurs fournisseurs. On monte au niveau 2, voire au niveau 3, quand ces réglages ne suffisent plus.

C’est exactement le parcours du grossiste en luminaires : une exploration rapide au niveau 1, puis un renforcement au niveau 2, sans viser le niveau 3.

En montant, vous ne perdez rien de ce que vous avez appris. Le processus repensé, les consignes, les exemples, les contrôles : tout cela se transporte d’un niveau à l’autre. Et c’est cet apprentissage rapide, pas le modèle, qui vous différencie de vos concurrents.

Le socle de sécurité est présent à chaque marche. L’agilité est en bas de l’échelle, là où explorer coûte peu. La maîtrise renforcée est en haut, là où elle se justifie.

## Commencer maintenant

Notre diagnostic IA offert vous aide à repérer les processus à explorer en premier et le niveau de maîtrise adapté à chacun.

**[Lancer mon diagnostic IA](/diagnostic-ia/)**

### À retenir

- Ne pas y aller n’est pas une option. Y aller sans cadre non plus.
- Vos actifs stratégiques vont au niveau 3, ou restent à l’écart. Surveillez ceux qui naissent de l’assemblage de données.
- Pour le reste, le vrai risque est de ne pas inventer assez vite sa place dans la nouvelle économie.
- Le niveau 1 offre un socle de garanties comparable à vos outils bureautiques. Avec une règle d’usage et une formation, il réduit le shadow IA.
- Au niveau 2, votre intelligence est dans votre processus ; l’IA externe n’est qu’un consommable, facilement remplaçable.
- Explorez en bas de l’échelle sur un socle sûr, renforcez quand un processus le mérite, et gardez ce que vous avez appris.

### Sources

- [Utiliser l’IA générative dans les TPE et PME — CNIL](https://cnil.fr/fr/utiliser-lia-generative-dans-les-tpe-et-pme)
- [Recommandations de sécurité pour un système d’IA générative — ANSSI, 29 avril 2024](https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-un-systeme-dia-generative)
- [Le CEPD adopte des lignes directrices sur la pseudonymisation — Comité européen de la protection des données, 17 janvier 2025](https://www.edpb.europa.eu/news/edpb-adopts-pseudonymisation-guidelines-and-paves-the-way-to-improve-cooperation-with_fr)
- [CLOUD Act Creates New Framework for Cross-Border Data Access — Covington & Burling, 26 mars 2018](https://www.insideprivacy.com/cloud-computing/cloud-act-creates-new-framework-for-cross-border-data-access/)
- [OVHcloud Launches AI Endpoints to Simplify and Democratize Access to AI Models — OVHcloud, 29 avril 2025](https://corporate.ovhcloud.com/en/newsroom/news/ai-endpoints/)
- [Mistral Small 3.2 24B Instruct — catalogue OVHcloud AI Endpoints](https://www.ovhcloud.com/fr/public-cloud/ai-endpoints/catalog/mistral-small-3-2-24b-instruct-2506/)
- [Data Center GPU Prices — IntuitionLabs, 5 septembre 2026](https://intuitionlabs.ai/articles/data-center-gpu-prices)
- [Build Enterprise Agents, Workflows & Apps in Mistral Studio — Mistral AI, novembre 2026](https://mistral.ai/news/build-with-studio/)
- [Where do you store my data or my organization’s data? — Mistral AI](https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data)
- [Studio, déploiements — documentation Mistral AI](https://docs.mistral.ai/studio/deployments)
