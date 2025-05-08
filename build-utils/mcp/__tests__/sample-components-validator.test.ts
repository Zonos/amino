/**
 * Sample Components Validator Tests
 * Tests to validate extracted documentation against sample data
 */

import { extractAllComponentsDocumentation } from 'build-utils/mcp/extractors/jsdoc-extractor';
import { generateDocumentationFiles } from 'build-utils/mcp/extractors/json-file-generator';
import type { ComponentDocumentation } from 'build-utils/mcp/types';
import * as fs from 'fs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock dependencies
vi.mock('fs', () => ({
  existsSync: vi.fn().mockReturnValue(true),
  mkdirSync: vi.fn(),
  readFileSync: vi.fn(),
  statSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

vi.mock('path', () => ({
  basename: vi.fn(p => p.split('/').pop() || ''),
  dirname: vi.fn(p => p.split('/').slice(0, -1).join('/')),
  join: vi.fn((...parts) => parts.join('/')),
  relative: vi.fn((from, to) => to),
}));

vi.mock('../extractors/jsdoc-extractor', () => ({
  extractAllComponentsDocumentation: vi.fn(),
}));

// Define type for the index data structure for better type checking
type IndexData = {
  components: Array<{
    id: string;
    name: string;
    path: string;
  }>;
  totalComponents: number;
};

// Sample component data for testing
const sampleComponents: ComponentDocumentation[] = [
  {
    comment: {
      description: 'Button component for forms and actions.',
      location: {
        endLine: 30,
        filePath: 'src/components/button/index.tsx',
        startLine: 10,
      },
      tags: [
        {
          name: 'example',
          text: '<Button>Click me</Button>',
        },
        {
          name: 'param',
          text: 'variant Button variant',
        },
        {
          name: 'default',
          text: 'primary',
        },
      ],
      text: '/**\n * Button component for forms and actions.\n * @example <Button>Click me</Button>\n * @param variant Button variant\n * @default primary\n */',
    },
    id: 'button',
    name: 'Button',
    path: 'src/components/button',
  },
  {
    comment: {
      description: 'Text component with various typography styles.',
      location: {
        endLine: 15,
        filePath: 'src/components/text/index.tsx',
        startLine: 5,
      },
      tags: [
        {
          name: 'example',
          text: '<Text size="lg">Hello world</Text>',
        },
      ],
      text: '/**\n * Text component with various typography styles.\n * @example <Text size="lg">Hello world</Text>\n */',
    },
    id: 'text',
    name: 'Text',
    path: 'src/components/text',
  },
  {
    // Component without comments
    id: 'divider',
    name: 'Divider',
    path: 'src/components/divider',
  },
];

describe('Sample Components Documentation Validation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(extractAllComponentsDocumentation).mockReturnValue(
      sampleComponents,
    );
  });

  it('should generate valid documentation files from sample components', () => {
    // Mock file writes to capture data
    const writtenFiles: Record<string, string> = {};
    vi.mocked(fs.writeFileSync).mockImplementation((path, data) => {
      writtenFiles[path.toString()] = data.toString();
    });

    // Generate documentation files
    generateDocumentationFiles(sampleComponents, {
      outputDir: '/output',
      verbose: true,
    });

    // Verify index file was written
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      '/output/index.json',
      expect.any(String),
      'utf-8',
    );

    // Verify component files were written
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      '/output/components/button.json',
      expect.any(String),
      'utf-8',
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      '/output/components/text.json',
      expect.any(String),
      'utf-8',
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      '/output/components/divider.json',
      expect.any(String),
      'utf-8',
    );

    // Validate index file structure
    const indexData = JSON.parse(
      writtenFiles['/output/index.json'] ?? '{}',
    ) as IndexData;

    expect(indexData).toHaveProperty('components');
    expect(indexData).toHaveProperty('totalComponents');
    expect(indexData.totalComponents).toBe(3);
    expect(indexData.components.length).toBe(3);

    // Validate component files
    type ComponentData = {
      description: string;
      id: string;
      name: string;
      path: string;
      tags: Array<{ name: string; text: string }>;
    };

    const buttonData = JSON.parse(
      writtenFiles['/output/components/button.json'] ?? '{}',
    ) as ComponentData;

    expect(buttonData).toHaveProperty('id', 'button');
    expect(buttonData).toHaveProperty('name', 'Button');
    expect(buttonData).toHaveProperty(
      'description',
      'Button component for forms and actions.',
    );
    expect(buttonData).toHaveProperty('tags');
    expect(buttonData.tags).toHaveLength(3);

    // Verify the component without a comment is properly represented
    const dividerData = JSON.parse(
      writtenFiles['/output/components/divider.json'] ?? '{}',
    ) as ComponentData;

    expect(dividerData).toHaveProperty('id', 'divider');
    expect(dividerData).toHaveProperty('name', 'Divider');
    expect(dividerData).toHaveProperty('description', '');
    expect(dividerData).toHaveProperty('tags');
    expect(dividerData.tags).toHaveLength(0);
  });

  it('should validate that generated files maintain data integrity', () => {
    // Mock file writes to capture data
    const writtenFiles: Record<string, string> = {};
    vi.mocked(fs.writeFileSync).mockImplementation((path, data) => {
      writtenFiles[path.toString()] = data.toString();
    });

    // Generate documentation files
    generateDocumentationFiles(sampleComponents, {
      outputDir: '/output',
      verbose: false,
    });

    // Verify component IDs are preserved
    const indexData = JSON.parse(
      writtenFiles['/output/index.json'] ?? '{}',
    ) as IndexData;

    const componentIds = indexData.components.map(c => c.id);
    expect(componentIds).toContain('button');
    expect(componentIds).toContain('text');
    expect(componentIds).toContain('divider');
  });

  it('should correctly handle components without JSDoc comments', () => {
    // Test with a mixture of documented and undocumented components
    const mixedComponents: ComponentDocumentation[] = [
      sampleComponents[0] as ComponentDocumentation, // Button with comment
      {
        id: 'no-comment-1',
        name: 'NoComment1',
        path: 'src/components/no-comment-1',
      },
      {
        id: 'no-comment-2',
        name: 'NoComment2',
        path: 'src/components/no-comment-2',
      },
    ];

    // Mock file writes to capture data
    const writtenFiles: Record<string, string> = {};
    vi.mocked(fs.writeFileSync).mockImplementation((path, data) => {
      writtenFiles[path.toString()] = data.toString();
    });

    // Generate documentation
    generateDocumentationFiles(mixedComponents, {
      outputDir: '/output',
      verbose: false,
    });

    // Get the index data
    const indexData = JSON.parse(
      writtenFiles['/output/index.json'] ?? '{}',
    ) as IndexData;

    // Verify correct component count
    expect(indexData.totalComponents).toBe(3);
    expect(indexData.components.length).toBe(3);

    // Check file for undocumented component
    const noCommentData = JSON.parse(
      writtenFiles['/output/components/no-comment-1.json'] ?? '{}',
    );

    expect(noCommentData).toEqual({
      description: '',
      id: 'no-comment-1',
      name: 'NoComment1',
      path: 'src/components/no-comment-1',
      tags: [],
    });
  });
});
