import type fs from 'fs';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { vi } from 'vitest';

const filesContent: Record<string, string> = {};

vi.mock('fs', async importOriginal => {
  const realFs = await importOriginal<typeof fs>();
  /** Make readFileSync to return if file is already read */
  const mockReadFileSync = vi.fn(
    (path: string, options?: { encoding: BufferEncoding }) => {
      if (filesContent[path]) {
        return filesContent[path];
      }
      try {
        const content = readFileSync(
          path,
          options || { encoding: 'utf8' },
        ) as string;
        filesContent[path] = content;
        return content;
      } catch (error) {
        if (error instanceof Error && error.message.includes('ENOENT')) {
          throw new Error(`File not found: ${path}`);
        }
        throw error;
      }
    },
  );

  const mockExistsSync = vi.fn((path: string) => {
    try {
      return existsSync(path);
    } catch {
      return false;
    }
  });

  const mockReaddirSync = vi.fn((path: string) => {
    try {
      return readdirSync(path);
    } catch {
      throw new Error(`Directory not found: ${path}`);
    }
  });

  const mockStatSync = vi.fn((path: string) => {
    try {
      return statSync(path);
    } catch {
      throw new Error(`Path not found: ${path}`);
    }
  });

  const mockWriteFileSync = vi.fn(
    (
      path: string,
      data: string | NodeJS.ArrayBufferView,
      options?: { encoding?: BufferEncoding },
    ) => writeFileSync(path, data, options),
  );

  const mockMkdirSync = vi.fn(
    (path: string, options?: { recursive?: boolean }) =>
      mkdirSync(path, options),
  );

  return {
    ...realFs,
    default: {
      ...realFs,
      existsSync: mockExistsSync,
      mkdirSync: mockMkdirSync,
      readFileSync: mockReadFileSync,
      readdirSync: mockReaddirSync,
      statSync: mockStatSync,
      writeFileSync: mockWriteFileSync,
    },
    existsSync: mockExistsSync,
    mkdirSync: mockMkdirSync,
    readFileSync: mockReadFileSync,
    readdirSync: mockReaddirSync,
    statSync: mockStatSync,
    writeFileSync: mockWriteFileSync,
  };
});
