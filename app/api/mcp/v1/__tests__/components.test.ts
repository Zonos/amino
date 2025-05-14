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
