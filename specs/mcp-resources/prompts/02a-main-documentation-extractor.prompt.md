# Main Documentation Extractor Implementation Prompt

## Background
The main documentation extractor is the orchestration layer that coordinates the work of all other extractors. It needs to discover components, manage the extraction pipeline, handle errors, and coordinate the generation of final output files.

## Task Description
Implement a main documentation extractor script that:

1. Discovers and identifies all components in the Amino library
1. Coordinates the extraction process across multiple specialized extractors
1. Manages the flow of data between extractors
1. Handles error recovery and reporting
1. Produces comprehensive, structured documentation output

## Technical Requirements

- The extractor should efficiently process the entire Amino component library
- Must handle file system operations safely and efficiently
- Should implement a robust error handling strategy that doesn't fail the entire extraction on single component errors
- Should provide clear logging and progress reporting
- Must be designed for testability with clear separation of concerns
- Should support incremental extraction for performance optimization

## Architecture Considerations

1. Consider implementing a plugin architecture that allows specialized extractors to be registered
1. Design the data flow to avoid multiple parsing of the same files
1. Consider parallel processing strategies where appropriate
1. Implement caching mechanisms for improved performance on incremental builds
1. Design clear interfaces between the main extractor and specialized extractors

## Current Environment

- Components are organized in a directory structure: src/components/{component-name}/
- Each component may have multiple files (main component, types, utils, etc.)
- Some components depend on other components or shared utilities
- The build system is based on Vite and pnpm

## Expected Implementation

Provide a detailed implementation strategy for the main extractor including:

1. Component discovery mechanism
1. Extraction pipeline architecture
1. Error handling and recovery strategy
1. Progress reporting approach
1. Optimization techniques for large component libraries

Include code examples for:
1. The main orchestration function
1. Component discovery logic
1. The extraction pipeline implementation
1. Error handling mechanisms

## Implementation Guidance

### Component Discovery
- Use a recursive directory scanning approach for `src/components/` to dynamically discover all components
- Implement heuristic detection to identify valid component directories based on presence of index.ts/tsx files and component naming patterns
- Support configuration for component inclusion/exclusion patterns via glob syntax
- Maintain a component registry to track discovered components and their metadata

### Handling Component Variations
- Implement adapters for components with non-standard structures
- Use fallback strategies when components don't follow the typical organization
- Add support for configuration files that can specify component-specific extraction rules
- Create a normalization layer to handle structural differences before passing to specialized extractors

### Error Handling Strategy
- Implement a "resilient extraction" mode that logs errors but continues processing other components
- Track and report extraction errors in a structured format for later analysis
- Support partial extraction when only some aspects of a component fail (e.g., extract props even if examples fail)
- Provide detailed error contexts with file paths and extraction phase information
- Include recovery mechanisms to retry failed extractions with different strategies

### Optimization Techniques
- Implement a file fingerprinting system to detect changed components
- Use an incremental extraction approach that only processes modified components