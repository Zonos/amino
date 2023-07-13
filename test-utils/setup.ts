import fs from 'fs';
import { Mocked, vi } from 'vitest';

const filesContent: Record<string, string> = {};

vi.mock('fs', async () => {
  const mockedFs = (await vi.importActual('fs')) as Awaited<
    Promise<Mocked<typeof fs>>
  >;
  /** Make readFileSync to return if file is already read */
  const mockReadFileSync = (path: string) => {
    if (filesContent[path]) {
      return filesContent[path];
    }
    const content = mockedFs.readFileSync(path, { encoding: 'utf8' });

    filesContent[path] = content;
    return content;
  };
  return {
    ...mockedFs,
    readFileSync: mockReadFileSync,
  };
});
