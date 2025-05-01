/**
 * Component Name Formatting Tests
 * Tests for the component name formatting functionality in the JSDoc extractor
 */

import { extractComponentDocumentation } from 'build-utils/mcp/extractors/jsdoc-extractor';
import type { JSDocExtractorOptions } from 'build-utils/mcp/types';
import type { PathLike, PathOrFileDescriptor } from 'fs';
import * as fs from 'fs';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock fs and path modules
vi.mock('fs');
vi.mock('path');
vi.mock('typescript', () => ({
  ScriptTarget: { Latest: 1 },
  createSourceFile: vi.fn(),
  isClassDeclaration: vi.fn(),
  isFunctionDeclaration: vi.fn(),
  isVariableStatement: vi.fn(),
}));

// Unmock the jsdoc-extractor to test the real implementation
vi.unmock('../extractors/jsdoc-extractor');

describe('Component Name Formatting', () => {
  // Set up mock filesystem
  const mockFileSystem: Record<string, string> = {};

  // Sample component content
  const sampleComponentContent = `
/**
 * Sample component
 */
export const Component = () => {
  return <div>Sample component</div>;
};
`;

  beforeEach(() => {
    vi.resetAllMocks();

    // Mock implementations for fs
    vi.mocked(fs.readFileSync).mockImplementation(
      (filePath: PathOrFileDescriptor): string => {
        if (typeof filePath !== 'string') {
          throw new Error('Invalid file path');
        }
        return mockFileSystem[filePath] || '';
      },
    );

    vi.mocked(fs.existsSync).mockImplementation(
      (filePath: PathLike): boolean => {
        if (typeof filePath !== 'string') {
          return false;
        }
        return filePath in mockFileSystem;
      },
    );

    vi.mocked(fs.readdirSync).mockImplementation(
      (dirPath: PathLike): string[] => {
        if (typeof dirPath !== 'string') {
          return [];
        }

        const prefix = `${dirPath}/`;
        return Object.keys(mockFileSystem)
          .filter(key => key.startsWith(prefix))
          .map(key => key.substring(prefix.length));
      },
    );

    vi.mocked(fs.statSync).mockReturnValue({
      isDirectory: () => true,
    } as unknown as fs.Stats);

    // Mock implementations for path
    vi.mocked(path.join).mockImplementation((...segments: string[]): string =>
      segments.join('/').replace(/\/+/g, '/'),
    );

    vi.mocked(path.dirname).mockImplementation((filePath: string): string => {
      const lastSlashIndex = filePath.lastIndexOf('/');
      return lastSlashIndex > 0 ? filePath.substring(0, lastSlashIndex) : '.';
    });

    vi.mocked(path.basename).mockImplementation((filePath: string): string => {
      const parts = filePath.split('/');
      return parts[parts.length - 1];
    });

    vi.mocked(path.relative).mockImplementation(
      (_from: string, to: string): string => to,
    );

    // Set up the mock file system
    mockFileSystem['/src/components/button/index.tsx'] = sampleComponentContent;
    mockFileSystem['/src/components/connection-map/index.tsx'] =
      sampleComponentContent;
    mockFileSystem['/src/components/drop-zone/index.tsx'] =
      sampleComponentContent;
    mockFileSystem['/src/components/inputField/index.tsx'] =
      sampleComponentContent;
    mockFileSystem['/src/components/multi_select/index.tsx'] =
      sampleComponentContent;
  });

  afterEach(() => {
    Object.keys(mockFileSystem).forEach(key => {
      delete mockFileSystem[key];
    });
  });

  describe('extractComponentDocumentation', () => {
    // Test case for simple component name capitalization
    it('should properly capitalize simple component names', () => {
      const options: JSDocExtractorOptions = {
        componentDirs: ['/src/components'],
        outputDir: '/output',
      };

      // Test with a simple component name (button)
      const componentDir = '/src/components/button';
      const result = extractComponentDocumentation(componentDir, options);

      expect(result).not.toBeNull();
      expect(result?.id).toBe('button');
      expect(result?.name).toBe('Button'); // First letter should be capitalized
    });

    // Test case for kebab-case component names
    it('should convert kebab-case component names to PascalCase', () => {
      const options: JSDocExtractorOptions = {
        componentDirs: ['/src/components'],
        outputDir: '/output',
      };

      // Test with kebab-case component names
      const testCases = [
        {
          dir: '/src/components/connection-map',
          expectedId: 'connection-map',
          expectedName: 'ConnectionMap',
        },
        {
          dir: '/src/components/drop-zone',
          expectedId: 'drop-zone',
          expectedName: 'DropZone',
        },
      ];

      for (const testCase of testCases) {
        const result = extractComponentDocumentation(testCase.dir, options);

        expect(result).not.toBeNull();
        expect(result?.id).toBe(testCase.expectedId);
        expect(result?.name).toBe(testCase.expectedName);
      }
    });

    // Test case for snake_case component names
    it('should convert snake_case component names to PascalCase', () => {
      const options: JSDocExtractorOptions = {
        componentDirs: ['/src/components'],
        outputDir: '/output',
      };

      const componentDir = '/src/components/multi_select';
      const result = extractComponentDocumentation(componentDir, options);

      expect(result).not.toBeNull();
      expect(result?.id).toBe('multi_select');
      expect(result?.name).toBe('MultiSelect');
    });

    // Test that camelCase component names are properly formatted
    it('should properly format camelCase component names', () => {
      const options: JSDocExtractorOptions = {
        componentDirs: ['/src/components'],
        outputDir: '/output',
      };

      const componentDir = '/src/components/inputField';
      const result = extractComponentDocumentation(componentDir, options);

      expect(result).not.toBeNull();
      expect(result?.id).toBe('inputfield');
      expect(result?.name).toBe('InputField');
    });

    // Test edge cases
    it('should handle edge cases of component names', () => {
      const options: JSDocExtractorOptions = {
        componentDirs: ['/src/components'],
        outputDir: '/output',
      };

      // Create some edge case component files
      mockFileSystem['/src/components/a/index.tsx'] = sampleComponentContent; // Single letter
      mockFileSystem['/src/components/a-b-c/index.tsx'] =
        sampleComponentContent; // Multiple hyphens
      mockFileSystem['/src/components/x_y_z/index.tsx'] =
        sampleComponentContent; // Multiple underscores

      const edgeCases = [
        { dir: '/src/components/a', expectedId: 'a', expectedName: 'A' },
        {
          dir: '/src/components/a-b-c',
          expectedId: 'a-b-c',
          expectedName: 'ABC',
        },
        {
          dir: '/src/components/x_y_z',
          expectedId: 'x_y_z',
          expectedName: 'XYZ',
        },
      ];

      for (const testCase of edgeCases) {
        const result = extractComponentDocumentation(testCase.dir, options);

        expect(result).not.toBeNull();
        expect(result?.id).toBe(testCase.expectedId);
        expect(result?.name).toBe(testCase.expectedName);
      }
    });
  });
});
