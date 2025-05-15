# Amino MCP Server Documentation

## Overview

The Model Context Protocol (MCP) server is a system that extracts and serves documentation for Amino components. It consists of two main parts:

1. **Documentation Extraction**: A build-time process that generates structured JSON documentation files from component source code
2. **API Server**: A NextJS-based server that provides access to the documentation through standardized endpoints

## Architecture

The MCP system is deployed as a separate Vercel project from the main Storybook:

```
                     ┌───────────────────┐
                     │                   │
                     │  Amino Codebase   │
                     │                   │
                     └───────────────────┘
                              │
                 ┌────────────┴────────────┐
                 │                         │
    ┌────────────▼─────────┐    ┌─────────▼────────────┐
    │                      │    │                      │
    │  Storybook Project   │    │    MCP Project       │
    │  (Vercel Deploy)     │    │    (Vercel Deploy)   │
    │                      │    │                      │
    └──────────────────────┘    └──────────────────────┘
                                          │
                                          │
                              ┌───────────▼───────────┐
                              │                       │
                              │ Documentation JSON    │
                              │ + API Routes          │
                              │                       │
                              └───────────────────────┘
```

- Documentation is extracted during the MCP build process
- Static JSON files are generated in the `public/mcp-data/` directory
- These files are served by NextJS API routes in the `pages/api/mcp/` directory

## Setup & Configuration

### Configuration File

The MCP server is configured using a `mcp.config.json` file in the project root. You can copy the example configuration:

```bash
cp mcp.config.example.json mcp.config.json
```

Configuration options include:

| Option | Description | Default |
|--------|-------------|---------|
| `componentDirs` | Directories to scan for components | `['src/components']` |
| `excludeDirs` | Directories to exclude from scanning | `['__tests__', '__stories__']` |
| `filePatterns` | File patterns to include | `['**/*.{ts,tsx}', '!**/*.d.ts', '!**/*.test.{ts,tsx}', '!**/*.stories.{ts,tsx}']` |
| `includePrivate` | Whether to include private components | `false` |
| `outputDir` | Directory for generated documentation | `'public/mcp-data'` |
| `verbose` | Enable verbose logging | `false` |

### Environment Variables

You can also configure the MCP server using environment variables:

| Variable | Description |
|----------|-------------|
| `MCP_COMPONENT_DIRS` | Comma-separated list of component directories |
| `MCP_INCLUDE_PRIVATE` | Whether to include private components (`true`/`false`) |
| `MCP_OUTPUT_DIR` | Directory for generated documentation |
| `MCP_VERBOSE` | Enable verbose logging (`true`/`false`) |

## Usage

### Documentation Extraction

To extract documentation from your components:

```bash
pnpm extract:mcp-data
```

This command:
1. Scans your component directories based on configuration
2. Extracts JSDoc comments and TypeScript type information
3. Generates JSON documentation files in the configured output directory

### Running the MCP Server

To run the MCP server locally:

```bash
# First extract the documentation (if not already done)
pnpm extract:mcp-data

# Then run the server
pnpm mcp:server
```

The server will start on port 3000, and you can access the API endpoints at:
- Health check: http://localhost:3000/api/mcp/v1/health
- Component listing: http://localhost:3000/api/mcp/v1/components
- Component details: http://localhost:3000/api/mcp/v1/components/[component-id]
- Type information: http://localhost:3000/api/mcp/v1/types

### Building for Production

For production deployment, use the combined command that handles both documentation extraction and NextJS build:

```bash
pnpm build:mcp
```

This runs:
1. `pnpm extract:mcp-data` - Extract component documentation
2. `pnpm build:mcp-server` - Build the NextJS application

## Deploying to Vercel

When setting up the MCP server as a separate Vercel project:

1. Create a new Vercel project specifically for the MCP server
2. Set the build command: `pnpm build:mcp`
3. Set the output directory: `.next`

Do not include MCP documentation extraction in the Storybook project's build process, as it's now handled separately.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/mcp/v1/health` | GET | Health check endpoint |
| `/api/mcp/v1/components` | GET | List all components |
| `/api/mcp/v1/components/[id]` | GET | Get specific component details |
| `/api/mcp/v1/types` | GET | Get type definitions |

## File Structure

The generated documentation follows this structure:

```
public/mcp-data/
  index.json                 # List of all components with basic metadata
  components/
    button.json              # Full documentation for the Button component
    input.json               # Full documentation for the Input component
    ...
  categories/
    inputs.json              # Components in the "inputs" category
    layout.json              # Components in the "layout" category
    ...
  search/
    index.json               # Search index for component documentation
```

## Implementation Details

The MCP server consists of several key modules:

1. **JSDoc Extractor**: Extracts documentation from JSDoc comments in component files
2. **TypeScript Interface Parser**: Extracts type information from component interfaces
3. **JSON File Generator**: Generates standardized JSON documentation files
4. **NextJS API Routes**: Serves the documentation through RESTful endpoints

For more details on the implementation, refer to the specification files in the `specs/mcp-resources/` directory.

## Troubleshooting

### Common Issues

1. **Missing Documentation**: Ensure components have proper JSDoc comments
2. **Build Failures**: Check the console output for error messages
3. **API Errors**: Verify that documentation files exist in the output directory

### Logs

The MCP server uses a structured logger that can be enabled with verbose mode:

```json
{
  "verbose": true
}
```

## References

- [MCP Architecture Specification](../../specs/mcp-resources/01-architecture.spec.md)
- [JSON File Generator Strategy](../../specs/mcp-resources/02f-json-file-generator.spec.md)
- [API Endpoints Specification](../../specs/mcp-resources/04-api-endpoints.spec.md)