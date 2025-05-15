/**
 * Mock implementation of fs module functions for testing
 */
import { vi } from 'vitest';

export const mockExistsSync = vi.fn();
export const mockReadFileSync = vi.fn();

// Export mocked functions as defaults and named exports
export default {
  existsSync: mockExistsSync,
  readFileSync: mockReadFileSync,
};

export const existsSync = mockExistsSync;
export const readFileSync = mockReadFileSync;
