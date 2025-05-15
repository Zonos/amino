<!-- filepath: /Users/robertjensen/1-zonos/amino/specs/mcp-resources/03-phase/sse-support.spec.md -->

# Server-Sent Events (SSE) Support

## Overview

This specification outlines the implementation of Server-Sent Events (SSE) support for the MCP server. SSE capabilities enhance the MCP server's compatibility with various clients, particularly AI assistants and tools that expect real-time event streams.

## Implementation Goals

1. Support both traditional REST API and SSE clients simultaneously
2. Maintain backward compatibility with existing API endpoints
3. Follow SSE protocol standards for maximum client compatibility
4. Provide a seamless developer experience regardless of client type

## Content Type Negotiation

The MCP server implements content type negotiation to determine the appropriate response format based on client requirements:

### Request Analysis

The server detects client expectations through:

1. **Primary Method**: Examining the `Accept` header for `text/event-stream`
2. **Secondary Method**: Checking for a `stream` query parameter

### Response Formatting

Based on the request analysis, the server responds with:

1. **SSE Clients**: Content-Type: `text/event-stream` with proper SSE formatting
2. **Standard Clients**: Content-Type: `application/json` with standard JSON response

## SSE Response Format

For clients that expect SSE, the server formats responses as proper SSE events:

```
data: {"property":"value","array":[1,2,3]}

```

Key features of the SSE implementation include:

1. Proper `data:` prefixing for all event data
2. JSON serialization of response objects
3. Appropriate newline formatting according to SSE specification
4. Required SSE headers:
   - `Content-Type: text/event-stream`
   - `Cache-Control: no-cache`
   - `Connection: keep-alive`

## Implementation Architecture

The SSE support is implemented using a modular approach:

### Utility Functions

1. **clientWantsSSE**: Analyzes requests to determine if the client expects an SSE response
2. **createSSEResponse**: Formats data as an SSE stream with proper headers
3. **createResponse**: A unified response function that returns the appropriate response type

### Middleware Integration

SSE support is applied across all API endpoints through:

1. **withSSESupport**: A middleware wrapper that adds SSE capabilities to any route handler
2. **Automatic Content Negotiation**: Dynamic response formatting based on client expectations

## Client Compatibility

This implementation ensures compatibility with:

1. Standard REST API clients (traditional JSON consumers)
2. SSE-based MCP clients (such as AI assistants)
3. Browser-based EventSource consumers
4. Command-line tools that request SSE streams

## Performance Considerations

The SSE implementation is designed with performance in mind:

1. **Minimal Overhead**: Content negotiation adds negligible processing time
2. **Efficient Streaming**: Uses the Web Streams API for efficient data delivery
3. **Resource Management**: Properly closes streams to avoid resource leaks

## Testing Approach

Testing for SSE support includes:

1. **Unit Tests**: Verify content negotiation logic and SSE formatting
2. **Integration Tests**: Test endpoints with various Accept headers and query parameters
3. **Client Simulation**: Test with real MCP clients to ensure compatibility

## Related MCP Protocol Standards

This implementation follows the MCP protocol standards for streaming responses, ensuring compatibility with AI tools and assistants that consume MCP endpoints.
