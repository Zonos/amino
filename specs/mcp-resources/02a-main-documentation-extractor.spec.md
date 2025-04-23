# Main Documentation Extractor Strategy

## Overview

This document outlines the strategy for the main documentation extractor component that orchestrates the entire documentation extraction process for the MCP server implementation. This extractor serves as the entry point and coordination layer for all specialized extractors and handles the overall extraction workflow.

## Approach

We will implement a main documentation extractor that coordinates the work of all specialized extractors (TypeScript interface parser, JSDoc comment extractor, component example extractor, and search index generator). This orchestrator will handle component discovery, extraction pipeline coordination, error management, and output generation.

## Implementation Strategy

Our implementation will focus on creating a modular and extensible orchestration system using the following approach:

1. **Component Discovery**: Scan the component directory structure to identify all components and their relevant files.

2. **Extractor Pipeline**: Coordinate the execution of specialized extractors in the correct sequence.

3. **Data Aggregation**: Combine outputs from specialized extractors into a unified documentation format.

4. **Error Handling**: Implement comprehensive error management that allows the process to continue even if individual component extraction fails.

5. **Progress Reporting**: Provide clear, structured logging of the extraction process.

6. **Output Generation**: Coordinate the creation of output files for use by the MCP server.

## Core Components

### 1. Component Discovery Module

This module will identify all components in the Amino library:

```typescript
import { glob } from 'glob';
import { join, basename, dirname } from 'path';
import { ComponentInfo } from '../types';

export async function discoverComponents(
  basePaths: string[],
  includePatterns: string[] = ['**/*.tsx', '**/*.ts'],
  excludePatterns: string[] = ['**/*.test.tsx', '**/*.stories.tsx', '**/node_modules/**']
): Promise<ComponentInfo[]> {
  const components: ComponentInfo[] = [];
  
  // Process each base path
  for (const basePath of basePaths) {
    // Find component files
    const componentFiles = await findComponentFiles(
      basePath, 
      includePatterns,
      excludePatterns
    );
    
    // Process each file
    for (const file of componentFiles) {
      const componentInfo = await analyzeComponentFile(file);
      if (componentInfo) {
        components.push(componentInfo);
      }
    }
  }
  
  // Remove duplicates and organize
  return organizeComponents(components);
}

async function findComponentFiles(
  basePath: string,
  includePatterns: string[],
  excludePatterns: string[]
): Promise<string[]> {
  const allFiles: string[] = [];
  
  for (const pattern of includePatterns) {
    const files = await glob(join(basePath, pattern), {
      ignore: excludePatterns
    });
    allFiles.push(...files);
  }
  
  return allFiles;
}

async function analyzeComponentFile(filePath: string): Promise<ComponentInfo | null> {
  try {
    // Check if file exports a component
    const hasComponentExport = await hasExportedComponent(filePath);
    
    if (!hasComponentExport) {
      return null;
    }
    
    // Extract component details
    const name = deriveComponentName(filePath);
    const directory = dirname(filePath);
    
    return {
      name,
      filePath,
      directory,
      exportName: await findExportName(filePath),
      hasTypes: await hasTypeDefinitions(filePath)
    };
  } catch (error) {
    console.error(`Error analyzing component file ${filePath}:`, error);
    return null;
  }
}
```

### 2. Extraction Pipeline Coordinator

This module will manage the sequence of extractors:

```typescript
import { ComponentInfo, ComponentDocumentation } from '../types';
import { extractTypescriptInterfaces } from '../extractors/typescript-interface-parser';
import { extractJSDocComments } from '../extractors/jsdoc-extractor';
import { extractComponentExamples } from '../extractors/example-extractor';
import { generateSearchIndex } from '../extractors/search-index-generator';
import { generateJsonFiles } from '../generators/json-file-generator';

export async function runExtractionPipeline(
  components: ComponentInfo[],
  outputDirectory: string,
  options: ExtractionOptions = {}
): Promise<ExtractionResults> {
  const results: ExtractionResults = {
    processedComponents: 0,
    failedComponents: 0,
    errors: [],
    componentDocs: []
  };
  
  console.log(`Starting extraction pipeline for ${components.length} components...`);
  
  // Process each component through the pipeline
  for (const component of components) {
    try {
      console.log(`Processing component: ${component.name}`);
      
      // Run extractors in sequence to build complete documentation
      const typeInfo = await extractTypescriptInterfaces(component.filePath);
      const jsDocInfo = await extractJSDocComments(component.filePath);
      const examples = await extractComponentExamples(component);
      
      // Merge documentation
      const componentDoc = mergeDocumentation(
        component,
        typeInfo,
        jsDocInfo,
        examples
      );
      
      // Add to results
      results.componentDocs.push(componentDoc);
      results.processedComponents++;
      
      console.log(`Successfully processed ${component.name}`);
    } catch (error) {
      console.error(`Failed to process ${component.name}:`, error);
      results.failedComponents++;
      results.errors.push({
        component: component.name,
        error: error instanceof Error ? error.message : String(error)
      });
      
      // Continue with next component unless strict mode is enabled
      if (options.strictMode) {
        throw new Error(`Extraction failed for ${component.name} in strict mode`);
      }
    }
  }
  
  // Generate search index
  console.log('Generating search index...');
  const searchIndex = await generateSearchIndex(results.componentDocs);
  
  // Generate JSON files
  console.log('Generating output files...');
  await generateJsonFiles(results.componentDocs, searchIndex, outputDirectory);
  
  console.log('Extraction pipeline complete.');
  console.log(`Processed: ${results.processedComponents}, Failed: ${results.failedComponents}`);
  
  return results;
}

function mergeDocumentation(
  component: ComponentInfo,
  typeInfo: TypeInfo,
  jsDocInfo: JSDocInfo,
  examples: Example[]
): ComponentDocumentation {
  return {
    id: component.name.toLowerCase(),
    name: component.name,
    description: jsDocInfo.description || '',
    category: determineCategory(component),
    tags: extractTags(jsDocInfo),
    api: {
      props: mergePropsDocumentation(typeInfo.props, jsDocInfo.props),
      interfaces: typeInfo.interfaces,
      types: typeInfo.types
    },
    examples: examples,
    usage: generateUsageExamples(component, examples)
  };
}
```

### 3. Error Management Module

This module will handle errors without failing the entire extraction process:

```typescript
import { ExtractionError } from '../types';

export class ExtractionErrorManager {
  private errors: ExtractionError[] = [];
  private warningCount = 0;
  private options: ErrorManagerOptions;
  
  constructor(options: ErrorManagerOptions = {}) {
    this.options = {
      logErrors: options.logErrors ?? true,
      logWarnings: options.logWarnings ?? true,
      failOnCriticalErrors: options.failOnCriticalErrors ?? false,
      ...options
    };
  }
  
  /**
   * Record an error during extraction
   */
  recordError(
    componentName: string,
    phase: string,
    error: Error | string,
    isCritical = false
  ): void {
    const errorMsg = error instanceof Error ? error.message : error;
    const errorObj: ExtractionError = {
      component: componentName,
      phase,
      message: errorMsg,
      timestamp: new Date().toISOString(),
      isCritical
    };
    
    this.errors.push(errorObj);
    
    if (this.options.logErrors) {
      console.error(`[${phase}] Error in ${componentName}: ${errorMsg}`);
    }
    
    if (isCritical && this.options.failOnCriticalErrors) {
      throw new Error(`Critical error in ${componentName} during ${phase}: ${errorMsg}`);
    }
  }
  
  /**
   * Record a warning during extraction
   */
  recordWarning(
    componentName: string,
    phase: string,
    message: string
  ): void {
    this.warningCount++;
    
    if (this.options.logWarnings) {
      console.warn(`[${phase}] Warning in ${componentName}: ${message}`);
    }
  }
  
  /**
   * Check if there were errors for a specific component
   */
  hasErrorsForComponent(componentName: string): boolean {
    return this.errors.some(e => e.component === componentName);
  }
  
  /**
   * Get all errors for reporting
   */
  getErrors(): ExtractionError[] {
    return this.errors;
  }
  
  /**
   * Get error summary
   */
  getErrorSummary(): ErrorSummary {
    return {
      totalErrors: this.errors.length,
      criticalErrors: this.errors.filter(e => e.isCritical).length,
      totalWarnings: this.warningCount,
      componentErrors: this.getComponentsWithErrors()
    };
  }
  
  /**
   * Get components with errors
   */
  private getComponentsWithErrors(): Record<string, number> {
    const componentErrors: Record<string, number> = {};
    
    for (const error of this.errors) {
      componentErrors[error.component] = (componentErrors[error.component] || 0) + 1;
    }
    
    return componentErrors;
  }
}
```

### 4. Progress Reporting Module

This module will provide structured logging of the extraction process:

```typescript
export class ExtractionLogger {
  private startTime: number;
  private lastUpdateTime: number;
  private totalComponents: number;
  private processedComponents = 0;
  
  constructor(totalComponents: number) {
    this.startTime = Date.now();
    this.lastUpdateTime = this.startTime;
    this.totalComponents = totalComponents;
  }
  
  /**
   * Log component processing start
   */
  startComponentProcessing(component: string): void {
    console.log(`[${this.formatTime()}] Processing component: ${component}`);
  }
  
  /**
   * Log component processing completion
   */
  completeComponentProcessing(component: string): void {
    this.processedComponents++;
    console.log(`[${this.formatTime()}] Completed component: ${component}`);
    this.logProgress();
  }
  
  /**
   * Log component processing failure
   */
  failComponentProcessing(component: string, reason: string): void {
    this.processedComponents++;
    console.error(`[${this.formatTime()}] Failed component: ${component} - ${reason}`);
    this.logProgress();
  }
  
  /**
   * Log extraction phase
   */
  startPhase(phase: string): void {
    console.log(`\n[${this.formatTime()}] Starting phase: ${phase}`);
  }
  
  /**
   * Log completion of extraction phase
   */
  completePhase(phase: string): void {
    console.log(`[${this.formatTime()}] Completed phase: ${phase}\n`);
  }
  
  /**
   * Log progress update
   */
  private logProgress(): void {
    const now = Date.now();
    const elapsedSinceUpdate = now - this.lastUpdateTime;
    
    // Only log progress periodically or for every 10% progress
    if (elapsedSinceUpdate > 5000 || this.processedComponents % Math.max(1, Math.floor(this.totalComponents / 10)) === 0) {
      const percentage = Math.floor((this.processedComponents / this.totalComponents) * 100);
      console.log(`[${this.formatTime()}] Progress: ${percentage}% (${this.processedComponents}/${this.totalComponents})`);
      this.lastUpdateTime = now;
    }
  }
  
  /**
   * Format current time
   */
  private formatTime(): string {
    const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    return `${minutes}m${seconds}s`;
  }
  
  /**
   * Log final summary
   */
  logSummary(results: ExtractionResults): void {
    const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    console.log('\n==== Extraction Summary ====');
    console.log(`Duration: ${minutes}m${seconds}s`);
    console.log(`Total Components: ${this.totalComponents}`);
    console.log(`Successfully Processed: ${results.processedComponents}`);
    console.log(`Failed: ${results.failedComponents}`);
    
    if (results.errors.length > 0) {
      console.log('\nErrors:');
      results.errors.forEach(error => {
        console.log(`- ${error.component}: ${error.error}`);
      });
    }
    
    console.log('\n==========================');
  }
}
```

### 5. Incremental Processing Module

This module will optimize extraction by only processing changed components:

```typescript
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';
import { ComponentInfo } from '../types';

export class IncrementalProcessor {
  private cacheDirectory: string;
  private fingerprintCache: Record<string, string> = {};
  private hasLoadedCache = false;
  
  constructor(cacheDirectory: string) {
    this.cacheDirectory = cacheDirectory;
    
    // Ensure cache directory exists
    if (!existsSync(cacheDirectory)) {
      mkdirSync(cacheDirectory, { recursive: true });
    }
  }
  
  /**
   * Determine if a component needs processing
   */
  async needsProcessing(component: ComponentInfo): Promise<boolean> {
    // Load cache if not already loaded
    if (!this.hasLoadedCache) {
      await this.loadCache();
    }
    
    // Generate fingerprint for the component
    const currentFingerprint = await this.generateFingerprint(component);
    
    // Check if fingerprint has changed
    const hasChanged = currentFingerprint !== this.fingerprintCache[component.name];
    
    // Update cache with current fingerprint
    this.fingerprintCache[component.name] = currentFingerprint;
    
    return hasChanged;
  }
  
  /**
   * Save the cache to disk
   */
  async saveCache(): Promise<void> {
    const cachePath = join(this.cacheDirectory, 'fingerprint-cache.json');
    
    try {
      writeFileSync(
        cachePath,
        JSON.stringify(this.fingerprintCache, null, 2),
        'utf8'
      );
    } catch (error) {
      console.error('Failed to save fingerprint cache:', error);
    }
  }
  
  /**
   * Load the cache from disk
   */
  private async loadCache(): Promise<void> {
    const cachePath = join(this.cacheDirectory, 'fingerprint-cache.json');
    
    if (existsSync(cachePath)) {
      try {
        const cacheContent = readFileSync(cachePath, 'utf8');
        this.fingerprintCache = JSON.parse(cacheContent);
      } catch (error) {
        console.error('Failed to load fingerprint cache:', error);
        this.fingerprintCache = {};
      }
    }
    
    this.hasLoadedCache = true;
  }
  
  /**
   * Generate a fingerprint for a component
   */
  private async generateFingerprint(component: ComponentInfo): Promise<string> {
    // Read the component file
    const fileContent = readFileSync(component.filePath, 'utf8');
    
    // Create a hash of the file content
    const hash = createHash('md5')
      .update(fileContent)
      .digest('hex');
    
    // Look for associated files
    const relatedFiles = await this.findRelatedFiles(component);
    
    // If there are related files, include their content in the fingerprint
    if (relatedFiles.length > 0) {
      for (const file of relatedFiles) {
        try {
          const relatedContent = readFileSync(file, 'utf8');
          hash.concat('-').concat(
            createHash('md5')
              .update(relatedContent)
              .digest('hex')
          );
        } catch (error) {
          // Ignore errors reading related files
        }
      }
    }
    
    return hash;
  }
  
  /**
   * Find related files for a component
   */
  private async findRelatedFiles(component: ComponentInfo): Promise<string[]> {
    // Find type definitions, stories, etc.
    // This is a simplified implementation that would need to be expanded
    return [];
  }
}
```

## Integration with Specialized Extractors

The main documentation extractor will integrate with the specialized extractors as follows:

1. **TypeScript Interface Parser**:
   - Extract type information and interfaces
   - Process through type normalization
   - Support for generic types and complex interfaces

2. **JSDoc Comment Extractor**:
   - Extract JSDoc comments and associate with components and props
   - Parse JSDoc tags and formats
   - Process markdown and examples

3. **Component Example Extractor**:
   - Discover story files for components
   - Extract examples and variants
   - Process props and code examples

4. **Search Index Generator**:
   - Generate search indices from processed documentation
   - Create specialized indices for efficient lookup
   - Optimize for common search patterns

## Configuration Options

The main extractor will support configuration to customize extraction behavior:

```typescript
export interface ExtractionConfig {
  // Source directories to scan for components
  sourceDirs: string[];
  
  // Output directory for documentation files
  outputDir: string;
  
  // Components to include (glob patterns)
  includePatterns?: string[];
  
  // Components to exclude (glob patterns)
  excludePatterns?: string[];
  
  // Enable/disable incremental processing
  incremental?: boolean;
  
  // Cache directory for incremental processing
  cacheDir?: string;
  
  // Error handling options
  errorHandling?: {
    // Fail on critical errors
    failOnCritical?: boolean;
    
    // Log all errors
    logErrors?: boolean;
    
    // Log warnings
    logWarnings?: boolean;
  };
  
  // Output options
  output?: {
    // Generate search index
    generateSearchIndex?: boolean;
    
    // Include examples
    includeExamples?: boolean;
    
    // Generate pretty JSON
    prettyJson?: boolean;
  };
  
  // Performance options
  performance?: {
    // Run extractors in parallel (experimental)
    parallelExtraction?: boolean;
    
    // Batch size for parallel processing
    batchSize?: number;
  };
}
```

## Command Line Interface

The main extractor will provide a command-line interface for easy integration with build processes:

```typescript
import { Command } from 'commander';
import { runExtractionPipeline } from './extraction-pipeline';

export function setupCommandLineInterface() {
  const program = new Command();
  
  program
    .name('mcp-extractor')
    .description('Extract component documentation for MCP server')
    .version('1.0.0');
  
  program
    .option('-s, --source <directories...>', 'Source directories to scan', ['src/components'])
    .option('-o, --output <directory>', 'Output directory', 'public/mcp-data')
    .option('-i, --include <patterns...>', 'Include patterns')
    .option('-e, --exclude <patterns...>', 'Exclude patterns')
    .option('--incremental', 'Enable incremental processing', false)
    .option('--cache-dir <directory>', 'Cache directory', '.mcp-cache')
    .option('--no-search-index', 'Disable search index generation')
    .option('--no-examples', 'Exclude component examples')
    .option('--pretty-json', 'Generate pretty (indented) JSON', false)
    .option('--fail-on-error', 'Fail on critical errors', false)
    .option('--parallel', 'Enable parallel extraction (experimental)', false)
    .option('--batch-size <number>', 'Batch size for parallel processing', '5')
    .action(async (options) => {
      try {
        const config: ExtractionConfig = {
          sourceDirs: options.source,
          outputDir: options.output,
          includePatterns: options.include,
          excludePatterns: options.exclude,
          incremental: options.incremental,
          cacheDir: options.cacheDir,
          errorHandling: {
            failOnCritical: options.failOnError,
            logErrors: true,
            logWarnings: true
          },
          output: {
            generateSearchIndex: options.searchIndex !== false,
            includeExamples: options.examples !== false,
            prettyJson: options.prettyJson
          },
          performance: {
            parallelExtraction: options.parallel,
            batchSize: parseInt(options.batchSize, 10)
          }
        };
        
        console.log('Starting documentation extraction with config:', config);
        
        const results = await runExtractionPipeline(config);
        
        console.log(`\nExtraction complete. Processed ${results.processedComponents} components.`);
        
        if (results.failedComponents > 0) {
          console.error(`⚠️ ${results.failedComponents} components failed extraction.`);
          process.exit(1);
        }
        
        process.exit(0);
      } catch (error) {
        console.error('Extraction failed:', error);
        process.exit(1);
      }
    });
  
  return program;
}
```

## Next Steps

1. Implement the component discovery module in `build-utils/mcp/extractors/component-discovery.ts`
2. Create the extraction pipeline coordinator
3. Implement the error management system
4. Add progress reporting
5. Develop the incremental processing system
6. Integrate with specialized extractors
7. Add tests for the main documentation extractor

## References

- [TypeScript Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)
- [Node.js File System API](https://nodejs.org/api/fs.html)