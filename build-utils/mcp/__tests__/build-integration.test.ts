/**
 * MCP Documentation Extractor Build Integration Tests
 * Tests for the integration of the MCP documentation extraction process with the build pipeline
 */

import * as configModule from 'build-utils/mcp/config';
import { afterEach, beforeEach, describe, expect, vi } from 'vitest';

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

// Interface for the mocked environment client
type MockedEnvironmentClient = {
  mcpBuildEnv: {
    MCP_COMPONENT_DIRS?: string;
    MCP_INCLUDE_PRIVATE?: boolean;
    MCP_LOG_CONSOLE?: boolean;
    MCP_LOG_FILE?: string;
    MCP_LOG_LEVEL?: string;
    MCP_OUTPUT_DIR?: string;
    MCP_VERBOSE?: boolean;
  };
};

// Mock the environment.client module
vi.mock('../../../pages/environment.client', () => {
  const originalModule = vi.importActual('../../../pages/environment.client');
  return {
    ...(originalModule as object),
    mcpBuildEnv: {
      MCP_COMPONENT_DIRS: undefined,
      MCP_INCLUDE_PRIVATE: undefined,
      MCP_LOG_CONSOLE: undefined,
      MCP_LOG_FILE: undefined,
      MCP_LOG_LEVEL: undefined,
      MCP_OUTPUT_DIR: undefined,
      MCP_VERBOSE: undefined,
    },
  };
});

// Import the mocked module
import * as envClientModule from 'pages/environment.client';

// Store original environment variables
const originalEnv = { ...process.env };

describe('MCP Build Integration', () => {
  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };

    // Reset the mocked environment.client module for each test
    const mockedEnvClient =
      envClientModule as unknown as MockedEnvironmentClient;
    mockedEnvClient.mcpBuildEnv = {
      MCP_COMPONENT_DIRS: undefined,
      MCP_INCLUDE_PRIVATE: undefined,
      MCP_LOG_CONSOLE: undefined,
      MCP_LOG_FILE: undefined,
      MCP_LOG_LEVEL: undefined,
      MCP_OUTPUT_DIR: undefined,
      MCP_VERBOSE: undefined,
    };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  test('should run extraction with default configuration', async () => {
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

  test('should respect custom configuration', async () => {
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

  test('should handle errors gracefully without failing the build', async () => {
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

  test('should handle file generation errors gracefully', async () => {
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

  test('should calculate the correct component statistics', async () => {
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

  test('should use environment variables to override configuration', async () => {
    // Set environment variables to override configuration
    process.env.MCP_COMPONENT_DIRS = 'src/env-components,lib/env-components';
    process.env.MCP_OUTPUT_DIR = 'env-output';
    process.env.MCP_VERBOSE = 'true';

    // Update the mocked environment client values
    const mockedEnvClient =
      envClientModule as unknown as MockedEnvironmentClient;
    mockedEnvClient.mcpBuildEnv.MCP_COMPONENT_DIRS =
      process.env.MCP_COMPONENT_DIRS;
    mockedEnvClient.mcpBuildEnv.MCP_OUTPUT_DIR = process.env.MCP_OUTPUT_DIR;
    mockedEnvClient.mcpBuildEnv.MCP_VERBOSE =
      process.env.MCP_VERBOSE === 'true';

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
