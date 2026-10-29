import { expect, test } from '@playwright/test';

import { dropFiles, openStory, smallFile } from './helpers';

test.describe('FileUpload story', () => {
  test('browse picks a file and shows its name', async ({ page }) => {
    const errors = await openStory(page, 'amino-fileupload--file-upload');
    await page
      .locator('input[type=file]')
      .setInputFiles([smallFile('picked.txt')]);
    await expect(page.getByText('picked.txt')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('drop shows the dropped file', async ({ page }) => {
    const errors = await openStory(page, 'amino-fileupload--file-upload');
    await dropFiles(page, 'input[type=file] >> xpath=..', [
      { name: 'dropped.txt', size: 10 },
    ]);
    await expect(page.getByText('dropped.txt')).toBeVisible();
    expect(errors).toEqual([]);
  });
});
