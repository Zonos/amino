# MCP Documentation Extraction Process

## Overview

This document describes the Model Context Protocol (MCP) documentation extraction process implemented in the Amino component library. This process extracts documentation from component files during the build process and generates standardized JSON documentation files that can be consumed by MCP clients.

## Extraction Pipeline

The extraction process follows these steps:

1. **Configuration Loading**: Load configuration options from environment variables or `mcp.config.json` file
2. **Component Discovery**: Find component directories based on configuration
3. **JSDoc Extraction**: Parse component files to extract JSDoc comments
4. **JSON Generation**: Convert extracted documentation to JSON format
5. **File Output**: Write documentation to output directory

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
   If no configuration is provided, the system uses these defaults:
   - Component directories: `src/components`
   - Output directory: `public/mcp-data`
   - Verbose mode: `false`
   - Include private components: `false`

## Output File Structure

The extraction process generates the following files:

1. **Index File** (`index.json`):
   - List of all components with basic metadata
   - Component count
   - Generation timestamp

2. **Component Files** (`[component-id].json`):
   - Component metadata (name, path, etc.)
   - Component description from JSDoc
   - JSDoc tags (examples, parameters, etc.)
   - Generation timestamp

## JSDoc Format Requirements

For components to be properly documented, they should include JSDoc comments with the following format:

```typescript
/**
 * Component description goes here.
 * This can be multi-line and supports basic markdown.
 *
 * @example
 * <Button variant="primary">Click Me</Button>
 *
 * @param {string} variant - Button variant (primary, secondary, etc.)
 * @default "primary"
 */
```

## Error Handling

The extraction process is designed to be resilient and will:

1. Skip components with missing or invalid JSDoc comments
2. Log warnings for incomplete or malformed documentation
3. Continue processing even if individual components fail
4. Never fail the build process due to documentation extraction issues

## Logging

When running in verbose mode, the extraction process will log:

1. Configuration details
2. Component discovery progress
3. Extraction status for each component
4. Generation of output files
5. Processing statistics (total components, documented components, etc.)

## Extending the Extraction Process

To extend the extraction process with new functionality:

1. Add new extractors in the `extractors/` directory
2. Extend the `types.ts` file with new data structures
3. Update the `build-integration.ts` file to include the new extractors
4. Add tests for the new functionality in the `__tests__/` directory