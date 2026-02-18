/**
 * Copie le contenu de dist/apollo-ng/browser vers dist/apollo-ng-deploy
 * pour avoir un dossier prêt à envoyer sur Hostinger (sans sous-dossier browser).
 */
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'dist', 'apollo-ng', 'browser');
const dest = path.join(__dirname, '..', 'dist', 'apollo-ng-deploy');

function copyRecursive(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) {
        console.error('Erreur: dist/apollo-ng/browser introuvable. Lancez "ng build" d\'abord.');
        process.exit(1);
    }
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    for (const name of fs.readdirSync(srcDir)) {
        const srcPath = path.join(srcDir, name);
        const destPath = path.join(destDir, name);
        if (fs.statSync(srcPath).isDirectory()) {
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyRecursive(src, dest);
console.log('Déploiement prêt : dist/apollo-ng-deploy/ (uploadez son contenu vers public_html sur Hostinger)');
