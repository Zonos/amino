/**
 * MCP API Debug Endpoint
 *
 * This endpoint provides diagnostic information for troubleshooting connectivity issues
 */

import type { NextRequest } from 'next/server';

/**
 * Convert Headers object to a plain object for serialization
 */
function headersToObject(headers: Headers): Record<string, string> {
  const result: Record<string, string> = {};
  headers.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

/**
 * Handler for diagnostic information
 */
export async function GET(request: NextRequest): Promise<Response> {
  const requestUrl = new URL(request.url);

  // Gather connectivity diagnostic information
  const diagnosticData = {
    connectivity: {
      message: 'Server is reachable and responding correctly',
      status: 'success',
    },
    request: {
      headers: headersToObject(request.headers),
      method: request.method,
      url: request.url,
    },
    server: {
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      environment: process.env.NODE_ENV,
      host: requestUrl.hostname,
      timestamp: new Date().toISOString(),
    },
  };

  // Set appropriate headers for cross-origin access and caching
  return new Response(JSON.stringify(diagnosticData, null, 2), {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store',
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}
