# Build Process Integration Prompt

## Background
We've implemented the documentation extractor components and now need to integrate them into our build process so documentation is automatically generated during builds.

## Task Description
We need to integrate our MCP documentation extraction system into the existing build pipeline. This includes:

1. Adding an MCP documentation extraction phase to the build process
2. Configuring which component directories to include/exclude
3. Setting up the output directory structure in the public folder
4. Implementing build flags for controlling extraction behavior

## Technical Requirements
- The integration should not significantly slow down the build process
- It should be possible to run the extraction separately from the main build
- The output should be structured for optimal access by MCP clients
- Extraction should be configurable via command line flags

## Implementation Guidance

### Build Pipeline Integration
- Add the MCP documentation extraction as a pre-build step in the existing Rollup build process
- Integrate directly in the `build-utils/build.ts` file as a new build phase before asset compilation
- Make the extraction module importable separately so it can be run standalone
- Use async processing where possible to minimize build time impact
- Add detailed logging for the extraction process with timing information
- Implement extraction result validation before proceeding with the rest of the build

### Documentation Versioning
- Include build timestamp and version information in generated documentation
- Generate a metadata file with build context, component versions, and schema version
- Create a versioning scheme that aligns with the Amino component library versioning
- Support multiple documentation versions for backward compatibility
- Add version headers to JSON files for future format changes

### Directory Structure Implementation
- Create the following structure in the public folder:
  ```
  public/
    mcp-data/
      index.json              # Main component index
      meta.json               # Build metadata and versioning
      components/             # Individual component documentation
        button.json
        input.json
        ...
      categories/             # Category-based organization
        inputs.json
        layout.json
        ...
      search/                 # Search indices
        index.json
  ```
- Ensure all paths use kebab-case for consistency
- Optimize file organization for common access patterns in MCP clients
- Create .gitignore rules for generated documentation files

### Build Flag Implementation
- Implement the following build flags through command line arguments:
  - `--mcp-extract`: Enable/disable documentation extraction (default: enabled in production)
  - `--mcp-components`: Specify which components to include (glob patterns)
  - `--mcp-output`: Configure output directory path
  - `--mcp-verbose`: Enable detailed logging of the extraction process
  - `--mcp-validate`: Control validation strictness (error, warn, none)
- Parse flags using the existing argument parsing infrastructure
- Provide sensible defaults for all configuration options
- Document all flags in the build documentation

## Current Environment
- We use a Rollup-based build system
- Our build process is defined in `build-utils/build.ts`
- Component files are located in `src/components/`
- Public assets go to the `public/` directory

## Expected Outcome
Provide detailed implementation strategies for:
1. Integration with the build pipeline
2. Component directory configuration
3. Output directory structure
4. Build flag implementation

Include code examples for key integration points and explain how to test the integration.