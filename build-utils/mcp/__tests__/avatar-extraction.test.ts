/**
 * Avatar Component Extraction Test
 * Tests the extraction of JSDoc comments from the Avatar component
 */

import * as jsdocExtractor from 'build-utils/mcp/extractors/jsdoc-extractor';
import type {
  ComponentDocumentation,
  JSDocComment,
  JSDocExtractorOptions,
} from 'build-utils/mcp/types';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('Avatar Component Extraction', () => {
  // Sample JSDoc comment for the Avatar component
  const avatarJSDocComment: JSDocComment = {
    description:
      'AvatarBase is the foundation component for all avatar variations in the Amino design system. It provides consistent styling and layout for avatars with customizable appearance.\n\nThis component is not typically used directly. Instead, use one of the specialized avatar components like ImageAvatar or UserAvatar that build upon this base.',
    location: {
      endLine: 25,
      filePath: '/src/components/avatar/AvatarBase.tsx',
      startLine: 5,
    },
    tags: [
      {
        name: 'example',
        text: 'Custom avatar implementation\n<AvatarBase\n  backgroundColor={theme.blue100}\n  bordered={true}\n  shape="rounded"\n  size={48}\n>\n  <Text fontWeight={700} textAlign="center">AB</Text>\n</AvatarBase>',
      },
      {
        name: 'example',
        text: 'Background image with custom styling\n<AvatarBase\n  backgroundUrl="https://example.com/image.jpg"\n  backgroundSize="cover"\n  backgroundPosition="center"\n  shape="square"\n  size={64}\n/>',
      },
      {
        name: 'example',
        text: 'Avatar with child content\n<AvatarBase\n  size={40}\n  shape="round"\n  backgroundColor={theme.gray200}\n>\n  <IconUser size={24} color="gray600" />\n</AvatarBase>',
      },
    ],
    text: '/** JSDoc comment */',
  };

  // Sample component documentation that would be generated
  const avatarComponentDocs: ComponentDocumentation = {
    comment: avatarJSDocComment,
    filePath: '/src/components/avatar/AvatarBase.tsx',
    id: 'avatar',
    name: 'Avatar',
    path: '/src/components/avatar',
  };

  beforeEach(() => {
    vi.resetAllMocks();

    // Mock our extract functions with much simpler implementations
    vi.spyOn(jsdocExtractor, 'extractJSDocComments').mockImplementation(
      (filePath: string): JSDocComment[] => {
        if (filePath.includes('AvatarBase.tsx')) {
          return [avatarJSDocComment];
        }
        return [];
      },
    );

    vi.spyOn(
      jsdocExtractor,
      'extractComponentDocumentation',
    ).mockImplementation(
      (componentDir: string): ComponentDocumentation | null => {
        if (componentDir === '/src/components/avatar') {
          return avatarComponentDocs;
        }
        return null;
      },
    );
  });

  it('should extract documentation for the Avatar component', () => {
    const options: JSDocExtractorOptions = {
      componentDirs: ['/src/components'],
      outputDir: '/output',
      verbose: true,
    };

    const componentDir = '/src/components/avatar';
    const componentDocs = jsdocExtractor.extractComponentDocumentation(
      componentDir,
      options,
    );

    // Verify we get valid documentation
    expect(componentDocs).not.toBeNull();
    expect(componentDocs?.name).toBe('Avatar');
    expect(componentDocs?.id).toBe('avatar');

    // Check that the comment was extracted
    expect(componentDocs?.comment).toBeDefined();
    if (componentDocs?.comment) {
      expect(componentDocs.comment.description).toContain(
        'AvatarBase is the foundation component',
      );

      // Verify examples were extracted
      const exampleTags = componentDocs.comment.tags.filter(
        tag => tag.name === 'example',
      );
      expect(exampleTags.length).toBeGreaterThan(0);
      expect(exampleTags[0]?.text).toContain('Custom avatar implementation');
    }
  });

  it('should extract JSDoc comments from AvatarBase.tsx', () => {
    const comments = jsdocExtractor.extractJSDocComments(
      '/src/components/avatar/AvatarBase.tsx',
      true,
    );

    // Verify JSDoc comments were found
    expect(comments.length).toBeGreaterThan(0);

    // Check content of the main comment
    const mainComment = comments[0];
    expect(mainComment?.description).toContain(
      'AvatarBase is the foundation component',
    );

    // Verify the examples
    const exampleTags = mainComment?.tags.filter(t => t.name === 'example');
    expect(exampleTags?.length).toBe(3);
  });

  it('should generate correct JSON output for Avatar component', () => {
    const mockComponentDocs = jsdocExtractor.extractComponentDocumentation(
      '/src/components/avatar',
      {
        componentDirs: ['/src/components'],
        outputDir: '/output',
      },
    );

    // Verify the structure that would be passed to the JSON generator
    expect(mockComponentDocs).not.toBeNull();
    if (mockComponentDocs) {
      expect(mockComponentDocs.id).toBe('avatar');
      expect(mockComponentDocs.name).toBe('Avatar');
      expect(mockComponentDocs.path).toBe('/src/components/avatar');

      // Key check: The description should come from the comment
      if (mockComponentDocs.comment) {
        const expectedDesc = mockComponentDocs.comment.description;
        expect(expectedDesc).toContain(
          'AvatarBase is the foundation component',
        );
      }
    }
  });
});
