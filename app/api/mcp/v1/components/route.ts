/**
 * MCP API Endpoint for listing components
 *
 * Serves the component index with optional filtering by category and tags
 */

import type {
  ComponentMetadata,
  ComponentsResponse,
  ErrorResponse,
} from 'app/api/mcp/v1/types';
// import { withSSESupport } from 'app/api/mcp/v1/utils/apiSSEMiddleware';
import * as fs from 'fs';
import { NextRequest } from 'next/server';
import * as path from 'path';

// Use environment variable directly instead of importing from environment module
const inProdEnvironment = process.env.NODE_ENV === 'production';

/**
 * Extract search parameters from request, using all possible sources
 * to ensure test compatibility
 */
function getSearchParams(
  request: NextRequest,
  testParams?: Record<string, string>,
): URLSearchParams {
  try {
    // First check if there are test params provided directly
    if (testParams && Object.keys(testParams).length > 0) {
      console.log('DEBUG: Using testParams:', testParams);
      const params = new URLSearchParams();
      Object.entries(testParams).forEach(([key, value]) => {
        params.set(key, value);
      });
      return params;
    }

    // Try different ways to get search parameters from request
    if (request.nextUrl?.searchParams) {
      console.log('DEBUG: Using request.nextUrl.searchParams:', [
        ...request.nextUrl.searchParams.entries(),
      ]);
      return request.nextUrl.searchParams;
    }

    if (request.url) {
      console.log('DEBUG: Parsing from request.url:', request.url);
      const urlObj = new URL(request.url);
      console.log('DEBUG: Parsed searchParams:', [
        ...urlObj.searchParams.entries(),
      ]);
      return urlObj.searchParams;
    }

    // If all else fails, return empty search params
    console.log('DEBUG: No searchParams found, returning empty');
    return new URLSearchParams();
  } catch (error) {
    console.error('Error parsing search parameters:', error);
    return new URLSearchParams();
  }
}

/**
 * Base handler for the components listing endpoint
 * Compatible with both Next.js App Router and direct testing
 */
async function componentsHandler(request: NextRequest): Promise<Response> {
  try {
    // Extract test parameters from request headers if they exist (used for testing)
    const testParamsHeader = request.headers.get('x-test-params');
    const testParams = testParamsHeader
      ? (JSON.parse(testParamsHeader) as Record<string, string>)
      : undefined;

    // Get search parameters in a way that works in tests and production
    const searchParams = getSearchParams(request, testParams);

    // Parse pathname from request url if available, or use default
    let pathname = '/api/mcp/v1/components';
    try {
      if (request.url) {
        const urlObj = new URL(request.url);
        pathname = urlObj.pathname;
      } else if (request.nextUrl?.pathname) {
        pathname = request.nextUrl.pathname;
      }
    } catch {
      // If URL parsing fails, use default pathname
    }

    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const limitParam = searchParams.get('limit');
    const offsetParam = searchParams.get('offset');
    const limit = limitParam ? Math.max(1, parseInt(limitParam, 10)) : 20;
    const offset = offsetParam ? Math.max(0, parseInt(offsetParam, 10)) : 0;

    // Path to the index.json file
    const indexPath = path.join(
      process.cwd(),
      'public',
      'mcp-data',
      'index.json',
    );

    // Check if the index file exists
    if (!fs.existsSync(indexPath)) {
      return Response.json(
        {
          error: {
            code: 'not_found',
            details: { path: indexPath },
            message: 'Components index file not found',
          },
        } as ErrorResponse,
        { status: 404 },
      );
    }

    // Read and parse the index file
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const indexData = JSON.parse(indexContent) as {
      components?: ComponentMetadata[];
      generatedAt?: string;
    };

    // Get all components from the index
    let components = indexData.components || [];

    // Filter by category if specified
    if (category) {
      components = components.filter(
        (comp: ComponentMetadata) => comp.category === category,
      );
    }

    // Filter by tag if specified
    if (tag) {
      components = components.filter((comp: ComponentMetadata) =>
        comp.tags?.includes(tag),
      );
    }

    const total = components.length;
    const paged = components.slice(offset, offset + limit);
    const next =
      offset + limit < total
        ? `${pathname}?limit=${limit}&offset=${offset + limit}` +
          `${category ? `&category=${category}` : ''}` +
          `${tag ? `&tag=${tag}` : ''}`
        : undefined;

    const pagination = { limit, next, offset, total };

    // Prepare response data for all cases
    const responseData: ComponentsResponse = {
      components: paged,
      pagination,
    };

    return Response.json(responseData);
  } catch (error) {
    // Handle errors
    return Response.json(
      {
        error: {
          code: 'internal_server_error',
          message: 'Internal server error while retrieving components list',
          ...(inProdEnvironment === false && {
            details: { error: String(error) },
          }),
        },
      } as ErrorResponse,
      { status: 500 },
    );
  }
}

/**
 * For testing purposes only - not part of the API route
 * @internal
 */
export function testHandler(
  request: NextRequest,
  testParams?: Record<string, string>,
): Promise<Response> {
  // Create a new request with the test params in the header
  const headers = new Headers(request.headers);
  if (testParams) {
    headers.set('x-test-params', JSON.stringify(testParams));
  }

  // Create a NextRequest from the existing request with the new headers
  const newRequest = new NextRequest(request.url, {
    headers,
    method: request.method,
  });

  return componentsHandler(newRequest);
}

// Mark testHandler as not a route handler export
testHandler.isNotRouteHandler = true;

/** Export handler directly for list components */
export const GET = componentsHandler;
