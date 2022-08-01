import fs from 'fs';

const filesContent: Record<string, string> = {};

jest.mock('fs', () => {
  const mockedFs = jest.requireActual('fs') as jest.Mocked<typeof fs>;
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
