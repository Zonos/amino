# Documentation Format Specification

## Overview

This document outlines the format for component documentation used in the MCP server. This format is designed to be compatible with our selected MCP tool (m-yoshiro/storybook-mcp) while extending it to meet our specific documentation needs.

## Format Rationale

We've selected a documentation format that builds upon the default structure used by m-yoshiro/storybook-mcp while enhancing it with additional metadata, TypeScript interfaces, and examples. This approach allows us to:

1. Maintain compatibility with m-yoshiro/storybook-mcp as a dependency
2. Extend the documentation with our specific requirements
3. Support comprehensive component discovery and usage

## JSON Structure

### Component Index (index.json)

This file lists all available components with basic metadata to support efficient listing and searching.

```json
{
  "components": [
    {
      "id": "button",
      "name": "Button",
      "description": "A versatile button component with various styles and states",
      "category": "inputs",
      "tags": ["interactive", "form", "action"],
      "path": "/components/button"
    },
    // Additional components
  ],
  "categories": [
    {
      "id": "inputs",
      "name": "Input Components",
      "components": ["button", "input", "select", "checkbox"]
    },
    // Additional categories
  ]
}
```

### Component Documentation (components/[id].json)

Each component has its own JSON file with comprehensive documentation:

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
      // Additional props
    ],
    "interfaces": [
      {
        "name": "ButtonProps",
        "properties": [
          {
            "name": "variant",
            "type": "ButtonVariant",
            "description": "The visual style variant of the button"
          },
          // Additional properties
        ]
      },
      // Additional interfaces
    ],
    "types": [
      {
        "name": "ButtonVariant",
        "type": "string",
        "values": ["primary", "secondary", "tertiary", "ghost"]
      },
      // Additional types
    ]
  },
  "examples": [
    {
      "id": "primary",
      "name": "Primary Button",
      "description": "Default primary button style",
      "code": "<Button variant=\"primary\">Click Me</Button>"
    },
    // Additional examples
  ],
  "usage": {
    "import": "import { Button } from 'amino';",
    "basic": "<Button variant=\"primary\">Click Me</Button>"
  },
  "storybook": {
    "url": "https://amino.example.com/storybook/?path=/docs/components-button--docs"
  }
}
```

## Extensions to Base MCP Format

Our format extends the base m-yoshiro/storybook-mcp implementation in several key ways:

1. **TypeScript Interfaces** - Full TypeScript interface definitions extracted from component source code
2. **Props Documentation** - Comprehensive documentation for component props including types, defaults, and descriptions
3. **JSDoc Examples** - Code examples from component JSDoc comments using @example tags
4. **Categories and Tags** - Organizational metadata for improved discoverability
5. **Storybook Links** - Direct links to component documentation in Storybook

## Extraction Process

The documentation extractor will:

1. Parse TypeScript files to extract interfaces and types
2. Extract JSDoc comments for descriptions
3. Extract examples from JSDoc @example tags
4. Generate JSON files in the specified format
5. Create index files for efficient lookup

## Data Relationships

Components can be related to each other through:

1. **Categories** - Components grouped by functional area
2. **Tags** - Cross-cutting concerns or features
3. **Related Components** - Direct relationships between components (e.g., FormField uses Label and Input)

## Versioning

Documentation will include version information to track changes over time:

1. **Component Version** - The current version of the component
2. **Documentation Version** - The version of the documentation format
3. **Last Updated** - Timestamp of the last documentation update