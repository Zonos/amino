// Import the function to test
import { generateComponentFiles } from 'build-utils/mcp/extractors/json-file-generator';
import type { ComponentDocumentation } from 'build-utils/mcp/types';
import * as fs from 'fs';
import { describe, expect, it, vi } from 'vitest';

describe('json-file-generator component file generation', () => {
  // Mock fs.writeFileSync to capture the written content
  const writeFileSyncMock = vi
    .spyOn(fs, 'writeFileSync')
    .mockImplementation(() => {});

  beforeEach(() => {
    writeFileSyncMock.mockClear();
  });

  it('should not include generatedAt field in component JSON files', () => {
    // Mock component documentation with properly typed JSDocComment
    const componentDocs: ComponentDocumentation[] = [
      {
        comment: {
          description: 'Test component description',
          location: {
            endLine: 10,
            filePath: 'src/components/test-component/TestComponent.tsx',
            startLine: 1,
          },
          tags: [{ name: 'example', text: 'Basic usage\n<TestComponent />' }],
          text: '/** Test component description */',
        },
        id: 'test-component',
        name: 'TestComponent',
        path: 'src/components/test-component',
      },
    ];

    const outputDir = '/fake/output/dir';

    // Call the function
    generateComponentFiles(componentDocs, outputDir, true);

    // Check that writeFileSync was called
    expect(writeFileSyncMock).toHaveBeenCalled();

    // Get the content that was written
    const fileContent = JSON.parse(
      writeFileSyncMock.mock.calls[0]?.[1] as string,
    );

    // Verify that generatedAt is not in the output
    expect(fileContent).not.toHaveProperty('generatedAt');

    // Verify other expected properties are still present
    expect(fileContent).toHaveProperty('id', 'test-component');
    expect(fileContent).toHaveProperty('name', 'TestComponent');
    expect(fileContent).toHaveProperty(
      'description',
      'Test component description',
    );
    expect(fileContent).toHaveProperty('tags');
  });
});
