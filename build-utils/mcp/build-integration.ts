#!/usr/bin/env node
/**
 * MCP Documentation Extractor Build Integration
 * Integrates the MCP documentation extraction process with the main build pipeline.
 */

import { extractAllComponentsDocumentation } from './extractors/jsdoc-extractor';
import { generateDocumentationFiles } from './extractors/json-file-generator';
import type { JSDocExtractorOptions } from './types';

/**
 * Main function to run the MCP documentation extraction process during build
 */
async function runMcpExtraction(): Promise<void> {
  console.log(
    'Starting MCP documentation extraction as part of the build process...',
  );

  const startTime = Date.now();

  // Configure extraction options
  const options: JSDocExtractorOptions = {
    componentDirs: ['src/components'],
    outputDir: 'public/mcp-data',
    verbose: process.env.MCP_VERBOSE === 'true',
  };

  try {
    // Ensure output directory exists
    console.log(
      `Extracting component documentation from ${options.componentDirs.join(', ')}...`,
    );

    // Extract documentation from components
    const components = extractAllComponentsDocumentation(options);

    // Generate documentation files
    console.log(`Generating documentation files in ${options.outputDir}...`);
    generateDocumentationFiles(components, {
      outputDir: options.outputDir,
      verbose: options.verbose,
    });

    const endTime = Date.now();
    console.log(
      `MCP documentation extraction completed in ${endTime - startTime}ms`,
    );
    console.log(`Processed ${components.length} components`);

    // Output statistics
    const componentsWithComments = components.filter(comp => comp.comment);
    console.log(
      `Components with JSDoc comments: ${componentsWithComments.length}`,
    );
    console.log(
      `Components without JSDoc comments: ${components.length - componentsWithComments.length}`,
    );
  } catch (error) {
    console.error('Error during MCP documentation extraction:', error);
    // Don't fail the build if documentation extraction fails
    // This allows the build to continue even if there's an issue with the docs
  }
}

// Execute the extraction when this script is run directly
if (require.main === module) {
  runMcpExtraction().catch(error => {
    console.error('Fatal error in MCP extraction:', error);
    process.exit(1);
  });
}

// Export for programmatic usage
export { runMcpExtraction };
