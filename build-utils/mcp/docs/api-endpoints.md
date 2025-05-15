# MCP API Endpoints Documentation

## Overview

This document describes the API endpoints provided by the Amino MCP server implementation. These endpoints are built on the Model Context Protocol (MCP) standard and provide access to component documentation for AI assistants and other consumers.

## API Structure

All API endpoints are organized under the `/api/mcp/v1/` path prefix for versioning and clear identification. The API follows RESTful design principles and returns JSON responses.

## Available Endpoints

### List Components

**Endpoint**: `GET /api/mcp/v1/components`

Lists all available components in the library with basic metadata.

**Query Parameters**:
- `filter` (optional): Filter components by name (substring match)

**Response Format**:
```json
{
  "components": [
    {
      "id": "button",
      "name": "Button",
      "path": "src/components/button"
    },
    {
      "id": "card",
      "name": "Card",
      "path": "src/components/card"
    }
  ],
  "totalComponents": 2
}
```

**Status Codes**:
- `200 OK`: Success
- `500 Internal Server Error`: Server error

### Get Component Details

**Endpoint**: `GET /api/mcp/v1/components/:id`

Retrieves detailed documentation for a specific component.

**URL Parameters**:
- `id`: Component ID (required)

**Response Format**:
```json
{
  "id": "button",
  "name": "Button",
  "path": "src/components/button",
  "description": "A customizable button component with various styles.",
  "tags": [
    { 
      "name": "example", 
      "text": "<Button variant=\"primary\">Click Me</Button>" 
    },
    { 
      "name": "param", 
      "text": "variant - Button variant (primary, secondary, etc.)" 
    }
  ]
}
```

**Status Codes**:
- `200 OK`: Success
- `404 Not Found`: Component not found
- `500 Internal Server Error`: Server error

### Find Components by Name

**Endpoint**: `GET /api/mcp/v1/search/components`

Searches for components by name or description.

**Query Parameters**:
- `query` (required): Search query string
- `limit` (optional): Maximum number of results to return

**Response Format**:
```json
{
  "results": [
    {
      "id": "button",
      "name": "Button",
      "path": "src/components/button",
      "description": "A customizable button component with various styles."
    }
  ],
  "totalResults": 1
}
```

**Status Codes**:
- `200 OK`: Success
- `400 Bad Request`: Missing required parameters
- `500 Internal Server Error`: Server error

### Health Check

**Endpoint**: `GET /api/mcp/v1/health`

Provides server health status.

**Response Format**:
```json
{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2025-04-29T12:00:00Z"
}
```

**Status Codes**:
- `200 OK`: Server is healthy
- `500 Internal Server Error`: Server is unhealthy

## MCP Protocol Integration

These endpoints are integrated with the MCP protocol and can be accessed via the following MCP tools:

1. `list-components`: Maps to the List Components endpoint
2. `find-component-by-name`: Maps to the Find Components by Name endpoint
3. `get-component-details`: Maps to the Get Component Details endpoint

## Error Handling

All endpoints return consistent error responses in the following format:

```json
{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message"
  }
}
```

Common error codes include:
- `not_found`: Requested resource not found
- `invalid_request`: Invalid request parameters
- `server_error`: Unexpected server error

## Performance Considerations

These endpoints are designed to be fast and efficient:

1. Documentation is pre-generated during the build process
2. APIs serve static JSON files rather than generating documentation on-demand
3. Response times are optimized for AI assistant consumption (target <100ms)