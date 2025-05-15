/**
 * Tests for components listing endpoint
 */

import * as fs from 'fs';
import { NextRequest } from 'next/server';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, vi } from 'vitest';

// Mock environment module
vi.mock('../../../../config/environment', () => ({
  inProdEnvironment: false,
}));

// Mock fs and path modules
vi.mock('fs', () => ({
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
}));

vi.mock('path', () => ({
  join: vi.fn((...args: string[]) => args.join('/')),
}));

// Mock the NextRequest implementation
vi.mock('next/server', async () => {
  const actual = await vi.importActual('next/server');

  return {
    ...(actual as object),
    NextRequest: vi.fn().mockImplementation((url, init) => {
      // Make sure we have a valid URL string for testing
      const urlString = url || 'https://test.example.com';
      const request = new Request(urlString, init);

      // Safely parse URL with error handling
      let parsedUrl: URL;
      try {
        parsedUrl = new URL(urlString);
      } catch (err) {
        // Default URL if parsing fails
        parsedUrl = new URL('https://test.example.com');
        console.warn('Error parsing URL in NextRequest mock:', err);
      }

      // Copy original headers to a plain object for easier manipulation
      const headersObj: Record<string, string> = {};
      try {
        request.headers.forEach((value, key) => {
          headersObj[key] = value;
        });
      } catch (err) {
        console.warn('Error processing headers in NextRequest mock:', err);
      }

      // Create a robust headers implementation
      const mockedHeaders = {
        // Add other Headers methods as needed
        append: (name: string, value: string) => {
          headersObj[name.toLowerCase()] = value;
        },
        delete: (name: string) => {
          delete headersObj[name.toLowerCase()];
        },
        entries: () => Object.entries(headersObj)[Symbol.iterator](),
        forEach: (callback: (value: string, key: string) => void) => {
          Object.entries(headersObj).forEach(([key, value]) => {
            callback(value, key);
          });
        },
        // Implement standard Headers methods
        get: (name: string) => headersObj[name.toLowerCase()] || null,
        has: (name: string) => name.toLowerCase() in headersObj,
        // Ensure headers can be properly serialized
        keys: () => Object.keys(headersObj)[Symbol.iterator](),
        set: (name: string, value: string) => {
          headersObj[name.toLowerCase()] = value;
        },
        values: () => Object.values(headersObj)[Symbol.iterator](),
      };

      // Ensure search params are properly initialized
      const searchParams = new URLSearchParams(parsedUrl.search);

      // Return a properly mocked NextRequest with all required properties
      return {
        bodyUsed: request.bodyUsed,
        clone: () => request.clone(),
        headers: mockedHeaders,
        // Add any other properties needed for tests
        json: () => request.json(),
        method: request.method || 'GET',
        nextUrl: {
          get: (param: string) => searchParams.get(param),
          has: (param: string) => searchParams.has(param),
          hash: parsedUrl.hash,
          hostname: parsedUrl.hostname,
          href: parsedUrl.href,
          origin: parsedUrl.origin,
          password: parsedUrl.password,
          pathname: parsedUrl.pathname,
          port: parsedUrl.port,
          protocol: parsedUrl.protocol,
          search: parsedUrl.search,
          searchParams: searchParams,
          username: parsedUrl.username,
        },
        text: () => request.text(),
        url: urlString,
      };
    }),
  };
});

describe('Components listing endpoint', () => {
  // Use Next.js App Router request/response
  let mockRequest: NextRequest;
  let mockJsonResponse: ReturnType<typeof vi.fn>;
  let handler: (request: NextRequest) => Promise<Response>;

  // Mock component data
  const mockComponentsData = {
    components: [
      {
        category: 'inputs',
        description: 'A customizable button component',
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
        tags: ['interactive', 'form'],
      },
      {
        category: 'inputs',
        description: 'Text input component',
        id: 'input',
        name: 'Input',
        path: 'src/components/input',
        tags: ['form'],
      },
      {
        category: 'layout',
        description: 'Card component for displaying content',
        id: 'card',
        name: 'Card',
        path: 'src/components/card',
        tags: ['container'],
      },
    ],
    generatedAt: '2023-01-01T00:00:00.000Z',
  };

  beforeEach(async () => {
    // Reset mocks
    vi.resetAllMocks();

    // Dynamically import the handler to handle Next.js module resolution
    const module = await import('../components/route');
    handler = module.GET;

    // Mock Response.json
    mockJsonResponse = vi.fn();
    vi.spyOn(Response, 'json').mockImplementation(mockJsonResponse);

    // Default mock implementation
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(
      JSON.stringify(mockComponentsData),
    );
    vi.mocked(path.join).mockImplementation((...args: string[]) =>
      args.join('/'),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should return 404 if components index file does not exist', async () => {
    // Create request with no query parameters
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components',
    );

    vi.mocked(fs.existsSync).mockReturnValue(false);
    await handler(mockRequest);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'not_found',
        }),
      }),
      expect.objectContaining({ status: 404 }),
    );
  });

  test('should return all components when no filters are applied', async () => {
    // Create request with no query parameters
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components',
    );

    await handler(mockRequest);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        components: mockComponentsData.components,
        pagination: expect.objectContaining({
          limit: 20,
          offset: 0,
          total: 3,
        }),
      }),
    );
  });

  test('should filter components by category', async () => {
    // Create request with category parameter
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components?category=inputs',
    );

    // Manually set nextUrl searchParams for tests
    // This ensures the parameters are available even if URL parsing fails
    const searchParams = new URLSearchParams();
    searchParams.set('category', 'inputs');

    // Override the nextUrl with properly configured searchParams
    Object.defineProperty(mockRequest, 'nextUrl', {
      value: {
        ...mockRequest.nextUrl,
        get: (param: string) => searchParams.get(param),
        has: (param: string) => searchParams.has(param),
        pathname: '/api/mcp/v1/components',
        searchParams,
      },
      writable: true,
    });

    await handler(mockRequest);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        components: [
          mockComponentsData.components[0],
          mockComponentsData.components[1],
        ],
        pagination: expect.objectContaining({
          limit: 20,
          offset: 0,
          total: 2,
        }),
      }),
    );
  });

  test('should filter components by tag', async () => {
    // Create request with tag parameter
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components?tag=container',
    );

    // Manually set nextUrl searchParams for tests
    // This ensures the parameters are available even if URL parsing fails
    const searchParams = new URLSearchParams();
    searchParams.set('tag', 'container');

    // Override the nextUrl with properly configured searchParams
    Object.defineProperty(mockRequest, 'nextUrl', {
      value: {
        ...mockRequest.nextUrl,
        get: (param: string) => searchParams.get(param),
        has: (param: string) => searchParams.has(param),
        pathname: '/api/mcp/v1/components',
        searchParams,
      },
      writable: true,
    });

    await handler(mockRequest);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        components: [mockComponentsData.components[2]],
        pagination: expect.objectContaining({
          limit: 20,
          offset: 0,
          total: 1,
        }),
      }),
    );
  });

  test('should apply pagination correctly', async () => {
    // Create request with pagination parameters
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components?limit=1&offset=1',
    );

    // Manually set nextUrl searchParams for tests
    // This ensures the parameters are available even if URL parsing fails
    const searchParams = new URLSearchParams();
    searchParams.set('limit', '1');
    searchParams.set('offset', '1');

    // Override the nextUrl with properly configured searchParams
    Object.defineProperty(mockRequest, 'nextUrl', {
      value: {
        ...mockRequest.nextUrl,
        get: (param: string) => searchParams.get(param),
        has: (param: string) => searchParams.has(param),
        pathname: '/api/mcp/v1/components',
        searchParams,
      },
      writable: true,
    });

    await handler(mockRequest);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        components: [mockComponentsData.components[1]],
        pagination: expect.objectContaining({
          limit: 1,
          next: '/api/mcp/v1/components?limit=1&offset=2',
          offset: 1,
          total: 3,
        }),
      }),
    );
  });

  test('should handle errors gracefully', async () => {
    // Create request
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components',
    );

    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error('Test error');
    });

    await handler(mockRequest);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'internal_server_error',
        }),
      }),
      expect.objectContaining({ status: 500 }),
    );
  });
});
