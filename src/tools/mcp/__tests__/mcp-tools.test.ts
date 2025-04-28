import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { MCPClient as MCPClientType } from 'src/tools/mcp/client';
import { MCPClient } from 'src/tools/mcp/client';
import {
  findComponentByName,
  getComponentDetails,
  listComponents,
  setMCPClient,
} from 'src/tools/mcp/tools';

// Mock the MCPClient class
vi.mock('../client', () => {
  const MockMCPClient = vi.fn(() => ({
    findComponentByName: vi.fn(),
    getComponentDetails: vi.fn(),
    listComponents: vi.fn(),
  }));
  return { MCPClient: MockMCPClient };
});

describe('MCP Tools', () => {
  let mockClient: MCPClientType;

  beforeEach(() => {
    // Create a new mock client for each test
    mockClient = new MCPClient({ baseUrl: 'http://localhost:3100' });
    setMCPClient(mockClient);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('listComponents', () => {
    it('should return a list of components', async () => {
      const mockResponse = {
        data: {
          components: [
            { id: 'button', name: 'Button', path: 'src/components/Button' },
            { id: 'input', name: 'Input', path: 'src/components/Input' },
          ],
        },
      };

      mockClient.listComponents = vi.fn().mockResolvedValue(mockResponse);

      const result = await listComponents();

      expect(mockClient.listComponents).toHaveBeenCalled();
      expect(result).toEqual(mockResponse);
      expect(result.data?.components).toHaveLength(2);
    });

    it('should handle errors', async () => {
      const mockError = {
        error: {
          code: '500',
          message: 'Failed to fetch components',
        },
      };

      mockClient.listComponents = vi.fn().mockResolvedValue(mockError);

      const result = await listComponents();

      expect(mockClient.listComponents).toHaveBeenCalled();
      expect(result).toEqual(mockError);
      expect(result.error?.message).toBe('Failed to fetch components');
    });
  });

  describe('findComponentByName', () => {
    it('should find components by exact name', async () => {
      const mockResponse = {
        data: {
          components: [
            { id: 'button', name: 'Button', path: 'src/components/Button' },
          ],
        },
      };

      mockClient.findComponentByName = vi.fn().mockResolvedValue(mockResponse);

      const result = await findComponentByName('Button', { exact: true });

      expect(mockClient.findComponentByName).toHaveBeenCalledWith('Button', {
        exact: true,
      });
      expect(result).toEqual(mockResponse);
      expect(result.data?.components).toHaveLength(1);
    });

    it('should find components by partial name', async () => {
      const mockResponse = {
        data: {
          components: [
            { id: 'button', name: 'Button', path: 'src/components/Button' },
            {
              id: 'buttongroup',
              name: 'ButtonGroup',
              path: 'src/components/ButtonGroup',
            },
          ],
        },
      };

      mockClient.findComponentByName = vi.fn().mockResolvedValue(mockResponse);

      const result = await findComponentByName('Button', { exact: false });

      expect(mockClient.findComponentByName).toHaveBeenCalledWith('Button', {
        exact: false,
      });
      expect(result).toEqual(mockResponse);
      expect(result.data?.components).toHaveLength(2);
    });
  });

  describe('getComponentDetails', () => {
    it('should return component details', async () => {
      const mockResponse = {
        data: {
          description: 'A clickable button component',
          id: 'button',
          name: 'Button',
          path: 'src/components/Button',
          props: [
            {
              defaultValue: '"primary"',
              description: 'Button variant',
              name: 'variant',
              required: false,
              type: '"primary" | "secondary" | "tertiary"',
            },
          ],
        },
      };

      mockClient.getComponentDetails = vi.fn().mockResolvedValue(mockResponse);

      const result = await getComponentDetails('button');

      expect(mockClient.getComponentDetails).toHaveBeenCalledWith('button');
      expect(result).toEqual(mockResponse);
      expect(result.data?.props).toHaveLength(1);
    });
  });
});
