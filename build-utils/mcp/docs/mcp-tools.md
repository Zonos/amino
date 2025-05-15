# MCP Tools Documentation

## Overview

This document describes the Model Context Protocol (MCP) tools implemented in the Amino MCP server. These tools provide a standardized way for AI assistants and other clients to interact with component documentation.

## MCP Protocol

The Model Context Protocol (MCP) is a standard that enables AI assistants to access and search documentation. Our implementation is based on the m-yoshiro/storybook-mcp package with custom extensions to support our documentation format.

## Available Tools

### list-components

Lists all available components in the library.

**Parameters**: None

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

**Usage Example**:
```typescript
// AI assistant request format
{
  "type": "mcp-tool-use",
  "tool": "list-components",
  "parameters": {}
}
```

### find-component-by-name

Finds components by name with substring matching.

**Parameters**:
- `name` (required): Component name to search for

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

**Usage Example**:
```typescript
// AI assistant request format
{
  "type": "mcp-tool-use",
  "tool": "find-component-by-name",
  "parameters": {
    "name": "button"
  }
}
```

### get-component-details

Gets detailed documentation for a specific component.

**Parameters**:
- `id` (required): Component ID

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

**Usage Example**:
```typescript
// AI assistant request format
{
  "type": "mcp-tool-use",
  "tool": "get-component-details",
  "parameters": {
    "id": "button"
  }
}
```

## Integration with m-yoshiro/storybook-mcp

Our MCP tools are built on top of the m-yoshiro/storybook-mcp library with the following extensions:

1. **Enhanced Component Metadata**: We provide richer component metadata including descriptions and tags.
2. **JSDoc Integration**: Our tools extract and provide documentation from JSDoc comments in the component source.
3. **Example Code**: We include code examples extracted from JSDoc @example tags.

## Implementation Details

The MCP tools are implemented as serverless functions on Vercel:

- Each tool corresponds to a specific API endpoint
- Tools read from static JSON files generated during the build process
- The implementation uses TypeScript for type safety and better developer experience

## Best Practices for AI Assistants

When using these tools from an AI assistant:

1. **Start with list-components** to discover available components
2. **Use find-component-by-name** when searching for components by keyword
3. **Use get-component-details** to get comprehensive information about a specific component
4. **Parse example code** from the component details to understand usage patterns

## Error Handling

MCP tools return consistent error responses in the following format:

```json
{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message"
  }
}
```

Common error scenarios:
- Component not found
- Invalid parameter values
- Server errors

## Future Tool Extensions

In future phases, we plan to add the following MCP tools:

1. `get-component-props`: Detailed information about component props
2. `get-component-examples`: Specific examples for component usage
3. `search-components`: Advanced search across all component documentation

## Example Integration

Here's an example of how an AI assistant might use these tools:

```typescript
// 1. First, list available components
const componentsResponse = await mcpRequest({
  type: "mcp-tool-use",
  tool: "list-components",
  parameters: {}
});

// 2. Find components matching a keyword
const searchResponse = await mcpRequest({
  type: "mcp-tool-use",
  tool: "find-component-by-name",
  parameters: {
    name: "button"
  }
});

// 3. Get details for a specific component
const detailsResponse = await mcpRequest({
  type: "mcp-tool-use",
  tool: "get-component-details",
  parameters: {
    id: searchResponse.results[0].id
  }
});

// 4. Use the component details in AI response
console.log(`The ${detailsResponse.name} component is described as: ${detailsResponse.description}`);
```