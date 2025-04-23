# Initial Setup Prompt for MCP Server Implementation

## Background
We are implementing a Model Context Protocol (MCP) server for our Amino component library. This server will enable AI assistants to understand and access documentation for our components.

## Task Description
1. Install the m-yoshiro/storybook-mcp dependency
2. Create a proper directory structure for build-utils/mcp
3. Define TypeScript interfaces for our documentation format

## Current Environment
- Our components are written in TypeScript and React
- We use Storybook for component documentation
- Components follow a standard structure with proper JSDoc comments
- We use a build system based on Rollup

## Implementation Guidance

### Dependency Installation and Configuration
- Install the m-yoshiro/storybook-mcp package as a development dependency
- Add configuration files in the project root to integrate with the MCP protocol
- Set up TypeScript types for the storybook-mcp package
- Configure package.json scripts for MCP-related commands
- Set up environment variables for MCP server configuration

### Directory Structure Organization
- Create the following directory structure for MCP implementation:
  ```
  build-utils/
    mcp/
      extractors/       # Component documentation extractors
      transformers/     # Documentation format transformers
      server/           # MCP server implementation
      types/            # TypeScript interfaces
      utils/            # Shared utilities
      tests/            # Test suite
      config/           # Configuration files
  ```
- Establish consistent naming conventions for files across directories
- Create README.md files in each directory explaining its purpose
- Set up proper import paths in tsconfig.json for the new directories

### Documentation Format Interfaces
- Define core TypeScript interfaces for component documentation:
  - `ComponentDoc` - Main component documentation interface
  - `PropDoc` - Component property documentation
  - `ExampleDoc` - Component usage examples
  - `CategoryDoc` - Component categorization
- Create utility types for shared structures
- Implement schema validation using JSON Schema with TypeScript integration
- Add JSDoc comments to all interfaces for better developer experience
- Create type guards for runtime validation of documentation objects
