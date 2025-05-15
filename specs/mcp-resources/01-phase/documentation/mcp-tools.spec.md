# MCP Tools Documentation

## Overview

The Model Context Protocol (MCP) defines a set of standardized tools that AI assistants can use to retrieve information about UI components. This document describes the MCP tools implemented by the Amino MCP server and how they can be used by AI assistants and other consumers.

## MCP Protocol

The MCP protocol follows a standard format where each tool:
1. Has a unique name that identifies its purpose
2. Accepts specific parameters
3. Returns structured data in a consistent format

Our implementation follows this protocol while extending it to provide richer component information specific to the Amino component library.

## Available Tools

### list-components

**Purpose**: Lists all available components with basic metadata.

**Parameters**:
- `path` (optional): Path to the index.json file (defaults to the main index)

**Returns**: Array of components with basic metadata

**Example Usage**:
```json
{
  "name": "list-components",
  "parameters": {}
}
```

**Example Response**:
```json
{
  "components": [
    {
      "id": "button",
      "name": "Button",
      "description": "A versatile button component with various styles and states"
    },
    {
      "id": "card",
      "name": "Card",
      "description": "A container for content with optional header and footer"
    },
    {
      "id": "input",
      "name": "Input",
      "description": "A text input field for user data entry"
    }
  ]
}
```

### find-component-by-name

**Purpose**: Finds a specific component by name or partial name match.

**Parameters**:
- `name` (required): Component name to search for
- `path` (optional): Path to the index.json file

**Returns**: Matching component metadata or null if not found

**Example Usage**:
```json
{
  "name": "find-component-by-name",
  "parameters": {
    "name": "button"
  }
}
```

**Example Response**:
```json
{
  "component": {
    "id": "button",
    "name": "Button",
    "description": "A versatile button component with various styles and states",
    "path": "/components/button"
  }
}
```

### get-component-details

**Purpose**: Retrieves detailed documentation for a specific component.

**Parameters**:
- `id` (required): Component identifier
- `path` (optional): Path to the components directory

**Returns**: Complete component documentation including props, examples, and usage

**Example Usage**:
```json
{
  "name": "get-component-details",
  "parameters": {
    "id": "button"
  }
}
```

**Example Response**:
```json
{
  "id": "button",
  "name": "Button",
  "description": "A versatile button component with various styles and states",
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
      "name": "Primary Button",
      "code": "<Button variant=\"primary\">Click Me</Button>"
    },
    {
      "name": "Secondary Button",
      "code": "<Button variant=\"secondary\">Click Me</Button>"
    }
  ],
  "usage": {
    "import": "import { Button } from 'amino';",
    "basic": "<Button variant=\"primary\">Click Me</Button>"
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

When using the MCP tools with AI assistants:

1. **Start with list-components**: First, get a list of all available components to understand what's available.
2. **Use find-component-by-name for discovery**: When users ask about a specific component, use this tool to confirm it exists.
3. **Get complete details with get-component-details**: Once you've identified a specific component, get its full documentation.
4. **Check examples**: Always reference the examples provided to ensure correct usage syntax.
5. **Verify prop requirements**: Note which props are required vs. optional and their default values.

## Error Handling

MCP tools follow standard error handling patterns:

- When a component is not found, a clear error message is returned
- Invalid parameters result in specific error messages explaining the issue
- Server errors include appropriate error codes and descriptions

## Future Tool Extensions

In future phases, the MCP server will implement additional tools:

- `search-components`: Search for components using keywords
- `get-component-props`: Get detailed information about a component's props
- `get-component-examples`: Get just the examples for a specific component
- `find-components-by-category`: Find components within a specific category

## Example Integration

Here's a complete example of using MCP tools in sequence:

1. List all components:
```json
{ "name": "list-components", "parameters": {} }
```

2. Find a specific component by name:
```json
{ "name": "find-component-by-name", "parameters": { "name": "button" } }
```

3. Get detailed documentation for the component:
```json
{ "name": "get-component-details", "parameters": { "id": "button" } }
```

4. Use the component in your code with the provided examples and prop documentation.