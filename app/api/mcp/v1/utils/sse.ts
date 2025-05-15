/**
 * Server-Sent Events (SSE) utility functions for MCP API responses
 */

/**
 * Creates a Server-Sent Events (SSE) response with the provided data
 *
 * @param data - Data to send as an SSE event
 * @returns Response with text/event-stream content type
 */
export function createSSEResponse<T>(data: T): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      // Format as an SSE event
      const eventData = `data: ${JSON.stringify(data)}\n\n`;
      controller.enqueue(encoder.encode(eventData));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Content-Type': 'text/event-stream',
    },
  });
}

/**
 * Determines if a client expects an SSE response based on request headers or URL params
 *
 * @param request - The incoming HTTP request
 * @returns Boolean indicating if the client expects an SSE response
 */
export function clientWantsSSE(request: Request): boolean {
  try {
    const url = new URL(request.url);
    const acceptHeader = request.headers.get('Accept');

    return Boolean(
      acceptHeader?.includes('text/event-stream') ||
        url.searchParams.has('stream'),
    );
  } catch {
    // If there's any error parsing the URL or headers, default to false
    return false;
  }
}

/**
 * Creates an appropriate response based on client expectations (SSE or JSON)
 *
 * @param request - The incoming HTTP request
 * @param data - Data to include in the response
 * @param options - Optional response options like status code
 * @returns Either an SSE stream or JSON response based on client expectations
 */
export function createResponse<T>(
  request: Request,
  data: T,
  options?: { status?: number },
): Response {
  const wantsStream = clientWantsSSE(request);

  return wantsStream ? createSSEResponse(data) : Response.json(data, options);
}
