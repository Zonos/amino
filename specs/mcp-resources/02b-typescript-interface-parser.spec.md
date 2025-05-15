# TypeScript Interface Parser Strategy

## Overview

This document outlines our decision to leverage existing TypeScript declaration files (`.d.ts`) instead of implementing a custom TypeScript interface parser for the MCP documentation system. This approach maintains a single source of truth for component types and improves maintainability while reducing implementation complexity.

## Decision

We have decided to **leverage the existing TypeScript declaration files** generated during our build process rather than implementing a custom parser to extract type information directly from source files. This decision was made after evaluating the benefits and trade-offs of both approaches.

## Rationale

1. **Single Source of Truth**: Using the same declaration files that we publish in our npm package ensures consistency between our documentation and the actual component APIs.

2. **Maintainability**: When component types are updated, both the package types and documentation will automatically reflect these changes without manual synchronization.

3. **Implementation Simplicity**: We avoid the complexity of implementing a custom TypeScript parser that can handle all edge cases of the TypeScript type system.

4. **Performance**: Reusing existing declaration files avoids duplicate parsing work during the build process.

5. **Accuracy**: Leveraging the TypeScript compiler's own output ensures correct representation of complex types, generics, conditional types, and other advanced TypeScript features.

## Implementation Strategy

Our implementation strategy will use the TypeScript Compiler API to process our declaration files. We've selected this approach because it provides the most direct access to TypeScript's type system while maintaining flexibility for our specific documentation needs.

1. **Use Generated Declaration Files**: Access the `.d.ts` files already generated during our build process from `tsconfig.emitDeclarationOnly.json`.

2. **Process Declaration Files**: Use the TypeScript Compiler API to analyze declaration files and extract structured type information. This will allow us to accurately represent complex types including generics, unions, and conditional types.

3. **Transform to Documentation Format**: Convert the extracted type information into our MCP documentation format, mapping TypeScript types to our documentation schema.

4. **Extract JSDoc Comments**: Configure our TypeScript compilation to preserve JSDoc comments in declaration files and extract them for documentation using the Compiler API's comment functionality.

5. **Integrate with Build Pipeline**: Add this process to our existing build pipeline after type generation, running as a post-processing step in the build-utils/mcp directory.

## Integration with Extraction Pipeline

The declaration file processor will replace the custom TypeScript interface parser in our extraction pipeline:

1. The build process generates declaration files
2. The declaration processor extracts type information from these files
3. This information is combined with JSDoc comments and examples
4. The combined data is transformed into our MCP documentation format

## Benefits for MCP Implementation

1. **Simplified Maintenance**: Removal of a complex custom parser component
2. **Improved Reliability**: Reduced risk of parsing errors or incompatibilities with TypeScript features
3. **Better Performance**: Reuse of existing compiler output instead of re-parsing source files
4. **Versioning Support**: Natural alignment with package versioning

## Considerations and Challenges

1. **JSDoc Preservation**: We need to ensure that JSDoc comments are preserved in declaration files through proper tsconfig settings.

2. **Examples**: Examples may not be present in declaration files and might need to be extracted separately from source files or Storybook stories.

3. **Component Relationships**: Additional logic may be needed to establish relationships between components beyond what's explicit in type definitions.

4. **Tool Selection**: Further evaluation is needed to select the optimal tool for processing declaration files based on our specific requirements.

## Next Steps

1. Create a TypeScript Compiler API-based processor in `build-utils/mcp/extractors/declaration-processor.ts`
2. Implement functions to extract component props, interfaces, and type information
3. Validate that all required information can be extracted
4. Integrate the processor into the MCP documentation pipeline
5. Update build scripts and documentation

## References

- [TypeScript Compiler API Documentation](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)