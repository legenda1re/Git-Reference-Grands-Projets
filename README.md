# Git Reference — Grands Projets

> Guide de référence interactif Git pour développeurs experts sur projets de grande envergure.
> Application web autonome — zéro dépendance — 100% HTML/CSS/JS natif.

![Version](https://img.shields.io/badge/Version-1.0.0-00FF94?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-25.10-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

---

## Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation et Utilisation](#installation-et-utilisation)
- [Sections couvertes](#sections-couvertes)
- [Conventions Git](#conventions-git)
- [Workflow recommandé](#workflow-recommandé)
- [Contribution](#contribution)
- [Bonnes pratiques](#bonnes-pratiques)
- [Compatibilité](#compatibilité)
- [Licence](#licence)

---

## Aperçu

**Git Reference** est une application web mono-fichier pensée pour les équipes travaillant
sur des projets complexes et multi-contributeurs. Elle centralise les commandes Git
essentielles dans une interface claire, recherchable et utilisable sans connexion internet.
```
git-reference/
└── git-guide.html   ← Application complète (HTML + CSS + JS en un seul fichier)
```

---

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| **Recherche en temps réel** | Filtre instantané sur toutes les commandes et descriptions |
| **Copie en un clic** | Chaque commande copiable directement dans le presse-papiers |
| **Navigation par section** | Sidebar avec 10 catégories colorées et compteur de commandes |
| **Aliases .zshrc** | Raccourcis Git affichés en permanence dans la sidebar |
| **Zéro dépendance** | Aucune librairie externe, fonctionne hors ligne |
| **Design terminal dark** | Interface professionnelle inspirée des IDE modernes |
| **Mono-fichier** | Un seul fichier `.html` à distribuer ou ouvrir |

---

## Structure du projet
```
git-reference/
│
├── git-guide.html          # Application principale (tout-en-un)
├── README.md               # Documentation du projet
│
└── (optionnel — extension future)
    ├── assets/
    │   ├── fonts/          # Polices locales si offline total requis
    │   └── icons/          # Icônes personnalisées
    └── scripts/
        └── build.js        # Script de build si modularisation future
```

> L'application est intentionnellement mono-fichier. Toute la logique
> (HTML, CSS, JS, données) est auto-contenue dans `git-guide.html`.

---

## Installation et Utilisation

### Prérequis

- Navigateur moderne (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Aucune installation supplémentaire requise

### Option 1 — Ouverture directe (recommandée)
```bash
git clone https://github.com/votre-org/git-reference.git
cd git-reference

xdg-open git-guide.html     # Linux / Ubuntu
open git-guide.html          # macOS
start git-guide.html         # Windows
```

### Option 2 — Serveur local (développement)
```bash
# Python 3 inclus sur Ubuntu 25.10
python3 -m http.server 8080
xdg-open http://localhost:8080/git-guide.html
```

### Option 3 — Intégration dans un projet existant
```bash
cp git-guide.html /chemin/vers/votre-projet/docs/
```

---

## Sections couvertes

| # | Section | Commandes | Description |
|---|---|---|---|
| 1 | **Initialisation** | 6 | Clone, init, configuration identité |
| 2 | **Branches** | 9 | Création, navigation, suppression, renommage |
| 3 | **Commits** | 10 | Status, diff, add, commit, amend, patch |
| 4 | **Synchronisation** | 8 | Fetch, pull, push, remotes, upstream |
| 5 | **Merge & Rebase** | 9 | Merge, rebase interactif, cherry-pick |
| 6 | **Stash** | 8 | Sauvegarde temporaire, liste, restauration |
| 7 | **Annuler** | 8 | Restore, reset, revert, reflog |
| 8 | **Debug & Inspection** | 11 | Log graphique, blame, grep, bisect |
| 9 | **Tags & Releases** | 7 | Création, liste, push, suppression |
| 10 | **Conventions** | 11 | Commit messages, nommage branches |

**Total : 87 commandes et conventions référencées.**

---

## Conventions Git

### Format des messages de commit — Conventional Commits
```
<type>(<scope>): <description courte à l'impératif>

[corps — expliquer le POURQUOI, pas le QUOI]

[footer — refs #issue, BREAKING CHANGE, Co-authored-by...]
```

| Type | Usage |
|---|---|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `refactor` | Refactoring sans impact fonctionnel |
| `docs` | Documentation uniquement |
| `chore` | Maintenance, build, configuration |
| `test` | Ajout ou correction de tests |
| `perf` | Amélioration des performances |
| `ci` | Configuration CI/CD |

### Exemples
```bash
git commit -m "feat(auth): ajout login OAuth2 Google"
git commit -m "fix(cart): correction calcul TVA avec remise"
git commit -m "refactor(api): extraction service HTTP en classe dédiée"
```

### Nommage des branches
```
feature/nom-de-la-feature
bugfix/description-du-bug
hotfix/correction-critique
release/v1.2.0
```

---

## Workflow recommandé
```
main (production — branche protégée)
 └── develop (intégration continue)
      ├── feature/auth-module
      ├── feature/payment-api
      ├── bugfix/cart-calculation
      └── release/v2.0.0
           └── hotfix/critical-fix   ← urgence production uniquement
```

### Cycle de vie d'une feature
```bash
# 1. Partir d'un develop à jour
git switch develop
git pull --rebase origin develop

# 2. Créer la branche
git switch -c feature/ma-feature

# 3. Commits atomiques
git add -p fichier.php
git commit -m "feat(scope): description précise"

# 4. Rester synchronisé
git fetch origin
git rebase origin/develop

# 5. Pousser et ouvrir la Pull Request
git push -u origin feature/ma-feature

# 6. Après merge — nettoyer
git switch develop && git pull --rebase origin develop
git branch -d feature/ma-feature
git push origin --delete feature/ma-feature
```

### Protection des branches

| Branche | Push direct | Force push | Merge |
|---|---|---|---|
| `main` | Interdit | Interdit | Via PR obligatoire |
| `develop` | Interdit | Interdit | Via PR obligatoire |
| `feature/*` | Autorisé | force-with-lease | Recommandé |
| `hotfix/*` | Autorisé | Interdit | Via PR obligatoire |

---

## Contribution

1. **Forker** le dépôt
2. Créer une branche : `git switch -c feature/ma-contribution`
3. Ajouter dans le tableau `DATA` de `git-guide.html` :
```javascript
   { cmd: "git votre-commande --option", desc: "Description concise (max 60 car.)" }
```
4. Commiter : `git commit -m "feat: ajout commande X section Y"`
5. Ouvrir une **Pull Request** documentée

### Critères d'acceptation

- Commande utile en contexte d'équipe sur grand projet
- Description claire, max 60 caractères
- Commandes destructrices signalées explicitement avec ⚠️
- Aucune dépendance externe ajoutée — le fichier reste auto-contenu

---

## Bonnes pratiques

**Commits**
- Un commit = un seul changement logique et cohérent
- Message à l'impératif : "ajoute X" et non "ajout de X"
- Committer souvent et en petites unités cohérentes

**Branches**
- Ne jamais travailler directement sur `main` ou `develop`
- Supprimer les branches mergées immédiatement
- Nommage descriptif et consistant

**Synchronisation**
- Préférer `git pull --rebase` à `git pull` pour éviter les merge commits parasites
- Utiliser `--force-with-lease` et non `--force` pour protéger le travail de l'équipe
- Fetcher régulièrement pour rester à jour

**Sécurité**
- Ne jamais commiter de secrets, tokens ou mots de passe
- Configurer `.gitignore` dès l'initialisation
- Activer la protection des branches sur GitHub/GitLab
- `git reflog` — filet de sécurité ultime, tout est récupérable

---

## Compatibilité

| Environnement | Statut |
|---|---|
| Ubuntu 25.10 · Python 3.13 | ✅ Testé et validé |
| Ubuntu 22.04 / 24.04 | ✅ Compatible |
| macOS 13+ | ✅ Compatible |
| Windows 10/11 (WSL2) | ✅ Compatible |
| Chrome / Edge 90+ | ✅ Recommandé |
| Firefox 88+ | ✅ Compatible |
| Safari 14+ | ✅ Compatible |

---

## Licence

Distribué sous licence **MIT** — Copyright (c) 2026 Git Reference Project.

---

*Fait avec soin pour les développeurs qui aiment leur terminal propre.*  
**Happy Coding — Happy Committing 🚀**
