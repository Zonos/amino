# Component Example Extractor Strategy

## Overview

This document outlines our strategy for extracting component examples from JSDoc comments for the MCP documentation system. As part of our focused implementation approach, JSDoc example extraction represents our first priority, with the Storybook story extraction potentially being implemented in a later phase.

## Decision

We have decided to **use JSDoc @example tags** as the primary source for component examples as part of our phased implementation approach. This decision allows us to deliver valuable documentation quickly while establishing the foundation for our documentation system.

## Rationale

1. **Implementation Simplicity**: JSDoc example extraction is significantly simpler to implement compared to parsing complex Storybook story patterns.

2. **Direct Control**: Authors have direct control over which examples appear in documentation by explicitly marking them in component files.

3. **Co-location**: Examples live alongside component code and type definitions, creating a single source of truth.

4. **Integration with Initial Extractor**: JSDoc examples naturally integrate with our first-phase JSDoc comment extractor, creating a cohesive initial implementation.

5. **Clear Documentation Path**: By standardizing on JSDoc examples, we establish a clear path for component documentation that aligns with existing documentation practices.

6. **Focused Delivery**: Implementing JSDoc example extraction first allows us to deliver a viable documentation system quickly, with enhancements to follow in later phases.

## Approach

We will implement a dedicated component example extractor that analyzes JSDoc comments for `@example` tags and extracts structured examples for documentation:

1. **JSDoc Integration**: Leverage the existing JSDoc comment extractor to identify example blocks.

2. **Example Parsing**: Parse example code blocks with appropriate syntax highlighting.

3. **Props Identification**: When possible, identify props used in example code.

4. **Example Organization**: Group examples by component and variant.

5. **Integration with Documentation System**: Structure examples to integrate with the broader documentation system.

## Implementation Strategy

Our implementation will focus on extracting JSDoc examples as part of the JSDoc comment extraction process:

1. **Example Identification**: Locate `@example` tags within JSDoc comments as part of the main JSDoc extraction process.

2. **Example Extraction**: Extract example code blocks and accompanying descriptions.

3. **Code Formatting**: Format examples with proper syntax highlighting and indentation.

4. **Example Metadata**: Extract metadata like example names/descriptions from comments.

5. **Example Integration**: Link examples to components and their properties.

## Core Components

### 1. Example Extraction Module

This module will extract examples from JSDoc comments as part of our phase 1 implementation:

- Extract `@example` tags from JSDoc comments during the JSDoc extraction process
- Parse each example to separate description from code
- Create structured example objects with name, description, and code
- Support multiline code blocks within JSDoc comments
- Detect language/syntax of examples for proper highlighting

### 2. Example Formatter Module

This module will format examples for documentation:

- Generate unique identifiers for each example
- Format examples with proper indentation and syntax highlighting
- Extract prop usage information from example code where possible
- Categorize examples by their purpose or demonstrated functionality
- Prepare examples in a format suitable for documentation output

## JSDoc Example Format

To maintain consistency in documentation, we'll standardize on the following JSDoc example format:

```typescript
/**
 * Button component for user interactions.
 * 
 * @example Basic button
 * <Button>Click me</Button>
 * 
 * @example Primary button with icon
 * <Button variant="primary" leftIcon={<Icon name="check" />}>
 *   Submit
 * </Button>
 * 
 * @example Disabled button
 * <Button disabled>Cannot click</Button>
 */
export const Button = ({ variant, size, children, ...rest }: ButtonProps): React.ReactElement => {
  // Component implementation
};
```

## Integration with Documentation Pipeline

The JSDoc example extractor will integrate with the broader documentation pipeline as follows:

1. The JSDoc comment extractor processes source files to extract JSDoc comments.
2. The example extractor identifies and processes `@example` tags within these comments.
3. Examples are formatted and organized for documentation.
4. Example data is combined with type information and other JSDoc comments.
5. The combined data provides comprehensive documentation including practical usage examples.

## Phase 2 Considerations (Future)

In future phases, we may consider enhancing our example extraction approach:

1. **Storybook Integration**: Evaluate the implementation of a Storybook story parser to supplement JSDoc examples with interactive examples from our Storybook stories.

2. **Enhanced Example Analysis**: Improve the analysis of example code to better extract prop usage patterns and component relationships.

3. **Interactive Examples**: Add support for interactive examples that can be rendered in documentation.

4. **Example Validation**: Implement validation of examples to ensure they follow best practices and use correct props.

## Next Steps

1. Implement the JSDoc example extraction as part of the JSDoc comment extractor
2. Create documentation and guidelines for authoring JSDoc examples
3. Update component files to include standardized examples
4. Test the extraction with various example formats
5. Integrate with the main documentation pipeline
6. Plan for phase 2 enhancements

## References

- [JSDoc Documentation](https://jsdoc.app/)
- [TypeScript JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)