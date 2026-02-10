// eslint-disable-next-line import/no-extraneous-dependencies
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage();
  await page.goto(
    'http://localhost:6006/iframe.html?id=amino-components-jsonvisionviewer--column-view',
  );
  await page.waitForTimeout(5000);

  const cssCheck = await page.evaluate(() => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    const checks: Record<string, string> = {};
    const classes = [
      'bg-amino-gray-100',
      'bg-gray-100',
      'bg-amino-blue-600',
      'bg-blue-600',
      'text-amino-gray-500',
      'text-gray-500',
      'text-amino-gray-600',
      'text-gray-600',
      'text-amino-blue-600',
      'text-blue-600',
      'border-amino-gray-700',
      'border-gray-700',
    ];
    for (const c of classes) {
      el.className = c;
      const s = getComputedStyle(el);
      checks[c] = c.startsWith('text')
        ? s.color
        : c.startsWith('border')
          ? s.borderColor
          : s.backgroundColor;
    }
    document.body.removeChild(el);
    return checks;
  });
  // eslint-disable-next-line no-console
  console.log('CSS class comparison:', JSON.stringify(cssCheck, null, 2));

  await page.close();
  await browser.close();
})().catch(e => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
