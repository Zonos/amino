/**
 * MCP Documentation Extractor Configuration
 * Provides configuration options for the MCP documentation extraction process.
 */

import fs from 'fs';
import path from 'path';

import type { JSDocExtractorOptions } from './types';

/**
 * Default configuration for the MCP documentation extractor
 */
export const DEFAULT_CONFIG: JSDocExtractorOptions = {
  componentDirs: ['src/components'],
  excludeDirs: ['__tests__', '__stories__'],
  filePatterns: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.test.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
  ],
  includePrivate: false,
  outputDir: 'public/mcp-data',
  verbose: false,
};

/**
 * Environment variable names used for configuration
 */
export const ENV_CONFIG = {
  COMPONENT_DIRS: 'MCP_COMPONENT_DIRS',
  INCLUDE_PRIVATE: 'MCP_INCLUDE_PRIVATE',
  OUTPUT_DIR: 'MCP_OUTPUT_DIR',
  VERBOSE: 'MCP_VERBOSE',
};

/**
 * Configuration file name
 */
export const CONFIG_FILE_NAME = 'mcp.config.json';

/**
 * Loads configuration from multiple sources with the following precedence:
 * 1. Environment variables
 * 2. Configuration file (mcp.config.json)
 * 3. Default configuration
 *
 * @returns The merged configuration options
 */
export function loadConfiguration(): JSDocExtractorOptions {
  // Start with default configuration
  const config: JSDocExtractorOptions = { ...DEFAULT_CONFIG };

  // Try to load config from file
  try {
    const configFilePath = path.resolve(process.cwd(), CONFIG_FILE_NAME);
    if (fs.existsSync(configFilePath)) {
      const fileConfig = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'));
      Object.assign(config, fileConfig);
    }
  } catch (error) {
    console.warn(
      `Warning: Failed to load MCP config file: ${error instanceof Error ? error.message : String(error)}`,
    );
  }

  // Override with environment variables if present
  if (process.env[ENV_CONFIG.VERBOSE] !== undefined) {
    config.verbose = process.env[ENV_CONFIG.VERBOSE] === 'true';
  }

  if (process.env[ENV_CONFIG.INCLUDE_PRIVATE] !== undefined) {
    config.includePrivate = process.env[ENV_CONFIG.INCLUDE_PRIVATE] === 'true';
  }

  if (process.env[ENV_CONFIG.OUTPUT_DIR]) {
    config.outputDir = process.env[ENV_CONFIG.OUTPUT_DIR] || config.outputDir;
  }

  if (process.env[ENV_CONFIG.COMPONENT_DIRS]) {
    try {
      const componentDirsValue = process.env[ENV_CONFIG.COMPONENT_DIRS];
      if (componentDirsValue) {
        const parsedDirs = JSON.parse(componentDirsValue) as string[];
        config.componentDirs = Array.isArray(parsedDirs)
          ? parsedDirs
          : [componentDirsValue];
      }
    } catch {
      // If not valid JSON, treat as a single directory
      const componentDirsValue = process.env[ENV_CONFIG.COMPONENT_DIRS];
      if (componentDirsValue) {
        config.componentDirs = [componentDirsValue];
      }
    }
  }

  return config;
}

/**
 * Validates the configuration and returns a validated copy
 * If any values are invalid, they'll be replaced with defaults
 *
 * @param config The configuration object to validate
 * @returns Validated configuration
 */
export function validateConfiguration(
  config: Partial<JSDocExtractorOptions>,
): JSDocExtractorOptions {
  const validated = { ...DEFAULT_CONFIG };

  // Validate componentDirs
  if (Array.isArray(config.componentDirs) && config.componentDirs.length > 0) {
    validated.componentDirs = config.componentDirs;
  }

  // Validate outputDir
  if (typeof config.outputDir === 'string' && config.outputDir.trim() !== '') {
    validated.outputDir = config.outputDir;
  }

  // Validate boolean options
  if (typeof config.verbose === 'boolean') {
    validated.verbose = config.verbose;
  }

  if (typeof config.includePrivate === 'boolean') {
    validated.includePrivate = config.includePrivate;
  }

  // Validate excludeDirs
  if (Array.isArray(config.excludeDirs)) {
    validated.excludeDirs = config.excludeDirs;
  }

  // Validate filePatterns
  if (Array.isArray(config.filePatterns) && config.filePatterns.length > 0) {
    validated.filePatterns = config.filePatterns;
  }

  return validated;
}
