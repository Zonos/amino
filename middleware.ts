import { type NextRequest, NextResponse } from 'next/server';

/**
 * Middleware to handle CORS and log network errors
 */
export function middleware(request: NextRequest): NextResponse {
  // Get the origin from the request
  const origin = request.headers.get('origin') || '*';

  // Clone the request headers to add CORS headers
  const requestHeaders = new Headers(request.headers);

  // Only handle API requests
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Create a response object
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Add CORS headers to the response
  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  // Handle OPTIONS requests for CORS preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      headers: response.headers,
      status: 200,
    });
  }

  return response;
}

/**
 * Match specific routes for middleware execution
 */
export const config = {
  matcher: [
    // Apply this middleware only to API routes
    '/api/:path*',
  ],
};
