# Documentation Prompt

## Background
We've implemented, tested, and deployed our MCP server. Now we need to create comprehensive documentation for users, developers, and maintainers.

## Task Description
We need to create documentation for our MCP server implementation, including:

1. User documentation for AI assistant users
2. Developer documentation for component authors
3. Technical documentation for system maintainers
4. API reference documentation

## Technical Requirements
- Documentation should be clear and comprehensive
- Component authoring guidelines should be provided
- API reference should be complete and accurate
- Maintenance procedures should be well-documented

## Implementation Guidance

### Documentation Format and Structure
- Implement documentation as a dedicated MDX-based site using Nextra or Docusaurus
- Organize documentation into clearly defined sections:
  - Getting Started guide
  - User Guide for AI Assistant Integration
  - Component Authoring Guidelines
  - API Reference
  - System Architecture
  - Maintenance Procedures
- Use interactive examples where possible to demonstrate concepts
- Implement a versioned documentation system that aligns with software releases
- Include a search function for quick access to specific topics
- Add a feedback system to collect user input on documentation quality

### Priority Documentation Areas
- Create detailed documentation for component authors focusing on:
  - JSDoc best practices for MCP compatibility
  - TypeScript interface design guidelines
  - Example creation standards
  - Component testing with MCP validation
- Provide comprehensive API reference with:
  - Endpoint descriptions with request/response examples
  - Parameter documentation with validation rules
  - Error handling and troubleshooting guides
  - Rate limiting and security information
- Document system architecture with:
  - Component diagrams showing system interactions
  - Sequence diagrams for key processes
  - Deployment architecture diagrams
  - Performance considerations and optimization guides

### Documentation Maintenance Strategy
- Generate API reference documentation automatically from code using TypeDoc
- Implement documentation tests that validate links, examples, and API references
- Create a documentation update checklist for code reviewers
- Add documentation status badges to indicate freshness and completeness
- Include "last updated" timestamps on all documentation pages
- Set up automated linting for documentation markdown files
- Implement a doc-as-code approach with the same PR review process as code
- Create a scheduled documentation review process (quarterly)

### Examples and Best Practices
- Include a complete component development lifecycle example:
  - Component creation with proper JSDoc
  - TypeScript interface design
  - Example implementation
  - Testing with MCP integration
  - Deployment and verification
- Add real-world usage examples showing AI assistants interacting with components
- Create troubleshooting guides with common issues and solutions
- Provide optimization examples for high-performance components
- Include accessibility compliance examples and guidelines
- Create migration guides for updating existing components to be MCP-compatible