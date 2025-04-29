# MCP API Endpoints Documentation

## Overview

The Amino MCP (Model Context Protocol) server exposes a set of API endpoints that provide component documentation to consuming applications. These endpoints are designed to be compatible with the MCP protocol and are implemented as serverless functions on Vercel.

## Base URL

All API endpoints are available at the following base URL:

```
https://amino.example.com/api/mcp/v1
```

## Authentication

All API endpoints are publicly accessible and do not require authentication. This ensures maximum accessibility for AI assistants and other consumers.

## Endpoints Reference

### List Components

**Endpoint:** `/components`
**Method:** `GET`
**Description:** Get a list of all available components with basic metadata.

**Parameters:**
- `category` (optional): Filter components by category
- `tag` (optional): Filter components by tag
- `limit` (optional): Maximum number of components to return (default: 20)
- `offset` (optional): Pagination offset (default: 0)

**Example Request:**
```
GET /api/mcp/v1/components?limit=10&offset=0
```

**Example Response:**
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
    {
      "id": "card",
      "name": "Card",
      "description": "A container for content with optional header and footer",
      "category": "layout",
      "tags": ["container", "content"]
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 10,
    "offset": 0,
    "next": "/api/mcp/v1/components?limit=10&offset=10"
  }
}
```

### Get Component Documentation

**Endpoint:** `/components/:id`
**Method:** `GET`
**Description:** Get detailed documentation for a specific component.

**Parameters:**
- `id` (path parameter): Component identifier

**Example Request:**
```
GET /api/mcp/v1/components/button
```

**Example Response:**
```json
{
  "id": "button",
  "name": "Button",
  "description": "A versatile button component with various styles and states",
  "category": "inputs",
  "tags": ["interactive", "form", "action"],
  "api": {
    "props": [
      {
        "name": "variant",
        "type": "string",
        "description": "The visual style variant of the button",
        "default": "primary",
        "required": false,
        "values": ["primary", "secondary", "tertiary", "ghost"]
      },
      {
        "name": "size",
        "type": "string",
        "description": "The size of the button",
        "default": "md",
        "required": false,
        "values": ["sm", "md", "lg"]
      },
      {
        "name": "children",
        "type": "ReactNode",
        "description": "The content to display inside the button",
        "required": true
      }
    ]
  },
  "examples": [
    {
      "id": "primary",
      "name": "Primary Button",
      "description": "Default primary button style",
      "code": "<Button variant=\"primary\">Click Me</Button>"
    },
    {
      "id": "secondary",
      "name": "Secondary Button",
      "description": "Secondary button with less visual emphasis",
      "code": "<Button variant=\"secondary\">Click Me</Button>"
    }
  ],
  "usage": {
    "import": "import { Button } from 'amino';",
    "basic": "<Button variant=\"primary\">Click Me</Button>"
  },
  "generatedAt": "2023-04-15T12:34:56Z"
}
```

### Health Check

**Endpoint:** `/health`
**Method:** `GET`
**Description:** Check if the MCP server is operational.

**Example Request:**
```
GET /api/mcp/v1/health
```

**Example Response:**
```json
{
  "status": "ok",
  "version": "1.0.0",
  "uptime": 86400,
  "timestamp": "2023-04-15T12:34:56Z"
}
```

## Error Handling

All endpoints follow standard HTTP status codes and include detailed error messages:

- `200 OK`: Request succeeded
- `400 Bad Request`: Invalid request parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

**Example Error Response:**
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

## Versioning

API versioning is included in the URL path (`/v1`). Future API versions will maintain backward compatibility when possible or provide clear migration paths.

## Performance

The API endpoints are designed for optimal performance:

- Response time targets are under 100ms for most operations
- Static files are cached for improved performance
- Large responses support pagination
- API responses are optimized for size and speed

## Implementation Details

The API endpoints are implemented as serverless functions on Vercel:

- Files are located in the `pages/api/mcp/v1` directory
- Each endpoint reads from static JSON files generated during the build process
- The implementation leverages Next.js API routes for serverless deployment

## Future Enhancements

In future phases, the API will be enhanced with additional endpoints:

- Search endpoint (`/search`)
- Categories endpoint (`/categories`)
- Component filtering by category (`/categories/:id/components`)
- Advanced pagination and filtering options