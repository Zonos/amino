// Import the exported processExampleTags function directly
import { processExampleTags } from 'build-utils/mcp/extractors/json-file-generator';
import { beforeEach, describe, expect, vi } from 'vitest';

describe('json-file-generator', () => {
  describe('processExampleTags', () => {
    // Spy on console.warn for the warning test
    const consoleWarnSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    beforeEach(() => {
      consoleWarnSpy.mockClear();
    });

    test('should preserve example tags with code blocks', () => {
      // Simulate tags with example code blocks (title and code)
      const tags = [
        {
          name: 'example',
          text: 'Basic usage\n```tsx\n<CountryMultiSelect\n  countryOptions={countryOptions}\n  onChange={setSelectedCountries}\n  unavailableCountries={[]}\n  value={selectedCountries}\n/>\n```',
        },
        {
          name: 'param',
          text: 'countryOptions Array of country options to display',
        },
      ];

      const result = processExampleTags(tags);

      // Verify the example tag is preserved with its full content
      expect(result[0]).toEqual({
        name: 'example',
        text: 'Basic usage\n```tsx\n<CountryMultiSelect\n  countryOptions={countryOptions}\n  onChange={setSelectedCountries}\n  unavailableCountries={[]}\n  value={selectedCountries}\n/>\n```',
      });

      // Verify non-example tags are unchanged
      expect(result[1]).toEqual({
        name: 'param',
        text: 'countryOptions Array of country options to display',
      });

      // Verify no warning was logged
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    test('should warn about example tags without code blocks', () => {
      // Simulate a tag with only a title but no code block
      const tags = [
        {
          name: 'example',
          text: 'Basic usage',
        },
      ];

      const result = processExampleTags(tags);

      // Verify the tag is returned as is
      expect(result[0]).toEqual({
        name: 'example',
        text: 'Basic usage',
      });

      // Verify a warning was logged
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Example tag missing code block: "Basic usage"',
      );
    });

    test('should not modify non-example tags', () => {
      // Simulate various non-example tags
      const tags = [
        {
          name: 'param',
          text: 'options The select options',
        },
        {
          name: 'returns',
          text: 'The selected value',
        },
      ];

      const result = processExampleTags(tags);

      // Verify all tags are unchanged
      expect(result).toEqual(tags);

      // Verify no warning was logged
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    test('should handle an empty array of tags', () => {
      const tags: Array<{ name: string; text: string }> = [];

      const result = processExampleTags(tags);

      // Verify an empty array is returned
      expect(result).toEqual([]);

      // Verify no warning was logged
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    test('should preserve multiple example tags with code blocks', () => {
      // Simulate multiple example tags with code blocks
      const tags = [
        {
          name: 'example',
          text: 'Basic usage\n```tsx\n<Component />\n```',
        },
        {
          name: 'example',
          text: 'Advanced usage\n```tsx\n<Component prop="value" />\n```',
        },
      ];

      const result = processExampleTags(tags);

      // Verify all example tags are preserved with their full content
      expect(result).toEqual(tags);

      // Verify no warning was logged
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    test('should handle empty text in example tags', () => {
      const tags = [{ name: 'example', text: '' }];

      const result = processExampleTags(tags);

      expect(result).toEqual(tags);
      expect(consoleWarnSpy).toHaveBeenCalledWith('Empty example tag found');
    });

    test('should handle JSX without a title', () => {
      const tags = [{ name: 'example', text: '<Component />' }];

      const result = processExampleTags(tags);

      expect(result).toEqual(tags);
    });

    test('should handle JSX in the first line of a multiline example', () => {
      const tags = [
        {
          name: 'example',
          text: '<Component>\n  <ChildComponent />\n</Component>',
        },
      ];

      const result = processExampleTags(tags);

      expect(result).toEqual(tags);
    });

    test('should handle title and JSX on the same line', () => {
      const tags = [{ name: 'example', text: 'Basic usage <Component />' }];

      const result = processExampleTags(tags);

      expect(result).toEqual(tags);
    });

    test('should handle markdown code blocks without language specifier', () => {
      const tags = [
        {
          name: 'example',
          text: 'Basic usage\n```\n<Component />\n```',
        },
      ];

      const result = processExampleTags(tags);

      expect(result).toEqual(tags);
    });

    test('should handle incomplete markdown code blocks', () => {
      const tags = [
        {
          name: 'example',
          text: 'Basic usage\n```tsx\n<Component />\n',
        },
      ];

      const result = processExampleTags(tags);

      expect(result).toEqual(tags);
    });

    test('should handle malformed markdown code blocks', () => {
      const tags = [
        {
          name: 'example',
          text: 'Basic usage\n```tsx\n<Component \n```',
        },
      ];

      const result = processExampleTags(tags);

      expect(result).toEqual(tags);
    });
  });
});
