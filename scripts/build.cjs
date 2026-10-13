const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const destination = path.join(root, 'dist');
fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });
for (const name of ['index.html', 'assets', 'robots.txt', 'sitemap.xml', 'NOTICE']) {
  fs.cpSync(path.join(root, name), path.join(destination, name), { recursive: true });
}
console.log('Static site exported to dist/');
