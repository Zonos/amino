# JSON File Generator Strategy

## Overview

This document outlines our strategy for generating structured JSON files from the extracted component documentation for the MCP documentation system. The JSON file generator is the final stage in the documentation pipeline, responsible for transforming the internal documentation representation into the standardized file format required by the MCP server.

## Approach

We will implement a dedicated JSON file generator that takes the aggregated documentation data from all extractors and produces a set of organized JSON files according to our specified documentation format. This generator will ensure consistent file structure, proper organization, and optimal access patterns.

## Implementation Strategy

Our implementation will focus on creating an efficient and organized file generation system using the following approach:

1. **Documentation Transformation**: Convert internal documentation objects to the standardized MCP format.

2. **File Structure Organization**: Create a logical hierarchy of files for efficient access.

3. **Index Generation**: Create index files for component listings and categories.

4. **File Writing**: Efficiently write files to the output directory.

5. **Validation**: Verify generated files match the expected schema.

## Core Components

### 1. Documentation Transformer

This module will transform the internal documentation format to the standardized MCP format:

- Convert component documentation objects to the MCP schema
- Normalize property names and structures
- Format examples for documentation
- Generate derived fields like import statements
- Create standardized component metadata

### 2. File Structure Generator

This module will create the directory structure and organize files:

- Create necessary directories for the output structure
- Generate consistent file paths based on component IDs
- Organize files in a hierarchy that matches access patterns
- Support different file organizations for different documentation types

### 3. Index File Generator

This module will create the main index file:

- Generate component listings with essential metadata
- Create category index structures
- Format the index for efficient component discovery
- Include cross-references between components where appropriate
- Generate paths to detailed documentation files

### 4. Category File Generator

This module will create individual category files:

- Group components by their categories
- Generate category metadata and descriptions
- Format category files for efficient browsing
- Include component summaries within each category
- Create hierarchy information for nested categories

### 5. File Writer

This module will write the generated files to disk:

- Write files atomically to prevent partial updates
- Implement proper error handling for file system operations
- Support incremental updates when appropriate
- Apply minification and optimization for production builds
- Include file headers and metadata

### 6. Schema Validator

This module will validate the generated files against the expected schema:

- Load schema definitions for different file types
- Validate generated files against these schemas
- Report validation errors with clear messages
- Ensure compliance with the MCP documentation format
- Verify required fields are present and properly formatted

## File Organization

The JSON file generator will produce a standardized file structure for the MCP server:

```
public/mcp-data/
  index.json                 # List of all components with basic metadata
  components/
    button.json              # Full documentation for the Button component
    input.json               # Full documentation for the Input component
    ...
  categories/
    inputs.json              # Components in the "inputs" category
    layout.json              # Components in the "layout" category
    ...
  search/
    index.json               # Search index for component documentation
```

### Index File (index.json)

The main index file provides a list of all components with basic metadata:

- Component IDs and names
- Brief descriptions
- Category assignments
- Tags for filtering and discovery
- Paths to detailed documentation

### Component File (components/[id].json)

Each component has its own JSON file with comprehensive documentation:

- Complete component metadata
- Detailed API documentation including props and interfaces
- Type definitions and constraints
- Usage examples with code snippets
- Import information and basic usage guidance
- Links to related documentation

### Category File (categories/[id].json)

Each category has its own file listing components within that category:

- Category metadata and description
- List of components in this category
- Brief component summaries
- Parent-child relationships for hierarchical categories
- Cross-references to related categories

### Search Index (search/index.json)

The search index file provides optimized structures for component searching:

- Inverted indices for text search
- Specialized indices for different field types
- Document records with searchable content
- Term frequency information for scoring
- Metadata to support relevance ranking

## Configuration Options

The JSON file generator will support configuration options to customize output:

- Pretty-printing for development builds
- Minification for production builds
- Inclusion/exclusion of specific sections
- Schema validation options
- Custom output directories
- Incremental update settings

## Performance Considerations

1. **Efficient File Writing**: Optimize file writing to minimize I/O operations
2. **Incremental Generation**: Support updating only changed files when possible
3. **Parallelization**: Implement parallel file writing for large documentation sets
4. **Compression**: Optional compression of output files for reduced storage requirements

## Integration with Documentation Pipeline

The JSON file generator integrates with the broader documentation pipeline as follows:

1. After all specialized extractors have completed their work, the main extractor passes aggregated documentation to the JSON file generator.
2. The generator transforms the documentation to the standardized MCP format.
3. It creates the necessary directory structure in the output directory.
4. It writes component, index, category, and search files.
5. It validates the generated files against expected schemas.

## Next Steps

1. Implement the documentation transformer in `build-utils/mcp/generators/documentation-transformer.ts`
2. Create the file structure generator
3. Implement the index file generator
4. Add the category file generator
5. Develop the file writer
6. Create JSON schema definitions for validation
7. Add tests for file generation and validation

## References

- [JSON Schema Specification](https://json-schema.org/)
- [Node.js File System API](https://nodejs.org/api/fs.html)