# JSON File Generator Implementation Prompt

## Background
The JSON file generator is responsible for converting the extracted component documentation into a structured, optimized JSON format that can be consumed by the MCP server and other documentation tools. It needs to handle serialization, validation, and organization of documentation data.

## Task Description
Implement a JSON file generator that:

1. Converts extracted component documentation into a standardized JSON format
2. Validates the output against a defined schema
3. Organizes output files in an efficient structure
4. Optimizes file size and access patterns
5. Supports incremental updates for improved build performance

## Technical Requirements

- Must generate valid JSON files that follow our defined schema
- Should implement validation to ensure documentation completeness
- Must organize files for efficient access patterns
- Should optimize file size through appropriate techniques
- Must support incremental generation for changed components
- Should provide clear error reporting for invalid documentation

## File Organization to Support

1. Component-specific JSON files
2. Index files for quick component discovery
3. Search index files
4. Category and tag organization files
5. Metadata files for versioning and build information

## Current Environment

- Extracted component documentation will be in memory as JavaScript objects
- The output will be used by the MCP server and potentially other tools
- Build performance is important for developer experience
- Documentation completeness and validity are critical

## Expected Implementation

Provide a detailed implementation strategy for the JSON file generator including:

1. JSON schema definition approach
2. Validation strategy
3. File organization structure
4. Optimization techniques
5. Incremental generation mechanism

Include code examples for:
1. Main file generation function
2. Schema validation logic
3. File writing with optimizations
4. Incremental update handling

## Implementation Guidance

### JSON Schema Definition
- Define a formal JSON schema using JSON Schema 2020-12 specification for strong validation
- Create a layered schema with base document types and component-specific extensions
- Include required fields to ensure documentation completeness
- Define explicit types and formats for all properties
- Create reusable schema components for common structures like props and examples
- Balance schema strictness with flexibility for future extensions

### File Organization Strategy
- Structure files in a hierarchical manner following the MCP server access patterns:
  - `/public/mcp-data/index.json` - Main component index
  - `/public/mcp-data/components/{id}.json` - Individual component files
  - `/public/mcp-data/categories/{id}.json` - Category-based component lists
  - `/public/mcp-data/search/index.json` - Search index
  - `/public/mcp-data/meta.json` - Build and version information
- Organize files to minimize the number of file reads for common operations
- Create separate files for large data structures that aren't always needed
- Use consistent naming conventions that reflect content hierarchy

### JSON Optimization Techniques
- Apply JSON minification for production builds
- Remove redundant or derivable information from individual files
- Use shorter property names for frequently repeated fields
- Implement optional GZIP compression for deployment
- Split large files into smaller chunks for faster initial loading
- Use numerical IDs for internal references to reduce string size
- Include revision information to support HTTP caching strategies

### Incremental Generation Implementation
- Store file hashes from previous builds to detect changes
- Generate only files that have upstream changes in component documentation
- Implement dependency tracking between components to update related files
- Use a manifest file to track generated files and their dependencies
- Apply atomic write operations to prevent partial/corrupt files during builds
- Create a two-phase write system: generate to temp, then move to final location

### Documentation Validation Rules
- Require component names, descriptions, and categories for all components
- Validate that all props have descriptions and type information
- Ensure examples exist for each component and demonstrate key features
- Check for broken references between components and types
- Validate markdown formatting in descriptions
- Verify that all required metadata is present
- Generate quality scores to highlight areas needing improvement