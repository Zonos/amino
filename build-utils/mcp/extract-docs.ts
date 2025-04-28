#!/usr/bin/env node
/**
 * MCP Documentation Extractor CLI
 * Command-line tool for extracting JSDoc comments from Amino components.
 *
 * Usage:
 * ts-node extract-docs.ts --dir=src/components [--output=output-dir] [--verbose]
 */

import * as fs from 'fs';
import * as path from 'path';

import { extractAllComponentsDocumentation } from './extractors/jsdoc-extractor';
import type { JSDocExtractorOptions } from './types';

// Parse command line arguments
const args = process.argv.slice(2);
const options: JSDocExtractorOptions = {
  componentDirs: ['src/components'],
  outputDir: 'public/mcp-data',
  verbose: false,
};

// Process command line arguments
for (const arg of args) {
  if (arg.startsWith('--dir=')) {
    options.componentDirs = [arg.substring('--dir='.length)];
  } else if (arg.startsWith('--output=')) {
    options.outputDir = arg.substring('--output='.length);
  } else if (arg === '--verbose') {
    options.verbose = true;
  } else if (arg === '--help') {
    console.log(`
MCP Documentation Extractor CLI

Extracts JSDoc comments from Amino components and generates MCP documentation.

Usage:
  ts-node extract-docs.ts [options]

Options:
  --dir=<path>      Directory containing component folders (default: src/components)
  --output=<path>   Output directory for documentation (default: public/mcp-data)
  --verbose         Enable verbose logging
  --help            Show this help message
`);
    process.exit(0);
  }
}

/**
 * Main function to run the extraction process
 */
async function main(): Promise<void> {
  console.log(`MCP Documentation Extractor`);
  console.log(`Component directories: ${options.componentDirs.join(', ')}`);
  console.log(`Output directory: ${options.outputDir}`);

  // Ensure output directory exists
  if (!fs.existsSync(options.outputDir)) {
    fs.mkdirSync(options.outputDir, { recursive: true });
  }

  // Extract documentation for all components
  console.log(`\nExtracting JSDoc comments from components...`);
  const startTime = Date.now();
  const components = extractAllComponentsDocumentation(options);
  const endTime = Date.now();

  console.log(
    `\nExtracted documentation for ${components.length} components in ${endTime - startTime}ms`,
  );

  // Write documentation to output directory for now, focusing on top-level comments only
  const componentsWithComments = components.filter(comp => comp.comment);
  const componentsWithoutComments = components.filter(comp => !comp.comment);

  console.log(
    `\nComponents with JSDoc comments: ${componentsWithComments.length}`,
  );
  console.log(
    `Components without JSDoc comments: ${componentsWithoutComments.length}`,
  );

  // Output some sample documentation if verbose
  if (options.verbose && componentsWithComments.length > 0) {
    console.log('\nSample component documentation:');
    console.log(JSON.stringify(componentsWithComments[0], null, 2));
  }

  // Save the extracted documentation
  const outputFile = path.join(options.outputDir, 'components.json');
  fs.writeFileSync(outputFile, JSON.stringify(components, null, 2));
  console.log(`\nDocumentation saved to ${outputFile}`);
}

// Run the main function
main().catch(error => {
  console.error('Error extracting documentation:', error);
  process.exit(1);
});
