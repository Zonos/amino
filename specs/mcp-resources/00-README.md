# Amino MCP Server

## Overview

This document contains specifications for implementing a Model Context Protocol (MCP) server that serves component documentation from Amino. The server will provide standardized documentation access via API endpoints, allowing other projects to consume up-to-date information about Amino components.

## Implementation Approach

We will implement the MCP server directly within our existing Storybook deployment on Vercel, using the following approach:

1. **Static JSON Files**: Documentation will be extracted during build time and stored as static JSON files in the public directory
2. **Vercel API Routes**: TypeScript-based serverless API endpoints will serve the documentation by reading from static files
3. **Storybook Integration**: The system will be integrated with our existing Storybook deployment process using m-yoshiro/storybook-mcp as a dependency

## Specification Files

- [01-architecture.spec.md](./01-architecture.spec.md) - Overall system architecture and component relationships
- [02-storybook-integration.spec.md](./02-storybook-integration.spec.md) - Details on integrating MCP server with Storybook on Vercel
- [03-documentation-format.spec.md](./03-documentation-format.spec.md) - Standardized documentation format and schema
- [04-api-endpoints.spec.md](./04-api-endpoints.spec.md) - API endpoint definitions and request/response formats
- [05-authentication.spec.md](./05-authentication.spec.md) - Authentication and authorization requirements
- [06-deployment.spec.md](./06-deployment.spec.md) - Deployment patterns and Vercel-specific considerations

## Getting Started

To understand the MCP server implementation, we recommend reviewing the specifications in the following order:

1. 01-architecture.spec.md
2. 02-storybook-integration.spec.md 
3. 03-documentation-format.spec.md
4. 04-api-endpoints.spec.md
5. 05-authentication.spec.md
6. 06-deployment.spec.md

## Relationship to Amino

This MCP server will provide programmatic access to component documentation already defined in the Amino codebase. It serves as a critical infrastructure piece for ensuring that teams consuming Amino components have access to up-to-date, standardized documentation without needing to navigate the codebase directly.

The system is designed to automatically extract documentation from component source files, TypeScript interfaces, and JSDoc comments, ensuring that as components evolve, their documentation remains accessible and current.

## Public Access

The MCP server will be publicly accessible without authentication requirements, making the component documentation freely available to all developers and AI assistants.