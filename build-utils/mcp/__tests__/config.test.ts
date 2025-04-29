import {
  DEFAULT_CONFIG,
  ENV_CONFIG,
  loadConfiguration,
  validateConfiguration,
} from 'build-utils/mcp/config';
import fs from 'fs';
import type path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock fs and path
vi.mock('fs');
vi.mock('path', async () => {
  const actual = await vi.importActual<typeof path>('path');
  return {
    ...actual,
    resolve: vi.fn().mockImplementation((...args) => args.join('/')),
  };
});

// Mock environment variables
const originalEnv = { ...process.env };

describe('config', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.resetAllMocks();
    process.env = { ...originalEnv };

    // Mock filesystem operations
    vi.mocked(fs.existsSync).mockReturnValue(false);
    vi.mocked(fs.readFileSync).mockReturnValue('{}');
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('loadConfiguration', () => {
    it('should return default configuration when no overrides exist', () => {
      const config = loadConfiguration();
      expect(config).toEqual(DEFAULT_CONFIG);
    });

    it('should load configuration from file when available', () => {
      const mockConfig = {
        componentDirs: ['src/custom-components'],
        outputDir: 'custom-output',
      };

      vi.mocked(fs.existsSync).mockReturnValue(true);
      vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(mockConfig));

      const config = loadConfiguration();

      expect(config.componentDirs).toEqual(mockConfig.componentDirs);
      expect(config.outputDir).toEqual(mockConfig.outputDir);
      expect(config.verbose).toEqual(DEFAULT_CONFIG.verbose); // Should retain default
    });

    it('should load configuration from environment variables', () => {
      process.env[ENV_CONFIG.VERBOSE] = 'true';
      process.env[ENV_CONFIG.OUTPUT_DIR] = 'env-output';
      process.env[ENV_CONFIG.COMPONENT_DIRS] = '["src/env-components"]';

      const config = loadConfiguration();

      expect(config.verbose).toBe(true);
      expect(config.outputDir).toBe('env-output');
      expect(config.componentDirs).toEqual(['src/env-components']);
    });

    it('should handle non-JSON array in COMPONENT_DIRS env var', () => {
      process.env[ENV_CONFIG.COMPONENT_DIRS] = 'src/single-dir';

      const config = loadConfiguration();

      expect(config.componentDirs).toEqual(['src/single-dir']);
    });

    it('should override file config with env vars when both exist', () => {
      // Setup file config
      const fileConfig = {
        componentDirs: ['src/file-components'],
        outputDir: 'file-output',
        verbose: true,
      };

      vi.mocked(fs.existsSync).mockReturnValue(true);
      vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(fileConfig));

      // Setup env vars
      process.env[ENV_CONFIG.OUTPUT_DIR] = 'env-output';

      const config = loadConfiguration();

      // Env var should override file config
      expect(config.outputDir).toBe('env-output');

      // File config should override default
      expect(config.componentDirs).toEqual(fileConfig.componentDirs);
      expect(config.verbose).toBe(fileConfig.verbose);
    });

    it('should handle errors when reading config file', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true);
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error('File read error');
      });

      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const config = loadConfiguration();

      expect(consoleWarnSpy).toHaveBeenCalled();
      expect(config).toEqual(DEFAULT_CONFIG);
    });
  });

  describe('validateConfiguration', () => {
    it('should return default config for empty input', () => {
      const config = validateConfiguration({});
      expect(config).toEqual(DEFAULT_CONFIG);
    });

    it('should validate componentDirs properly', () => {
      // Valid case
      expect(
        validateConfiguration({ componentDirs: ['src/valid'] }).componentDirs,
      ).toEqual(['src/valid']);

      // Invalid cases
      expect(
        validateConfiguration({ componentDirs: [] }).componentDirs,
      ).toEqual(DEFAULT_CONFIG.componentDirs);
      expect(
        validateConfiguration({
          componentDirs: null as unknown as string[] | undefined,
        }).componentDirs,
      ).toEqual(DEFAULT_CONFIG.componentDirs);
    });

    it('should validate outputDir properly', () => {
      // Valid case
      expect(validateConfiguration({ outputDir: 'valid' }).outputDir).toBe(
        'valid',
      );

      // Invalid cases
      expect(validateConfiguration({ outputDir: '' }).outputDir).toBe(
        DEFAULT_CONFIG.outputDir,
      );
      expect(validateConfiguration({ outputDir: '   ' }).outputDir).toBe(
        DEFAULT_CONFIG.outputDir,
      );
      expect(
        validateConfiguration({
          outputDir: null as unknown as string | undefined,
        }).outputDir,
      ).toBe(DEFAULT_CONFIG.outputDir);
    });

    it('should validate boolean options properly', () => {
      expect(validateConfiguration({ verbose: true }).verbose).toBe(true);
      expect(
        validateConfiguration({ includePrivate: true }).includePrivate,
      ).toBe(true);

      expect(
        validateConfiguration({
          verbose: 'yes' as unknown as boolean | undefined,
        }).verbose,
      ).toBe(DEFAULT_CONFIG.verbose);
      expect(
        validateConfiguration({
          includePrivate: 'yes' as unknown as boolean | undefined,
        }).includePrivate,
      ).toBe(DEFAULT_CONFIG.includePrivate);
    });

    it('should validate array options properly', () => {
      // Valid cases
      const testExcludeDirs = ['test1', 'test2'];
      expect(
        validateConfiguration({ excludeDirs: testExcludeDirs }).excludeDirs,
      ).toEqual(testExcludeDirs);

      const testFilePatterns = ['*.ts', '*.tsx'];
      expect(
        validateConfiguration({ filePatterns: testFilePatterns }).filePatterns,
      ).toEqual(testFilePatterns);

      // Invalid case for filePatterns (empty array)
      expect(validateConfiguration({ filePatterns: [] }).filePatterns).toEqual(
        DEFAULT_CONFIG.filePatterns,
      );
    });
  });
});
