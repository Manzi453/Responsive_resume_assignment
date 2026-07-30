import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.screenshot({ path: '/tmp/claude-shots/home-top.png' });
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/claude-shots/home-overview.png' });

await page.goto('http://localhost:4175/experience', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: '/tmp/claude-shots/experience.png' });

await page.goto('http://localhost:4175/projects', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: '/tmp/claude-shots/projects.png' });

await page.goto('http://localhost:4175/awards', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: '/tmp/claude-shots/awards.png' });

await page.goto('http://localhost:4175/nonexistent', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/claude-shots/notfound.png' });

await browser.close();
console.log(JSON.stringify({ errors }, null, 2));
