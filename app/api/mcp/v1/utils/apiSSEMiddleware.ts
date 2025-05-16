/**
 * MCP API middleware for common request/response handling
 *
 * Provides SSE (Server-Sent Events) support for API endpoints
 */

import { NextRequest } from 'next/server';

import { clientWantsSSE, createResponse } from './sse';

export type ApiHandler = (request: NextRequest) => Promise<Response>;

export type ApiResponse<T = unknown> = {
  data?: T;
  error?: {
    code: string;
    details?: Record<string, unknown>;
    message: string;
  };
};

/**
 * Convert Headers object to a plain object for serialization
 * Safely handles cases where headers might be undefined or null
 */
function headersToObject(headers?: Headers | null): Record<string, string> {
  const result: Record<string, string> = {};

  if (!headers) {
    return result;
  }

  try {
    // Check if headers has forEach method before calling it
    if (typeof headers.forEach === 'function') {
      headers.forEach((value, key) => {
        result[key] = value;
      });
    } else {
      // Fallback if headers object doesn't implement forEach correctly
      console.warn('Headers object does not implement forEach method properly');
    }
  } catch (error) {
    // Silently handle any errors during iteration
    console.error('Error processing headers:', error);
  }

  return result;
}

/**
 * Log detailed information about request and errors
 */
function logRequestDetails(request: NextRequest, error?: unknown): void {
  // Only log in development environments
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  try {
    // Defensively handle potential undefined request
    if (!request) {
      console.log('Request details: undefined request object');
      return;
    }

    // Safe URL parsing with fallback
    let host = 'unknown';
    let url = 'unknown';
    try {
      if (request.url) {
        const parsedUrl = new URL(request.url);
        host = parsedUrl.hostname || 'unknown';
        url = request.url;
      }
    } catch (urlError) {
      console.warn('Error parsing URL:', urlError);
    }

    // Safely get headers object with robust error handling
    let headersObj = {};
    try {
      if (request.headers && typeof request.headers.get === 'function') {
        headersObj = headersToObject(request.headers);
      }
    } catch (headerError) {
      console.warn('Error accessing headers:', headerError);
    }

    // Safe access to origin header
    let origin = null;
    try {
      if (request.headers && typeof request.headers.get === 'function') {
        origin = request.headers.get('origin');
      }
    } catch (originError) {
      console.warn('Error accessing origin header:', originError);
    }

    const requestDetails = {
      headers: headersObj,
      host,
      method: request.method || 'unknown',
      origin,
      url,
    };

    if (error) {
      const errorDetails = {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      };

      console.error('Error details:', errorDetails, requestDetails);
    } else {
      console.log('Request details:', requestDetails);
    }
  } catch (loggingError) {
    // Ensure logging itself doesn't cause crashes
    console.error('Error during request logging:', loggingError);
  }
}

/**
 * Create health check response with connectivity info
 */
function createHealthResponse(request: NextRequest): Response {
  try {
    // Defense against null/undefined request
    if (!request) {
      return new Response(
        JSON.stringify({
          error: 'Invalid request object',
          timestamp: new Date().toISOString(),
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Safe URL parsing with robust error handling
    let host = 'unknown';
    let protocol = 'unknown';
    const url = request?.url || 'unknown';

    try {
      if (request.url) {
        const parsedUrl = new URL(request.url);
        host = parsedUrl.hostname || 'unknown';
        protocol = parsedUrl.protocol || 'unknown';
      }
    } catch (urlError) {
      console.warn('Error parsing URL in health response:', urlError);
    }

    const connectivity = {
      host,
      origin: request.headers?.get?.('origin') || null,
      protocol,
      timestamp: new Date().toISOString(),
      url,
    };

    return new Response(JSON.stringify(connectivity), {
      headers: {
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Fallback response in case of any parsing errors
    console.error('Error generating health response:', error);
    return new Response(
      JSON.stringify({
        error: 'Could not generate health response',
        timestamp: new Date().toISOString(),
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}

/**
 * Safely check if request URL has a query parameter
 * Works with both standard Request and NextRequest objects
 */
function hasQueryParam(request: NextRequest, param: string): boolean {
  try {
    // Check nextUrl first (NextRequest specific)
    if (request.nextUrl?.searchParams?.has(param)) {
      return true;
    }

    // Fall back to parsing URL manually (works with standard Request)
    const url = new URL(request.url);
    return url.searchParams.has(param);
  } catch {
    return false;
  }
}

/**
 * Handle network errors with appropriate responses
 */
function handleNetworkError(request: NextRequest, error: unknown): Response {
  // Log detailed information for debugging
  logRequestDetails(request, error);

  const errorResponse: ApiResponse = {
    error: {
      code: 'network_error',
      details: {
        errorMessage: error instanceof Error ? error.message : String(error),
        url: request?.url || 'unknown',
      },
      message: 'Network connectivity issue detected',
    },
  };

  return createResponse(request, errorResponse, { status: 503 });
}

/**
 * Middleware that wraps an API handler to standardize response format and add SSE support
 *
 * @param handler - The original API handler function
 * @returns A new handler function with SSE support
 */
export function withSSESupport(handler: ApiHandler): ApiHandler {
  return async (request: NextRequest): Promise<Response> => {
    // Special case for connectivity debugging
    if (hasQueryParam(request, '__debug_connectivity')) {
      return createHealthResponse(request);
    }

    try {
      // Check explicitly if this is an SSE request before any further processing
      const wantsSSE = clientWantsSSE(request);

      // Add diagnostic headers to help debug SSE connection issues
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('X-MCP-SSE-Detected', wantsSSE ? 'true' : 'false');

      // Create a new request with the updated headers
      const enhancedRequest = new NextRequest(request.url, {
        body: request.body,
        headers: requestHeaders,
        method: request.method,
        redirect: request.redirect,
      });

      // Log request for debugging persistent issues
      if (process.env.NODE_ENV !== 'production') {
        logRequestDetails(enhancedRequest);
      }

      // Get response from original handler
      const response = await handler(enhancedRequest);

      // Handle edge case where response or headers might be undefined
      if (
        !response ||
        !response.headers ||
        typeof response.headers.get !== 'function'
      ) {
        console.warn(
          'Response or headers invalid, falling back to direct return',
        );
        return response;
      }

      // If this is an SSE request but the response isn't already set up for SSE
      if (
        wantsSSE &&
        !response.headers.get('Content-Type')?.includes('text/event-stream')
      ) {
        // For SSE requests, always clone and convert to SSE format
        try {
          const clonedResponse = response.clone();
          const data = await clonedResponse.json();

          return createResponse(request, data, {
            status: response.status,
          });
        } catch (error) {
          console.warn('Error converting response to SSE:', error);
          return response;
        }
      }

      // For non-SSE requests or already correctly formatted SSE responses
      return response;
    } catch (error) {
      return handleNetworkError(request, error);
    }
  };
}
