import test, { expect, type Page } from '@playwright/test';

test.describe('Checkbox', () => {
  let framePage: Page;
  test.beforeEach(async ({ page }) => {
    page.goto('/');
    await page
      .getByRole('button', { exact: true, name: 'Checkbox Tested' })
      .click();
    await page
      .getByRole('link', { exact: true, name: 'Disabled Basic Checkbox' })
      .click();

    /** Open popup since interact with `iframe` doesn't give much insight when debuging */
    const framePagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Open canvas in new tab' }).click();
    framePage = await framePagePromise;
    /** Wait for the DOM to fully load */
    await framePage.waitForEvent('load');
  });

  // We have upstream dependencies on this `disabled` class
  test('Disabled class state', async () => {
    await expect(framePage.getByTestId('amino--input-label')).toHaveClass(
      /disabled/,
    );
  });
});
