import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push('PAGE ERROR: ' + err.message));
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(2000);
    const title = await page.title();
    console.log('Title:', title);
    console.log('Errors:', errors.length ? errors : 'none');
    const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 300));
    console.log('Body preview:', bodyText);
  } catch (e) {
    console.log('GOTO error:', (e as Error).message);
  }
  await browser.close();
})();
