/**
 * Tests for health check endpoint
 */

import * as fs from 'fs';
import { NextRequest } from 'next/server';
import * as path from 'path';
import type { Mock } from 'vitest';
import { afterEach, beforeEach, describe, expect, vi } from 'vitest';

// Mock environment module
vi.mock('../../../../config/environment', () => ({
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Test MCP Server',
  },
  mcpApiBase: '/api/mcp/v1',
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
        forEach: (callback: (value: string, key: string) => void) => {
          Object.entries(headersObj).forEach(([key, value]) => {
            callback(value, key);
          });
        },
        // Implement standard Headers methods
        get: (name: string) => headersObj[name.toLowerCase()] || null,
        has: (name: string) => name.toLowerCase() in headersObj,
        set: (name: string, value: string) => {
          headersObj[name.toLowerCase()] = value;
        },
      };

      // Return a properly mocked NextRequest with all required properties
      return {
        bodyUsed: request.bodyUsed,
        clone: () => request.clone(),
        headers: mockedHeaders,
        // Add any other properties needed for tests
        json: () => request.json(),
        method: request.method || 'GET',
        nextUrl: {
          hash: parsedUrl.hash,
          hostname: parsedUrl.hostname,
          href: parsedUrl.href,
          origin: parsedUrl.origin,
          password: parsedUrl.password,
          pathname: parsedUrl.pathname,
          port: parsedUrl.port,
          protocol: parsedUrl.protocol,
          search: parsedUrl.search,
          searchParams: parsedUrl.searchParams,
          username: parsedUrl.username,
        },
        text: () => request.text(),
        url: urlString,
      };
    }),
  };
});

describe('Health check endpoint', () => {
  // Mock package.json data
  const mockPackageJson = {
    name: '@zonos/amino',
    version: '1.0.0',
  };

  // Mock index data
  const mockIndexData = {
    components: [
      { id: 'button', name: 'Button' },
      { id: 'input', name: 'Input' },
      { id: 'card', name: 'Card' },
    ],
  };

  // Use Next.js App Router request/response
  let mockRequest: NextRequest;
  let mockJsonResponse: Mock;
  let handler: (request: NextRequest) => Promise<Response>;

  beforeEach(async () => {
    // Reset mocks
    vi.resetAllMocks();

    // Dynamically import the handler to handle Next.js module resolution
    const module = await import('../health/route');
    handler = module.GET;

    // Create request mock using NextRequest constructor
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/health',
      {
        method: 'GET',
      },
    );

    // Mock Response.json
    mockJsonResponse = vi.fn();
    vi.spyOn(Response, 'json').mockImplementation(mockJsonResponse);

    // Default mock implementation
    vi.mocked(fs.existsSync).mockImplementation(
      (_path: fs.PathLike): boolean => true,
    );

    vi.mocked(fs.readFileSync).mockImplementation(
      (_path: fs.PathOrFileDescriptor): string => {
        if (String(_path).endsWith('package.json')) {
          return JSON.stringify(mockPackageJson);
        }
        if (String(_path).endsWith('index.json')) {
          return JSON.stringify(mockIndexData);
        }
        return '';
      },
    );
    vi.mocked(path.join).mockImplementation((...args: string[]) =>
      args.join('/'),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should return status ok when documentation exists', async () => {
    await handler(mockRequest);
    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        components: expect.objectContaining({
          api: expect.objectContaining({
            status: 'ok',
          }),
          documentation: expect.objectContaining({
            componentCount: 3,
            message: '3 components available',
            status: 'ok',
          }),
        }),
        status: 'ok',
        timestamp: expect.any(String),
        version: '1.0.0',
      }),
    );
  });

  test('should report degraded status when documentation index is missing', async () => {
    // Mock index file not existing
    vi.mocked(fs.existsSync).mockImplementation(
      (_path: fs.PathLike): boolean => {
        if (String(_path).endsWith('index.json')) {
          return false;
        }
        return true;
      },
    );

    await handler(mockRequest);
    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        components: expect.objectContaining({
          documentation: expect.objectContaining({
            message: 'Documentation not found',
            status: 'error',
          }),
        }),
        status: 'degraded',
      }),
    );
  });

  test('should report unknown version when package.json is missing', async () => {
    // Mock package.json file not existing
    vi.mocked(fs.existsSync).mockImplementation(
      (_path: fs.PathLike): boolean => {
        if (String(_path).endsWith('package.json')) {
          return false;
        }
        return true;
      },
    );

    await handler(mockRequest);
    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        version: 'unknown',
      }),
    );
  });

  test('should handle errors in reading index file', async () => {
    // Mock error reading index file
    vi.mocked(fs.readFileSync).mockImplementation(
      (_path: fs.PathOrFileDescriptor): string => {
        if (String(_path).endsWith('index.json')) {
          throw new Error('Test error reading index');
        }
        return JSON.stringify(mockPackageJson);
      },
    );

    await handler(mockRequest);
    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        components: expect.objectContaining({
          documentation: expect.objectContaining({
            message: 'Error reading documentation index',
            status: 'error',
          }),
        }),
        status: 'degraded',
      }),
    );
  });

  test('should handle unexpected errors gracefully', async () => {
    // Mock an unexpected error
    vi.mocked(fs.existsSync).mockImplementation(
      (_path: fs.PathLike): boolean => {
        throw new Error('Unexpected test error');
      },
    );

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
