# Site memorandum-ai.com

Site statique Next.js (export dans `out/`), hébergé sur Netlify, mis à jour par n8n.

## Développer

```bash
npm install
npm run dev          # http://localhost:3000
npm run check:content
npm run build        # produit out/
```

## Où vivent les contenus

Tous les contenus qui changent sont dans `content/`. Modifier un de ces fichiers sur GitHub suffit : Netlify reconstruit et publie le site en une à deux minutes.

| Fichier | Contenu | Mise à jour |
| --- | --- | --- |
| `content/veille-ia.json` | Veille IA quotidienne : jours, sujets, idées fortes, sources | Automatique, chaque matin (n8n) |
| `content/signaux-faibles.json` | Rapports mensuels par secteur | Automatique, le 4 du mois (n8n) |
| `content/references.json` | Références clients | Après validation de Denis ; `"enLigne": true/false` active ou désactive une fiche |
| `content/blog.json` | Articles du blog | Après validation de Denis (`"statut": "publie"`) |

Le script `scripts/check-content.mjs` tourne avant chaque build. Il bloque la mise en ligne si un fichier est mal formé, si une source n'a pas de lien https, ou si un contenu interdit apparaît (adresse Trello, bloc « Mode d'emploi vocal », noms de clients confidentiels).

### Format d'un jour de veille

```json
{ "date": "2026-11-04", "label": "Mercredi 4 novembre 2026", "topics": [
  { "t": "Titre", "m": 3, "ideas": ["Idée forte 1", "Idée forte 2", "Idée forte 3"],
    "src": "The Decoder", "d": "3 novembre 2026", "url": "https://…" } ] }
```

`m` renvoie à l'un des quatre messages : 1 S'adapter vite · 2 Une opportunité, pas un boulet · 3 Un sujet de management · 4 Faire est facile, avoir des idées est difficile.

## Workflows n8n à brancher

1. **Veille IA → site** (chaque jour, après la production de la veille) : lire le Google Doc « Veille IA – AAAA-MM-JJ », ignorer le bloc « Mode d'emploi vocal », extraire chaque sujet (titre, idées fortes, message lié, source), ajouter le jour en tête de `content/veille-ia.json` en gardant les 14 derniers jours, puis commit sur `main` via l'API GitHub.
2. **Signaux faibles → site** (le 4 de chaque mois) : convertir le rapport du mois au format de `content/signaux-faibles.json` et remplacer le secteur concerné. Le secteur Uptevia est publié sous le nom « Services aux émetteurs / titres », sans citer Uptevia.
3. **Diagnostic** : le formulaire appelle directement le service Diag IA (`POST {DIAG_API_URL}/v1/public/demandes`, voir `Denis60/diag-ia`). Variables Netlify : `NEXT_PUBLIC_DIAG_API_URL` (par défaut `https://diag-ia-backend.onrender.com`) et `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (clé de site Cloudflare Turnstile, publique). Aucun secret dans le site. Le backend doit autoriser l'origine du site dans `CORS_ALLOW_ORIGINS`.
4. **Blog et références** : case « Publier sur le site » dans la base Airtable CRM → n8n met à jour `content/blog.json` ou `content/references.json`.

## Mise en ligne (Netlify + GitHub)

1. Créer le dépôt GitHub et y pousser ce dossier.
2. Netlify › Add new site › Import from Git › choisir le dépôt. Les réglages sont lus dans `netlify.toml`.
3. Netlify › Domain management › ajouter `memorandum-ai.com` et `www.memorandum-ai.com`, puis chez le registraire du domaine : enregistrement CNAME `www` vers l'adresse Netlify du site, et enregistrement A de la racine vers l'adresse indiquée par Netlify. Le certificat HTTPS est automatique.
4. Archiver l'ancien site du concours à une adresse d'archive avant la bascule DNS.

## Reste à compléter avant l'ouverture

- Mentions légales : forme juridique, adresse, SIRET, adresse de Netlify, durée de conservation des données.
- Photo de Denis (page À propos).
- Premiers articles du blog.
- Fiches CID et Mon alliée digitale ; accord Aubert & Duval (fiches à `"enLigne": false` en attendant).
- Validation des textes finaux par Safran, Eklalight et Hygie31.
