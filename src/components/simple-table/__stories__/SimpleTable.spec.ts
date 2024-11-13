import test, { type Page, expect } from '@playwright/test';

test.describe('SimpleTable', () => {
  let framePage: Page;
  test.beforeEach(async ({ page }) => {
    const testTitle = test.info().title;
    page.goto('/');
    await page
      .getByRole('button', { exact: true, name: 'SimpleTable' })
      .click();
    await page.getByRole('link', { name: testTitle }).click();

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

  test.describe('Ensure Selectable works', () => {
    test('Selectable', async () => {
      const checkbox1 = framePage
        .getByRole('row', { name: 'John 24 This is a long string' })
        .locator('label');
      await checkbox1.click();
      await expect(checkbox1).toBeChecked();

      const checkbox2 = framePage
        .getByRole('row', { name: 'Joan 27 This is a long string' })
        .locator('label');
      await checkbox2.click();
      await expect(checkbox2).toBeChecked();

      await checkbox1.click();
      await expect(checkbox1).not.toBeChecked();

      const checkboxAll = framePage
        .getByRole('row', { name: 'Name Age Vegan Truncate Text' })
        .locator('label');
      await checkboxAll.click();

      await expect(checkbox1).toBeChecked();
      await expect(checkbox2).toBeChecked();
      await expect(
        framePage
          .getByRole('row', { name: 'Cade 26 This is a long string' })
          .locator('label'),
      ).toBeChecked();
    });
  });

  test.describe('Ensure CustomLink works', () => {
    test('With Link', async () => {
      await framePage
        .getByRole('row', { name: 'Joe 26 This is a long string' })
        .locator('td')
        .nth(3)
        .click();
      expect(framePage.url()).toBe('https://letmegooglethat.com/?q=Joe');
    });
  });

  test.describe('Ensure hover and noHoverBackground works', () => {
    test('Basic', async () => {
      const row1 = framePage.locator('.with-hover tbody > tr').first();
      const row2 = framePage.locator('.no-hover tbody > tr').first();

      await expect(row1).toHaveClass(/_withHover_.+/);
      await expect(row2).not.toHaveClass(/_withHover_.+/);
    });
  });

  test.describe('Ensure onRowClick works', () => {
    test('Custom', async () => {
      await framePage.locator('.tooltip-wrapper').first().click();
      framePage.once('dialog', dialog => {
        expect(dialog.message()).toBe('Clicked John');
        dialog.dismiss().catch(() => {});
      });
    });
  });

  test.describe('Ensure collapsible works', () => {
    test('Collapsible', async () => {
      // Normal table
      await framePage
        .locator('td:nth-child(5) > .tooltip-wrapper')
        .first()
        .click();
      await expect(
        framePage.locator('table > tr:nth-child(2) > td:nth-child(2)').first(),
      ).toBeVisible();
      await framePage
        .locator('tr:nth-child(7) > td:nth-child(4) > .tooltip-wrapper')
        .first()
        .click();
      await expect(
        framePage
          .locator(
            'tr:nth-child(8) .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > tr:nth-child(2) > td:nth-child(2)',
          )
          .first(),
      ).toBeVisible();

      // Bordered table
      await framePage
        .locator('.bordered-table  tbody > tr > td:nth-child(4)')
        .first()
        .click();
      await expect(
        framePage.locator(
          '.bordered-table tbody > tr:nth-child(2) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > tr:nth-child(2) > td:nth-child(2)',
        ),
      ).toBeVisible();

      await framePage
        .locator(
          '.bordered-table tbody > tr:nth-child(5) > td:nth-child(4) > .tooltip-wrapper',
        )
        .click();
      await expect(
        framePage.locator(
          '.bordered-table tbody > tr:nth-child(6) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > tr:nth-child(2) > td:nth-child(2)',
        ),
      ).toBeVisible();

      // Selectable table
      await framePage
        .locator('.selectable-table tbody > tr:nth-child(11) > td:nth-child(4)')
        .click();
      await expect(
        framePage.locator(
          '.selectable-table tbody > tr:nth-child(12) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > tr:nth-child(2) > td:nth-child(2)',
        ),
      ).toBeVisible();
      await framePage
        .locator(
          '.selectable-table tbody > tr:nth-child(3) > td:nth-child(5) > .tooltip-wrapper',
        )
        .click();
      await expect(
        framePage.locator(
          '.selectable-table tbody > tr:nth-child(4) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > tr:nth-child(2) > td:nth-child(2)',
        ),
      ).toBeVisible();
      await framePage
        .locator('.selectable-table tr:nth-child(3) > td')
        .first()
        .click();
      await expect(
        framePage
          .locator('.selectable-table tr:nth-child(3) > td > label')
          .first(),
      ).toBeChecked();
      await framePage
        .locator(
          '.selectable-table tbody > tr:nth-child(7) > td:nth-child(5) > .tooltip-wrapper',
        )
        .click();
      await expect(
        framePage.locator(
          '.selectable-table tbody > tr:nth-child(8) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > tr:nth-child(2) > td:nth-child(2)',
        ),
      ).toBeVisible();
    });
  });

  test.describe('Ensure noHeaders works', () => {
    test('Bordered', async () => {
      await expect(
        framePage
          .getByRole('cell', { name: 'Truncate Text (min 150px)' })
          .first(),
      ).toBeVisible();
      await expect(framePage.locator('thead').nth(1)).toBeVisible();
    });
  });
});
