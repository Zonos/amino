/**
 * Tests for health check endpoint
 */

import * as fs from 'fs';
import type { NextRequest } from 'next/server';
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

    // Create request mock
    mockRequest = new Request('https://test.example.com/api/mcp/v1/health', {
      method: 'GET',
    }) as unknown as NextRequest;

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
