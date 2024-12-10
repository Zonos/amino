import test, { expect, type Page } from '@playwright/test';

test.describe('Functionality of confirmation dialog', () => {
  let framePage: Page;
  test.beforeEach(async ({ page }) => {
    page.goto('/');
    await page.getByRole('button', { exact: true, name: 'dialog' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('link', { name: 'Confirm' }).click();

    /** Open popup since interact with `iframe` doesn't give much insight when debuging */
    const framePagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Open canvas in new tab' }).click();
    framePage = await framePagePromise;
    /** Wait for the DOM to fully load */
    await framePage.waitForEvent('load');
  });

  test.afterEach(() => {
    /** Close the popup after finishing testing it */
    framePage.close();
  });

  test('Make sure action button trigger on click', async () => {
    /** Click on default confirmation */
    await framePage
      .getByRole('button', { name: 'Trigger default confirmation' })
      .click();
    await framePage.getByRole('button', { name: "Don't do action" }).click();
    await expect(
      framePage.getByText('Default confirmation: not confirmed'),
    ).toBeVisible();

    await framePage
      .getByRole('button', { name: 'Trigger default confirmation' })
      .click();
    await framePage
      .getByRole('button', { exact: true, name: 'Do action' })
      .click();
    await expect(
      framePage.getByText('Default confirmation: confirmed'),
    ).toBeVisible();

    /** Click on danger confirmation */
    await framePage
      .getByRole('button', { name: 'Trigger danger confirmation' })
      .click();
    await framePage.getByRole('button', { name: "Don't do action" }).click();
    await expect(
      framePage.getByText('Danger confirmation: not confirmed'),
    ).toBeVisible();
    await framePage
      .getByRole('button', { name: 'Trigger danger confirmation' })
      .click();
    await framePage
      .getByRole('button', { exact: true, name: 'Do action' })
      .click();
    await expect(
      framePage.getByText('Danger confirmation: confirmed'),
    ).toBeVisible();

    /** Click on warning confirmation */
    await framePage
      .getByRole('button', { name: 'Trigger warning confirmation' })
      .click();
    await framePage.getByRole('button', { name: "Don't do action" }).click();
    await expect(
      framePage.getByText('Warning confirmation: not confirmed'),
    ).toBeVisible();
    await framePage
      .getByRole('button', { name: 'Trigger warning confirmation' })
      .click();
    await framePage
      .getByRole('button', { exact: true, name: 'Do action' })
      .click();
    await expect(
      framePage.getByText('Warning confirmation: confirmed'),
    ).toBeVisible();
  });
});
