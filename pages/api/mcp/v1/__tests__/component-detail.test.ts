/**
 * Tests for component detail endpoint
 */

import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock fs and path modules
vi.mock('fs', () => ({
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
}));

vi.mock('path', () => ({
  join: vi.fn((...args: string[]) => args.join('/')),
}));

describe('Component detail endpoint', () => {
  // Create proper request and response mocks
  let mockReq: NextApiRequest;
  // Use a more complete mock for the response that properly replaces methods
  let mockRes: {
    end: ReturnType<typeof vi.fn>;
    json: ReturnType<typeof vi.fn>;
    send: ReturnType<typeof vi.fn>;
    setHeader: ReturnType<typeof vi.fn>;
    status: ReturnType<typeof vi.fn>;
  };

  let handler: (req: NextApiRequest, res: NextApiResponse) => void;

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
    // This avoids the issue with direct imports of [id].ts files
    const module = await import('../components/[id]');
    handler = module.default;

    // Create fresh request and response mocks for each test
    mockReq = {
      body: null,
      cookies: {},
      env: {},
      // Adding minimal required properties to satisfy NextApiRequest type
      headers: {},
      method: 'GET',
      query: { id: 'button' },
    } as unknown as NextApiRequest;

    // Create a proper response mock with chainable methods
    mockRes = {
      end: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
      setHeader: vi.fn().mockReturnThis(),
      status: vi.fn().mockReturnThis(),
    };

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

  it('should return 405 for non-GET requests', () => {
    mockReq.method = 'POST';
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(405);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'method_not_allowed',
        }),
      }),
    );
  });

  it('should return 400 if component ID is missing or invalid', () => {
    mockReq.query = {}; // Missing ID
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'invalid_component_id',
        }),
      }),
    );

    // Array of IDs (invalid)
    mockReq.query = { id: ['button', 'input'] };
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(400);
  });

  it('should return 404 if component file does not exist', () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'component_not_found',
        }),
      }),
    );
  });

  it('should return component documentation when found', () => {
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockComponentData);
  });

  it('should handle errors gracefully', () => {
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error('Test error');
    });
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'internal_server_error',
        }),
      }),
    );
  });
});
