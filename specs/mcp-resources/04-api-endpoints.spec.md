# API Endpoints Specification

## Overview

This document outlines the API endpoints for the MCP server, which provides component documentation to consuming applications. These endpoints are designed to align with our selected MCP tool (m-yoshiro/storybook-mcp) while extending its functionality to meet our specific requirements.

## API Design Rationale

Our API endpoints extend the base functionality provided by m-yoshiro/storybook-mcp, which offers basic component listing and search capabilities. We've enhanced this with more sophisticated search, filtering, and detailed documentation access to better support AI assistants and other consuming applications.

## MCP Protocol Endpoints

### Base URL

```
https://amino.example.com/api/mcp/v1
```

### List Components

**Endpoint:** `/components`  
**Method:** `GET`  
**Description:** Get a list of all available components with basic metadata.

**Parameters:**
- `category` (optional): Filter components by category
- `tag` (optional): Filter components by tag
- `limit` (optional): Maximum number of components to return
- `offset` (optional): Pagination offset

**Response:**
```json
{
  "components": [
    {
      "id": "button",
      "name": "Button",
      "description": "A versatile button component with various styles and states",
      "category": "inputs",
      "tags": ["interactive", "form", "action"]
    },
    // Additional components
  ],
  "pagination": {
    "total": 150,
    "limit": 20,
    "offset": 0,
    "next": "/api/mcp/v1/components?limit=20&offset=20"
  }
}
```

### Get Component Documentation

**Endpoint:** `/components/:id`  
**Method:** `GET`  
**Description:** Get detailed documentation for a specific component.

**Parameters:**
- `id`: Component identifier

**Response:** Full component documentation as specified in the documentation format.

### Search Components

**Endpoint:** `/search`  
**Method:** `GET`  
**Description:** Search for components by keyword.

**Parameters:**
- `query`: Search query string
- `fields` (optional): Fields to search (name, description, props, etc.)
- `limit` (optional): Maximum number of results
- `offset` (optional): Pagination offset

**Response:**
```json
{
  "results": [
    {
      "id": "button",
      "name": "Button",
      "description": "A versatile button component with various styles and states",
      "category": "inputs",
      "tags": ["interactive", "form", "action"],
      "score": 0.95,
      "matches": [
        {
          "field": "name",
          "text": "Button"
        },
        {
          "field": "tags",
          "text": "interactive"
        }
      ]
    },
    // Additional results
  ],
  "pagination": {
    "total": 15,
    "limit": 20,
    "offset": 0
  }
}
```

### Get Categories

**Endpoint:** `/categories`  
**Method:** `GET`  
**Description:** Get a list of all component categories.

**Response:**
```json
{
  "categories": [
    {
      "id": "inputs",
      "name": "Input Components",
      "componentCount": 12
    },
    // Additional categories
  ]
}
```

### Get Components by Category

**Endpoint:** `/categories/:id/components`  
**Method:** `GET`  
**Description:** Get all components within a category.

**Parameters:**
- `id`: Category identifier

**Response:**
```json
{
  "category": {
    "id": "inputs",
    "name": "Input Components"
  },
  "components": [
    {
      "id": "button",
      "name": "Button",
      "description": "A versatile button component with various styles and states"
    },
    // Additional components
  ]
}
```

## MCP Tool Integration Endpoints

These endpoints use and extend the tools provided by m-yoshiro/storybook-mcp, which we're using as a dependency:

### List Components Tool

**MCP Tool Name:** `list-components`

**Implementation:**
- Uses m-yoshiro/storybook-mcp's existing tool functionality
- Adapts to our custom JSON structure
- Returns enhanced component metadata

**Parameters:**
- `path` (optional): Path to the index.json file

**Response:** List of components with metadata

### Find Components by Name Tool

**MCP Tool Name:** `find-components-by-name`

**Implementation:**
- Extends m-yoshiro/storybook-mcp's search functionality
- Enhanced to support partial matching and fuzzy search
- Includes TypeScript interface information

**Parameters:**
- `name`: Component name or keyword to search for
- `path` (optional): Path to the index.json file

**Response:** List of matching components

### Get Component Props Tool

**MCP Tool Name:** `get-component-props`

**Implementation:**
- Custom extension to m-yoshiro/storybook-mcp
- Implemented as a TypeScript-based API route

**Parameters:**
- `id`: Component identifier

**Response:** List of props for the specified component with types and descriptions

### Get Component Examples Tool

**MCP Tool Name:** `get-component-examples`

**Implementation:**
- Custom extension to m-yoshiro/storybook-mcp
- Implemented as a TypeScript-based API route

**Parameters:**
- `id`: Component identifier

**Response:** List of examples for the specified component

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

## API Versioning

The API is versioned via the URL path (`/v1`). Future versions will maintain backward compatibility when possible or provide clear migration paths.

## Error Handling

All endpoints follow standard HTTP status codes and include detailed error messages:

```json
{
  "error": {
    "code": "not_found",
    "message": "Component with ID 'nonexistent' not found",
    "details": {
      "id": "nonexistent"
    }
  }
}
```

## Performance Considerations

- API responses are optimized for size and speed
- Large responses support pagination
- Static JSON files are cached for improved performance
- Response time targets are under 100ms for most operations