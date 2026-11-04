import { expect, test } from './fixtures';

test('toasts get unique ids and dismiss by id', async ({ page }) => {
  await page.goto('/iframe.html?id=amino-toast--toast&viewMode=story');

  await expect(
    page.getByText('This toast suppose to only show once'),
  ).toHaveCount(1);

  const notify = page.getByRole('button', { exact: true, name: 'Notify' });
  await notify.click();
  await notify.click();
  await expect(page.getByText('Default toast', { exact: true })).toHaveCount(2);

  await page.getByRole('button', { name: 'Long persisting' }).click();
  const longToast = page.getByText(/Long persisting example/);
  await expect(longToast).toBeVisible();
  await page.getByTestId('amino--external-dismiss').click();
  await expect(longToast).toHaveCount(0);
});
