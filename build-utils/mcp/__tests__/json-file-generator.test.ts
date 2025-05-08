/**
 * Tests for the JSON file generator
 */

import * as jsonFileGenerator from 'build-utils/mcp/extractors/json-file-generator';
import type {
  ComponentDocumentation,
  ComponentMetadata,
} from 'build-utils/mcp/types';
import type { PathLike } from 'fs';
import * as fs from 'fs';
// Path module is used in mocks, so import is needed
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock fs module
vi.mock('fs', () => ({
  existsSync: vi.fn(),
  mkdirSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

// Mock path module to return predictable paths
vi.mock('path', () => ({
  basename: vi.fn((p: string) => p.split('/').pop() || ''),
  dirname: vi.fn((p: string) => p.split('/').slice(0, -1).join('/')),
  join: vi.fn((...parts: string[]): string => parts.join('/')),
  relative: vi.fn((from, to) => to),
}));

describe('JSON File Generator', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('createDirectoryStructure', () => {
    it('should create output directory if it does not exist', () => {
      // Mock directory does not exist
      vi.mocked(fs.existsSync).mockReturnValueOnce(false);

      jsonFileGenerator.createDirectoryStructure('/output', true);

      expect(fs.mkdirSync).toHaveBeenCalledWith('/output', { recursive: true });
    });

    it('should not create output directory if it already exists', () => {
      // Mock directory exists
      vi.mocked(fs.existsSync).mockReturnValueOnce(true);

      jsonFileGenerator.createDirectoryStructure('/output', false);

      expect(fs.mkdirSync).not.toHaveBeenCalledWith('/output', {
        recursive: true,
      });
    });

    it('should create components subdirectory if it does not exist', () => {
      // Mock main directory exists but components subdirectory doesn't
      vi.mocked(fs.existsSync)
        .mockReturnValueOnce(true) // Main directory exists
        .mockReturnValueOnce(false); // Components directory doesn't

      jsonFileGenerator.createDirectoryStructure('/output', true);

      expect(fs.mkdirSync).toHaveBeenCalledWith('/output/components', {
        recursive: true,
      });
    });

    it('should handle errors gracefully', () => {
      // Mock error being thrown
      vi.mocked(fs.existsSync).mockImplementation(() => {
        throw new Error('Test error');
      });

      // Spy on console.error
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      // Should not throw error
      expect(() =>
        jsonFileGenerator.createDirectoryStructure('/output', false),
      ).not.toThrow();

      // Should log error
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Error creating directory structure'),
      );
    });
  });

  describe('generateIndexFile', () => {
    it('should generate an index file with component metadata', () => {
      const mockComponents: ComponentMetadata[] = [
        {
          filePath: 'src/components/button/index.tsx',
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
        {
          filePath: 'src/components/text/index.tsx',
          id: 'text',
          name: 'Text',
          path: 'src/components/text',
        },
      ];

      jsonFileGenerator.generateIndexFile(mockComponents, '/output', true);

      // Check that writeFileSync was called properly
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        '/output/index.json',
        expect.any(String),
        'utf-8',
      );

      // Get the written data
      const writtenData = JSON.parse(
        vi.mocked(fs.writeFileSync).mock.calls[0]?.[1] as string,
      );

      // Check structure
      expect(writtenData).toEqual({
        components: expect.arrayContaining([
          expect.objectContaining({
            id: 'button',
            name: 'Button',
            path: 'src/components/button',
          }),
          expect.objectContaining({
            id: 'text',
            name: 'Text',
            path: 'src/components/text',
          }),
        ]),
        totalComponents: 2,
      });
    });

    it('should handle errors gracefully', () => {
      const mockComponents: ComponentMetadata[] = [
        {
          filePath: 'src/components/button/index.tsx',
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
      ];

      // Mock writeFileSync to throw an error
      vi.mocked(fs.writeFileSync).mockImplementation(() => {
        throw new Error('Write error');
      });

      // Spy on console.error
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      // Should not throw error
      expect(() =>
        jsonFileGenerator.generateIndexFile(mockComponents, '/output', false),
      ).not.toThrow();

      // Should log error
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Error generating index file'),
      );
    });
  });

  describe('generateComponentFiles', () => {
    it('should generate individual component files', () => {
      // Mock component documentation
      const mockComponentDocs: ComponentDocumentation[] = [
        {
          comment: {
            description: 'A button component',
            location: {
              endLine: 10,
              filePath: 'src/components/button/index.tsx',
              startLine: 5,
            },
            tags: [{ name: 'example', text: 'Example usage' }],
            text: '/** A button component */',
          },
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
        {
          comment: {
            description: 'A text component',
            location: {
              endLine: 7,
              filePath: 'src/components/text/index.tsx',
              startLine: 3,
            },
            tags: [],
            text: '/** A text component */',
          },
          id: 'text',
          name: 'Text',
          path: 'src/components/text',
        },
      ];

      jsonFileGenerator.generateComponentFiles(
        mockComponentDocs,
        '/output',
        true,
      );

      // Check that writeFileSync was called twice (once per component)
      expect(fs.writeFileSync).toHaveBeenCalledTimes(2);

      // Check first component file
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        '/output/components/button.json',
        expect.any(String),
        'utf-8',
      );

      // Check second component file
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        '/output/components/text.json',
        expect.any(String),
        'utf-8',
      );

      // Verify content of first component file
      const firstComponentData = JSON.parse(
        vi.mocked(fs.writeFileSync).mock.calls[0]?.[1] as string,
      );
      expect(firstComponentData).toEqual({
        description: 'A button component',
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
        tags: [{ name: 'example', text: 'Example usage' }],
      });
    });

    it('should handle components without comments', () => {
      // Mock component without a comment
      const mockComponentDocs: ComponentDocumentation[] = [
        {
          id: 'no-comment',
          name: 'NoComment',
          path: 'src/components/no-comment',
        },
      ];

      jsonFileGenerator.generateComponentFiles(
        mockComponentDocs,
        '/output',
        false,
      );

      // Check that writeFileSync was called
      expect(fs.writeFileSync).toHaveBeenCalledTimes(1);

      // Verify content has empty description and tags
      const componentData = JSON.parse(
        vi.mocked(fs.writeFileSync).mock.calls[0]?.[1] as string,
      );
      expect(componentData).toEqual({
        description: '',
        id: 'no-comment',
        name: 'NoComment',
        path: 'src/components/no-comment',
        tags: [],
      });
    });

    it('should handle errors gracefully', () => {
      const mockComponentDocs: ComponentDocumentation[] = [
        {
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
      ];

      // Mock writeFileSync to throw an error
      vi.mocked(fs.writeFileSync).mockImplementation(() => {
        throw new Error('Write error');
      });

      // Spy on console.error
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      // Should not throw error
      expect(() =>
        jsonFileGenerator.generateComponentFiles(
          mockComponentDocs,
          '/output',
          false,
        ),
      ).not.toThrow();

      // Should log error
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Error generating component files'),
      );
    });

    it('should output description and tags from JSDoc comment if present', () => {
      const docs: ComponentDocumentation[] = [
        {
          comment: {
            description: 'Button component for forms and actions.',
            location: {
              endLine: 10,
              filePath: 'src/components/button/index.tsx',
              startLine: 1,
            },
            tags: [
              { name: 'example', text: '<Button>Click me</Button>' },
              { name: 'param', text: 'variant Button variant' },
            ],
            text: '/** Button component for forms and actions. */',
          },
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
      ];
      jsonFileGenerator.generateComponentFiles(docs, '/output', false);
      const call = vi.mocked(fs.writeFileSync).mock.calls[0];
      if (!call) {
        throw new Error('Expected fs.writeFileSync to be called');
      }
      // Explicitly cast to string to fix the type error
      const content = call[1] as string;
      const written = JSON.parse(content) as {
        description: string;
        id: string;
        name: string;
        path: string;
        tags: Array<{ name: string; text: string }>;
      };
      expect(written.description).toBe(
        'Button component for forms and actions.',
      );
      expect(written.tags).toEqual([
        { name: 'example', text: '<Button>Click me</Button>' },
        { name: 'param', text: 'variant Button variant' },
      ]);
    });

    it('should output empty description and tags if no comment', () => {
      const docs: ComponentDocumentation[] = [
        {
          id: 'divider',
          name: 'Divider',
          path: 'src/components/divider',
        },
      ];
      jsonFileGenerator.generateComponentFiles(docs, '/output', false);
      const call = vi.mocked(fs.writeFileSync).mock.calls[0];
      if (!call) {
        throw new Error('Expected fs.writeFileSync to be called');
      }
      // Explicitly cast to string to fix the type error
      const content = call[1] as string;
      const written = JSON.parse(content) as {
        description: string;
        id: string;
        name: string;
        path: string;
        tags: Array<{ name: string; text: string }>;
      };
      expect(written.description).toBe('');
      expect(written.tags).toEqual([]);
    });

    it('should always output tags as array of objects with name and text', () => {
      const docs: ComponentDocumentation[] = [
        {
          comment: {
            description: 'Text component',
            location: {
              endLine: 5,
              filePath: 'src/components/text/index.tsx',
              startLine: 1,
            },
            tags: [],
            text: '/** Text component */',
          },
          id: 'text',
          name: 'Text',
          path: 'src/components/text',
        },
      ];
      jsonFileGenerator.generateComponentFiles(docs, '/output', false);
      const call = vi.mocked(fs.writeFileSync).mock.calls[0];
      if (!call) {
        throw new Error('Expected fs.writeFileSync to be called');
      }
      // Explicitly cast to string to fix the type error
      const content = call[1] as string;
      const written = JSON.parse(content) as {
        description: string;
        tags: Array<{ name: string; text: string }>;
      };
      expect(Array.isArray(written.tags)).toBe(true);
      written.tags.forEach((tag: { name: string; text: string }) => {
        expect(typeof tag.name).toBe('string');
        expect(typeof tag.text).toBe('string');
      });
    });
  });

  describe('generateDocumentationFiles', () => {
    it('should orchestrate the entire documentation generation process', () => {
      // Set up mocks for fs operations to track what happens
      const mockExistsSync = vi.mocked(fs.existsSync);
      const mockMkdirSync = vi.mocked(fs.mkdirSync);
      const mockWriteFileSync = vi.mocked(fs.writeFileSync);

      // Clear previous mock calls
      mockExistsSync.mockClear();
      mockMkdirSync.mockClear();
      mockWriteFileSync.mockClear();

      // Mock directory existence check responses
      mockExistsSync.mockImplementation((filePath: PathLike) =>
        String(filePath).includes('/components') ? false : false,
      );

      // Mock component docs
      const mockComponentDocs: ComponentDocumentation[] = [
        {
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
      ];

      // Call the function directly
      jsonFileGenerator.generateDocumentationFiles(mockComponentDocs, {
        outputDir: '/output',
        verbose: true,
      });

      // Verify that directories were created
      expect(mockMkdirSync).toHaveBeenCalledWith('/output', {
        recursive: true,
      });
      expect(mockMkdirSync).toHaveBeenCalledWith('/output/components', {
        recursive: true,
      });

      // Verify that files were written
      expect(mockWriteFileSync).toHaveBeenCalledWith(
        '/output/index.json',
        expect.any(String),
        'utf-8',
      );

      expect(mockWriteFileSync).toHaveBeenCalledWith(
        '/output/components/button.json',
        expect.any(String),
        'utf-8',
      );

      // Check content of index file
      const indexFileContent = JSON.parse(
        (mockWriteFileSync.mock.calls.find(call =>
          String(call[0]).endsWith('index.json'),
        )?.[1] as string) || '{}',
      );

      expect(indexFileContent).toEqual({
        components: expect.arrayContaining([
          expect.objectContaining({
            id: 'button',
            name: 'Button',
          }),
        ]),
        totalComponents: 1,
      });

      // Check content of component file
      const buttonFileContent = JSON.parse(
        (mockWriteFileSync.mock.calls.find(call =>
          String(call[0]).endsWith('button.json'),
        )?.[1] as string) || '{}',
      );

      expect(buttonFileContent).toEqual({
        description: '',
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
        tags: [],
      });
    });

    it('should handle errors gracefully', () => {
      // Make fs.existsSync throw an error
      vi.mocked(fs.existsSync).mockImplementation(() => {
        throw new Error('Directory error');
      });

      // Spy on console.error
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      // Mock component docs
      const mockComponentDocs: ComponentDocumentation[] = [
        {
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
      ];

      // Call the function - it should not throw
      jsonFileGenerator.generateDocumentationFiles(mockComponentDocs, {
        outputDir: '/output',
        verbose: false,
      });

      // Check that the error was logged with the expected message
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringMatching(
          /Error creating directory structure.*Directory error/,
        ),
      );

      // Restore console.error
      consoleErrorSpy.mockRestore();
    });
  });
});
