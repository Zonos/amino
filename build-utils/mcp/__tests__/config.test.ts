/**
 * MCP Configuration Tests
 */

import type * as fs from 'fs';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

// Mock fs module
const mockFs = {
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
};

// Mock the environment variables
const mockEnv = {
  MCP_COMPONENT_DIRS: undefined as string | undefined,
  MCP_INCLUDE_PRIVATE: undefined as boolean | undefined,
  MCP_OUTPUT_DIR: undefined as string | undefined,
  MCP_VERBOSE: undefined as boolean | undefined,
};

// Import the modules under test
import {
  DEFAULT_CONFIG,
  loadConfiguration,
  validateConfiguration,
} from 'build-utils/mcp/config';

// Store the original console.warn
const originalConsoleWarn = console.warn;

describe('MCP Configuration', () => {
  const originalEnv = { ...process.env };

  // Mock console.warn before each test
  const mockWarn = vi.fn();

  beforeEach(() => {
    // Reset all mocks
    vi.resetAllMocks();
    console.warn = mockWarn;
    mockWarn.mockReset();
    process.env = { ...originalEnv };

    // Reset the mocked environment values
    Object.keys(mockEnv).forEach(key => {
      mockEnv[key as keyof typeof mockEnv] = undefined;
    });
  });

  afterEach(() => {
    process.env = originalEnv;
    console.warn = originalConsoleWarn;
  });

  // Default configuration tests
  describe('loadConfiguration', () => {
    test('should return default config when no config file or env vars exist', () => {
      // Mock file does not exist
      mockFs.existsSync.mockReturnValue(false);

      const config = loadConfiguration(mockFs as unknown as typeof fs, mockEnv);
      expect(config).toEqual(DEFAULT_CONFIG);
    });

    test('should load configuration from file when it exists', () => {
      // Create a custom configuration to be read from file
      const customFileConfig = {
        componentDirs: ['src/custom-components'],
        outputDir: 'custom-output',
        verbose: true,
      };

      // Mock file existence and content
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(customFileConfig));

      // Execute the function
      const config = loadConfiguration(mockFs as unknown as typeof fs, mockEnv);

      // Verify that the fs functions were called correctly
      expect(mockFs.existsSync).toHaveBeenCalled();
      expect(mockFs.readFileSync).toHaveBeenCalled();

      // Expected config should merge the custom properties with defaults
      expect(config).toMatchObject({
        ...customFileConfig,
      });
    });

    test('should load configuration from environment variables', () => {
      // Mock file does not exist
      mockFs.existsSync.mockReturnValue(false);

      // Setup environment variables in the mock
      mockEnv.MCP_VERBOSE = true;
      mockEnv.MCP_OUTPUT_DIR = 'env-output';
      mockEnv.MCP_COMPONENT_DIRS = '["src/env-components"]';

      const config = loadConfiguration(mockFs as unknown as typeof fs, mockEnv);
      expect(config).toMatchObject({
        componentDirs: ['src/env-components'],
        outputDir: 'env-output',
        verbose: true,
      });
    });

    test('should handle non-JSON array in COMPONENT_DIRS env var', () => {
      // Mock file does not exist
      mockFs.existsSync.mockReturnValue(false);

      // Setup environment with a non-JSON string
      mockEnv.MCP_COMPONENT_DIRS = 'src/single-dir';

      const config = loadConfiguration(mockFs as unknown as typeof fs, mockEnv);
      expect(config).toMatchObject({
        componentDirs: ['src/single-dir'],
      });
    });

    test('should handle invalid config file', () => {
      // Setup mocks to trigger the catch block
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockImplementation(() => {
        throw new Error('File read error');
      });

      // Should not throw
      expect(() =>
        loadConfiguration(mockFs as unknown as typeof fs, mockEnv),
      ).not.toThrow();

      // Should return default config
      const config = loadConfiguration(mockFs as unknown as typeof fs, mockEnv);
      expect(config).toEqual(DEFAULT_CONFIG);

      // Should log warning
      expect(mockWarn).toHaveBeenCalledWith(
        expect.stringContaining('Warning: Failed to load MCP config file:'),
      );
    });

    test('should combine config file and env vars with env taking precedence', () => {
      // Setup config file
      const fileConfig = {
        componentDirs: ['src/file-components'],
        outputDir: 'file-output',
        verbose: false,
      };

      // Mock file existence and content
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readFileSync.mockReturnValue(JSON.stringify(fileConfig));

      // Setup env vars in the mock
      mockEnv.MCP_OUTPUT_DIR = 'env-output';

      const config = loadConfiguration(mockFs as unknown as typeof fs, mockEnv);

      // Check that env value overrides file value for outputDir
      expect(config.outputDir).toBe('env-output');

      // Check that file values are used for other properties
      expect(config.componentDirs).toEqual(['src/file-components']);
      expect(config.verbose).toBe(false);
    });
  });

  // Validation tests
  describe('validateConfiguration', () => {
    test('should return default values for empty config', () => {
      const validated = validateConfiguration({});
      expect(validated).toEqual(
        expect.objectContaining({
          componentDirs: ['src/components'],
          outputDir: 'public/mcp-data',
          verbose: false,
        }),
      );
    });

    test('should validate and accept valid values', () => {
      const validated = validateConfiguration({
        componentDirs: ['custom/dir'],
        outputDir: 'custom-output',
        verbose: true,
      });
      expect(validated).toEqual(
        expect.objectContaining({
          componentDirs: ['custom/dir'],
          outputDir: 'custom-output',
          verbose: true,
        }),
      );
    });

    test('should replace invalid componentDirs with defaults', () => {
      const validated = validateConfiguration({
        // @ts-expect-error Testing invalid input
        componentDirs: 'not-an-array',
      });
      expect(validated.componentDirs).toEqual(['src/components']);
    });

    test('should replace invalid outputDir with default', () => {
      // @ts-expect-error Testing invalid input
      const validated = validateConfiguration({ outputDir: 123 });
      expect(validated.outputDir).toEqual('public/mcp-data');

      const validated2 = validateConfiguration({ outputDir: '' });
      expect(validated2.outputDir).toEqual('public/mcp-data');
    });

    test('should replace invalid verbose with default', () => {
      // @ts-expect-error Testing invalid input
      const validated = validateConfiguration({ verbose: 'not-a-boolean' });
      expect(validated.verbose).toBe(false);
    });
  });
});
