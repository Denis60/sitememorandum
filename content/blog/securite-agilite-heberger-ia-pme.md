Début novembre, en Charente, les acteurs économiques du département étaient réunis pour une demi-journée consacrée à l’IA et à la sécurité économique. Le préfet l’a résumé en une phrase : « L’IA est là, qu’on le veuille ou pas. Maintenant, il faut savoir s’en servir, savoir se protéger, savoir en faire une ressource stratégique. » Il a ajouté que cette appropriation devait se faire « dans un cadre maîtrisé ».

Tout est dit. Rester à l’écart n’est pas une option. Y aller sans précaution non plus.

## Un exemple : un grossiste en luminaires

Un grossiste en luminaires veut répondre plus vite aux cahiers des charges techniques de ses clients. Il s’agit d’interpréter les besoins, de choisir chez ses fournisseurs les luminaires les plus adaptés, puis de préparer le devis.

Nous avons d’abord tenté la voie la plus « industrielle » : un mois à construire des automatisations complètes avec n8n, un outil d’automatisation qui peut être hébergé dans l’entreprise et qui appelle ponctuellement des IA externes, comme des consommables remplaçables.

C’était une erreur. Nous pensions le processus mécanique : retrouver les bonnes caractéristiques techniques. Il demande en fait beaucoup d’interprétation liée au contexte (une salle d’opération, par exemple), et des caractéristiques importantes ne figurent pas dans les catalogues. L’enjeu n’est pas d’automatiser, mais d’assister : organiser la coordination entre l’IA et l’expert.

Nous avons basculé sur une plateforme d’IA du marché, Claude, connectée à certains dossiers de l’entreprise. n8n n’est resté que pour orchestrer quelques accès : retrouver les tarifs négociés chez les fournisseurs, créer le devis dans le logiciel de gestion commerciale. La bascule a apporté de la fluidité, de la maîtrise et une meilleure coordination entre l’expert et la machine : ouvrir un dialogue, montrer les visuels, permettre de corriger.

La conception a pris quelques semaines. Elle a permis de tester plusieurs approches et de garder ce qui marche, de comprendre quelle taille de modèle il fallait pour une analyse pertinente, et de trouver la bonne répartition des rôles entre l’humain et l’IA. Cette phase agile a fait gagner des mois. Le dispositif fonctionne, et il continue de s’améliorer au quotidien en mémorisant de nouvelles consignes.

Revers de la réussite : l’entreprise dépend désormais fortement de cette plateforme en ligne. Une interruption de service d’une semaine la mettrait en danger. L’étape suivante est donc de sécuriser. Tout ou partie du processus peut revenir sur ses propres serveurs, avec n8n ou peut-être Mistral Studio (pas encore testé), tout en continuant d’appeler des modèles étrangers pour certaines tâches d’analyse. Si l’un d’eux devenait inaccessible, le remplacer serait rapide. Tout internaliser, modèle compris, n’est pas d’actualité.

La leçon : commencer par l’étape la plus sécurisée aurait coûté des mois, sans savoir encore ce qu’il fallait sécuriser. On explore d’abord. On protège ensuite ce qui le mérite.

![L’échelle de sécurité en trois marches : une question de tri (« Le mettriez-vous sur SharePoint ou Google Drive ? »), puis plateforme pro, processus chez soi avec l’IA chez un fournisseur, et tout chez soi, avec leurs ordres de grandeur de coût. Un processus démarre à gauche et monte autant que nécessaire en gardant ce qu’il a appris.](/blog/echelle-securite-ia-3-marches.png)

## Beaucoup d’entreprises attendent, par prudence

Sur le terrain, nous voyons beaucoup d’entreprises à l’arrêt. La raison invoquée est presque toujours la même : la sécurité des données. Leurs équipes, elles, avancent quand même, au besoin avec leurs propres outils d’IA.

Cette prudence mérite d’être regardée de près. Une entreprise qui détient un actif stratégique (un procédé, un savoir-faire rare, un fichier sensible) le sait. Elle ne le dépose pas sur SharePoint ni sur Google Drive. Elle ne le confiera donc pas non plus à une plateforme d’IA étrangère. Ce réflexe est sain.

Pour tout le reste, données personnelles comprises (la plupart des plateformes d’IA du marché permettent de respecter le RGPD, à partir de leurs offres professionnelles), le risque stratégique est ailleurs. Il est de ne pas inventer assez vite l’intelligence économique qui va avec ce nouveau carburant, importé comme le pétrole. Le danger n’est pas tant de mal protéger vos données d’aujourd’hui. Il est de ne pas trouver votre place dans la nouvelle économie.

Nous allons tous tâtonner. Ceux qui commencent tôt inventeront ce qui méritera, demain, d’être protégé.

## Un cadre tout de suite, pour avancer et pour se protéger

Cet article propose une démarche souple pour se transformer maintenant. Elle a un second avantage : donner tout de suite un cadre d’utilisation réduit le risque le plus répandu, le shadow IA (l’usage par les salariés d’outils d’IA personnels, hors de tout contrôle). Quand l’entreprise ne propose rien, ses équipes utilisent quand même l’IA, avec leurs comptes gratuits. Et leurs documents partent là où personne ne regarde.

## Une échelle de sécurité à trois niveaux

### Niveau 1 : une plateforme d’IA professionnelle, comme vos outils bureautiques

Claude, ChatGPT, Copilot, Gemini ou Mistral, dans leurs offres pour les entreprises. La protection est comparable à celle de SharePoint ou de Google Workspace, que vous utilisez déjà :

- un contrat de traitement des données conforme au RGPD ;
- le chiffrement des données, pendant leur transfert et quand elles sont stockées ;
- l’engagement que vos données ne servent pas à entraîner les modèles ;
- une connexion avec les comptes de l’entreprise et une gestion des droits d’accès ;
- selon les offres, des journaux d’activité et des règles de conservation.

Le démarrage et la première utilisation se font dans l’heure, pour un abonnement de quelques dizaines d’euros par utilisateur et par mois, résiliable rapidement.

Ces éditeurs sont souvent américains, donc soumis au Cloud Act (une loi de 2018 qui permet aux autorités des États-Unis d’exiger des données détenues par un fournisseur américain, [quel que soit leur lieu de stockage](https://www.insideprivacy.com/cloud-computing/cloud-act-creates-new-framework-for-cross-border-data-access/)). C’est exactement la situation de SharePoint et de Google. Si vous acceptez ce risque pour vos documents de travail, il est cohérent de l’accepter ici.

À ce niveau, tout vit sur la plateforme : les conversations, les documents, les consignes, la mémoire, la façon de travailler. Si elle s’arrête, tout s’arrête.

### Niveau 2 : l’intelligence de l’entreprise chez elle, l’IA comme consommable

Au niveau 2, le cœur change de place. L’intelligence de l’entreprise est dans son processus automatisé : les étapes, les règles, les contrôles, les données. C’est ce qui la différencie de ses concurrents, et c’est devenu hautement évolutif. Ce processus vous appartient et tourne hors des grandes plateformes.

Les modèles d’IA externes ne sont plus que des consommables. Le processus les appelle ponctuellement, par une API (une porte d’accès entre logiciels), pour des tâches précises, avec les seuls extraits utiles. Ils se remplacent en changeant un réglage. Et les données qu’ils reçoivent bénéficient des protections décrites au niveau 1.

**Où héberger le processus ?** Dans l’entreprise, avec un outil d’automatisation comme n8n, ou Mistral Studio installé sur vos serveurs. Sinon chez un hébergeur européen : OVHcloud en France, ou Mistral, qui [stocke par défaut les données dans l’Union européenne](https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data). Comptez quelques dizaines d’euros par mois pour un petit serveur.

**Quels modèles appeler ?** Trois options, combinables dans un même processus :

- **Les modèles américains** (Claude, GPT, Gemini), pour les tâches potentiellement complexes mais peu sensibles. Ce sont souvent les plus performants, avec la même réserve sur le Cloud Act qu’au niveau 1.
- **Les modèles européens**, pour les données sensibles. Mistral les propose directement. [OVHcloud AI Endpoints](https://corporate.ovhcloud.com/en/newsroom/news/ai-endpoints/) propose des modèles open source (dont les paramètres sont publics et réutilisables), parmi lesquels des modèles de Mistral, depuis son centre de données de Gravelines, dans le Nord. Le prix reste modeste : moins d’un euro par million de tokens (unités de texte, un mot ou un morceau de mot) pour un modèle comme [Mistral Small 3.2](https://www.ovhcloud.com/fr/public-cloud/ai-endpoints/catalog/mistral-small-3-2-24b-instruct-2506/). En contrepartie, ces modèles ont souvent un temps de retard sur les meilleurs.
- **Un petit modèle sur un PC de l’entreprise**, pour les tâches sensibles, ponctuelles et simples. Il est aujourd’hui assez simple d’installer un modèle sur la carte graphique d’un PC. Dans mon activité, je m’en sers pour anonymiser à la source les documents que me remettent mes clients, parfois sans les avoir anonymisés. Cela fonctionne même pour des vidéos.

### Niveau 3 : tout chez vous

Le processus et le modèle tournent sur vos propres machines. Aucune donnée ne sort. Un modèle modeste tient sur un PC équipé d’une carte graphique de 24 Go, pour environ 2 000 à 4 000 €. Il suffit pour résumer, classer ou extraire des informations. Un gros modèle demande un serveur à huit cartes graphiques spécialisées, de l’ordre de [250 000 à 400 000 dollars](https://intuitionlabs.ai/articles/data-center-gpu-prices), plus une équipe pour l’exploiter. Mistral Studio peut aussi s’installer entièrement sur site, modèles compris, pour les grandes entreprises ([options de déploiement](https://docs.mistral.ai/studio/deployments)).

Toute la sécurité repose alors sur vous : mises à jour, accès, sauvegardes.

Plus on monte, plus on protège. Mais plus on monte, plus c’est cher, plus il faut de compétences, et moins on va vite.

## Une approche dynamique : chaque processus trouve sa marche

La marche de l’échelle ne se choisit pas une fois pour toutes, pour toute l’entreprise. Elle se choisit processus par processus, et elle évolue.

- **Ce qui est déjà stratégique va directement au niveau 3.** Inutile de l’exposer pour apprendre.
- **L’essentiel des processus peut démarrer au niveau 1.** Dans les entreprises que nous accompagnons, c’est de l’ordre de neuf sur dix. On y découvre très vite un processus repensé, dopé à l’IA. Beaucoup y resteront, en s’améliorant chaque jour avec les idées de ceux qui les pilotent.
- **Les plus sensibles, ou ceux qui le deviennent, remontent la pente.** Au niveau 2, en choisissant pour chaque tâche le modèle adapté à la sensibilité des données, ou jusqu’au niveau 3 si besoin. Deux signaux doivent alerter : une dépendance qui s’installe envers un fournisseur, ou des données qui deviennent stratégiques.

C’est exactement le parcours du grossiste en luminaires : une exploration rapide au niveau 1, puis une sécurisation au niveau 2, sans viser le niveau 3.

En montant, vous ne perdez rien de ce que vous avez appris. Le processus repensé, les consignes, les exemples, les contrôles : tout cela se transporte d’un niveau à l’autre. Et c’est cet apprentissage rapide, pas le modèle, qui vous différencie de vos concurrents.

L’agilité est en bas de l’échelle, là où explorer coûte peu. La sécurité renforcée est en haut, là où elle se justifie.

## Commencer maintenant

Notre diagnostic IA offert vous aide à repérer les processus à explorer en premier et le niveau de sécurité adapté à chacun.

**[Lancer mon diagnostic IA](/diagnostic-ia/)**

### À retenir

- Ne pas y aller n’est pas une option. Y aller sans cadre non plus.
- Vos actifs stratégiques, vous les connaissez : ils vont au niveau 3, ou restent à l’écart.
- Pour le reste, le vrai risque est de ne pas inventer assez vite sa place dans la nouvelle économie.
- Le niveau 1 protège autant que vos outils bureautiques, et il coupe court au shadow IA.
- Au niveau 2, votre intelligence est dans votre processus ; l’IA externe n’est qu’un consommable.
- Explorez en bas de l’échelle, montez quand un processus le mérite, et gardez ce que vous avez appris.

### Sources

- [CLOUD Act Creates New Framework for Cross-Border Data Access — Covington & Burling, 26 mars 2018](https://www.insideprivacy.com/cloud-computing/cloud-act-creates-new-framework-for-cross-border-data-access/)
- [OVHcloud Launches AI Endpoints to Simplify and Democratize Access to AI Models — OVHcloud, 29 avril 2025](https://corporate.ovhcloud.com/en/newsroom/news/ai-endpoints/)
- [Mistral Small 3.2 24B Instruct — catalogue OVHcloud AI Endpoints](https://www.ovhcloud.com/fr/public-cloud/ai-endpoints/catalog/mistral-small-3-2-24b-instruct-2506/)
- [Data Center GPU Prices — IntuitionLabs, 5 septembre 2026](https://intuitionlabs.ai/articles/data-center-gpu-prices)
- [Build Enterprise Agents, Workflows & Apps in Mistral Studio — Mistral AI, novembre 2026](https://mistral.ai/news/build-with-studio/)
- [Where do you store my data or my organization’s data? — Mistral AI](https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data)
- [Studio, déploiements — documentation Mistral AI](https://docs.mistral.ai/studio/deployments)
