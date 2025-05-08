/**
 * JSON File Generator
 * Generates structured JSON documentation files based on component documentation.
 */

import type {
  ComponentDocumentation,
  ComponentMetadata,
  JsonFileGeneratorOptions,
} from 'build-utils/mcp/types';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Creates the output directory structure for documentation
 * @param outputDir Base output directory
 * @param verbose Whether to use verbose logging
 */
export function createDirectoryStructure(
  outputDir: string,
  verbose: boolean = false,
): void {
  try {
    if (!fs.existsSync(outputDir)) {
      if (verbose) {
        console.log(`Creating output directory: ${outputDir}`);
      }
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Create components subdirectory for individual component files
    const componentsDir = path.join(outputDir, 'components');
    if (!fs.existsSync(componentsDir)) {
      if (verbose) {
        console.log(`Creating components directory: ${componentsDir}`);
      }
      fs.mkdirSync(componentsDir, { recursive: true });
    }
  } catch (error) {
    console.error(`Error creating directory structure: ${error}`);
  }
}

/**
 * Generates an index file listing all components
 * @param components Array of component metadata
 * @param outputDir Output directory
 * @param verbose Whether to use verbose logging
 */
export function generateIndexFile(
  components: ComponentMetadata[],
  outputDir: string,
  verbose: boolean = false,
): void {
  try {
    // Create the index structure with minimal information
    const indexData = {
      components: components.map(component => ({
        id: component.id,
        name: component.name,
        path: component.path,
      })),
      totalComponents: components.length,
    };

    // Write the index file
    const indexFilePath = path.join(outputDir, 'index.json');

    if (verbose) {
      console.log(`Generating index file at: ${indexFilePath}`);
    }

    fs.writeFileSync(
      indexFilePath,
      JSON.stringify(indexData, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error(`Error generating index file: ${error}`);
  }
}

/**
 * Process JSDoc example tags to properly extract both the title and code block.
 * Example formats in JSDoc could be:
 *
 * 1. With title and multiline code:
 *    @example Title
 *    <Component prop="value" />
 *
 * 2. With title and code on same line:
 *    @example Title <Component prop="value" />
 *
 * 3. Single line code without title:
 *    @example <Component prop="value" />
 *
 * @param tags Array of JSDoc tags
 * @returns Array of processed tags with properly structured example content
 */
export function processExampleTags(
  tags: Array<{ name: string; text: string }>,
) {
  return tags.map(tag => {
    // We only need to process example tags
    if (tag.name === 'example') {
      const text = tag.text.trim();

      // Check if it's a valid example tag
      if (!text) {
        console.warn('Empty example tag found');
        return tag;
      }

      // If it contains JSX-like pattern (looks for < followed by an identifier)
      const containsJSX = /<[a-zA-Z][a-zA-Z0-9]*/.test(text);

      if (!containsJSX) {
        console.warn(`Example tag missing code block: "${text}"`);
      }

      // Parse the example to extract title and code when possible
      // This is a simple approach that could be enhanced later
      const lines = text.split('\n');

      // If it's a multiline example, first line might be a title
      if (lines.length > 1) {
        const firstLine = lines[0].trim();
        const hasJSXInFirstLine = /<[a-zA-Z][a-zA-Z0-9]*/.test(firstLine);

        // If first line doesn't contain JSX, it might be a title
        // Future enhancement: could add structured title/code properties
      }
    }

    return tag;
  });
}

/**
 * Generates individual component documentation files
 * @param componentDocs Array of component documentation objects
 * @param outputDir Output directory
 * @param verbose Whether to use verbose logging
 */
export function generateComponentFiles(
  componentDocs: ComponentDocumentation[],
  outputDir: string,
  verbose: boolean = false,
): void {
  try {
    const componentsDir = path.join(outputDir, 'components');

    for (const component of componentDocs) {
      // Create individual component file
      const componentFilePath = path.join(
        componentsDir,
        `${component.id}.json`,
      );

      if (verbose) {
        console.log(`Generating component file at: ${componentFilePath}`);
      }

      // Generate component documentation structure
      const description = component.comment?.description || '';
      const rawTags = Array.isArray(component.comment?.tags)
        ? component.comment.tags
        : [];

      // Process tags to preserve example code blocks
      const tags = processExampleTags(rawTags);

      const componentData = {
        description,
        id: component.id,
        name: component.name,
        path: component.path,
        tags,
      };

      // Write the component file
      fs.writeFileSync(
        componentFilePath,
        JSON.stringify(componentData, null, 2),
        'utf-8',
      );
    }
  } catch (error) {
    console.error(`Error generating component files: ${error}`);
  }
}

/**
 * Generates documentation files based on component information
 * @param componentDocs Array of component documentation objects
 * @param options Generator options
 */
export function generateDocumentationFiles(
  componentDocs: ComponentDocumentation[],
  options: JsonFileGeneratorOptions,
): void {
  try {
    const { outputDir, verbose = false } = options;

    // Create the directory structure
    createDirectoryStructure(outputDir, verbose);

    // Generate the index file with basic component info
    const componentMetadata: ComponentMetadata[] = componentDocs.map(doc => ({
      filePath: doc.path,
      id: doc.id,
      name: doc.name,
      path: doc.path,
    }));

    generateIndexFile(componentMetadata, outputDir, verbose);

    // Generate individual component documentation files
    generateComponentFiles(componentDocs, outputDir, verbose);

    if (verbose) {
      console.log(
        `Documentation generation complete. Files saved to: ${outputDir}`,
      );
    }
  } catch (error) {
    console.error(`Error generating documentation files: ${error}`);
  }
}

export default {
  createDirectoryStructure,
  generateComponentFiles,
  generateDocumentationFiles,
  generateIndexFile,
  processExampleTags,
};
