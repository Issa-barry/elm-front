/**
 * Écrit version.json dans dist/apollo-ng/browser (timestamp du build).
 * Permet à l'app de détecter un nouveau déploiement et de forcer le rechargement.
 */
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'dist', 'apollo-ng', 'browser');
const versionPath = path.join(outDir, 'version.json');

const version = { version: new Date().toISOString(), build: Date.now() };
if (fs.existsSync(outDir)) {
    fs.writeFileSync(versionPath, JSON.stringify(version));
    console.log('version.json mis à jour');
}
