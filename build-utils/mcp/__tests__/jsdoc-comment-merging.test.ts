/**
 * JSDoc Comment Merging Tests
 * Tests for the JSDoc comment merging functionality
 */

import type { JSDocComment } from 'build-utils/mcp/types';
import { describe, expect, it } from 'vitest';

// Create simplified versions of the comment merging functions for testing
function findMainComponentComment(
  comments: JSDocComment[],
): JSDocComment | undefined {
  return comments.find(comment => {
    // Check if it's likely a component comment by checking for keywords
    const isComponentComment =
      comment.description.toLowerCase().includes('component') ||
      comment.tags.some(tag => tag.name === 'example');

    return isComponentComment;
  });
}

function findMostDetailedComment(
  comments: JSDocComment[],
): JSDocComment | undefined {
  if (comments.length === 0) return undefined;

  // If no obvious component comment, use the longest/most detailed one
  return comments.sort(
    (a, b) =>
      b.description.length +
      b.tags.length -
      (a.description.length + a.tags.length),
  )[0];
}

function mergeExampleTags(
  comments: JSDocComment[],
  mainComment: JSDocComment,
): JSDocComment {
  // Find unique example tags across all comments
  const allExampleTags = comments
    .flatMap(comment => comment.tags.filter(tag => tag.name === 'example'))
    .filter(
      (tag, index, self) => index === self.findIndex(t => t.text === tag.text),
    );

  // Get only the non-example tags from the main comment
  const nonExampleTags = mainComment.tags.filter(tag => tag.name !== 'example');

  // Combine non-example tags with all example tags
  return {
    ...mainComment,
    tags: [...nonExampleTags, ...allExampleTags],
  };
}

describe('JSDoc Comment Merging', () => {
  describe('findMainComponentComment', () => {
    it('should find comments that contain the word "component"', () => {
      const comments: JSDocComment[] = [
        {
          description: 'This is a type definition',
          location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
          tags: [],
          text: '/** This is a type definition */',
        },
        {
          description: 'This is a component for user interaction',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [],
          text: '/** This is a component for user interaction */',
        },
      ];

      const result = findMainComponentComment(comments);
      expect(result).toBe(comments[1]);
    });

    it('should find comments that have example tags', () => {
      const comments: JSDocComment[] = [
        {
          description: 'This is a type definition',
          location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
          tags: [],
          text: '/** This is a type definition */',
        },
        {
          description: 'This is a button',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [{ name: 'example', text: 'Example usage' }],
          text: '/** This is a button\n * @example Example usage\n */',
        },
      ];

      const result = findMainComponentComment(comments);
      expect(result).toBe(comments[1]);
    });

    it('should return undefined if no component comments found', () => {
      const comments: JSDocComment[] = [
        {
          description: 'This is a type definition',
          location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
          tags: [],
          text: '/** This is a type definition */',
        },
        {
          description: 'This is an interface',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [],
          text: '/** This is an interface */',
        },
      ];

      const result = findMainComponentComment(comments);
      expect(result).toBeUndefined();
    });
  });

  describe('findMostDetailedComment', () => {
    it('should find the comment with the longest description', () => {
      const comments: JSDocComment[] = [
        {
          description:
            'This is a much longer description that should be selected',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [],
          text: '/** This is a much longer description that should be selected */',
        },
        {
          description: 'Short description',
          location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
          tags: [],
          text: '/** Short description */',
        },
      ];

      const result = findMostDetailedComment(comments);
      // The longer description should be selected
      const expected = comments[0];
      expect(result).toEqual(expected);
    });

    it('should find the comment with the most tags if descriptions are equal', () => {
      const comments: JSDocComment[] = [
        {
          description: 'Same length description',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [{ name: 'example', text: 'Example' }],
          text: '/** Same length description\n * @example Example\n */',
        },
        {
          description: 'Same length description',
          location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
          tags: [],
          text: '/** Same length description */',
        },
      ];

      const result = findMostDetailedComment(comments);
      // The comment with more tags should be selected
      const expected = comments[0];
      expect(result).toEqual(expected);
    });

    it('should return undefined for empty array', () => {
      const result = findMostDetailedComment([]);
      expect(result).toBeUndefined();
    });
  });

  describe('mergeExampleTags', () => {
    it('should combine example tags from multiple comments', () => {
      const mainComment: JSDocComment = {
        description: 'This is a component',
        location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
        tags: [
          { name: 'example', text: 'Example 1' },
          { name: 'param', text: 'prop1 Description of prop1' },
        ],
        text: '/** This is a component\n * @example Example 1\n * @param prop1 Description of prop1\n */',
      };

      const comments: JSDocComment[] = [
        {
          description: 'This is a type definition',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [{ name: 'example', text: 'Example 2' }],
          text: '/** This is a type definition\n * @example Example 2\n */',
        },
        mainComment,
        {
          description: 'This is another comment',
          location: { endLine: 25, filePath: 'test.ts', startLine: 20 },
          tags: [
            { name: 'example', text: 'Example 3' },
            { name: 'example', text: 'Example 1' }, // Duplicate that should be removed
          ],
          text: '/** This is another comment\n * @example Example 3\n * @example Example 1\n */',
        },
      ];

      const result = mergeExampleTags(comments, mainComment);

      // Should preserve the original description
      expect(result.description).toBe('This is a component');

      // Should keep non-example tags
      expect(
        result.tags.some(
          tag =>
            tag.name === 'param' && tag.text === 'prop1 Description of prop1',
        ),
      ).toBeTruthy();

      // Should have 3 unique example tags (no duplicates)
      const exampleTags = result.tags.filter(tag => tag.name === 'example');
      expect(exampleTags.length).toBe(3);

      // Verify all examples are present
      const exampleTexts = exampleTags.map(tag => tag.text);
      expect(exampleTexts).toContain('Example 1');
      expect(exampleTexts).toContain('Example 2');
      expect(exampleTexts).toContain('Example 3');
    });

    it('should handle comments with no example tags', () => {
      const mainComment: JSDocComment = {
        description: 'This is a component',
        location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
        tags: [{ name: 'param', text: 'prop1 Description of prop1' }],
        text: '/** This is a component\n * @param prop1 Description of prop1\n */',
      };

      const comments: JSDocComment[] = [
        {
          description: 'This is a type definition',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [{ name: 'type', text: 'SomeType' }],
          text: '/** This is a type definition\n * @type SomeType\n */',
        },
        mainComment,
      ];

      const result = mergeExampleTags(comments, mainComment);

      // Should preserve the main comment description
      expect(result.description).toBe('This is a component');

      // Should have only the param tag (no example tags)
      expect(result.tags.length).toBe(1);
      expect(result.tags[0]?.name).toBe('param');
    });
  });

  describe('Comment Selection and Merging Integration', () => {
    it('should select the best comment and merge example tags', () => {
      const comments: JSDocComment[] = [
        {
          description: 'Type definition',
          location: { endLine: 5, filePath: 'test.ts', startLine: 1 },
          tags: [],
          text: '/** Type definition */',
        },
        {
          description: 'Button component for forms',
          location: { endLine: 15, filePath: 'test.ts', startLine: 10 },
          tags: [
            {
              name: 'example',
              text: 'Basic button\n<Button>Click me</Button>',
            },
          ],
          text: '/** Button component for forms\n * @example Basic button\n * <Button>Click me</Button>\n */',
        },
        {
          description: 'Button props',
          location: { endLine: 25, filePath: 'test.ts', startLine: 20 },
          tags: [
            {
              name: 'example',
              text: 'Primary button\n<Button variant="primary">Submit</Button>',
            },
          ],
          text: '/** Button props\n * @example Primary button\n * <Button variant="primary">Submit</Button>\n */',
        },
      ];

      // First, find the main component comment
      const mainComment =
        findMainComponentComment(comments) || findMostDetailedComment(comments);
      expect(mainComment).toBeDefined();
      expect(mainComment?.description).toBe('Button component for forms');

      // Then merge example tags
      if (mainComment) {
        const mergedComment = mergeExampleTags(comments, mainComment);

        // Check the merged result
        expect(mergedComment.description).toBe('Button component for forms');

        // Should have all unique example tags
        const exampleTags = mergedComment.tags.filter(
          tag => tag.name === 'example',
        );
        expect(exampleTags.length).toBe(2);

        // Check contents of example tags
        const exampleTexts = exampleTags.map(tag => tag.text);
        expect(
          exampleTexts.some(text => text.includes('Basic button')),
        ).toBeTruthy();
        expect(
          exampleTexts.some(text => text.includes('Primary button')),
        ).toBeTruthy();
      }
    });
  });
});
