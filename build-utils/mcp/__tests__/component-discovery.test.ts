/**
 * Tests for the component discovery module
 */

import * as discoveryModule from 'build-utils/mcp/extractors/component-discovery';
import type { PathLike } from 'fs';
import * as fs from 'fs';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Properly mock the fs module
vi.mock('fs', () => ({
  existsSync: vi.fn(),
  readdirSync: vi.fn(),
  statSync: vi.fn(),
}));

// Mock path module globally since it's used in both test files
vi.mock('path', () => ({
  basename: vi.fn(),
  dirname: vi.fn(),
  join: vi.fn((...segments: string[]): string => segments.join('/')),
  relative: vi.fn((from: string, to: string): string => to),
}));

// Helper to create a Stats-like object
const createStatsMock = (isDir: boolean): Partial<fs.Stats> => ({
  isDirectory: () => isDir,
});

// Type for the mock file structure
type MockFileStructure = {
  [key: string]: MockFileStructure | boolean;
};

describe('Component Discovery Module', () => {
  // Mock file structure for our tests
  const mockFileStructure: { 'src/components': MockFileStructure } = {
    'src/components': {
      __tests__: {
        'test.tsx': false,
      },
      _private: {
        'index.tsx': false,
      },
      button: {
        'Button.tsx': false,
        'index.tsx': false,
      },
      nested: {
        subcomponent: {
          'index.tsx': false,
        },
      },
      public: {
        'index.ts': false,
      },
      text: {
        'Text.tsx': false,
        'index.ts': false,
      },
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();

    // Set up mocks for fs module specific to the tests
    vi.mocked(fs.existsSync).mockImplementation(
      (pathLike: PathLike): boolean => {
        const pathStr = pathLike.toString();
        // Special case for root dir
        if (pathStr === 'src/components') {
          return true;
        }

        const parts = pathStr.split('/');
        let current: MockFileStructure | boolean = mockFileStructure;

        // Navigate the mock structure
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (i === 0 && part === 'src') continue;
          if (i === 1 && part === 'components') continue;

          if (
            part === undefined ||
            typeof current === 'boolean' ||
            !(part in current)
          ) {
            return false;
          }

          // If we're at the end, return true (file exists)
          if (i === parts.length - 1) {
            return true;
          }

          // Move down the tree
          current = current[part] ?? false;
        }

        return false;
      },
    );

    // Setup readdirSync mock
    vi.mocked(fs.readdirSync).mockImplementation(((
      dirPath: PathLike,
      options?:
        | {
            encoding: BufferEncoding | null;
            recursive?: boolean;
            withFileTypes?: boolean;
          }
        | BufferEncoding
        | 'buffer'
        | null
        | undefined,
    ): string[] | Buffer[] | fs.Dirent[] => {
      const pathStr = dirPath.toString();

      // Handle withFileTypes option
      if (options && typeof options === 'object' && options.withFileTypes) {
        let fileNames: string[] = [];

        // Root directory
        if (pathStr === 'src/components') {
          fileNames = Object.keys(
            mockFileStructure['src/components'],
          ) as string[];
        } else {
          // Subdirectories
          const parts = pathStr.split('/').slice(2);
          let current: MockFileStructure | boolean =
            mockFileStructure['src/components'];

          // Navigate the mock structure
          for (const part of parts) {
            if (typeof current === 'boolean' || !(part in current)) {
              throw new Error(`Not a directory: ${dirPath}`);
            }

            current = current[part] ?? false;
          }

          if (typeof current === 'boolean') {
            throw new Error(`Not a directory: ${dirPath}`);
          }

          fileNames = Object.keys(current) as string[];
        }

        // Convert to Dirent objects
        return fileNames.map(name => {
          // Determine if this is a directory by looking at the structure
          let isDir = false;

          if (pathStr === 'src/components') {
            isDir =
              typeof mockFileStructure['src/components'][name] === 'object';
          } else {
            // Find the correct path in our structure
            const parts = [...pathStr.split('/').slice(2), name];
            let curr = mockFileStructure['src/components'];
            for (let i = 0; i < parts.length - 1; i++) {
              const part = parts[i];
              if (
                typeof curr !== 'boolean' &&
                part !== undefined &&
                part in curr
              ) {
                const next = curr[part];
                if (typeof next === 'object') {
                  curr = next as MockFileStructure;
                }
              }
            }

            const lastPart = parts[parts.length - 1];
            if (
              typeof curr !== 'boolean' &&
              lastPart !== undefined &&
              lastPart in curr
            ) {
              isDir = typeof curr[lastPart] === 'object';
            }
          }

          return {
            isBlockDevice: () => false,
            isCharacterDevice: () => false,
            isDirectory: () => isDir,
            isFIFO: () => false,
            isFile: () => !isDir,
            isSocket: () => false,
            isSymbolicLink: () => false,
            name,
          } as fs.Dirent;
        });
      }

      // Handle Buffer encoding option
      if (
        (typeof options === 'string' && options === 'buffer') ||
        (typeof options === 'object' &&
          (options?.encoding as BufferEncoding | 'buffer' | null) === 'buffer')
      ) {
        // For simplicity in tests, return empty array when buffer is requested
        return [] as Buffer[];
      }

      // Regular string return for normal usage
      // Root directory
      if (pathStr === 'src/components') {
        return Object.keys(mockFileStructure['src/components']) as string[];
      }

      // Subdirectories
      const parts = pathStr.split('/').slice(2);
      let current: MockFileStructure | boolean =
        mockFileStructure['src/components'];

      // Navigate the mock structure
      for (const part of parts) {
        if (typeof current === 'boolean' || !(part in current)) {
          throw new Error(`Not a directory: ${dirPath}`);
        }

        current = current[part] ?? false;
      }

      if (typeof current === 'boolean') {
        throw new Error(`Not a directory: ${dirPath}`);
      }

      return Object.keys(current) as string[];
    }) as typeof fs.readdirSync);

    // Setup statSync mock
    vi.mocked(fs.statSync).mockImplementation(
      (pathLike: PathLike): fs.Stats => {
        const pathStr = pathLike.toString();

        // Check if the path contains any filename endings
        const isFile = pathStr.endsWith('.tsx') || pathStr.endsWith('.ts');

        return createStatsMock(!isFile) as fs.Stats;
      },
    );

    // Setup path.dirname mock
    vi.mocked(path.dirname).mockImplementation((filePath: string): string =>
      // Extract directory path
      filePath.split('/').slice(0, -1).join('/'),
    );

    // Setup path.basename mock
    vi.mocked(path.basename).mockImplementation((filePath: string): string => {
      // For component paths, return just the component name
      if (filePath.includes('src/components/')) {
        const parts = filePath.split('/');
        for (let i = 0; i < parts.length; i++) {
          if (parts[i] === 'components' && i + 1 < parts.length) {
            return parts[i + 1] ?? '';
          }
        }
      }

      // Default to last path segment
      return filePath.split('/').pop() || '';
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('detectComponentFiles', () => {
    it('should scan directories and find component files', () => {
      // Create a custom mock function that returns string[] to match the expected return type
      const readdirMock = (dirPath: PathLike): string[] => {
        const dirPathStr = dirPath.toString();

        if (dirPathStr === 'src/components') {
          return [
            'button',
            'text',
            'nested',
            '_private',
            'public',
            '__tests__',
          ];
        }
        if (dirPathStr === 'src/components/button') {
          return ['index.tsx', 'Button.tsx'];
        }
        if (dirPathStr === 'src/components/text') {
          return ['index.ts', 'Text.tsx'];
        }
        if (dirPathStr === 'src/components/nested') {
          return ['subcomponent'];
        }
        if (dirPathStr === 'src/components/nested/subcomponent') {
          return ['index.tsx'];
        }
        if (dirPathStr === 'src/components/_private') {
          return ['index.tsx'];
        }
        if (dirPathStr === 'src/components/public') {
          return ['index.ts'];
        }
        if (dirPathStr === 'src/components/__tests__') {
          return ['test.tsx'];
        }

        throw new Error(`Unknown path: ${dirPathStr}`);
      };

      // Apply the mock implementation with the correct type
      vi.mocked(fs.readdirSync).mockImplementation(((
        dirPath: PathLike,
        options?:
          | BufferEncoding
          | 'buffer'
          | {
              encoding?: BufferEncoding | 'buffer' | null;
              recursive?: boolean;
              withFileTypes?: boolean;
            }
          | null,
      ): string[] | Buffer[] | fs.Dirent[] => {
        // Handle withFileTypes option
        if (options && typeof options === 'object' && options.withFileTypes) {
          const fileNames = readdirMock(dirPath);
          // Convert strings to Dirents
          return fileNames.map(name => {
            // Determine if this is a directory
            const isDir = !name.includes('.');
            return {
              isBlockDevice: () => false,
              isCharacterDevice: () => false,
              isDirectory: () => isDir,
              isFIFO: () => false,
              isFile: () => !isDir,
              isSocket: () => false,
              isSymbolicLink: () => false,
              name,
            } as fs.Dirent;
          });
        }

        // For buffer encoding
        if (
          (typeof options === 'string' && options === 'buffer') ||
          (typeof options === 'object' && options?.encoding === 'buffer')
        ) {
          return [] as Buffer[];
        }

        // Default case returns string[]
        return readdirMock(dirPath);
      }) as typeof fs.readdirSync);

      // Mock statSync to properly identify directories vs files
      vi.mocked(fs.statSync).mockImplementation(
        (pathLike: PathLike): fs.Stats => {
          const pathStr = pathLike.toString();
          const isDirectory = !pathStr.includes('.');
          return createStatsMock(isDirectory) as fs.Stats;
        },
      );

      // Mock existsSync to return true for all paths in this test
      vi.mocked(fs.existsSync).mockReturnValue(true);

      // Run the function to test
      const result = discoveryModule.detectComponentFiles({
        rootDirs: ['src/components'],
        verbose: true,
      });

      // Define expected files
      const expectedFiles = [
        'src/components/button/index.tsx',
        'src/components/text/index.ts',
        'src/components/nested/subcomponent/index.tsx',
        'src/components/_private/index.tsx',
        'src/components/public/index.ts',
      ];

      // Check that we found the right files
      expect(result).toEqual(expectedFiles);
    });

    it('should handle non-existent directories', () => {
      vi.mocked(fs.existsSync).mockReturnValueOnce(false);

      const result = discoveryModule.detectComponentFiles({
        rootDirs: ['invalid/dir'],
      });

      expect(result).toEqual([]);
    });

    it('should handle errors gracefully', () => {
      vi.mocked(fs.existsSync).mockReturnValueOnce(true);
      // Using a properly typed mock implementation
      vi.mocked(fs.readdirSync).mockImplementationOnce(() => {
        throw new Error('Read error');
      });

      const result = discoveryModule.detectComponentFiles({
        rootDirs: ['src/components'],
      });

      expect(result).toEqual([]);
    });
  });

  describe('extractComponentMetadata', () => {
    it('should extract metadata from component file paths', () => {
      const componentFiles = [
        'src/components/button/index.tsx',
        'src/components/text/index.ts',
      ];

      // Mock path.dirname to return consistent values
      vi.mocked(path.dirname).mockImplementation((filePath: string): string => {
        if (filePath === 'src/components/button/index.tsx')
          return 'src/components/button';
        if (filePath === 'src/components/text/index.ts')
          return 'src/components/text';
        return filePath.split('/').slice(0, -1).join('/');
      });

      // Mock path.basename to return component names
      vi.mocked(path.basename).mockImplementation(
        (filePath: string): string => {
          if (filePath === 'src/components/button') return 'button';
          if (filePath === 'src/components/text') return 'text';
          return filePath.split('/').pop() || '';
        },
      );

      // Run the test function
      const result = discoveryModule.extractComponentMetadata(componentFiles, {
        rootDirs: ['src/components'],
      });

      // Check the results
      expect(result).toHaveLength(2);
      expect(result[0]?.id).toBe('button');
      expect(result[0]?.name).toBe('button');
      expect(result[1]?.id).toBe('text');
      expect(result[1]?.name).toBe('text');
    });

    it('should skip private components', () => {
      const componentFiles = [
        'src/components/_private/index.tsx',
        'src/components/public/index.ts',
      ];

      // Mock path.basename for component names
      vi.mocked(path.basename).mockImplementation(
        (filePath: string): string => {
          if (filePath === 'src/components/_private') return '_private';
          if (filePath === 'src/components/public') return 'public';
          return filePath.split('/').pop() || '';
        },
      );

      // Mock path.dirname for directory paths
      vi.mocked(path.dirname).mockImplementation((filePath: string): string => {
        if (filePath === 'src/components/_private/index.tsx')
          return 'src/components/_private';
        if (filePath === 'src/components/public/index.ts')
          return 'src/components/public';
        return filePath.split('/').slice(0, -1).join('/');
      });

      // Run the test function with skipPrivate option
      const result = discoveryModule.extractComponentMetadata(componentFiles, {
        rootDirs: ['src/components'],
        skipPrivate: true,
      } as discoveryModule.ComponentDiscoveryOptions & {
        skipPrivate: boolean;
      });

      // Check that private component was skipped
      expect(result).toHaveLength(1);
      expect(result[0]?.name).toBe('public');
    });
  });

  describe('discoverComponents', () => {
    it('should combine detection and metadata extraction', () => {
      // Mock the fs functions needed for actual execution
      vi.mocked(fs.existsSync).mockReturnValue(true);
      vi.mocked(fs.readdirSync).mockImplementation(((
        dirPath: PathLike,
        options?:
          | BufferEncoding
          | 'buffer'
          | {
              encoding?: BufferEncoding | 'buffer' | null;
              recursive?: boolean;
              withFileTypes?: boolean;
            }
          | null,
      ): string[] | Buffer[] | fs.Dirent[] => {
        // Handle withFileTypes option
        if (options && typeof options === 'object' && options.withFileTypes) {
          const dirPathStr = dirPath.toString();
          const files =
            dirPathStr === 'src/components'
              ? ['button']
              : dirPathStr === 'src/components/button'
                ? ['index.tsx']
                : [];

          // Convert to Dirent objects
          return files.map(name => {
            const isDir = !name.includes('.');
            return {
              isBlockDevice: () => false,
              isCharacterDevice: () => false,
              isDirectory: () => isDir,
              isFIFO: () => false,
              isFile: () => !isDir,
              isSocket: () => false,
              isSymbolicLink: () => false,
              name,
            } as fs.Dirent;
          });
        }

        // Handle Buffer encoding option
        if (
          (typeof options === 'string' && options === 'buffer') ||
          (typeof options === 'object' && options?.encoding === 'buffer')
        ) {
          return [] as Buffer[];
        }

        // Default string[] return
        const dirPathStr = dirPath.toString();
        if (dirPathStr === 'src/components') {
          return ['button'];
        }
        if (dirPathStr === 'src/components/button') {
          return ['index.tsx'];
        }
        return [];
      }) as typeof fs.readdirSync);

      vi.mocked(fs.statSync).mockImplementation(
        (pathLike: PathLike): fs.Stats => {
          const isDir =
            pathLike.toString() === 'src/components' ||
            pathLike.toString() === 'src/components/button';
          return createStatsMock(isDir) as fs.Stats;
        },
      );

      vi.mocked(path.dirname).mockImplementation((filePath: string): string => {
        if (filePath === 'src/components/button/index.tsx')
          return 'src/components/button';
        return filePath;
      });

      vi.mocked(path.basename).mockImplementation(
        (filePath: string): string => {
          if (filePath === 'src/components/button') return 'button';
          return filePath;
        },
      );

      // Execute the function with real implementation
      const result = discoveryModule.discoverComponents({
        rootDirs: ['src/components'],
      });

      // Verify the result is correct without relying on spies
      expect(result).toEqual([
        {
          filePath: 'src/components/button/index.tsx',
          id: 'button',
          name: 'button',
          path: 'src/components/button',
        },
      ]);
    });
  });
});
