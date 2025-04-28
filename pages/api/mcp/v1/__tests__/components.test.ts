/**
 * Tests for components listing endpoint
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

describe('Components listing endpoint', () => {
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
    const module = await import('../components');
    handler = module.default;

    // Create fresh request and response mocks for each test
    mockReq = {
      method: 'GET',
      query: {},
    } as NextApiRequest;

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
      JSON.stringify(mockComponentsData),
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

  it('should return 404 if components index file does not exist', () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: expect.objectContaining({
          code: 'not_found',
        }),
      }),
    );
  });

  it('should return all components when no filters are applied', () => {
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      components: mockComponentsData.components,
      pagination: expect.objectContaining({
        limit: 20,
        offset: 0,
        total: 3,
      }),
    });
  });

  it('should filter components by category', () => {
    mockReq.query = { category: 'inputs' };
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      components: [
        mockComponentsData.components[0],
        mockComponentsData.components[1],
      ],
      pagination: expect.objectContaining({
        limit: 20,
        offset: 0,
        total: 2,
      }),
    });
  });

  it('should filter components by tag', () => {
    mockReq.query = { tag: 'container' };
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      components: [mockComponentsData.components[2]],
      pagination: expect.objectContaining({
        limit: 20,
        offset: 0,
        total: 1,
      }),
    });
  });

  it('should apply pagination correctly', () => {
    mockReq.query = { limit: '1', offset: '1' };
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      components: [mockComponentsData.components[1]],
      pagination: expect.objectContaining({
        limit: 1,
        next: '/api/mcp/v1/components?limit=1&offset=2',
        offset: 1,
        total: 3,
      }),
    });
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
