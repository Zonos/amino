import {
  dropFiles,
  dropTarget,
  expect,
  openStory,
  smallFile,
  test,
} from './helpers';

test.describe('DropZone story', () => {
  test('browse picks a file and lists it', async ({ page }) => {
    await openStory(page, 'amino-dropzone--drop-zone');
    await page
      .locator('input[type=file]')
      .setInputFiles([smallFile('picked.txt')]);
    await expect(page.getByText('picked.txt')).toBeVisible();
  });

  test('drop lists files and rejects oversize ones', async ({ page }) => {
    await openStory(page, 'amino-dropzone--drop-zone');
    await dropFiles(page, dropTarget, [{ name: 'dropped.txt', size: 10 }]);
    await expect(page.getByText('dropped.txt')).toBeVisible();

    await dropFiles(page, dropTarget, [{ name: 'too-big.txt', size: 4096 }]);
    await expect(
      page.getByText(/too-big\.txt: File is larger than/),
    ).toBeVisible();
  });

  test('drop over maxFiles keeps the files within the limit', async ({
    page,
  }) => {
    await openStory(page, 'amino-dropzone--drop-zone');
    await dropFiles(page, dropTarget, [
      { name: 'one.txt', size: 10 },
      { name: 'two.txt', size: 10 },
      { name: 'three.txt', size: 10 },
    ]);
    await expect(page.getByText('one.txt', { exact: true })).toBeVisible();
    await expect(page.getByText('two.txt', { exact: true })).toBeVisible();
    await expect(page.getByText(/three\.txt: Too many files/)).toBeVisible();
  });
});
