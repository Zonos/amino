/**
 * Tests for components listing endpoint
 */

import * as fs from 'fs';
import { NextRequest } from 'next/server';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, vi } from 'vitest';

// Mock environment module
vi.mock('../../../../config/environment', () => ({
  env: {
    APP_URL: 'http://localhost:3000',
    MCP_SERVER_URL: 'http://localhost:3000',
    // Add any other environment variables from the 'env' object that your
    // route handler might depend on for these tests.
  },
  // If 'inProdEnvironment' is a direct named export from config/environment
  // and your handler uses it, keep it. Otherwise, it can be removed if it's part of 'env'.
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

  const MockNextRequestConstructor = vi
    .fn()
    .mockImplementation((inputUrl, init) => {
      let urlString: string;

      if (inputUrl instanceof URL) {
        urlString = inputUrl.href;
      } else if (typeof inputUrl === 'string' && inputUrl.trim() !== '') {
        urlString = inputUrl;
      } else if (
        inputUrl &&
        typeof inputUrl.href === 'string' &&
        inputUrl.href.trim() !== ''
      ) {
        urlString = inputUrl.href;
      } else {
        // Fallback for invalid or missing inputUrl
        urlString = 'http://localhost:3000/api/mcp/v1/components/test-default';
      }

      // Validate urlString by attempting to create a URL object early.
      // This will throw if urlString is fundamentally invalid.
      const parsedUrl = new URL(urlString);

      const mockInstance = {}; // Start with an empty object for Object.defineProperty

      Object.defineProperty(mockInstance, 'url', {
        configurable: true, // Allows Vitest to spy or modify if necessary later
        enumerable: true,
        value: urlString,
        writable: false, // Mimic native Request.url
      });

      Object.defineProperty(mockInstance, 'nextUrl', {
        configurable: true,
        enumerable: true,
        value: {
          hash: parsedUrl.hash,
          host: parsedUrl.host,
          hostname: parsedUrl.hostname,
          href: urlString,
          origin: parsedUrl.origin,
          password: parsedUrl.password,
          pathname: parsedUrl.pathname,
          port: parsedUrl.port,
          protocol: parsedUrl.protocol,
          search: parsedUrl.search,
          searchParams: new URLSearchParams(parsedUrl.search),
          username: parsedUrl.username,
        },
        writable: true, // nextUrl is often an object that might be modified
      });

      Object.defineProperty(mockInstance, 'headers', {
        configurable: true,
        enumerable: true,
        value: {
          forEach: vi.fn(), // Placeholder if forEach is used
          // Provide a basic mock for headers.get, as it's commonly used.
          get: vi.fn(() => null), // Default to returning null
          set: vi.fn(() => {}), // Mock for setting headers
          // Add other header methods if your handler specifically uses them.
        },
        writable: true,
      });

      Object.defineProperty(mockInstance, 'method', {
        configurable: true,
        enumerable: true,
        value: (init as RequestInit | undefined)?.method || 'GET',
        writable: false,
      });

      // A simple clone that returns itself, or a new instance if more complex state is involved.
      // For this scenario, returning a new mock with the same URL is safest.
      Object.defineProperty(mockInstance, 'clone', {
        configurable: true,
        enumerable: true,
        value: vi.fn(() => new MockNextRequestConstructor(urlString, init)),
        writable: false,
      });

      Object.defineProperty(mockInstance, 'json', {
        configurable: true,
        enumerable: true,
        value: async () => ({}), // Default mock for .json()
        writable: false,
      });

      Object.defineProperty(mockInstance, 'text', {
        configurable: true,
        enumerable: true,
        value: async () => '', // Default mock for .text()
        writable: false,
      });

      // Add other properties from native Request if needed by the handler, e.g.:
      Object.defineProperty(mockInstance, 'bodyUsed', {
        configurable: true,
        enumerable: true,
        value: false,
        writable: true,
      });
      // ... arrayBuffer, blob, formData etc. if used by the handler before .url

      return mockInstance;
    });

  return {
    ...(actual as object),
    NextRequest: MockNextRequestConstructor,
  };
});

describe('Components listing endpoint', () => {
  // Use Next.js App Router request/response
  let mockRequest: NextRequest;
  let mockJsonResponse: ReturnType<typeof vi.fn>;
  let handler: (request: NextRequest) => Promise<Response>;
  let testHandler: (
    request: NextRequest,
    testParams?: Record<string, string>,
  ) => Promise<Response>;

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

  let originalAppUrl: string | undefined;

  beforeEach(async () => {
    // Store original APP_URL and set it for the test
    originalAppUrl = process.env.APP_URL;
    process.env.APP_URL = 'http://localhost:3000'; // Ensure APP_URL is set

    // Reset mocks to clear call history, etc.
    vi.resetAllMocks();

    // Reset the module cache to ensure the handler re-imports with active mocks
    vi.resetModules();

    // Re-apply default mock implementations for fs and path after resetting mocks and modules
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(
      JSON.stringify(mockComponentsData),
    );
    vi.mocked(path.join).mockImplementation((...args: string[]) =>
      args.join('/'),
    );

    // Mock Response.json globally for all tests in this describe block
    // This needs to be done after vi.resetModules() if Response is part of a module that gets reset,
    // or if Response.json itself is mocked via vi.mock.
    // However, Response is a global, so this spy should be fine here.
    mockJsonResponse = vi.fn();
    vi.spyOn(Response, 'json').mockImplementation(mockJsonResponse);

    // Dynamically import the handler AFTER resetting modules and setting up other mocks
    const module = await import('../components/route');
    handler = module.GET;
    testHandler = module.testHandler;
  });

  afterEach(() => {
    vi.clearAllMocks();
    // Restore original APP_URL
    process.env.APP_URL = originalAppUrl;
  });

  test.skip('should return 404 if components index file does not exist', async () => {
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

  test.skip('should return all components when no filters are applied', async () => {
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

  test.skip('should filter components by category', async () => {
    // Create a basic request
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components',
    );

    // Use testHandler instead of the direct API handler
    await testHandler(mockRequest, { category: 'inputs' });

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

  test.skip('should filter components by tag', async () => {
    // Create a basic request
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components',
    );

    // Use testHandler instead of the direct API handler
    await testHandler(mockRequest, { tag: 'container' });

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

  test.skip('should apply pagination correctly', async () => {
    // Create a basic request
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components',
    );

    // Use testHandler instead of the direct API handler
    await testHandler(mockRequest, { limit: '1', offset: '1' });

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
