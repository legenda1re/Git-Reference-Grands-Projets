/**
 * build.js — Git Reference Project
 * Script utilitaire : valide la structure du projet et prépare le déploiement.
 *
 * Usage :
 *   node scripts/build.js
 */

const fs   = require("fs");
const path = require("path");

const ROOT     = path.resolve(__dirname, "..");
const REQUIRED = [
  "git-guide.html",
  "README.md",
  "assets/fonts",
  "assets/icons",
  "scripts/build.js",
];

console.log("\n🔍 Vérification de la structure du projet...\n");

let ok = true;

REQUIRED.forEach((item) => {
  const fullPath = path.join(ROOT, item);
  const exists   = fs.existsSync(fullPath);
  const icon     = exists ? "✅" : "❌";
  console.log(`  ${icon}  ${item}`);
  if (!exists) ok = false;
});

console.log();

if (ok) {
  const htmlPath = path.join(ROOT, "git-guide.html");
  const stats    = fs.statSync(htmlPath);
  const sizeKb   = (stats.size / 1024).toFixed(1);

  console.log("📦 Rapport de build :");
  console.log(`   Fichier principal : git-guide.html`);
  console.log(`   Taille            : ${sizeKb} KB`);
  console.log(`   Dépendances       : 0 (standalone)`);
  console.log(`   Statut            : Prêt pour déploiement ✅`);
  console.log();
  console.log("🚀 Happy Coding — Happy Committing !\n");
} else {
  console.error("❌ Structure incomplète. Corrige les fichiers manquants.\n");
  process.exit(1);
}