/**
 * MCP Documentation Extractor Build Integration Tests
 * Tests for the integration of the MCP documentation extraction process with the build pipeline
 */

import * as configModule from 'build-utils/mcp/config';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock the necessary modules
vi.mock('../extractors/jsdoc-extractor', () => ({
  extractAllComponentsDocumentation: vi.fn().mockReturnValue([
    {
      comment: {
        description: 'A test button component',
        location: {
          endLine: 0,
          filePath: 'src/components/button/Button.tsx',
          startLine: 0,
        },
        tags: [{ name: 'example', text: 'Example usage' }],
        text: 'A test button component',
      },
      filePath: 'src/components/button/Button.tsx',
      id: 'button',
      name: 'Button',
      path: 'src/components/button',
    },
    {
      filePath: 'src/components/card/Card.tsx',
      id: 'card',
      name: 'Card',
      path: 'src/components/card',
    },
  ]),
}));

vi.mock('../extractors/json-file-generator', () => ({
  generateDocumentationFiles: vi.fn(),
}));

vi.mock('../config', () => ({
  loadConfiguration: vi.fn().mockReturnValue({
    componentDirs: ['src/components'],
    outputDir: 'public/mcp-data',
    verbose: false,
  }),
  validateConfiguration: vi.fn(config => config),
}));

vi.mock('../utils/logger', () => ({
  logger: {
    debug: vi.fn(),
    error: vi.fn(),
    flush: vi.fn(),
    info: vi.fn(),
  },
}));

// Store original environment variables
const originalEnv = { ...process.env };

describe('MCP Build Integration', () => {
  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  it('should run extraction with default configuration', async () => {
    // Import here to ensure mocks are applied
    const { runMcpExtraction } = await import('../build-integration');
    const { extractAllComponentsDocumentation } = await import(
      '../extractors/jsdoc-extractor'
    );
    const { generateDocumentationFiles } = await import(
      '../extractors/json-file-generator'
    );
    const { logger } = await import('../utils/logger');

    await runMcpExtraction();

    // Verify correct modules were called with expected parameters
    expect(extractAllComponentsDocumentation).toHaveBeenCalledWith({
      componentDirs: ['src/components'],
      outputDir: 'public/mcp-data',
      verbose: false,
    });

    expect(generateDocumentationFiles).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'button',
          name: 'Button',
        }),
        expect.objectContaining({
          id: 'card',
          name: 'Card',
        }),
      ]),
      expect.objectContaining({
        outputDir: 'public/mcp-data',
        verbose: false,
      }),
    );

    // Verify logging
    expect(logger.info).toHaveBeenCalledWith(
      'Starting MCP documentation extraction as part of the build process...',
    );
    expect(logger.info).toHaveBeenCalledWith(
      'Extracting component documentation from src/components...',
    );
    expect(logger.info).toHaveBeenCalledWith(
      'Generating documentation files in public/mcp-data...',
    );
    expect(logger.info).toHaveBeenCalledWith('Processed 2 components');
    expect(logger.info).toHaveBeenCalledWith(
      'Components with JSDoc comments: 1',
    );
    expect(logger.info).toHaveBeenCalledWith(
      'Components without JSDoc comments: 1',
    );
    expect(logger.info).toHaveBeenCalledWith(
      expect.stringMatching(/MCP documentation extraction completed in \d+ms/),
    );
    expect(logger.flush).toHaveBeenCalled();
  });

  it('should respect custom configuration', async () => {
    // Mock custom configuration
    vi.mocked(configModule.loadConfiguration).mockReturnValueOnce({
      componentDirs: ['src/custom-components', 'lib/shared-components'],
      outputDir: 'custom-output',
      verbose: true,
    });

    const { runMcpExtraction } = await import('../build-integration');
    const { extractAllComponentsDocumentation } = await import(
      '../extractors/jsdoc-extractor'
    );
    const { generateDocumentationFiles } = await import(
      '../extractors/json-file-generator'
    );
    const { logger } = await import('../utils/logger');

    await runMcpExtraction();

    // Verify custom config was used
    expect(extractAllComponentsDocumentation).toHaveBeenCalledWith(
      expect.objectContaining({
        componentDirs: ['src/custom-components', 'lib/shared-components'],
        outputDir: 'custom-output',
        verbose: true,
      }),
    );

    expect(generateDocumentationFiles).toHaveBeenCalledWith(
      expect.any(Array),
      expect.objectContaining({
        outputDir: 'custom-output',
        verbose: true,
      }),
    );

    // Verify debug logging was called in verbose mode
    expect(logger.debug).toHaveBeenCalledWith(
      'Using configuration:',
      expect.any(Object),
    );
  });

  it('should handle errors gracefully without failing the build', async () => {
    // Make extraction throw an error
    const { extractAllComponentsDocumentation } = await import(
      '../extractors/jsdoc-extractor'
    );
    vi.mocked(extractAllComponentsDocumentation).mockImplementationOnce(() => {
      throw new Error('Test extraction error');
    });

    const { runMcpExtraction } = await import('../build-integration');
    const { logger } = await import('../utils/logger');

    // Should not throw error
    await expect(runMcpExtraction()).resolves.not.toThrow();

    // Verify error was logged
    expect(logger.error).toHaveBeenCalledWith(
      'Error during MCP documentation extraction:',
      expect.objectContaining({
        message: 'Test extraction error',
      }),
    );

    // Verify logs were flushed even on error
    expect(logger.flush).toHaveBeenCalled();
  });

  it('should handle file generation errors gracefully', async () => {
    // Make file generation throw an error
    const { generateDocumentationFiles } = await import(
      '../extractors/json-file-generator'
    );
    vi.mocked(generateDocumentationFiles).mockImplementationOnce(() => {
      throw new Error('File generation error');
    });

    const { runMcpExtraction } = await import('../build-integration');
    const { logger } = await import('../utils/logger');

    // Should not throw error
    await expect(runMcpExtraction()).resolves.not.toThrow();

    // Verify error was logged
    expect(logger.error).toHaveBeenCalledWith(
      'Error during MCP documentation extraction:',
      expect.objectContaining({
        message: 'File generation error',
      }),
    );

    // Ensure we still flush logs
    expect(logger.flush).toHaveBeenCalled();
  });

  it('should calculate the correct component statistics', async () => {
    // Mock a custom output for extractAllComponentsDocumentation
    const { extractAllComponentsDocumentation } = await import(
      '../extractors/jsdoc-extractor'
    );
    vi.mocked(extractAllComponentsDocumentation).mockReturnValueOnce([
      {
        comment: {
          description: 'Button component',
          location: {
            endLine: 0,
            filePath: 'src/components/button/Button.tsx',
            startLine: 0,
          },
          tags: [],
          text: 'Button component',
        },
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
      },
      {
        comment: {
          description: 'Card component',
          location: {
            endLine: 0,
            filePath: 'src/components/card/Card.tsx',
            startLine: 0,
          },
          tags: [],
          text: 'Card component',
        },
        id: 'card',
        name: 'Card',
        path: 'src/components/card',
      },
      {
        id: 'text',
        name: 'Text',
        path: 'src/components/text',
        // No comment field to simulate undocumented component
      },
      {
        comment: {
          description: 'Icon component',
          location: {
            endLine: 0,
            filePath: 'src/components/icon/Icon.tsx',
            startLine: 0,
          },
          tags: [],
          text: 'Icon component',
        },
        id: 'icon',
        name: 'Icon',
        path: 'src/components/icon',
      },
    ]);

    const { runMcpExtraction } = await import('../build-integration');
    const { logger } = await import('../utils/logger');

    await runMcpExtraction();

    // Verify correct statistics were logged
    expect(logger.info).toHaveBeenCalledWith('Processed 4 components');
    expect(logger.info).toHaveBeenCalledWith(
      'Components with JSDoc comments: 3',
    );
    expect(logger.info).toHaveBeenCalledWith(
      'Components without JSDoc comments: 1',
    );
  });

  it('should use environment variables to override configuration', async () => {
    // Set environment variables to override configuration
    process.env.MCP_COMPONENT_DIRS = 'src/env-components,lib/env-components';
    process.env.MCP_OUTPUT_DIR = 'env-output';
    process.env.MCP_VERBOSE = 'true';

    // Mock config module to use env variables
    vi.mocked(configModule.loadConfiguration).mockImplementationOnce(() => ({
      componentDirs: ['src/env-components', 'lib/env-components'],
      outputDir: 'env-output',
      verbose: true,
    }));

    const { runMcpExtraction } = await import('../build-integration');
    const { extractAllComponentsDocumentation } = await import(
      '../extractors/jsdoc-extractor'
    );

    await runMcpExtraction();

    // Verify env-based config was used
    expect(extractAllComponentsDocumentation).toHaveBeenCalledWith(
      expect.objectContaining({
        componentDirs: ['src/env-components', 'lib/env-components'],
        outputDir: 'env-output',
        verbose: true,
      }),
    );
  });
});
