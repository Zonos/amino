# TypeScript Interface Parser Implementation Prompt

## Background
The TypeScript interface parser is responsible for analyzing component prop interfaces and extracting detailed type information that will be used for documentation. This is a critical part of the documentation pipeline as it provides the foundation for understanding component APIs.

## Task Description
Implement a TypeScript interface parser that:

1. Extracts prop type definitions from component files
2. Resolves complex types including generics, unions, intersections, and conditional types
3. Handles type inheritance and extension patterns
4. Resolves imported types from other files
5. Converts TypeScript type information into structured documentation

## Technical Requirements

- Must parse TypeScript without executing code (static analysis)
- Should handle complex type scenarios including generics, unions, intersections, and mapped types
- Must resolve type extensions and inheritance (interfaces extending other interfaces)
- Should follow imported types and resolve their definitions
- Must normalize type information into a consistent documentation format
- Should extract information about required vs. optional props
- Must handle default values where specified

## Type Scenarios to Handle

1. Basic primitive types (`string`, `number`, `boolean`, etc.)
2. Complex built-in types (e.g., `React.ReactNode`, `Array<T>`, `Record<K, V>`)
3. Union types (`string | number`)
4. Generic types (`Array<string>`, custom generics)
5. Intersection types (`ButtonProps & LinkProps`)
6. Imported types from other files
7. Type aliases and interface extensions
8. Enum types and string literals
9. Default prop values

## Current Environment

- Components use TypeScript interfaces for prop definitions
- Many components extend `BaseProps` and other shared interfaces
- Components may import types from utility files or other components
- Some components use complex type patterns for enhanced flexibility

## Expected Implementation

Provide a detailed implementation strategy for the TypeScript interface parser including:

1. AST parsing approach and libraries to use
2. Type resolution algorithm
3. Type inheritance handling strategy
4. Import resolution mechanism
5. Output format for parsed type information

Include code examples for:
1. Main parser function
2. Complex type resolution
3. Import handling
4. Type normalization

## Implementation Guidance

### TypeScript Parsing Library
- Use the TypeScript Compiler API (typescript package) as the primary parsing tool
- Leverage ts.createProgram and ts.createSourceFile for AST generation
- Implement a TypeChecker wrapper for advanced type resolution capabilities
- Consider using ts-morph as a higher-level abstraction over the TS Compiler API

### Circular Type Reference Handling
- Implement detection for circular references using a reference tracking system
- Use lazy evaluation techniques to break circular dependencies
- Apply a maximum recursion depth limit to prevent infinite loops
- Generate references to already processed types rather than duplicating nested structures
- Include path information in type references to clarify relationships

### Import Resolution Approach
- Create a module resolver that maps import statements to file paths
- Implement a caching mechanism for previously resolved imports
- Support both relative and absolute imports (including path aliases)
- Maintain a dependency graph to minimize redundant processing
- Pre-process common utility types and standard library types for efficiency

### Complex Type Representation
- Serialize complex types using a layered object structure that preserves type relationships
- For union types, include all possible variants with metadata about each option
- For generic types, document both the generic parameters and concrete instances
- For mapped and conditional types, provide examples of resolved concrete types
- Use a hierarchical structure that can represent nested type relationships

### Type Documentation Integration
- Create a mechanism to associate JSDoc comments with corresponding type definitions
- Link prop types with their descriptions using position-based matching
- Extract default values from type definitions and initializers
- Generate examples of valid values based on type constraints
- Create cross-references between related types for better navigation