# JSDoc Comment Extractor Implementation Prompt

## Background
JSDoc comments provide essential documentation for components, including descriptions, parameter details, examples, and more. The JSDoc extractor needs to parse these comments and associate them with the correct component and props to generate comprehensive documentation.

## Task Description
Implement a JSDoc comment extractor that:

1. Extracts JSDoc comments from component files
2. Parses standard JSDoc tags like @param, @returns, @example, @default
3. Handles custom JSDoc tags used in Amino
4. Correctly associates comments with components and their props
5. Extracts markdown-formatted descriptions and examples

## Technical Requirements

- Must parse JSDoc comments using static analysis
- Should support all standard JSDoc tags and our custom tags
- Must correctly associate component-level JSDoc with components
- Must correctly associate prop-level JSDoc with specific props
- Should handle multiline descriptions and code examples
- Should parse markdown formatting in descriptions
- Must extract default values from @default tags

## JSDoc Tags to Support

1. @param - For prop documentation
2. @default - For default values
3. @example - For usage examples
4. @returns - For return value documentation
5. @see - For references to other components or documentation
6. @deprecated - For deprecated features
7. @since - For version information
8. Custom tags used in Amino components

## Current Environment

- Components use JSDoc comments for documentation
- JSDoc comments follow standard format with some custom tags
- Comments may include markdown formatting
- Some comments contain code examples
- Component-level comments describe the component's purpose
- Prop-level comments describe individual props

## Expected Implementation

Provide a detailed implementation strategy for the JSDoc comment extractor including:

1. Comment extraction approach
2. Tag parsing algorithm
3. Comment-to-component association strategy
4. Comment-to-prop association strategy
5. Markdown parsing approach

Include code examples for:
1. Main JSDoc extraction function
2. Tag parsing logic
3. Comment association with components and props
4. Handling complex examples and multiline descriptions

## Implementation Guidance

### JSDoc Comment Parsing Approach
- Use the TypeScript Compiler API to extract comments from source files
- Implement a dedicated JSDoc parser that handles multiline comments and preserves formatting
- Leverage comment ranges and locations from the TypeScript AST to associate comments with code elements
- Create a custom JSDoc tag parser that supports both standard and Amino-specific tags
- Normalize comment text to handle variations in formatting and style

### Prop Comment Association
- Match JSDoc @param tags with prop names in the interface definition
- Use proximity analysis to associate props with nearby comments when explicit tags are missing
- Create a position-based mapping between TypeScript interface properties and their documentation
- Use fuzzy matching to handle minor inconsistencies between param names and prop names
- Implement a warning system for unmatched props or comments

### Code Example Extraction
- Parse @example tags with special handling for code blocks
- Support multiline code examples within JSDoc blocks
- Extract examples with proper syntax highlighting metadata
- Preserve indentation and formatting in code examples
- Sanitize examples to ensure they are valid and representative

### Handling Inconsistent Documentation
- Implement fallback strategies for missing or incomplete documentation
- Generate warnings for props without documentation
- Use type information to generate placeholder documentation when JSDoc is missing
- Create a quality score for documentation to highlight areas needing improvement
- Implement heuristics to extract implicit documentation from code when explicit docs are missing

### Integration Format for JSDoc Data
- Store extracted JSDoc data in a structured JSON format that aligns with the TypeScript type information
- Use a normalized schema that separates description, tags, and examples
- Create explicit relationships between JSDoc entries and type definitions
- Include position information to maintain source traceability
- Structure the output to support merging JSDoc data with type information in later pipeline stages