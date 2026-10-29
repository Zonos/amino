import { expect, test } from '@playwright/test';

test('button click starts a ripple', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('/iframe.html?id=amino-button--primary&viewMode=story');

  const button = page.locator('#storybook-root button').first();
  await button.hover();
  await page.mouse.down();
  await expect(button.locator('.animate-ripple')).not.toHaveCount(0);
  await page.mouse.up();

  expect(errors).toEqual([]);
});
