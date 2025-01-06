import test, { expect, type Page } from '@playwright/test';

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
    await framePage.waitForLoadState('domcontentloaded');
  });

  test.afterEach(() => {
    /** Close the popup after finishing testing it */
    framePage.close();
  });

  test.describe('Ensure Selectable works', () => {
    test('Selectable', async () => {
      const row1 = framePage.getByRole('row', {
        name: 'John 24 Not long enough',
      });
      const checkbox1 = row1.locator('label');
      await checkbox1.click();
      await expect(checkbox1).toBeChecked();

      const row2 = framePage.getByRole('row', {
        name: 'Joan 27 This is a long string',
      });
      const checkbox2 = row2.locator('label');
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

      await row1.click();

      // Try to trigger row click and verify no action occurs
      framePage.once('dialog', () => {
        throw new Error('Dialog should not appear when row is selected');
      });

      // select all then unselect all and verify onClick works again
      await checkboxAll.click();
      await checkboxAll.click();

      await expect(checkbox1).not.toBeChecked();
      await expect(checkbox2).not.toBeChecked();

      framePage.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Clicked John');
        await dialog.dismiss();
      });
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
        framePage
          .locator(
            'div.normal-table > table > tbody > tr:nth-child(2) > td table > thead > tr ',
          )
          .first(),
      ).toBeVisible();
      await framePage
        .locator('tr:nth-child(7) > td:nth-child(4) > .tooltip-wrapper')
        .first()
        .click();
      await expect(
        framePage
          .locator(
            'tr:nth-child(8) .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > thead > tr',
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
          '.bordered-table tbody > tr:nth-child(2) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > thead > tr',
        ),
      ).toBeVisible();

      await framePage
        .locator(
          '.bordered-table tbody > tr:nth-child(5) > td:nth-child(4) > .tooltip-wrapper',
        )
        .click();
      await expect(
        framePage.locator(
          '.bordered-table tbody > tr:nth-child(6) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > thead > tr',
        ),
      ).toBeVisible();

      // Selectable table
      await framePage
        .locator('.selectable-table tbody > tr:nth-child(11) > td:nth-child(4)')
        .click();
      await expect(
        framePage.locator(
          '.selectable-table tbody > tr:nth-child(12) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > thead > tr',
        ),
      ).toBeVisible();
      await framePage
        .locator(
          '.selectable-table tbody > tr:nth-child(3) > td:nth-child(5) > .tooltip-wrapper',
        )
        .click();
      await expect(
        framePage.locator(
          '.selectable-table tbody > tr:nth-child(4) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > thead > tr',
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
          '.selectable-table tbody > tr:nth-child(8) .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > table > thead > tr',
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

  test.describe('Ensure onRowClick works with Collapsible', () => {
    test('On Row Click', async () => {
      framePage.once('dialog', dialog => {
        expect(dialog.message()).toBe('Clicked John');
        dialog.dismiss().catch(() => {});
      });
      await framePage.locator('.tooltip-wrapper').first().click();
      framePage.once('dialog', dialog => {
        expect(dialog.message()).toBe('Clicked John');
        dialog.dismiss().catch(() => {});
      });
      await framePage
        .locator('.collapsible tbody > tr > td:nth-child(4) > .tooltip-wrapper')
        .first()
        .click();
      await expect(
        framePage
          .getByRole('cell', { name: 'Name Age Vegan John' })
          ?.locator('div')
          ?.nth(2),
      ).toBeVisible();
    });
  });

  test.describe('Ensure Collapse chevron is fixed width', () => {
    test('Collapsible', async () => {
      await expect(
        framePage.locator('.normal-table tr > td:last-child').first(),
      ).toHaveCSS('width', '48px');

      await expect(
        framePage.locator('.bordered-table tr > td:last-child').first(),
        // bordered will have 1px border on the right
      ).toHaveCSS('width', '49px');

      await expect(
        framePage.locator('.selectable-table tr > td:last-child').first(),
      ).toHaveCSS('width', '49px');
    });
  });

  test.describe('sticky header z-index', () => {
    test('Long', async () => {
      // Set z-index to 1
      const cell = framePage.locator(
        'tr:nth-child(1) > td:nth-child(4) > div > span',
      );
      await cell.evaluate(el => {
        el.style.zIndex = '0';

        el.style.position = 'relative';
      });

      // Scroll the page a bit
      await framePage.evaluate(() => {
        document.querySelector('#storybook-root > div')?.scrollBy(0, 50);
      });

      // **Check if the element is covered**
      const isCovered = await framePage.evaluate(selector => {
        const element = document.querySelector(selector);
        if (!element) return true; // If the element doesn't exist, consider it covered

        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Get the topmost element at the center of the target element
        const topElement = document.elementFromPoint(x, y);
        return topElement !== element && !element.contains(topElement);
      }, 'tr:nth-child(1) > td:nth-child(4) > div > span');

      expect(isCovered).toBe(true);
    });
  });

  test.describe('text truncation', () => {
    test('With Link', async () => {
      await framePage
        .locator('tr:nth-child(1) > td:nth-child(6) > .tooltip-wrapper')
        // Top left click
        .click({
          position: { x: 5, y: 5 },
          timeout: 5000,
        });

      // Expect link to be clicked (https://letmegooglethat.com/?q=John)
      await framePage.waitForLoadState('domcontentloaded');
      await expect(framePage.url()).toBe('https://letmegooglethat.com/?q=John');
    });
  });

  test.describe('text truncation link clickbox', () => {
    test('With Link', async () => {
      await framePage
        .locator('.tooltip-wrapper', { hasText: 'Not long enough' })
        .first()
        // Top left click
        .click({
          // Click at right end of the text
          position: { x: 100, y: 5 },
          timeout: 5000,
        });

      // Expect link to be clicked (https://letmegooglethat.com/?q=John)
      await framePage.waitForLoadState('domcontentloaded');
      await expect(framePage.url()).toBe('https://letmegooglethat.com/?q=John');
    });
  });

  test.describe('text wrap methods', () => {
    test('Text Wrap Methods', async () => {
      // Wait for cell with long text to be visible
      const normalTable = framePage.locator('[data-test-id="normal-table"]');
      const truncateTable = framePage.locator(
        '[data-test-id="truncate-table"]',
      );
      const nowrapTable = framePage.locator('[data-test-id="nowrap-table"]');

      await normalTable.waitFor();

      // Test normal wrapping
      const normalCell = normalTable
        .locator('tbody tr')
        .first()
        .locator('td')
        .first();
      await expect(normalCell).toHaveCSS('white-space', 'normal');
      await expect(normalCell).not.toHaveCSS('text-overflow', 'ellipsis');
      await expect(normalCell).not.toHaveCSS('overflow', 'hidden');

      const normalCellBounds = await normalCell.boundingBox();
      expect(normalCellBounds?.height).toBeGreaterThan(50); // Height indicates multiple lines

      // Test truncating
      const truncateCell = truncateTable
        .locator('tbody tr')
        .first()
        .locator('td > :first-child')
        .first();

      await expect(truncateCell).toHaveCSS('white-space', 'nowrap');
      await expect(truncateCell).toHaveCSS('text-overflow', 'ellipsis');
      await expect(truncateCell).toHaveCSS('overflow', 'hidden');
      // There is no good way to verify truncation with ellipsis is actually displayed

      // Test nowrap
      const nowrapCell = nowrapTable
        .locator('tbody tr')
        .first()
        .locator('td > :first-child')
        .first();
      await expect(nowrapCell).toHaveCSS('white-space', 'nowrap');
      await expect(nowrapCell).not.toHaveCSS('text-overflow', 'ellipsis');
      await expect(nowrapCell).not.toHaveCSS('overflow', 'hidden');

      const nowrapCellBounds = await nowrapCell.boundingBox();
      const viewportSize = await framePage.viewportSize();
      expect(nowrapCellBounds?.width).toBeGreaterThan(viewportSize?.width || 0);
    });
  });
});
