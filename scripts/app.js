/**
 * app.js — Git Reference
 * Données, rendu, recherche, copie + système de thèmes.
 */

/* ══════════════════════════════════════════════════════
   THÈMES — 11 palettes (8 dark + 3 claires/mid-tone)
   Chaque thème définit ses couleurs bg/accent/gradient
   pour alimenter les swatches et le logo dynamique.
══════════════════════════════════════════════════════ */
const THEMES = [
  {
    id:    "midnight",
    name:  "Midnight",
    bg:    "#080B10",
    from:  "#00FF94",
    to:    "#00C2FF",
  },
  {
    id:    "aurora",
    name:  "Aurora",
    bg:    "#09060F",
    from:  "#C084FC",
    to:    "#818CF8",
  },
  {
    id:    "forest",
    name:  "Forest",
    bg:    "#050F08",
    from:  "#4ADE80",
    to:    "#34D399",
  },
  {
    id:    "ocean",
    name:  "Ocean",
    bg:    "#040C14",
    from:  "#22D3EE",
    to:    "#0EA5E9",
  },
  {
    id:    "ember",
    name:  "Ember",
    bg:    "#0F0805",
    from:  "#FB923C",
    to:    "#FBBF24",
  },
  {
    id:    "rose",
    name:  "Rose",
    bg:    "#0F0508",
    from:  "#F472B6",
    to:    "#E879F9",
  },
  {
    id:    "onyx",
    name:  "Onyx",
    bg:    "#07080A",
    from:  "#94A3B8",
    to:    "#64748B",
  },
  {
    id:    "cosmos",
    name:  "Cosmos",
    bg:    "#06050F",
    from:  "#6366F1",
    to:    "#4F46E5",
  },
  // ── Thèmes clairs / mid-tone ───────────────────────
  {
    id:    "chalk",
    name:  "Chalk",
    bg:    "#F2F5F9",
    from:  "#0057FF",
    to:    "#7C3AED",
  },
  {
    id:    "nordic",
    name:  "Nordic",
    bg:    "#2E3440",
    from:  "#88C0D0",
    to:    "#5E81AC",
  },
  {
    id:    "parchment",
    name:  "Parchment",
    bg:    "#FDF6E3",
    from:  "#2096A0",
    to:    "#2E6EA6",
  },
];

/* ══════════════════════════════════════════════════════
   DONNÉES GIT
══════════════════════════════════════════════════════ */
const DATA = [
  {
    id: "init", icon: "⬡", label: "Initialisation", color: "#00FF94",
    commands: [
      { cmd: "git clone https://github.com/org/projet.git", desc: "Cloner un dépôt distant" },
      { cmd: "git init", desc: "Initialiser un nouveau dépôt local" },
      { cmd: 'git config user.name "Ton Nom"', desc: "Configurer le nom utilisateur" },
      { cmd: 'git config user.email "ton@email.com"', desc: "Configurer l'email" },
      { cmd: "git config --list", desc: "Voir toute la configuration" },
      { cmd: "git config --global core.editor nano", desc: "Changer l'éditeur par défaut" },
      
    ]
  },
  {
    id: "branches", icon: "⑂", label: "Branches", color: "#FFB800",
    commands: [
      { cmd: "git branch -a", desc: "Lister toutes les branches (locales + distantes)" },
      { cmd: "git switch -c feature/ma-feature", desc: "Créer et basculer sur une nouvelle branche" },
      { cmd: "git switch main", desc: "Changer de branche" },
      { cmd: "git switch -", desc: "Revenir à la branche précédente" },
      { cmd: "git branch -d feature/ma-feature", desc: "Supprimer une branche locale (safe)" },
      { cmd: "git branch -D feature/ma-feature", desc: "Forcer la suppression locale" },
      { cmd: "git push origin --delete feature/ma-feature", desc: "Supprimer une branche distante" },
      { cmd: "git branch -m ancien-nom nouveau-nom", desc: "Renommer une branche" },
      { cmd: "git push -u origin feature/ma-feature", desc: "Pousser et tracker la branche remote" },
    ]
  },
  {
    id: "commits", icon: "◈", label: "Commits", color: "#00C2FF",
    commands: [
      { cmd: "git status", desc: "Voir les fichiers modifiés" },
      { cmd: "git diff", desc: "Différences non indexées" },
      { cmd: "git diff --staged", desc: "Différences indexées (après git add)" },
      { cmd: "git add fichier.php", desc: "Indexer un fichier spécifique" },
      { cmd: "git add src/", desc: "Indexer tout un dossier" },
      { cmd: "git add .", desc: "Indexer tous les fichiers modifiés" },
      { cmd: "git add -p fichier.php", desc: "Indexer ligne par ligne (patch interactif)" },
      { cmd: 'git commit -m "feat: ajout du module"', desc: "Commiter avec un message" },
      { cmd: 'git commit --amend -m "message corrigé"', desc: "Modifier le dernier commit (avant push)" },
      { cmd: "git commit --no-verify", desc: "Commiter en passant les hooks" },
    ]
  },
  {
    id: "sync", icon: "⟳", label: "Synchronisation", color: "#FF6B6B",
    commands: [
      { cmd: "git fetch origin", desc: "Récupérer les changements sans merger" },
      { cmd: "git pull origin main", desc: "Récupérer et merger depuis main" },
      { cmd: "git pull --rebase origin main", desc: "Pull avec rebase (recommandé en équipe)" },
      { cmd: "git push origin feature/ma-feature", desc: "Pousser ses commits sur le remote" },
      { cmd: "git push --force-with-lease origin feature/X", desc: "⚠️ Forcer le push (sa branche uniquement)" },
      { cmd: "git remote -v", desc: "Voir les remotes configurés" },
      { cmd: "git remote add upstream https://github.com/org/repo.git", desc: "Ajouter un remote upstream" },
      { cmd: "git fetch upstream && git merge upstream/main", desc: "Sync avec l'upstream (fork)" },
    ]
  },
  {
    id: "merge", icon: "⋈", label: "Merge & Rebase", color: "#B06EFF",
    commands: [
      { cmd: "git merge feature/ma-feature", desc: "Merger une branche dans la courante" },
      { cmd: "git merge --no-ff feature/ma-feature", desc: "Merger sans fast-forward" },
      { cmd: "git merge --abort", desc: "Annuler un merge en cours" },
      { cmd: "git rebase main", desc: "Rebaser la branche courante sur main" },
      { cmd: "git rebase -i HEAD~5", desc: "Rebase interactif (réorganiser 5 commits)" },
      { cmd: "git rebase --abort", desc: "Annuler un rebase en cours" },
      { cmd: "git rebase --continue", desc: "Continuer après résolution de conflit" },
      { cmd: "git cherry-pick abc1234", desc: "Copier un commit précis sur la branche courante" },
      { cmd: "git cherry-pick abc1234..def5678", desc: "Cherry-pick d'une plage de commits" },
    ]
  },
  {
    id: "stash", icon: "⊞", label: "Stash", color: "#FF9F43",
    commands: [
      { cmd: "git stash", desc: "Sauvegarder les modifs en cours" },
      { cmd: 'git stash push -m "WIP: module paiement"', desc: "Stash avec un nom explicite" },
      { cmd: "git stash list", desc: "Lister tous les stashs" },
      { cmd: "git stash pop", desc: "Récupérer et supprimer le dernier stash" },
      { cmd: "git stash apply stash@{2}", desc: "Récupérer un stash précis (sans le supprimer)" },
      { cmd: "git stash drop stash@{0}", desc: "Supprimer un stash" },
      { cmd: "git stash clear", desc: "Vider tous les stashs" },
      { cmd: "git stash show -p", desc: "Voir le contenu du dernier stash" },
    ]
  },
  {
    id: "undo", icon: "↩", label: "Annuler", color: "#FD79A8",
    commands: [
      { cmd: "git restore fichier.php", desc: "Annuler les modifs d'un fichier (non stagé)" },
      { cmd: "git restore --staged fichier.php", desc: "Désindexer un fichier" },
      { cmd: "git reset --soft HEAD~1", desc: "Annuler dernier commit (garde les modifs)" },
      { cmd: "git reset --mixed HEAD~1", desc: "Annuler commit + désindexer (garde fichiers)" },
      { cmd: "git reset --hard HEAD~1", desc: "⚠️ Annuler commit + efface toutes les modifs" },
      { cmd: "git revert abc1234", desc: "Annuler un commit publié (crée un nouveau commit)" },
      { cmd: "git checkout autre-branche -- fichier.php", desc: "Récupérer un fichier d'une autre branche" },
      { cmd: "git reflog", desc: "Voir tout l'historique (même après reset)" },
    ]
  },
  {
    id: "debug", icon: "⌖", label: "Debug & Inspection", color: "#55EFC4",
    commands: [
      { cmd: "git log --oneline --graph --all", desc: "Vue graphique de tout l'historique" },
      { cmd: "git log --oneline -20", desc: "Les 20 derniers commits en une ligne" },
      { cmd: "git blame fichier.php", desc: "Voir qui a modifié chaque ligne" },
      { cmd: 'git grep "nom_de_fonction"', desc: "Chercher un texte dans tout le code" },
      { cmd: "git show abc1234", desc: "Voir les changements d'un commit précis" },
      { cmd: "git log --follow -p fichier.php", desc: "Historique complet d'un fichier" },
      { cmd: "git diff main..feature/ma-feature", desc: "Différences entre deux branches" },
      { cmd: "git bisect start", desc: "Démarrer la recherche de bug par dichotomie" },
      { cmd: "git bisect good v1.0.0", desc: "Marquer la dernière version saine" },
      { cmd: "git bisect bad", desc: "Marquer le commit bugué" },
      { cmd: "git bisect reset", desc: "Terminer la recherche bisect" },
    ]
  },
  {
    id: "tags", icon: "◇", label: "Tags & Releases", color: "#A29BFE",
    commands: [
      { cmd: "git tag v1.0.0", desc: "Créer un tag simple (lightweight)" },
      { cmd: 'git tag v1.2.3 -m "Release 1.2.3"', desc: "Créer un tag annoté" },
      { cmd: "git tag -l", desc: "Lister tous les tags" },
      { cmd: "git push origin --tags", desc: "Pousser tous les tags vers le remote" },
      { cmd: "git tag -d v1.0.0", desc: "Supprimer un tag local" },
      { cmd: "git push origin --delete v1.0.0", desc: "Supprimer un tag distant" },
      { cmd: "git checkout v1.0.0", desc: "Basculer sur un tag (detached HEAD)" },
    ]
  },
  {
    id: "conventions", icon: "≡", label: "Conventions", color: "#74B9FF",
    commands: [
      { cmd: "feat: ajout du module de paiement", desc: "Nouvelle fonctionnalité" },
      { cmd: "fix: correction bug calcul TVA", desc: "Correction de bug" },
      { cmd: "refactor: nettoyage du service auth", desc: "Refactoring sans changement fonctionnel" },
      { cmd: "docs: mise à jour README", desc: "Documentation uniquement" },
      { cmd: "chore: mise à jour dépendances", desc: "Maintenance, build, configuration" },
      { cmd: "test: ajout tests unitaires panier", desc: "Ajout ou correction de tests" },
      { cmd: "perf: optimisation requêtes SQL", desc: "Amélioration des performances" },
      { cmd: "feature/nom-feature", desc: "Nommage branche de fonctionnalité" },
      { cmd: "bugfix/description-du-bug", desc: "Nommage branche de correction" },
      { cmd: "hotfix/correction-critique", desc: "Nommage branche urgence production" },
      { cmd: "release/v1.2.0", desc: "Nommage branche de release" },
    ]
  },
];

const ALIASES = [
  { alias: "gs",  cmd: "git status" },
  { alias: "ga",  cmd: "git add ." },
  { alias: "gc",  cmd: "git commit -m" },
  { alias: "gp",  cmd: "git push" },
  { alias: "gl",  cmd: "git log --oneline --graph --all" },
  { alias: "gpl", cmd: "git pull --rebase" },
  { alias: "gsw", cmd: "git switch" },
];

/* ══════════════════════════════════════════════════════
   ÉTAT
══════════════════════════════════════════════════════ */
let activeId      = "init";
let currentTheme  = localStorage.getItem("git-ref-theme") || "midnight";
let panelOpen     = false;

/* ══════════════════════════════════════════════════════
   THÈME — Application & persistence
══════════════════════════════════════════════════════ */
function applyTheme(id) {
  const theme = THEMES.find(t => t.id === id) || THEMES[0];
  currentTheme = theme.id;

  // Applique le data-theme sur <html>
  document.documentElement.setAttribute("data-theme", theme.id);

  // Met à jour le bouton toggle
  const dot = document.getElementById("themeToggleDot");
  if (dot) {
    dot.style.background = `linear-gradient(135deg, ${theme.from}, ${theme.to})`;
  }

  // Persiste
  localStorage.setItem("git-ref-theme", theme.id);

  // Met à jour l'état actif dans les swatches
  document.querySelectorAll(".theme-swatch").forEach(el => {
    el.classList.toggle("active", el.dataset.themeId === theme.id);
  });
}

function renderThemeSwatches() {
  const container = document.getElementById("themeSwatches");
  if (!container) return;

  container.innerHTML = THEMES.map(t => `
    <div class="theme-swatch${t.id === currentTheme ? " active" : ""}"
         data-theme-id="${t.id}"
         onclick="selectTheme('${t.id}')"
         title="${t.name}">
      <div class="swatch-circle">
        <div class="swatch-bg" style="background:${t.bg}"></div>
        <div class="swatch-dot"
             style="background:linear-gradient(135deg,${t.from},${t.to})"></div>
      </div>
      <span class="swatch-name">${t.name}</span>
    </div>
  `).join("");
}

function selectTheme(id) {
  applyTheme(id);
  // Ferme le panel après un court délai pour voir le changement
  setTimeout(() => closeThemePanel(), 180);
}

function toggleThemePanel() {
  panelOpen = !panelOpen;
  const panel = document.getElementById("themePanel");
  panel.classList.toggle("open", panelOpen);
}

function closeThemePanel() {
  panelOpen = false;
  const panel = document.getElementById("themePanel");
  if (panel) panel.classList.remove("open");
}

// Fermer le panel si clic en dehors
document.addEventListener("click", (e) => {
  if (panelOpen && !e.target.closest(".theme-switcher")) {
    closeThemePanel();
  }
});

/* ══════════════════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════════════════ */
function renderSidebar() {
  const aside = document.getElementById("sidebar");
  let html = "";
  DATA.forEach(s => {
    html += `
      <button class="nav-btn${s.id === activeId ? " active" : ""}"
        style="--accent:${s.color}"
        onclick="setActive('${s.id}')">
        <span class="nav-icon">${s.icon}</span>
        <span class="nav-label">${s.label}</span>
        <span class="nav-badge">${s.commands.length}</span>
      </button>`;
  });
  html += `
    <div class="aliases-card">
      <div class="aliases-title">~/.zshrc Aliases</div>
      ${ALIASES.map(a => `
        <div class="alias-row">
          <span class="alias-key">${a.alias}</span>
          <span class="alias-eq">=</span>
          <span class="alias-val" title="${a.cmd}">${a.cmd}</span>
        </div>`).join("")}
    </div>`;
  aside.innerHTML = html;
}

/* ══════════════════════════════════════════════════════
   COMMANDES
══════════════════════════════════════════════════════ */
function cmdCardHTML(c, accent) {
  const id = Math.random().toString(36).slice(2);
  return `
    <div class="cmd-card" id="card-${id}" style="--accent:${accent}">
      <div class="cmd-stripe"></div>
      <div class="cmd-body">
        <div class="cmd-text"><span class="cmd-dollar">$</span>${esc(c.cmd)}</div>
        <div class="cmd-desc">${esc(c.desc)}</div>
      </div>
      <button class="cmd-copy"
        onclick="copyCmd(this,'${escA(c.cmd)}','card-${id}')"
        title="Copier">⎘</button>
    </div>`;
}

function renderSection(s) {
  return `
    <div class="section-header">
      <span class="section-icon" style="color:${s.color}">${s.icon}</span>
      <span class="section-title">${s.label}</span>
      <div class="section-line"></div>
      <span class="section-count" style="--accent:${s.color}">${s.commands.length} commandes</span>
    </div>
    <div class="cmd-list">
      ${s.commands.map(c => cmdCardHTML(c, s.color)).join("")}
    </div>`;
}

function renderMain(sections) {
  const main = document.getElementById("main");
  if (sections.length === 1) {
    main.innerHTML = renderSection(sections[0]);
  } else {
    main.innerHTML = sections.map(s => `
      <div class="search-section">
        <div class="search-section-header">
          <span style="font-size:18px;color:${s.color}">${s.icon}</span>
          <span class="search-section-name" style="color:${s.color}">${s.label}</span>
          <div class="search-section-line"
               style="background:${s.color}25;height:1px;flex:1;margin-left:8px"></div>
        </div>
        <div class="cmd-list">
          ${s.commands.map(c => cmdCardHTML(c, s.color)).join("")}
        </div>
      </div>`).join("");
  }
}

/* ══════════════════════════════════════════════════════
   ACTIONS
══════════════════════════════════════════════════════ */
function setActive(id) {
  activeId = id;
  renderSidebar();
  renderMain([DATA.find(s => s.id === id)]);
  document.getElementById("main").scrollTop = 0;
}

function copyCmd(btn, cmd, cardId) {
  navigator.clipboard.writeText(cmd).then(() => {
    const card = document.getElementById(cardId);
    btn.textContent = "✓";
    btn.classList.add("copied");
    card.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "⎘";
      btn.classList.remove("copied");
      card.classList.remove("copied");
    }, 1500);
  });
}

/* ══════════════════════════════════════════════════════
   RECHERCHE
══════════════════════════════════════════════════════ */
const searchEl = document.getElementById("search");
const clearBtn = document.getElementById("searchClear");

searchEl.addEventListener("input", () => {
  const q = searchEl.value.trim().toLowerCase();
  clearBtn.style.display = q ? "block" : "none";
  if (!q) {
    document.getElementById("sidebar").style.display = "";
    renderSidebar();
    renderMain([DATA.find(s => s.id === activeId)]);
    return;
  }
  document.getElementById("sidebar").style.display = "none";
  const results = DATA
    .map(s => ({
      ...s,
      commands: s.commands.filter(c =>
        c.cmd.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
      )
    }))
    .filter(s => s.commands.length > 0);

  if (!results.length) {
    document.getElementById("main").innerHTML = `
      <div class="no-results" style="display:block">
        <div class="no-results-icon">⌕</div>
        <div>Aucun résultat pour « ${esc(searchEl.value)} »</div>
      </div>`;
  } else {
    renderMain(results);
  }
});

function clearSearch() {
  searchEl.value = "";
  clearBtn.style.display = "none";
  document.getElementById("sidebar").style.display = "";
  renderSidebar();
  renderMain([DATA.find(s => s.id === activeId)]);
}

/* ══════════════════════════════════════════════════════
   UTILITAIRES
══════════════════════════════════════════════════════ */
function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function escA(s) {
  return s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

/* ══════════════════════════════════════════════════════
   INITIALISATION
══════════════════════════════════════════════════════ */
renderThemeSwatches();
applyTheme(currentTheme);
renderSidebar();
renderMain([DATA.find(s => s.id === activeId)]);