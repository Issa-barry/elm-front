/**
 * Copie le contenu de dist/apollo-ng/browser vers dist/apollo-ng-production
 * pour avoir un dossier prêt à envoyer sur Hostinger (sans sous-dossier browser).
 * Le dossier de destination est entièrement nettoyé avant la copie
 * pour éviter l'accumulation de chunks obsolètes des builds précédents.
 */
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'dist', 'apollo-ng', 'browser');
const dest = path.join(__dirname, '..', 'dist', 'apollo-ng-production');

if (!fs.existsSync(src)) {
    console.error('Erreur: dist/apollo-ng/browser introuvable. Lancez "ng build" d\'abord.');
    process.exit(1);
}

// Nettoyage complet du dossier de destination (évite les fichiers obsolètes)
if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
    console.log('dist/apollo-ng-production nettoyé.');
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
console.log('Déploiement prêt : dist/apollo-ng-production/ (uploadez son contenu vers public_html sur Hostinger)');
