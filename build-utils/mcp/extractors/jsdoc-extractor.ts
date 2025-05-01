/**
 * JSDoc Comment Extractor
 * Extracts JSDoc comments from component files with focus on top-level component comments.
 */

import type {
  ComponentDocumentation,
  JSDocComment,
  JSDocExtractorOptions,
  JSDocTag,
} from 'build-utils/mcp/types';
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

/**
 * Parses a JSDoc comment string into description and tags
 * @param commentText The raw JSDoc comment text
 * @returns Parsed JSDoc comment with description and tags
 */
function parseJSDocComment(commentText: string): {
  description: string;
  tags: JSDocTag[];
} {
  // Clean up the comment text by removing the /** and */ markers and leading asterisks
  const cleanComment = commentText
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map(line => line.trim().replace(/^\* ?/, ''))
    .join('\n')
    .trim();

  // Extract tags and description
  const tagRegex = /^@(\w+)(?:\s+(.*))?$/gm;
  const tags: JSDocTag[] = [];
  let match;
  let lastIndex = 0;

  // Find all tags in the comment
  while ((match = tagRegex.exec(cleanComment)) !== null) {
    // If this is the first tag, the text before it is the description
    if (lastIndex === 0) {
      lastIndex = match.index;
    }

    // Add the tag to the list
    tags.push({
      name: match[1] ?? '',
      text: match[2] || '',
    });
  }

  // Extract description (everything before the first tag)
  const description =
    lastIndex > 0 ? cleanComment.substring(0, lastIndex).trim() : cleanComment;

  return { description, tags };
}

/**
 * Recursively finds JSDoc comments in a TypeScript source file
 * @param node Current AST node
 * @param comments Array to collect JSDoc comments
 * @param filePath Path to the source file
 */
function findJSDocComments(
  node: ts.Node,
  comments: JSDocComment[],
  filePath: string,
): void {
  // Get JSDoc comments for the current node
  const jsDocs = node
    .getFullText()
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    .match(/\/\*\*[\s\S]*?\*\//g);

  // If JSDoc comments exist and the node is a component declaration (function, class, or variable),
  // extract the comments
  if (
    jsDocs &&
    (ts.isFunctionDeclaration(node) ||
      ts.isClassDeclaration(node) ||
      ts.isVariableStatement(node))
  ) {
    for (const jsDoc of jsDocs) {
      const { description, tags } = parseJSDocComment(jsDoc);

      // Get the location of the comment in the source file
      const startLinePos = node.getFullText().indexOf(jsDoc);
      const startLine =
        node.getFullText().substring(0, startLinePos).split('\n').length - 1;
      const endLine = startLine + jsDoc.split('\n').length - 1;

      comments.push({
        description,
        location: {
          endLine,
          filePath: path.relative(process.cwd(), filePath),
          startLine,
        },
        tags,
        text: jsDoc,
      });
    }
  }

  // Recursively process children of the current node
  node.forEachChild(child => findJSDocComments(child, comments, filePath));
}

/**
 * Extracts JSDoc comments from a component file
 * @param filePath Path to the component file
 * @param verbose Whether to use verbose logging
 * @returns Extracted JSDoc comments
 */
export function extractJSDocComments(
  filePath: string,
  verbose: boolean = false,
): JSDocComment[] {
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true,
    );

    const comments: JSDocComment[] = [];

    // Log the extraction process if verbose is enabled
    if (verbose) {
      console.log(`Extracting JSDoc comments from ${filePath}`);
    }

    // Find all JSDoc comments in the file
    findJSDocComments(sourceFile, comments, filePath);

    return comments;
  } catch (error) {
    console.error(`Error extracting JSDoc comments from ${filePath}:`, error);
    return [];
  }
}

/**
 * Extracts component documentation with JSDoc comments
 * @param componentDir Directory containing component files
 * @param options Extraction options
 * @returns Component documentation with JSDoc comments
 */
export function extractComponentDocumentation(
  componentDir: string,
  options: JSDocExtractorOptions,
): ComponentDocumentation | null {
  try {
    // Extract component name from directory path
    const componentName = path.basename(componentDir);

    // Find the main component file using various common naming patterns
    const possibleFilePatterns = [
      // Index files (most common pattern)
      'index.tsx',
      'index.ts',
      // Files named after the component (CamelCase)
      `${componentName}.tsx`,
      `${componentName}.ts`,
      // Files with lowercase names
      `${componentName.toLowerCase()}.tsx`,
      `${componentName.toLowerCase()}.ts`,
      // Files with dash-case names
      `${componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}.tsx`,
      `${componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}.ts`,
    ];

    let mainFile: string | null = null;

    // Try each possible file pattern
    for (const pattern of possibleFilePatterns) {
      const filePath = path.join(componentDir, pattern);
      if (fs.existsSync(filePath)) {
        mainFile = filePath;
        break;
      }
    }

    // If no file found, search through the files
    if (!mainFile && fs.existsSync(componentDir)) {
      const files = fs.readdirSync(componentDir);
      const tsxFiles = files.filter(
        file => file.endsWith('.tsx') || file.endsWith('.ts'),
      );

      // Check if there's any TypeScript file (excluding test and story files)
      const mainTsxFile = tsxFiles.find(
        file =>
          !file.includes('.test.') &&
          !file.includes('.spec.') &&
          !file.includes('.stories.'),
      );

      if (mainTsxFile) {
        mainFile = path.join(componentDir, mainTsxFile);
      }
    }

    if (!mainFile) {
      if (options.verbose) {
        console.warn(`No main file found for component: ${componentName}`);
      }
      return null;
    }

    // Extract JSDoc comments from the main file
    const comments = extractJSDocComments(mainFile, options.verbose);

    // For Phase 1, we focus on the top-level component comment only (usually the first JSDoc comment)
    const topLevelComment = comments.length > 0 ? comments[0] : undefined;

    // Correctly format the component name: use PascalCase for name, lowercase for ID
    // Convert kebab-case or snake_case to PascalCase
    const formattedComponentName = componentName
      .split(/[-_]/)
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join('');

    return {
      comment: topLevelComment,
      filePath: path.relative(process.cwd(), mainFile),
      id: componentName.toLowerCase(),
      name: formattedComponentName,
      path: path.relative(process.cwd(), componentDir),
    };
  } catch (error) {
    console.error(
      `Error extracting documentation for component in ${componentDir}:`,
      error,
    );
    return null;
  }
}

/**
 * Scans component directories and extracts JSDoc documentation for all components
 * @param options Extraction options
 * @returns Array of component documentation
 */
export function extractAllComponentsDocumentation(
  options: JSDocExtractorOptions,
): ComponentDocumentation[] {
  const allComponents: ComponentDocumentation[] = [];

  for (const componentDir of options.componentDirs) {
    if (!fs.existsSync(componentDir)) {
      console.warn(`Component directory does not exist: ${componentDir}`);
      continue;
    }

    // Get all subdirectories in the component directory
    const subdirs = fs
      .readdirSync(componentDir)
      .map(name => path.join(componentDir, name))
      .filter(dir => fs.statSync(dir).isDirectory());

    // Process each component directory
    for (const dir of subdirs) {
      const componentDocs = extractComponentDocumentation(dir, options);
      if (componentDocs) {
        allComponents.push(componentDocs);
      }
    }
  }

  return allComponents;
}

export default {
  extractAllComponentsDocumentation,
  extractComponentDocumentation,
  extractJSDocComments,
};
