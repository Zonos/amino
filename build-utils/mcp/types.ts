/**
 * MCP Documentation Types
 * This file contains TypeScript types for the MCP documentation extraction process.
 */

/**
 * Represents extracted JSDoc comment information
 */
export type JSDocComment = {
  /** Description part of the JSDoc comment (text before any tags) */
  description: string;
  /** Location of the comment in the source file */
  location: SourceLocation;
  /** JSDoc tags extracted from the comment */
  tags: JSDocTag[];
  /** The full text of the JSDoc comment */
  text: string;
};

/**
 * Represents a specific JSDoc tag like @param, @default, @example, etc.
 */
export type JSDocTag = {
  /** The tag name without the @ symbol */
  name: string;
  /** The text content associated with this tag */
  text: string;
  /** The parsed value of this tag (if applicable) */
  value?: unknown;
};

/**
 * Represents a source file location (for tracking where comments were found)
 */
export type SourceLocation = {
  /** End line number (0-based) */
  endLine: number;
  /** File path relative to the project root */
  filePath: string;
  /** Start line number (0-based) */
  startLine: number;
};

/**
 * Represents basic component metadata
 */
export type ComponentMetadata = {
  /** Path to the component's main file */
  filePath: string;
  /** Component ID (typically kebab-case version of name) */
  id: string;
  /** Component name */
  name: string;
  /** Path to the component directory */
  path: string;
};

/**
 * Represents a component and its associated JSDoc comments
 */
export type ComponentDocumentation = {
  /** Top-level component JSDoc comment */
  comment?: JSDocComment;
  /** Path to the component's main file */
  filePath?: string;
  /** Component ID (typically kebab-case version of name) */
  id: string;
  /** Component name */
  name: string;
  /** Path to the component directory */
  path: string;
};

/**
 * Represents property information from an interface definition
 */
export type PropertyDefinition = {
  /** Default value of the property from @default tag */
  defaultValue?: string;
  /** Description of the property from JSDoc comment */
  description: string;
  /** Property name */
  name: string;
  /** Whether the property is required or optional */
  required: boolean;
  /** Type of the property as a string */
  type: string;
};

/**
 * Represents an interface definition extracted from a component file
 */
export type InterfaceDefinition = {
  /** Description of the interface from JSDoc comment */
  description: string;
  /** List of interfaces that this interface extends */
  extends: string[];
  /** Interface name */
  name: string;
  /** Properties defined in the interface */
  properties: PropertyDefinition[];
};

/**
 * Represents a component and its associated interface
 */
export type ComponentWithInterface = ComponentMetadata & {
  /** The component's interface definition, or null if not found */
  interface: InterfaceDefinition | null;
};

/**
 * Configuration options for the JSDoc extractor
 */
export type JSDocExtractorOptions = {
  /** Directory paths to scan for components */
  componentDirs: string[];
  /** Directories to exclude from component scanning */
  excludeDirs?: string[];
  /** File patterns to include/exclude (glob patterns) */
  filePatterns?: string[];
  /** Whether to include components marked as @private */
  includePrivate?: boolean;
  /** Output directory for documentation files */
  outputDir: string;
  /** Whether to use verbose logging */
  verbose?: boolean;
};

/**
 * Configuration options for the JSON file generator
 */
export type JsonFileGeneratorOptions = {
  /** Output directory for documentation files */
  outputDir: string;
  /** Whether to use verbose logging */
  verbose?: boolean;
};
