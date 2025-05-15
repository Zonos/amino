/**
 * Tests for component detail endpoint
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

describe('Component detail endpoint', () => {
  // Use Next.js App Router request/response
  let mockRequest: NextRequest;
  let mockJsonResponse: ReturnType<typeof vi.fn>;
  let handler: (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
  ) => Promise<Response>;
  let mockParams: { params: Promise<{ id: string }> };

  // Mock component data
  const mockComponentData = {
    category: 'inputs',
    description: 'A customizable button component',
    examples: [
      {
        code: '<Button>Click me</Button>',
        description: 'A basic button example',
        name: 'Basic',
      },
    ],
    id: 'button',
    name: 'Button',
    path: 'src/components/button',
    props: {
      disabled: {
        defaultValue: false,
        description: 'Whether the button is disabled',
        name: 'disabled',
        required: false,
        type: 'boolean',
      },
      variant: {
        defaultValue: 'primary',
        description: 'The visual style of the button',
        name: 'variant',
        required: false,
        type: "'primary' | 'secondary' | 'tertiary'",
      },
    },
    tags: ['interactive', 'form'],
  };

  beforeEach(async () => {
    // Reset mocks
    vi.resetAllMocks();

    // Dynamically import the handler to handle Next.js dynamic routes
    const module = await import('../components/[id]/route');
    handler = module.GET;

    // Create request mock
    mockRequest = new NextRequest(
      'https://test.example.com/api/mcp/v1/components/button',
    );

    // Create params with component ID
    mockParams = { params: Promise.resolve({ id: 'button' }) };

    // Mock Response.json
    mockJsonResponse = vi.fn();
    vi.spyOn(Response, 'json').mockImplementation(mockJsonResponse);

    // Default mock implementation
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(
      JSON.stringify(mockComponentData),
    );
    vi.mocked(path.join).mockImplementation((...args: string[]) =>
      args.join('/'),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should return 400 if component ID is missing or invalid', async () => {
    // Test with empty ID
    mockParams = { params: Promise.resolve({ id: '' }) };
    await handler(mockRequest, mockParams);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'invalid_component_id',
        }),
      }),
      expect.objectContaining({ status: 400 }),
    );
  });

  test('should return 404 if component file does not exist', async () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    await handler(mockRequest, mockParams);

    expect(mockJsonResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'component_not_found',
        }),
      }),
      expect.objectContaining({ status: 404 }),
    );
  });

  test('should return component documentation when found', async () => {
    await handler(mockRequest, mockParams);

    expect(mockJsonResponse).toHaveBeenCalledWith(mockComponentData);
  });

  test('should handle errors gracefully', async () => {
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error('Test error');
    });

    await handler(mockRequest, mockParams);

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
