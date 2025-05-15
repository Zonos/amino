# MCP Documentation Extraction Process

## Overview

The MCP (Model Context Protocol) documentation extraction process automatically extracts component documentation from the Amino component library and transforms it into structured JSON files that can be served by the MCP server. This document explains how the extraction process works and how to configure it.

## Extraction Pipeline

The extraction process follows these steps:

1. **Configuration Loading**: The system loads configuration from environment variables, configuration files, and defaults.
2. **Component Discovery**: The system scans component directories to identify all available components.
3. **JSDoc Extraction**: For each component, JSDoc comments are extracted from the component files.
4. **Documentation Transformation**: The extracted data is transformed into a standardized format.
5. **JSON File Generation**: The transformed documentation is written to JSON files in the specified output directory.

## Running the Extraction

The extraction process is integrated with the build pipeline and can be run in several ways:

### As Part of the Build Process

The extraction runs automatically during the Storybook build process via the build integration script. No manual action is required.

### Manually via CLI

For testing or development purposes, you can run the extraction manually:

```bash
# Using the CLI directly
npx ts-node build-utils/mcp/extract-docs.ts --dir=src/components --output=public/mcp-data --verbose

# Using the build integration script
npx ts-node build-utils/mcp/build-integration.ts
```

## Configuration Options

The extraction process can be configured through:

1. **Environment Variables**:
   - `MCP_COMPONENT_DIRS`: Comma-separated list of component directories
   - `MCP_OUTPUT_DIR`: Directory to write documentation files to
   - `MCP_VERBOSE`: Enable verbose logging (true/false)
   - `MCP_INCLUDE_PRIVATE`: Include private components in documentation (true/false)

2. **Configuration File** (`mcp.config.json`):
   ```json
   {
     "componentDirs": ["src/components"],
     "outputDir": "public/mcp-data",
     "verbose": false,
     "includePrivate": false,
     "excludeDirs": ["__tests__", "__stories__"],
     "filePatterns": [
       "**/*.{ts,tsx}",
       "!**/*.d.ts",
       "!**/*.test.{ts,tsx}",
       "!**/*.stories.{ts,tsx}"
     ]
   }
   ```

3. **Default Configuration**:
   - Component directories: `src/components`
   - Output directory: `public/mcp-data`
   - Excluded directories: `__tests__`, `__stories__`
   - Verbose mode: disabled
   - Private components: excluded

## Output File Structure

The extraction process generates the following files:

```
public/mcp-data/
  ├── index.json            # List of all components with basic metadata
  └── components/
      ├── button.json       # Documentation for the Button component
      ├── card.json         # Documentation for the Card component
      └── ...               # One file per component
```

## JSDoc Format Requirements

For optimal documentation extraction, components should have JSDoc comments in the following format:

```typescript
/**
 * Component description goes here.
 * Multiple paragraphs are supported.
 * 
 * @example Basic usage
 * <ComponentName>Example content</ComponentName>
 * 
 * @example With props
 * <ComponentName prop="value">
 *   Example with props
 * </ComponentName>
 */
export const ComponentName = (props: ComponentProps): JSX.Element => {
  // Component implementation
};
```

## Error Handling

The extraction process is designed to be resilient and will:

- Continue processing other components if one component fails
- Log warnings for components missing JSDoc comments
- Provide detailed error output in verbose mode
- Not fail the build if documentation extraction encounters non-critical errors

## Logging

The extraction process provides detailed logging to help identify issues:

- Summary of extracted components
- Count of components with and without JSDoc comments
- Processing time and performance metrics
- Detailed error information when failures occur

## Extending the Extraction Process

The extraction process is designed to be modular and extensible. Future phases will add support for:

- TypeScript interface parsing for accurate prop type documentation
- Enhanced example extraction and rendering
- Search index generation
- Component categorization and organization