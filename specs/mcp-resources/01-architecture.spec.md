# Architecture Specification

## Overview

This document outlines the architecture for the Amino MCP (Model Context Protocol) server, which provides component documentation to consuming applications. This architecture is designed specifically for integration with our Storybook deployment on Vercel using static JSON files.

## Selected MCP Implementation

After evaluating available MCP tools for Storybook integration, we've decided to use **m-yoshiro/storybook-mcp** as our foundation with custom extensions to meet our specific requirements. This decision was made based on the following factors:

**Key advantages of m-yoshiro/storybook-mcp:**
1. Focused tools for component listing and discovery that align with our architecture
2. Simple setup compatible with our Vercel deployment strategy
3. Extensible implementation that can be customized for our documentation format

**Areas requiring extension:**
1. Documentation extraction for TypeScript interfaces and JSDoc comments
2. Custom static JSON structure to match our specified file format
3. Enhanced search functionality for component discovery

m-yoshiro/storybook-mcp provides essential tools like `list-components` and `find-components-by-name` that match our core requirements, while allowing us to extend the implementation to support our complete architecture specification.

## System Components

```
┌───────────────────┐     ┌───────────────────┐     ┌───────────────────┐
│                   │     │                   │     │                   │
│  Amino Codebase   │────▶│    MCP Server     │────▶│  Client Projects  │
│                   │     │ (Vercel API Routes)│     │                   │
└───────────────────┘     └───────────────────┘     └───────────────────┘
        │                          ▲
        │                          │
        ▼                          │
┌───────────────────┐     ┌───────────────────┐
│                   │     │                   │
│     Storybook     │────▶│  Static JSON      │
│     Build         │     │     Files         │
│                   │     │                   │
└───────────────────┘     └───────────────────┘
```

## Core Components

### 1. Documentation Extractor

**Purpose**: Extract structured documentation from component files during Storybook build.

**Responsibilities**:
- Run during build process before Storybook compilation
- Parse component directories to locate documentation files
- Extract TypeScript interfaces and JSDoc comments
- Generate structured documentation objects
- Write documentation to static JSON files in the public directory

### 2. Static JSON Storage

**Purpose**: Store structured component documentation in static files.

**Responsibilities**:
- Maintain organized file structure for efficient access
- Store component metadata, props, and examples
- Enable efficient lookup by component ID, category, and tag
- Support simple search index for text search

### 3. API Routes

**Purpose**: Expose component documentation via serverless API endpoints.

**Responsibilities**:
- Read documentation from static JSON files
- Provide component listing endpoints
- Serve individual component documentation
- Support filtering and search functionality
- Implement TypeScript-based API routes for type safety and better developer experience
- Provide public access without authentication requirements

### 4. Storybook Integration

**Purpose**: Connect the MCP server with the Storybook deployment.

**Responsibilities**:
- Trigger documentation extraction during build process
- Include static JSON files in the Vercel deployment
- Provide access to API routes from Storybook UI (optional)

## Data Flow

### Build-time Flow

1. **Documentation Extraction**
   - Storybook build process is triggered
   - Documentation extractor runs before Storybook compilation
   - Component files are scanned for documentation
   - Documentation is structured according to standard schema
   - Static JSON files are generated in the public directory
   - Storybook completes build with documentation JSON included

### Runtime Flow

1. **API Request Processing**
   - Client makes request to API endpoint
   - Vercel routes request to appropriate API route
   - API route reads data from static JSON file (no authentication required)
   - Response is formatted and returned to client

2. **Search Flow**
   - Client submits search query
   - API route loads search index from static JSON
   - Query is processed against the index
   - Matching components are retrieved from component JSON files
   - Results are formatted and returned

## File Structure

```
public/
  mcp-data/
    index.json             # List of all components with basic metadata
    components/
      button.json          # Full documentation for the Button component
      input.json           # Full documentation for the Input component
      ...
    categories/
      inputs.json          # Components in the "inputs" category
      layout.json          # Components in the "layout" category
      ...
    search/
      index.json           # Search index for component documentation
```

## API Route Structure

```
pages/
  api/
    mcp/
      v1/
        components.ts          # List all components
        components/
          [id].ts              # Get specific component
        search.ts              # Search components
        health.ts              # Health check endpoint
```

## System Requirements

- **Performance**: Documentation retrieval should complete in under 100ms
- **Availability**: System should leverage Vercel's high availability
- **Scalability**: Support for hundreds of components
- **Consistency**: Documentation format should be consistent across all components
- **Freshness**: Documentation should be updated with each deployment

## Public Access Model

The MCP server is designed to be publicly accessible without authentication, providing these benefits:

- **Open Documentation**: Component documentation is freely available to all developers and AI assistants
- **Simplified Integration**: No authentication tokens or API keys required for access
- **Broader Adoption**: Lower barriers to entry for using our component library

While authentication is not required, all endpoints are read-only and employ transport security via HTTPS to maintain data integrity.