/**
 * Copie le contenu de dist/apollo-ng/browser vers un dossier prêt à déployer
 * (sans sous-dossier browser).
 *
 * Usage:
 * - node scripts/copy-deploy.js              -> dist/apollo-ng-production
 * - node scripts/copy-deploy.js production   -> dist/apollo-ng-production
 * - node scripts/copy-deploy.js preprod      -> dist/apollo-ng-preprod
 */
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'dist', 'apollo-ng', 'browser');
const target = (process.argv[2] || 'production').toLowerCase();
const destFolder = target === 'preprod' ? 'apollo-ng-preprod' : 'apollo-ng-production';
const dest = path.join(__dirname, '..', 'dist', destFolder);

if (!fs.existsSync(src)) {
    console.error('Erreur: dist/apollo-ng/browser introuvable. Lancez "ng build" d\'abord.');
    process.exit(1);
}

// Nettoyage complet du dossier de destination (évite les fichiers obsolètes)
if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
    console.log(`dist/${destFolder} nettoye.`);
}
fs.mkdirSync(dest, { recursive: true });

function copyRecursive(srcDir, destDir) {
    for (const name of fs.readdirSync(srcDir)) {
        const srcPath = path.join(srcDir, name);
        const destPath = path.join(destDir, name);
        if (fs.statSync(srcPath).isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyRecursive(src, dest);
console.log(`Deploiement pret : dist/${destFolder}/`);
