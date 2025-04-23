# Testing Framework Prompt

## Background
We've implemented the MCP protocol adapter and tools integration. Now we need a comprehensive testing framework to ensure our implementation is robust and reliable.

## Task Description
We need to set up a testing framework for our MCP server implementation, including:

1. Unit testing framework for the documentation extractor
2. Mock component files for testing
3. Unit tests for TypeScript interface parser
4. Unit tests for JSDoc extractor
5. Unit tests for example extractor
6. Unit tests for API routes
7. Integration tests for the extraction pipeline
8. API route testing with mock requests
9. Performance testing benchmarks

## Technical Requirements
- Tests should be automated and repeatable
- Coverage should be high (>80%) for critical components
- Tests should validate both happy paths and error cases
- Performance tests should validate response time requirements
- Testing framework should integrate with CI/CD pipeline

## Implementation Guidance

### Testing Framework Selection
- Use Vitest as the primary testing framework for unit and integration tests
- Set up a dedicated test environment configuration for MCP-related tests
- Organize tests to mirror the codebase structure for better maintainability
- Implement custom test utilities specific to MCP and documentation extraction
- Use test fixtures to share common test data and mock components
- Implement snapshot testing for schema validation

### Mock Component Creation
- Develop a component factory that generates synthetic components with varying complexity
- Create a library of test fixtures representing common component patterns:
  - Simple components with basic props
  - Complex components with nested interfaces
  - Components with generic types
  - Components with external dependencies
- Implement utilities to convert real components to test fixtures
- Include edge cases like circular references, deeply nested types, and unusual JSDoc patterns
- Create parametrized component generators for exhaustive testing

### Parser and Extractor Testing Strategy
- Test parsers with isolated input/output validation
- Create comprehensive test cases for type resolution edge cases
- Implement snapshot testing for parser output validation
- Use parameterized tests to cover multiple type variations
- Test integration between parsers and extractors
- Create mock AST structures for direct parser testing
- Test incremental parsing and change detection

### API Testing Implementation
- Use supertest for HTTP-based API testing
- Implement request factories for generating valid and invalid requests
- Create test middleware for request/response inspection
- Test all error paths and response codes
- Validate response bodies against MCP schemas
- Test rate limiting and security features
- Implement contract tests between API and MCP protocol adapter

### Performance Testing Methodology
- Set up benchmark tests using Vitest bench or a similar tool
- Define performance budgets for each API endpoint
- Test response times under various load conditions
- Measure memory consumption during extraction and API requests
- Test incremental build performance with varying change sizes
- Profile critical paths in the parser and extraction pipeline
- Implement continuous performance testing in CI
- Create performance regression tests that track metrics over time