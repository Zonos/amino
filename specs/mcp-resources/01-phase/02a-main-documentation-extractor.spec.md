# Main Documentation Extractor Strategy

## Overview

This document outlines the strategy for the main documentation extractor component that orchestrates the documentation extraction process for the MCP server implementation. Initially, we will focus solely on implementing the JSDoc comment extractor as our first priority, with additional extractors to be added in future iterations.

## Approach

We will implement a main documentation extractor that initially focuses on JSDoc comment extraction as the primary source of documentation. This focused approach allows us to deliver value quickly while establishing the foundation for adding additional extractors in the future. The orchestrator will handle component discovery, JSDoc extraction, error management, and output generation.

## Implementation Strategy

Our implementation will focus on creating a modular and extensible orchestration system using the following phased approach:

### Phase 1 - JSDoc Comment Extraction (Current Focus)

1. **Component Discovery**: Scan the component directory structure to identify all components and their relevant files.

2. **JSDoc Extraction**: Extract JSDoc comments from component files, including descriptions, param tags, examples, and other metadata.

3. **Error Handling**: Implement comprehensive error management that allows the process to continue even if individual component extraction fails.

4. **Progress Reporting**: Provide clear, structured logging of the extraction process.

5. **Output Generation**: Coordinate the creation of output files for use by the MCP server.

### Phase 2 - Future Extractors (Planned for Later Implementation)

1. **TypeScript Interface Parsing**: Add support for extracting type information from declaration files.

2. **Example Extraction**: Enhance example extraction capabilities.

3. **Search Index Generation**: Generate optimized search indices.

4. **Data Aggregation**: Enhance the system to combine outputs from all specialized extractors into a unified documentation format.

## Core Components

### 1. Component Discovery Module

This module will identify all components in the Amino library:

- Scan target directories recursively to find component files
- Use pattern matching to identify component files vs. utility files
- Detect component relationships and dependencies
- Create a registry of discovered components with metadata

### 2. JSDoc Extraction Module (Initial Focus)

This module will extract JSDoc comments from component files:

- Parse JSDoc comments using the TypeScript Compiler API
- Extract component descriptions, param tags, examples, and other metadata
- Associate comments with components and props
- Handle markdown formatting within comments
- Process multiline code examples

### 3. Error Management Module

This module will handle errors without failing the entire extraction process:

- Capture and categorize errors from specialized extractors
- Implement recovery strategies for non-critical errors
- Provide detailed error reporting for debugging
- Allow extraction to continue for other components when one fails

### 4. Progress Reporting Module

This module will provide structured logging of the extraction process:

- Track and report overall extraction progress
- Log detailed information about each extraction phase
- Create summaries of successful and failed extractions
- Generate timing information for performance analysis

### 5. Incremental Processing Module

This module will optimize extraction by only processing changed components:

- Store fingerprints or hashes of previously processed components
- Compare current component content with stored data
- Skip extraction for unchanged components
- Update only affected output files

## Integration with Specialized Extractors

In the initial phase, the main documentation extractor will focus exclusively on JSDoc comment extraction:

1. **JSDoc Comment Extractor** (Current Implementation):
   - Extract JSDoc comments and associate with components and props
   - Parse JSDoc tags and formats
   - Process markdown and examples
   - Extract @example tags to provide usage examples

### Future Extractor Integration (Planned for Later Phases)

1. **TypeScript Interface Parser** (Future):
   - Extract type information and interfaces
   - Process through type normalization
   - Support for generic types and complex interfaces

2. **Search Index Generator** (Future):
   - Generate search indices from processed documentation
   - Create specialized indices for efficient lookup
   - Optimize for common search patterns

## Configuration Options

The main extractor will support configuration to customize extraction behavior:

- Source directories to scan for components
- Output directory for documentation files
- Component inclusion/exclusion patterns
- Error handling settings
- Output format preferences
- Performance optimization options

## Command Line Interface

The main extractor will provide a command-line interface for easy integration with build processes:

- Options for specifying input and output directories
- Flags for controlling behavior (incremental, verbose, etc.)
- Support for filtering which components to process
- Integration with standard build tools

## Next Steps

1. Implement the component discovery module in `build-utils/mcp/extractors/component-discovery.ts`
2. Implement the JSDoc comment extractor in `build-utils/mcp/extractors/jsdoc-extractor.ts`
3. Create a simplified extraction pipeline that focuses on JSDoc extraction
4. Implement the error management system
5. Add progress reporting
6. Add tests for the JSDoc comment extractor
7. Plan for future phases to incorporate additional extractors

## References

- [TypeScript Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)
- [Node.js File System API](https://nodejs.org/api/fs.html)