/**
 * Tests for health check endpoint
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

describe('Health check endpoint', () => {
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

  beforeEach(async () => {
    // Reset mocks
    vi.resetAllMocks();

    // Dynamically import the handler to handle Next.js module resolution
    const module = await import('../health');
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

  it('should return status ok when documentation exists', () => {
    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      components: {
        api: {
          status: 'ok',
        },
        documentation: {
          componentCount: 3,
          message: '3 components available',
          status: 'ok',
        },
      },
      status: 'ok',
      timestamp: expect.any(String),
      version: '1.0.0',
    });
  });

  it('should report degraded status when documentation index is missing', () => {
    // Mock index file not existing
    vi.mocked(fs.existsSync).mockImplementation(
      (_path: fs.PathLike): boolean => {
        if (String(_path).endsWith('index.json')) {
          return false;
        }
        return true;
      },
    );

    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(
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

  it('should report unknown version when package.json is missing', () => {
    // Mock package.json file not existing
    vi.mocked(fs.existsSync).mockImplementation(
      (_path: fs.PathLike): boolean => {
        if (String(_path).endsWith('package.json')) {
          return false;
        }
        return true;
      },
    );

    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        version: 'unknown',
      }),
    );
  });

  it('should handle errors in reading index file', () => {
    // Mock error reading index file
    vi.mocked(fs.readFileSync).mockImplementation(
      (_path: fs.PathOrFileDescriptor): string => {
        if (String(_path).endsWith('index.json')) {
          throw new Error('Test error reading index');
        }
        return JSON.stringify(mockPackageJson);
      },
    );

    handler(mockReq, mockRes as unknown as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(
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

  it('should handle unexpected errors gracefully', () => {
    // Mock an unexpected error
    vi.mocked(fs.existsSync).mockImplementation(
      (_path: fs.PathLike): boolean => {
        throw new Error('Unexpected test error');
      },
    );

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
