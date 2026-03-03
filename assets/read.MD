# 📘 Git Reference — Guide Expert pour Grands Projets

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-00FF94?style=for-the-badge&logo=git&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

**Une référence Git complète, interactive et mono-fichier — conçue pour les développeurs qui travaillent sur des projets de grande envergure.**

[Démo live](#) · [Signaler un bug](../../issues) · [Proposer une feature](../../issues)

</div>

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Structure du projet](#-structure-du-projet)
- [Installation & Utilisation](#-installation--utilisation)
- [Sections couvertes](#-sections-couvertes)
- [Architecture technique](#-architecture-technique)
- [Conventions Git utilisées dans ce projet](#-conventions-git-utilisées-dans-ce-projet)
- [Contribuer](#-contribuer)
- [Feuille de route](#-feuille-de-route)
- [Licence](#-licence)

---

## 🔭 Aperçu

**Git Reference** est une application web statique, mono-fichier, pensée pour les développeurs expérimentés qui souhaitent disposer d'une référence Git rapide, complète et utilisable hors ligne. Elle couvre l'intégralité du workflow Git sur des projets en équipe : de l'initialisation à la gestion de releases, en passant par le debug avancé et les conventions de nommage.

> **Philosophie du projet :** Zéro dépendance, zéro framework, zéro connexion requise. Un seul fichier `HTML` suffit.

---

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| 🔍 **Recherche temps réel** | Filtrage instantané sur toutes les commandes et descriptions |
| 📋 **Copie en un clic** | Chaque commande est copiable dans le presse-papier |
| 🗂️ **Navigation par sections** | Sidebar avec 10 catégories colorées et compteurs |
| ⌨️ **Aliases `.zshrc`** | Les raccourcis les plus utiles affichés en permanence |
| 🌑 **Thème dark terminal** | UI inspirée des vrais terminaux de développement |
| 📦 **Mono-fichier** | HTML + CSS + JS dans un seul fichier, zéro dépendance |
| 🌐 **Hors ligne** | Fonctionne sans internet après chargement des polices |
| ♿ **Accessible** | Contrastes respectés, navigation clavier supportée |

---

## 📁 Structure du projet

```
git-reference/
│
├── git-guide.html          # Application complète (mono-fichier)
├── README.md               # Documentation du projet
├── LICENSE                 # Licence MIT
│
└── .github/
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    └── PULL_REQUEST_TEMPLATE.md
```

> Le projet est intentionnellement minimal. Toute la logique applicative (HTML, CSS, JS) réside dans `git-guide.html`.

---

## 🚀 Installation & Utilisation

### Utilisation directe (recommandée)

Aucune installation requise. Il suffit d'ouvrir le fichier dans votre navigateur :

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-username/git-reference.git

# 2. Ouvrir l'application
cd git-reference
open git-guide.html          # macOS
xdg-open git-guide.html      # Linux / Ubuntu
start git-guide.html         # Windows
```

### Serveur local (optionnel)

Si vous souhaitez servir le fichier via HTTP :

```bash
# Avec Python (Ubuntu / macOS)
python3 -m http.server 8080

# Avec Node.js
npx serve .

# Accéder via le navigateur
http://localhost:8080/git-guide.html
```

### Déploiement statique

Le fichier peut être déployé sur n'importe quelle plateforme d'hébergement statique :

```bash
# GitHub Pages
git add git-guide.html
git commit -m "feat: déploiement initial"
git push origin main
# → Activer GitHub Pages dans Settings → Pages → root

# Netlify (drag & drop ou CLI)
netlify deploy --prod --dir=.

# Vercel
vercel --prod
```

---

## 📚 Sections couvertes

Le guide est organisé en **10 sections** couvrant l'ensemble du workflow Git professionnel :

| # | Section | Nb. commandes | Cas d'usage |
|---|---|---|---|
| 1 | ⬡ **Initialisation** | 6 | Setup projet, configuration identité |
| 2 | ⑂ **Branches** | 9 | Création, suppression, renommage |
| 3 | ◈ **Commits** | 10 | Staging, commits atomiques, patch |
| 4 | ⟳ **Synchronisation** | 8 | Fetch, pull, push, remotes |
| 5 | ⋈ **Merge & Rebase** | 9 | Intégration, rebase interactif, cherry-pick |
| 6 | ⊞ **Stash** | 8 | Sauvegarde temporaire de modifications |
| 7 | ↩ **Annuler** | 8 | Reset, revert, restore, reflog |
| 8 | ⌖ **Debug & Inspection** | 11 | Blame, bisect, log avancé, grep |
| 9 | ◇ **Tags & Releases** | 7 | Versionning sémantique, releases |
| 10 | ≡ **Conventions** | 11 | Commit messages, nommage de branches |

**Total : 87 commandes et références référencées.**

---

## 🏗️ Architecture technique

### Stack

```
┌──────────────────────────────────────────────┐
│               git-guide.html                 │
│                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────────┐  │
│  │  HTML5  │  │  CSS3   │  │ Vanilla JS  │  │
│  │Structure│  │ Styling │  │   Logique   │  │
│  └─────────┘  └─────────┘  └─────────────┘  │
│                                              │
│  Font: JetBrains Mono + Syne (Google Fonts)  │
└──────────────────────────────────────────────┘
```

### Choix techniques

**Pourquoi un mono-fichier ?**
- Portabilité maximale : un seul fichier à partager, copier, déployer
- Aucune dépendance externe à gérer
- Chargement instantané, pas de build step

**Pourquoi Vanilla JS ?**
- Zéro overhead de framework pour une application de cette taille
- Compatibilité navigateur maximale (Chrome, Firefox, Safari, Edge)
- Maintenabilité sans connaissance préalable d'un framework

**Pourquoi JetBrains Mono ?**
- Police monospace conçue spécifiquement pour les développeurs
- Lisibilité optimale du code et des commandes terminal
- Ligatures typographiques pour une meilleure lecture

### Performances

| Métrique | Valeur |
|---|---|
| Poids du fichier | ~18 Ko (hors cache fonts) |
| Temps de chargement local | < 50 ms |
| Dépendances runtime | 0 |
| Requêtes réseau | 1 (Google Fonts, optionnel) |

---

## 🌿 Conventions Git utilisées dans ce projet

Ce projet suit rigoureusement les conventions qu'il documente.

### Nommage des branches

```
main              ← production, toujours stable
develop           ← intégration continue
feature/<nom>     ← nouvelles fonctionnalités
bugfix/<desc>     ← corrections de bugs
hotfix/<desc>     ← corrections urgentes en production
release/<version> ← préparation d'une release
```

### Format des messages de commit

Le projet suit la spécification [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>(<scope>): <description courte en impératif>

[corps optionnel — expliquer le POURQUOI, pas le COMMENT]

[footer — référence issue, breaking change, co-auteur]
```

**Types acceptés :**

| Type | Usage |
|---|---|
| `feat` | Ajout d'une nouvelle fonctionnalité |
| `fix` | Correction d'un bug |
| `refactor` | Réécriture sans changement de comportement |
| `docs` | Modification de la documentation uniquement |
| `style` | Formatage, espaces, points-virgules |
| `chore` | Maintenance, mise à jour dépendances |
| `perf` | Amélioration des performances |
| `test` | Ajout ou modification de tests |

**Exemples concrets :**

```bash
git commit -m "feat(search): ajout du filtrage temps réel sur toutes les sections"
git commit -m "fix(copy): correction du clipboard sur Firefox 118+"
git commit -m "docs: mise à jour section Installation avec instructions Ubuntu"
git commit -m "style(sidebar): ajustement padding et espacement des nav-buttons"
git commit -m "perf: remplacement innerHTML par DocumentFragment pour le rendu"
```

### Workflow de contribution (Git Flow simplifié)

```
feature/ma-feature ──→ develop ──→ release/vX.Y.Z ──→ main
         │                │                                │
     Pull Request      Intégration                    Tag vX.Y.Z
      + Code Review    continue                       + Changelog
```

---

## 🤝 Contribuer

Les contributions sont les bienvenues. Voici le processus complet pour participer au projet :

### 1. Fork & Clone

```bash
git clone https://github.com/votre-username/git-reference.git
cd git-reference
git remote add upstream https://github.com/original/git-reference.git
```

### 2. Créer une branche depuis `develop`

```bash
git switch develop
git pull --rebase upstream develop
git switch -c feature/ajout-commandes-worktree
```

### 3. Développer & Commiter atomiquement

```bash
# Modifier git-guide.html
git add git-guide.html
git commit -m "feat(data): ajout section git worktree (7 commandes)"

# Une idée supplémentaire ? Nouveau commit.
git commit -m "style(ui): icône dédiée pour la section worktree"
```

### 4. Synchroniser avec l'upstream avant de pousser

```bash
git fetch upstream
git rebase upstream/develop
# Résoudre les conflits si nécessaire, puis :
git rebase --continue
```

### 5. Pousser et ouvrir une Pull Request

```bash
git push origin feature/ajout-commandes-worktree
# Ouvrir la PR sur GitHub vers la branche → develop
```

### Guidelines de contribution

- ✅ Une Pull Request = un sujet précis et délimité
- ✅ Commits atomiques avec messages au format Conventional Commits
- ✅ Tester dans Chrome, Firefox et Safari avant de soumettre
- ✅ Mettre à jour ce README si la contribution l'exige
- ✅ Décrire clairement le problème résolu dans la PR
- ❌ Ne jamais commiter directement sur `main` ou `develop`
- ❌ Ne pas introduire de dépendances npm ou CDN tiers
- ❌ Éviter les commits de type "fix", "wip", "update" sans contexte

---

## 🗺️ Feuille de route

### v1.0.0 — Actuelle ✅
- [x] Structure HTML/CSS/JS mono-fichier
- [x] Recherche temps réel multi-sections
- [x] Copie dans le presse-papier avec feedback visuel
- [x] 10 sections — 87 commandes référencées
- [x] Aliases `.zshrc` intégrés dans la sidebar
- [x] Thème dark terminal avec polices monospace

### v1.1.0 — En cours 🚧
- [ ] Mode clair (light theme) avec toggle
- [ ] Raccourcis clavier (`/` → focus recherche, `Esc` → clear, `Tab` → navigation sections)
- [ ] Persistance de la section active (`localStorage`)

### v1.2.0 — Planifiée 📅
- [ ] Section `git worktree`
- [ ] Section `git submodules`
- [ ] Section hooks & automatisation
- [ ] Export PDF du guide complet

### v2.0.0 — Vision long terme 🔭
- [ ] PWA (Progressive Web App) — usage 100% offline
- [ ] Internationalisation (EN, ES, PT)
- [ ] Version CLI `git-ref` installable via `npm -g`
- [ ] Mode édition — ajouter ses propres commandes custom

---

## 📄 Licence

Distribué sous licence **MIT**. Voir le fichier [`LICENSE`](./LICENSE) pour plus d'informations.

```
MIT License — Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.
```

---

<div align="center">

Fait avec ❤️ par un développeur, pour les développeurs.

Si ce projet vous est utile, pensez à lui laisser une ⭐

**[⬆ Retour en haut](#-git-reference--guide-expert-pour-grands-projets)**

</div>