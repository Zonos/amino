/**
 * Server-Sent Events (SSE) utility functions for MCP API responses
 */

import type { NextRequest } from 'next/server';

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
 * Safely check if request URL has a query parameter
 * Works with both standard Request and NextRequest objects
 *
 * @param request - The incoming HTTP request
 * @param param - Parameter name to check for
 * @returns Boolean indicating if parameter exists
 */
function hasQueryParam(request: Request | NextRequest, param: string): boolean {
  try {
    // Check nextUrl first (NextRequest specific)
    if ('nextUrl' in request && request.nextUrl?.searchParams?.has(param)) {
      return true;
    }

    // Fall back to parsing URL manually (works with standard Request)
    const url = new URL(request.url);
    return url.searchParams.has(param);
  } catch {
    // If there's any error parsing the URL, default to false
    return false;
  }
}

/**
 * Determines if a client expects an SSE response based on request headers or URL params
 *
 * @param request - The incoming HTTP request (standard Request or NextRequest)
 * @returns Boolean indicating if the client expects an SSE response
 */
export function clientWantsSSE(request: Request | NextRequest): boolean {
  try {
    // Handle completely undefined request
    if (!request) {
      return false;
    }

    // Safely check headers with multiple fallbacks
    if (!request.headers) {
      return false;
    }

    // Check if headers.get is a function before using it
    const hasGetMethod = typeof request.headers.get === 'function';
    const acceptHeader = hasGetMethod ? request.headers.get('Accept') : null;

    // Primarily check the Accept header for text/event-stream
    if (acceptHeader && acceptHeader.includes('text/event-stream')) {
      return true;
    }

    // Secondary check: explicit stream param in URL
    // This allows clients to force SSE mode through URL params
    if (hasQueryParam(request, 'stream')) {
      return true;
    }

    return false;
  } catch (error) {
    // If there's any error parsing the URL or headers, default to false
    console.warn('Error determining SSE mode:', error);
    return false;
  }
}

/**
 * Creates an appropriate response based on client expectations (SSE or JSON)
 *
 * @param request - The incoming HTTP request (standard Request or NextRequest)
 * @param data - Data to include in the response
 * @param options - Optional response options like status code
 * @returns Either an SSE stream or JSON response based on client expectations
 */
export function createResponse<T>(
  request: Request | NextRequest | null | undefined,
  data: T,
  options?: { status?: number },
): Response {
  try {
    // Handle edge case where request is undefined or null
    if (!request) {
      console.warn('createResponse called with undefined request');
      return Response.json(data, options);
    }

    // Catch any errors that might occur when checking if client wants SSE
    let wantsStream = false;
    try {
      wantsStream = clientWantsSSE(request);
    } catch (streamError) {
      console.warn('Error checking if client wants SSE:', streamError);
      // Default to JSON response on error
    }

    return wantsStream ? createSSEResponse(data) : Response.json(data, options);
  } catch (error) {
    // If any error occurs, fall back to standard JSON response
    console.error('Error creating response:', error);
    return Response.json(data, options);
  }
}
