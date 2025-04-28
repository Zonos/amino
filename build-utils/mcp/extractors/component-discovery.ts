/**
 * Component Discovery Module
 * Scans directories to discover component files and collect metadata.
 */

import type { ComponentMetadata } from 'build-utils/mcp/types';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Options for component discovery
 */
export type ComponentDiscoveryOptions = {
  /**
   * Directories to exclude from scanning
   */
  excludeDirs?: string[];

  /**
   * File patterns to identify component files (default: ['index.ts', 'index.tsx'])
   */
  filePatterns?: string[];

  /**
   * Root directories to scan for components
   */
  rootDirs: string[];

  /**
   * Whether to use verbose logging
   */
  verbose?: boolean;
};

/**
 * Default options for component discovery
 */
const DEFAULT_OPTIONS: Partial<ComponentDiscoveryOptions> = {
  excludeDirs: ['__tests__', '__stories__', 'node_modules'],
  filePatterns: ['index.ts', 'index.tsx'],
  verbose: false,
};

/**
 * Scans directories recursively to find component files
 * @param dir Directory to scan
 * @param options Discovery options
 * @returns Array of file paths
 */
function scanDirectoryRecursive(
  dir: string,
  options: ComponentDiscoveryOptions,
): string[] {
  try {
    if (!fs.existsSync(dir)) {
      if (options.verbose) {
        console.warn(`Directory does not exist: ${dir}`);
      }
      return [];
    }

    const entries = fs.readdirSync(dir);
    const componentFiles: string[] = [];

    for (const entry of entries) {
      const entryPath = path.join(dir, entry);
      const stats = fs.statSync(entryPath);

      if (stats.isDirectory()) {
        // Skip excluded directories
        if (options.excludeDirs?.includes(entry)) {
          continue;
        }
        // Recursively scan subdirectories
        componentFiles.push(...scanDirectoryRecursive(entryPath, options));
      } else if (options.filePatterns?.includes(entry)) {
        // Found a potential component file
        componentFiles.push(entryPath);
      }
    }

    return componentFiles;
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error);
    return [];
  }
}

/**
 * Detects components in the given directories
 * @param options Discovery options
 * @returns Array of detected component file paths
 */
export function detectComponentFiles(
  options: ComponentDiscoveryOptions,
): string[] {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const componentFiles: string[] = [];

  for (const rootDir of mergedOptions.rootDirs) {
    if (mergedOptions.verbose) {
      console.log(`Scanning directory: ${rootDir}`);
    }

    componentFiles.push(...scanDirectoryRecursive(rootDir, mergedOptions));
  }

  return componentFiles;
}

/**
 * Extracts basic component metadata from component files
 * @param componentFiles Array of component file paths
 * @param options Discovery options
 * @returns Array of component metadata
 */
export function extractComponentMetadata(
  componentFiles: string[],
  options: ComponentDiscoveryOptions,
): ComponentMetadata[] {
  const componentMetadata: ComponentMetadata[] = [];
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

  for (const filePath of componentFiles) {
    try {
      // Extract component directory (parent of the index file)
      const componentDir = path.dirname(filePath);

      // Component name is the directory name
      const componentName = path.basename(componentDir);

      // Skip if name starts with underscore (private components)
      if (componentName.startsWith('_')) {
        continue;
      }

      componentMetadata.push({
        filePath: path.relative(process.cwd(), filePath),
        id: componentName.toLowerCase(),
        name: componentName,
        path: path.relative(process.cwd(), componentDir),
      });

      if (mergedOptions.verbose) {
        console.log(`Found component: ${componentName} at ${filePath}`);
      }
    } catch (error) {
      console.error(`Error extracting metadata from ${filePath}:`, error);
    }
  }

  return componentMetadata;
}

/**
 * Discovers components and extracts their metadata
 * @param options Discovery options
 * @returns Array of component metadata
 */
export function discoverComponents(
  options: ComponentDiscoveryOptions,
): ComponentMetadata[] {
  // Explicitly call each function to ensure proper spy tracking in tests
  const componentFiles = detectComponentFiles(options);
  const metadata = extractComponentMetadata(componentFiles, options);
  return metadata;
}

export default {
  detectComponentFiles,
  discoverComponents,
  extractComponentMetadata,
};
