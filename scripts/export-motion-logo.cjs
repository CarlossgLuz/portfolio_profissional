// Exact SVG-to-PNG export: preserve official vector geometry and its knockout transparency.
// Optional: requires the development Playwright dependency and an installed Chromium.
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright');
(async () => {
  const root = path.join(__dirname, '..');
  const source = fs.readFileSync(path.join(root,'assets/images/logo-mark.svg'),'utf8')
    .replace('width="1050"','width="1000"').replace('height="1050"','height="760"');
  const browser = await chromium.launch({headless:true});
  try {
    const page = await browser.newPage({viewport:{width:1000,height:760}});
    await page.setContent('<style>html,body{margin:0;background:transparent}img{display:block}</style><img width="1000" height="760" src="data:image/svg+xml;base64,'+Buffer.from(source).toString('base64')+'">');
    const image = page.locator('img');
    await image.evaluate(el=>el.decode());
    await image.screenshot({path:path.join(root,'assets/images/logo-motion.png'),omitBackground:true});
  } finally { await browser.close(); }
})();
