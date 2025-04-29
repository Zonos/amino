/**
 * Documentation Validator Tests
 * Tests to validate the structure of the extracted documentation against the expected schema
 */

import type {
  ComponentDocumentation,
  ComponentMetadata,
  JSDocComment,
  JSDocTag,
} from 'build-utils/mcp/types';
import { describe, expect, it } from 'vitest';

/**
 * Type definitions for file validation
 */
type IndexFileData = {
  components: ComponentListItem[];
  generatedAt: string;
  totalComponents: number;
};

type ComponentListItem = {
  id: string;
  name: string;
  path: string;
};

type ComponentFileData = {
  description: string;
  generatedAt: string;
  id: string;
  name: string;
  path: string;
  tags: JSDocTag[];
};

/**
 * Validates component metadata structure
 */
function expectValidComponentMetadata(metadata: ComponentMetadata): void {
  // Check required properties exist
  if (!metadata.filePath || !metadata.id || !metadata.name || !metadata.path) {
    throw new Error('Component metadata is missing required properties');
  }

  // Check property types
  if (typeof metadata.filePath !== 'string') {
    throw new Error('Component metadata filePath: expected string');
  }
  if (typeof metadata.id !== 'string') {
    throw new Error('Component metadata id: expected string');
  }
  if (typeof metadata.name !== 'string') {
    throw new Error('Component metadata name: expected string');
  }
  if (typeof metadata.path !== 'string') {
    throw new Error('Component metadata path: expected string');
  }
}

/**
 * Validates JSDoc comment structure
 */
function expectValidJSDocComment(comment: JSDocComment): void {
  // Check required properties exist
  if (
    !comment.description ||
    !comment.location ||
    !comment.tags ||
    !comment.text
  ) {
    throw new Error('JSDoc comment is missing required properties');
  }

  // Check property types
  if (typeof comment.description !== 'string') {
    throw new Error('JSDoc comment description: expected string');
  }
  if (typeof comment.text !== 'string') {
    throw new Error('JSDoc comment text: expected string');
  }
  if (!Array.isArray(comment.tags)) {
    throw new Error('JSDoc comment tags: expected array');
  }

  // Check location structure
  const location = comment.location;
  if (
    !location.endLine ||
    !location.filePath ||
    location.startLine === undefined
  ) {
    throw new Error('JSDoc comment location is missing required properties');
  }

  if (typeof location.endLine !== 'number') {
    throw new Error('JSDoc comment location.endLine: expected number');
  }
  if (typeof location.filePath !== 'string') {
    throw new Error('JSDoc comment location.filePath: expected string');
  }
  if (typeof location.startLine !== 'number') {
    throw new Error('JSDoc comment location.startLine: expected number');
  }

  // Check tags structure if any exist
  comment.tags.forEach(tag => {
    if (!tag.name || !tag.text) {
      throw new Error('JSDoc tag is missing required properties');
    }
    if (typeof tag.name !== 'string') {
      throw new Error('JSDoc tag name: expected string');
    }
    if (typeof tag.text !== 'string') {
      throw new Error('JSDoc tag text: expected string');
    }
  });
}

/**
 * Validates component documentation structure
 */
function expectValidComponentDocumentation(doc: ComponentDocumentation): void {
  // Check required properties exist
  if (!doc.id || !doc.name || !doc.path) {
    throw new Error('Component documentation is missing required properties');
  }

  // Check property types
  if (typeof doc.id !== 'string') {
    throw new Error('Component documentation id: expected string');
  }
  if (typeof doc.name !== 'string') {
    throw new Error('Component documentation name: expected string');
  }
  if (typeof doc.path !== 'string') {
    throw new Error('Component documentation path: expected string');
  }

  // Check comment structure if it exists
  if (doc.comment) {
    expectValidJSDocComment(doc.comment);
  }
}

/**
 * Validates that the totalComponents count matches the actual number of components
 */
function expectComponentsCountConsistent(indexData: IndexFileData): void {
  const actualCount = indexData.components.length;
  const declaredCount = indexData.totalComponents;

  if (actualCount !== declaredCount) {
    throw new Error(
      `Component count mismatch: Found ${actualCount} components but totalComponents claims ${declaredCount}`,
    );
  }
}

/**
 * Validates the structure of the index file
 */
function expectValidIndexFile(indexData: IndexFileData): void {
  // Check required properties exist
  if (
    !indexData.components ||
    !indexData.generatedAt ||
    indexData.totalComponents === undefined
  ) {
    throw new Error('Index file is missing required properties');
  }

  // Check property types
  if (!Array.isArray(indexData.components)) {
    throw new Error('Index file components: expected array');
  }
  if (typeof indexData.generatedAt !== 'string') {
    throw new Error('Index file generatedAt: expected string');
  }
  if (typeof indexData.totalComponents !== 'number') {
    throw new Error('Index file totalComponents: expected number');
  }

  // Check each component in the list
  indexData.components.forEach((comp: ComponentListItem) => {
    if (!comp.id || !comp.name || !comp.path) {
      throw new Error('Index file component is missing required properties');
    }
    if (typeof comp.id !== 'string') {
      throw new Error('Index file component id: expected string');
    }
    if (typeof comp.name !== 'string') {
      throw new Error('Index file component name: expected string');
    }
    if (typeof comp.path !== 'string') {
      throw new Error('Index file component path: expected string');
    }
  });

  // Check that count is consistent
  expectComponentsCountConsistent(indexData);
}

/**
 * Validates the structure of a component file
 */
function expectValidComponentFile(componentData: ComponentFileData): void {
  // Check required properties exist
  if (
    !componentData.description ||
    !componentData.generatedAt ||
    !componentData.id ||
    !componentData.name ||
    !componentData.path ||
    !componentData.tags
  ) {
    throw new Error('Component file is missing required properties');
  }

  // Check property types
  if (typeof componentData.description !== 'string') {
    throw new Error('Component file description: expected string');
  }
  if (typeof componentData.generatedAt !== 'string') {
    throw new Error('Component file generatedAt: expected string');
  }
  if (typeof componentData.id !== 'string') {
    throw new Error('Component file id: expected string');
  }
  if (typeof componentData.name !== 'string') {
    throw new Error('Component file name: expected string');
  }
  if (typeof componentData.path !== 'string') {
    throw new Error('Component file path: expected string');
  }
  if (!Array.isArray(componentData.tags)) {
    throw new Error('Component file tags: expected array');
  }

  // Check tags structure if any exist
  componentData.tags.forEach((tag: JSDocTag) => {
    if (!tag.name || !tag.text) {
      throw new Error('Component file tag is missing required properties');
    }
    if (typeof tag.name !== 'string') {
      throw new Error('Component file tag name: expected string');
    }
    if (typeof tag.text !== 'string') {
      throw new Error('Component file tag text: expected string');
    }
  });
}

describe('Documentation Structure Validation', () => {
  describe('Component Metadata Schema', () => {
    it('should validate component metadata with required fields', () => {
      const validMetadata: ComponentMetadata = {
        filePath: 'src/components/button/index.tsx',
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
      };

      expectValidComponentMetadata(validMetadata);
    });

    it('should detect missing required fields in component metadata', () => {
      const invalidMetadata = {
        id: 'button',
        name: 'Button',
        // Missing filePath and path
      };

      expect(() =>
        expectValidComponentMetadata(invalidMetadata as ComponentMetadata),
      ).toThrow(/missing required properties/);
    });

    it('should detect incorrect field types in component metadata', () => {
      const invalidMetadata = {
        filePath: 123, // Should be string
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
      };

      expect(() =>
        expectValidComponentMetadata(
          invalidMetadata as unknown as ComponentMetadata,
        ),
      ).toThrow(/expected string/);
    });
  });

  describe('JSDoc Comment Schema', () => {
    it('should validate JSDoc comments with required fields', () => {
      const validComment: JSDocComment = {
        description: 'A button component',
        location: {
          endLine: 10,
          filePath: 'src/components/button/index.tsx',
          startLine: 5,
        },
        tags: [
          { name: 'example', text: 'Example usage' },
          { name: 'param', text: 'variant Button variant' },
        ],
        text: '/**\n * A button component\n * @example Example usage\n * @param variant Button variant\n */',
      };

      expectValidJSDocComment(validComment);
    });

    it('should validate JSDoc comments with empty tags', () => {
      const commentWithEmptyTags: JSDocComment = {
        description: 'A button component',
        location: {
          endLine: 10,
          filePath: 'src/components/button/index.tsx',
          startLine: 5,
        },
        tags: [],
        text: '/** A button component */',
      };

      expectValidJSDocComment(commentWithEmptyTags);
    });

    it('should detect missing required fields in JSDoc comments', () => {
      const invalidComment = {
        description: 'A button component',
        tags: [],
        // Missing location and text
      };

      expect(() =>
        expectValidJSDocComment(invalidComment as unknown as JSDocComment),
      ).toThrow(/missing required properties/);
    });

    it('should detect invalid JSDoc tags structure', () => {
      const invalidComment: JSDocComment = {
        description: 'A button component',
        location: {
          endLine: 10,
          filePath: 'src/components/button/index.tsx',
          startLine: 5,
        },
        tags: [
          { name: 'example' } as JSDocTag, // Missing text property
        ],
        text: '/** A button component */',
      };

      expect(() => expectValidJSDocComment(invalidComment)).toThrow(
        /missing required properties/,
      );
    });
  });

  describe('Component Documentation Schema', () => {
    it('should validate full component documentation', () => {
      const validDocumentation: ComponentDocumentation = {
        comment: {
          description: 'A button component',
          location: {
            endLine: 10,
            filePath: 'src/components/button/index.tsx',
            startLine: 5,
          },
          tags: [{ name: 'example', text: 'Example usage' }],
          text: '/** A button component\n * @example Example usage\n */',
        },
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
      };

      expectValidComponentDocumentation(validDocumentation);
    });

    it('should validate component documentation without comment', () => {
      const docWithoutComment: ComponentDocumentation = {
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
      };

      expectValidComponentDocumentation(docWithoutComment);
    });

    it('should detect missing required fields in component documentation', () => {
      const invalidDoc = {
        id: 'button',
        // Missing name and path
      };

      expect(() =>
        expectValidComponentDocumentation(invalidDoc as ComponentDocumentation),
      ).toThrow(/missing required properties/);
    });
  });

  describe('Index File Schema', () => {
    it('should validate the index file structure', () => {
      const indexFileData: IndexFileData = {
        components: [
          { id: 'button', name: 'Button', path: 'src/components/button' },
          { id: 'card', name: 'Card', path: 'src/components/card' },
        ],
        generatedAt: '2025-04-28T12:00:00Z',
        totalComponents: 2,
      };

      expectValidIndexFile(indexFileData);
    });

    it('should detect invalid index file structure', () => {
      const invalidIndexData = {
        components: 'not an array', // Should be an array
        generatedAt: '2025-04-28T12:00:00Z',
        totalComponents: 2,
      };

      expect(() =>
        expectValidIndexFile(invalidIndexData as unknown as IndexFileData),
      ).toThrow(/expected array/);
    });

    it('should detect missing components in index file', () => {
      const invalidIndexData = {
        // Missing components array
        generatedAt: '2025-04-28T12:00:00Z',
        totalComponents: 2,
      };

      expect(() =>
        expectValidIndexFile(invalidIndexData as unknown as IndexFileData),
      ).toThrow(/missing required properties/);
    });

    it('should check components count matches totalComponents', () => {
      const inconsistentIndexData: IndexFileData = {
        components: [
          { id: 'button', name: 'Button', path: 'src/components/button' },
          { id: 'card', name: 'Card', path: 'src/components/card' },
        ],
        generatedAt: '2025-04-28T12:00:00Z',
        totalComponents: 3, // Inconsistent with actual count
      };

      expect(() =>
        expectComponentsCountConsistent(inconsistentIndexData),
      ).toThrow(/Component count mismatch/);
    });
  });

  describe('Component File Schema', () => {
    it('should validate a component file structure', () => {
      const componentFileData: ComponentFileData = {
        description: 'A button component',
        generatedAt: '2025-04-28T12:00:00Z',
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
        tags: [{ name: 'example', text: 'Example usage' }],
      };

      expectValidComponentFile(componentFileData);
    });

    it('should validate component file with empty tags', () => {
      const componentFileData: ComponentFileData = {
        description: 'A button component',
        generatedAt: '2025-04-28T12:00:00Z',
        id: 'button',
        name: 'Button',
        path: 'src/components/button',
        tags: [],
      };

      expectValidComponentFile(componentFileData);
    });

    it('should detect missing fields in component file', () => {
      const invalidComponentFile = {
        description: 'A button component',
        generatedAt: '2025-04-28T12:00:00Z',
        id: 'button',
        // Missing name and path
        tags: [],
      };

      expect(() =>
        expectValidComponentFile(
          invalidComponentFile as unknown as ComponentFileData,
        ),
      ).toThrow(/missing required properties/);
    });
  });
});
