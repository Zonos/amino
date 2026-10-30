import { expect, test } from '@playwright/test';

test('Storybook manager and a story render without errors', async ({
  page,
}) => {
  const errors: string[] = [];
  const failedRequests: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error' && !msg.text().startsWith('Failed to load')) {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', err => errors.push(err.message));
  page.on('response', res => {
    if (res.status() >= 400)
      failedRequests.push(`${res.status()} ${res.url()}`);
  });

  await page.goto('/');
  await expect(page.locator('#storybook-explorer-tree')).toBeVisible();

  await page.goto('/iframe.html?id=amino-avatar-imageavatar--image-avatar');
  await expect(page.locator('#storybook-root > *').first()).toBeVisible();

  test.info().annotations.push(
    ...failedRequests.map(description => ({
      description,
      type: 'failed request',
    })),
  );
  expect(errors).toEqual([]);
});
