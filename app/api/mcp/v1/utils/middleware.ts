/**
 * MCP API middleware for common request/response handling
 */

import type { NextRequest } from 'next/server';

import { createResponse } from './sse';

export type ApiHandler<T = unknown> = (
  request: NextRequest,
) => Promise<Response> | Response;

export type ApiResponse<T = unknown> = {
  data?: T;
  error?: {
    code: string;
    details?: Record<string, unknown>;
    message: string;
  };
};

/**
 * Middleware that wraps an API handler to standardize response format and add SSE support
 *
 * @param handler - The original API handler function
 * @returns A new handler function with SSE support
 */
export function withSSESupport<T>(handler: ApiHandler<T>): ApiHandler<T> {
  return async (request: NextRequest): Promise<Response> => {
    try {
      // Get response from original handler
      const response = await handler(request);

      // If the response is not JSON, return it as-is (e.g., for custom responses)
      const contentType = response.headers.get('Content-Type');
      if (!contentType?.includes('application/json')) {
        return response;
      }

      // Clone the response to read its body
      const clonedResponse = response.clone();
      // Parse the JSON data
      const data = await clonedResponse.json();

      // Create a new response with the same data but with SSE support if needed
      return createResponse(request, data, {
        status: response.status,
      });
    } catch (error) {
      console.error('Error in API handler:', error);

      // Return a standardized error response
      const errorResponse: ApiResponse = {
        error: {
          code: 'internal_server_error',
          message: 'An unexpected error occurred',
          ...(process.env.NODE_ENV !== 'production' && {
            details: { error: String(error) },
          }),
        },
      };

      return createResponse(request, errorResponse, { status: 500 });
    }
  };
}
