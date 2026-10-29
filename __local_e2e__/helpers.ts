import { expect, type Page, test as base } from '@playwright/test';

// the getRootProps() element wraps the hidden file input
export const dropTarget = 'input[type=file] >> xpath=..';

// fails the test on any console error or page error while it runs
export const test = base.extend<{ storyErrors: string[] }>({
  storyErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error' && !msg.text().includes('favicon')) {
          errors.push(msg.text());
        }
      });
      page.on('pageerror', err => errors.push(err.message));
      await use(errors);
      expect(errors).toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };

export const openStory = async (page: Page, id: string) => {
  await page.goto(`/iframe.html?id=${id}&viewMode=story`);
  await expect(page.locator('#storybook-root')).not.toBeEmpty();
};

export const smallFile = (name: string) => ({
  buffer: Buffer.from('hello'),
  mimeType: 'text/plain',
  name,
});

export const dropFiles = async (
  page: Page,
  selector: string,
  files: { name: string; size: number }[],
) => {
  const dataTransfer = await page.evaluateHandle(list => {
    const dt = new DataTransfer();
    list.forEach(({ name, size }) =>
      dt.items.add(new File(['x'.repeat(size)], name, { type: 'text/plain' })),
    );
    return dt;
  }, files);
  const target = page.locator(selector).first();
  await target.dispatchEvent('dragenter', { dataTransfer });
  await target.dispatchEvent('dragover', { dataTransfer });
  await target.dispatchEvent('drop', { dataTransfer });
};
