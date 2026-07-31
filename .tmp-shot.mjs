import { chromium } from 'playwright-core';

const browser = await chromium.launch();

async function scrollThrough(page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = 400;
  for (let y = 0; y < height; y += step) {
    await page.evaluate((pos) => window.scrollTo(0, pos), y);
    await page.waitForTimeout(100);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

async function shoot(page, url, path) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await scrollThrough(page);
  await page.screenshot({ path, fullPage: true });
}

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await shoot(page, 'http://localhost:4175/', '/tmp/claude-shots/home-desktop.png');
await shoot(page, 'http://localhost:4175/services', '/tmp/claude-shots/services-desktop.png');
await page.close();

await browser.close();
console.log('done');
