// Render build/page.html to a raw 1024x1024 PNG at build/raw.png.
// Run from this folder:  node build/render.mjs
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire('/home/hatch/workspace/makefun/best-game/tools/x.js');
const puppeteer = require('puppeteer');

const html = readFileSync(new URL('./page.html', import.meta.url), 'utf8');
const browser = await puppeteer.launch({ args: ['--no-sandbox', '--force-color-profile=srgb'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });
  await new Promise((r) => setTimeout(r, 350));
  await page.screenshot({ path: new URL('./raw.png', import.meta.url).pathname, type: 'png' });
  console.log('rendered build/raw.png');
} finally {
  await browser.close();
}
