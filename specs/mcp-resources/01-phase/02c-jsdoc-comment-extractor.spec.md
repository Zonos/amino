# JSDoc Comment Extractor Strategy

## Overview

This document outlines our strategy for extracting JSDoc comments from component files for the MCP documentation system. The JSDoc extractor is a critical part of our documentation pipeline as it retrieves human-readable descriptions, examples, and metadata from component files that supplement the type information from TypeScript interfaces.

## Approach

We will implement a dedicated JSDoc comment extractor that leverages the TypeScript Compiler API to extract and parse JSDoc comments from source files. This extractor will work in conjunction with the TypeScript interface parser to provide comprehensive documentation for Amino components.

## Implementation Strategy

Our implementation will focus on extracting JSDoc comments and associating them with the correct component and props using the following approach:

1. **Source File Processing**: Analyze source files using the TypeScript Compiler API to extract JSDoc comment blocks.

2. **Comment Association**: Use AST node positions to associate comments with specific components and props.

3. **Tag Parsing**: Parse standard JSDoc tags and custom Amino tags with a dedicated tag parser.

4. **Comment Normalization**: Standardize comment formatting and handle variations in JSDoc syntax.

5. **Markdown Processing**: Preserve markdown formatting in descriptions and examples.

6. **Integration with Type Data**: Structure the extracted JSDoc data to facilitate integration with type information from the TypeScript interface parser.

## Core Components

### 1. Comment Extraction Module

The comment extraction module will use the TypeScript Compiler API to identify JSDoc comments in source files:

- Read source files and create TypeScript AST
- Traverse the AST to locate JSDoc comment nodes
- Extract raw comment text with position information
- Process comment blocks to separate description from tags
- Maintain source location information for later association

### 2. JSDoc Tag Parser

The tag parser will handle standard JSDoc tags and custom Amino tags:

- Define supported JSDoc tags and parsing rules
- Extract tag names and associated text content
- Provide special handling for structured tags like @param and @example
- Parse code blocks within tags while preserving formatting
- Handle multiline tag content

### 3. Comment-Component Association

The association module will map comments to their corresponding components and props:

- Associate component-level comments with component declarations
- Map prop-specific comments to their respective prop definitions
- Use positional information to determine relationships
- Handle special cases like higher-order components and complex patterns
- Create a structured representation of components and their documentation

### 4. Markdown Handler

The markdown handler will preserve formatting in descriptions and examples:

- Clean up comment markers and leading asterisks
- Preserve code blocks and their formatting
- Handle line breaks and paragraphs appropriately
- Maintain formatting like bold, italics, and lists
- Support links and other markdown features

## Integration with Documentation Pipeline

The JSDoc comment extractor will integrate with the broader documentation pipeline as follows:

1. The extractor processes source files to extract JSDoc comments.
2. Comment data is structured according to our documentation schema.
3. Comment data is combined with type information from the TypeScript interface parser.
4. Combined data is used to generate comprehensive documentation for components.

## Handling Edge Cases

### Inconsistent Documentation

We'll implement strategies to handle inconsistent or missing documentation:

1. **Warning Generation**: Generate warnings for props without JSDoc documentation.
2. **Fallback to Type Information**: Use type information to generate basic documentation when JSDoc is missing.
3. **Proximity Fallback**: If @param tags don't explicitly match prop names, use proximity in the source file to associate comments.

### Complex Examples

For complex examples in JSDoc comments:

1. **Multi-line Code Blocks**: Properly handle code blocks spanning multiple lines.
2. **Syntax Highlighting**: Preserve language information for syntax highlighting.
3. **Indentation Preservation**: Maintain indentation in code examples.

## Performance Considerations

To ensure optimal performance of the JSDoc extractor:

1. **Caching**: Cache parsed comments for files that haven't changed.
2. **Incremental Processing**: Only process files that have changed since the last extraction.
3. **Parallelization**: Process multiple files in parallel where possible.

## Next Steps

1. Implement the core JSDoc extraction module in `build-utils/mcp/extractors/jsdoc-extractor.ts`
2. Develop the JSDoc tag parser with support for standard and custom tags
3. Create the comment-component association logic
4. Integrate with the TypeScript interface parser
5. Add tests for various JSDoc formats found in Amino components

## References

- [TypeScript Compiler API Documentation](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)
- [JSDoc Documentation](https://jsdoc.app/)