import { expect, test } from './fixtures';

test('button click starts a ripple', async ({ page }) => {
  await page.goto('/iframe.html?id=amino-button--primary&viewMode=story');

  const button = page.locator('#storybook-root button').first();
  await button.hover();
  await page.mouse.down();
  await expect(button.locator('.animate-ripple')).not.toHaveCount(0);
  await page.mouse.up();
});
