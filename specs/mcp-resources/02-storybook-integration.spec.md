# Storybook Integration Specification

## Overview

This document outlines the approach for integrating the MCP (Model Context Protocol) server with our Storybook deployment, allowing AI agents to access component documentation.

## MCP Tool Selection

After evaluating available options, we've selected **m-yoshiro/storybook-mcp** as our foundation with custom extensions (hybrid approach). The key factors that influenced this decision include:

### Advantages of m-yoshiro/storybook-mcp

1. **Documentation Focused** - Provides dedicated tools for component listing and discovery that align with our documentation needs:
   - `list-components`: Lists all available components from Storybook
   - `find-components-by-name`: Finds components based on a keyword with partial match support

2. **Build Integration** - Works with static JSON files generated during the Storybook build process, which fits our architecture model of pre-generating documentation.

3. **Simplicity** - Offers a straightforward implementation that requires minimal configuration while being extensible.

4. **Compatibility** - Works well with our deployment strategy on Vercel as it can be integrated into serverless functions.

### Alternative Considered: dannyhw/storybook-mcp

While dannyhw/storybook-mcp was another viable option, it was designed more specifically for React Native Storybook with a focus on retrieving stories rather than comprehensive component documentation. Its single `get-stories` tool provides less functionality compared to our documentation requirements.

## Integration Approach

Our integration will use the base m-yoshiro/storybook-mcp implementation as a dependency with the following enhancements:

1. **Documentation Extraction** - Add support for extracting TypeScript interfaces and JSDoc comments during the build process.

2. **Custom JSON Structure** - Generate JSON output that matches our specified documentation format with component metadata, props, and examples.

3. **Enhanced Search** - Implement more sophisticated search capabilities beyond the basic component name matching.

4. **API Routes** - Create TypeScript-based Vercel API routes that implement the MCP protocol for accessing our documentation.

## Build-time Integration

The MCP server will integrate with the Storybook build process as follows:

1. A custom documentation extractor script will run as a pre-build step in our Storybook build process.

2. The extractor will:
   - Parse component directories
   - Extract TypeScript interfaces
   - Extract JSDoc comments
   - Generate structured documentation

3. The documentation will be written to static JSON files in the public directory, following our specified file structure.

4. These files will be included in the Storybook build output for deployment to Vercel.

## Runtime Integration

At runtime, the MCP server will integrate with Storybook as follows:

1. Vercel API routes will implement the MCP protocol
2. Routes will read from the static JSON files generated during build
3. MCP clients will connect to the API routes to access component documentation without authentication

## Implementation Plan

1. **Use m-yoshiro/storybook-mcp as a Dependency**
   - Install the package as a dependency
   - Import and use its core functionality in our API routes
   - Adapt our documentation format to be compatible with its expectations

2. **Create Custom Documentation Extractor**
   - Build a TypeScript-based documentation extractor
   - Integrate it into the build process
   - Generate documentation in our specified format

3. **Integrate with Build Process**
   - Add the documentation extractor as a pre-build step
   - Configure the output path for static JSON files

4. **Create Vercel API Routes**
   - Implement the MCP protocol handlers in TypeScript
   - Connect to static JSON files
   - Leverage m-yoshiro/storybook-mcp's functionality where appropriate

5. **Test and Deploy**
   - Test with MCP clients
   - Deploy to production

## Integration with Build System

Based on the project structure, we will integrate the MCP documentation extractor with the existing build-utils system by creating a new directory structure:

**Directory Structure:**
- `build-utils/mcp/` - Main directory for MCP-related build utilities
  - Main documentation extraction script
  - JSON file generator
  - TypeScript interfaces for documentation format
  - Utilities for interface parsing, JSDoc extraction, and search index generation

### 1. Documentation Extractor Module

The documentation extractor will be implemented as a module within the build-utils directory, following the existing patterns used in other build utilities.

**Key responsibilities:**
- Parse TypeScript files to extract interfaces and types
- Extract JSDoc comments from component files
- Process Storybook stories to capture examples
- Generate a search index for efficient component discovery
- Output structured JSON files in the format expected by the MCP server

**Integration points:**
- Uses TypeScript compiler API for parsing interfaces and types
- Reads component and story files from the src/components directory
- Produces JSON output in the public/mcp-data directory

### 2. Build Process Integration

The documentation extractor will be integrated with the existing build process in `build-utils/build.ts`.

**Integration approach:**
- Add a new build phase for MCP documentation extraction
- Run the extractor before the Storybook build phase
- Configure component directories based on the project structure
- Set output paths to match the expected static file locations

**Configuration options:**
- Component source directories: ['src/components']
- Output path: 'public/mcp-data'
- Optional filters for including/excluding specific components

## API Route Implementation

The API routes will be implemented using TypeScript and will leverage the m-yoshiro/storybook-mcp package as a dependency. The routes will be organized in a structured hierarchy:

**API Route Structure:**
- API routes organized under the `/api/mcp/v1/` path
- Component listing endpoint at the root level
- Component detail endpoints under a components directory
- Search functionality in a dedicated endpoint
- Health check endpoint for monitoring

### API Route Design Principles

1. **TypeScript-first approach**
   - Fully typed request and response objects
   - Type definitions for component documentation format
   - Strong typing for query parameters and route handlers

2. **Static file integration**
   - Read documentation from pre-generated JSON files
   - Use efficient file reading patterns with caching where appropriate
   - Handle file reading errors gracefully

3. **Query parameter handling**
   - Support filtering by category, tag, and other metadata
   - Implement pagination for large result sets
   - Validate and sanitize query parameters

4. **Error handling**
   - Consistent error response format across all endpoints
   - Detailed error messages for debugging
   - Appropriate HTTP status codes for different error conditions

### MCP Protocol Integration

To integrate with the MCP protocol while using m-yoshiro/storybook-mcp as a dependency, we will:

1. **Define MCP tool mappings**
   - Map the standard MCP tools to our API endpoints
   - Maintain compatibility with the MCP protocol specification
   - Add custom tools for enhanced functionality

2. **Create protocol adapters**
   - Adapt our API responses to the MCP response format
   - Handle parameter conversion between MCP and our internal format
   - Maintain consistent error handling

3. **Route handler integration**
   - Implement MCP tool handlers using our existing endpoint logic
   - Ensure each tool has appropriate documentation
   - Support both direct API calls and MCP protocol requests

## Success Criteria

- AI agents can discover and explore our component library
- Documentation is comprehensive and includes TypeScript interfaces
- Search functionality allows finding components by name, props, and usage
- Performance meets or exceeds the 100ms response time requirement