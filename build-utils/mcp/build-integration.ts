#!/usr/bin/env node
/**
 * MCP Documentation Extractor Build Integration
 * Integrates the MCP documentation extraction process with the main build pipeline.
 */

import { loadConfiguration, validateConfiguration } from './config';
import { extractAllComponentsDocumentation } from './extractors/jsdoc-extractor';
import { generateDocumentationFiles } from './extractors/json-file-generator';
import { logger } from './utils/logger';

/**
 * Main function to run the MCP documentation extraction process during build
 */
async function runMcpExtraction(): Promise<void> {
  logger.info(
    'Starting MCP documentation extraction as part of the build process...',
  );

  const startTime = Date.now();

  // Load and validate configuration
  const config = validateConfiguration(loadConfiguration());

  try {
    // Log the extraction steps
    logger.info(
      `Extracting component documentation from ${config.componentDirs.join(', ')}...`,
    );

    if (config.verbose) {
      logger.debug('Using configuration:', config);
    }

    // Extract documentation from components
    const components = extractAllComponentsDocumentation(config);

    // Generate documentation files
    logger.info(`Generating documentation files in ${config.outputDir}...`);
    generateDocumentationFiles(components, {
      outputDir: config.outputDir,
      verbose: config.verbose,
    });

    const endTime = Date.now();
    const duration = endTime - startTime;
    logger.info(`MCP documentation extraction completed in ${duration}ms`);

    // Output statistics
    const componentsWithComments = components.filter(comp => comp.comment);
    logger.info(`Processed ${components.length} components`);
    logger.info(
      `Components with JSDoc comments: ${componentsWithComments.length}`,
    );
    logger.info(
      `Components without JSDoc comments: ${components.length - componentsWithComments.length}`,
    );
  } catch (error) {
    logger.error('Error during MCP documentation extraction:', error);
    // Don't fail the build if documentation extraction fails
    // This allows the build to continue even if there's an issue with the docs
  } finally {
    // Ensure all logs are flushed
    logger.flush();
  }
}

// Execute the extraction when this script is run directly
if (require.main === module) {
  runMcpExtraction().catch(error => {
    logger.error('Fatal error in MCP extraction:', error);
    logger.flush();
    process.exit(1);
  });
}

// Export for programmatic usage
export { runMcpExtraction };
