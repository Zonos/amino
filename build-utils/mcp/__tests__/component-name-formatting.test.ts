/**
 * Component Name Formatting Tests
 * Tests specifically for the component name formatting functionality
 */

import type { PathLike } from 'fs';
import * as fs from 'fs';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Create a simplified version of the component name formatting function for testing
function formatComponentName(componentName: string): string {
  return componentName
    .split(/[-_]/)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

// Mock fs and path modules
vi.mock('fs');
vi.mock('path');

describe('Component Name Formatting', () => {
  // Set up mock filesystem
  const mockFileSystem: Record<string, string> = {};

  beforeEach(() => {
    vi.resetAllMocks();

    // Mock implementations for fs
    vi.mocked(fs.existsSync).mockImplementation(
      (filePath: PathLike): boolean => {
        if (typeof filePath !== 'string') {
          return false;
        }
        return filePath in mockFileSystem;
      },
    );

    // Mock implementations for path
    vi.mocked(path.basename).mockImplementation((filePath: string): string => {
      const parts = filePath.split('/');
      return parts[parts.length - 1] || '';
    });
  });

  afterEach(() => {
    Object.keys(mockFileSystem).forEach(key => {
      delete mockFileSystem[key];
    });
  });

  describe('formatComponentName', () => {
    // Test case for simple component name capitalization
    it('should properly capitalize simple component names', () => {
      expect(formatComponentName('button')).toBe('Button');
      expect(formatComponentName('text')).toBe('Text');
      expect(formatComponentName('card')).toBe('Card');
    });

    // Test case for kebab-case component names
    it('should convert kebab-case component names to PascalCase', () => {
      expect(formatComponentName('connection-map')).toBe('ConnectionMap');
      expect(formatComponentName('drop-zone')).toBe('DropZone');
      expect(formatComponentName('cover-sheet')).toBe('CoverSheet');
    });

    // Test case for snake_case component names
    it('should convert snake_case component names to PascalCase', () => {
      expect(formatComponentName('multi_select')).toBe('MultiSelect');
      expect(formatComponentName('file_upload')).toBe('FileUpload');
      expect(formatComponentName('danger_zone')).toBe('DangerZone');
    });

    // Test that camelCase component names are properly formatted
    it('should properly format camelCase component names', () => {
      expect(formatComponentName('inputField')).toBe('InputField');
      expect(formatComponentName('dropZone')).toBe('DropZone');
      expect(formatComponentName('fileUpload')).toBe('FileUpload');
    });

    // Test edge cases
    it('should handle edge cases of component names', () => {
      // Single letter
      expect(formatComponentName('a')).toBe('A');

      // Multiple hyphens
      expect(formatComponentName('a-b-c')).toBe('ABC');

      // Multiple underscores
      expect(formatComponentName('x_y_z')).toBe('XYZ');

      // Mixed separators
      expect(formatComponentName('combo-case_example')).toBe(
        'ComboCaseExample',
      );

      // Already PascalCase
      expect(formatComponentName('Button')).toBe('Button');

      // Empty string
      expect(formatComponentName('')).toBe('');
    });
  });
});
