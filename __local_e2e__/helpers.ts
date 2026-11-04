import type { Page } from '@playwright/test';

import { expect } from './fixtures';

// the getRootProps() element wraps the hidden file input
export const dropTarget = 'input[type=file] >> xpath=..';

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
