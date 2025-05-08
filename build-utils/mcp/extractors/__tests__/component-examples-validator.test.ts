import * as fs from 'fs';
import * as path from 'path';
import { describe, expect, it } from 'vitest';

/**
 * Interface representing the structure of a component JSON file
 */
type ComponentJson = {
  description: string;
  id: string;
  name: string;
  path: string;
  tags: Array<{
    name: string;
    text: string;
  }>;
};

/**
 * Component validation status types
 */
type ValidationStatus = 'valid' | 'no_examples' | 'no_jsx' | 'partial_jsx';

/**
 * Interface representing the validation result of a component
 */
type ComponentValidation = {
  details: string;
  id: string;
  name: string;
  path: string;
  status: ValidationStatus;
};

/**
 * Detects if a string contains JSX/TSX code
 * This looks for common React component patterns like <ComponentName> or self-closing tags
 */
function containsJsxCode(text: string): boolean {
  // Replace newlines with a space to handle multi-line JSX without using the 's' flag
  const normalizedText = text.replace(/\n|\r/g, ' ');

  // Regular expression to detect JSX components
  const jsxPattern = /<([A-Z][A-Za-z0-9]*|[a-z]+)\s*([^>]*?)(\/>|>)/;

  // Test for the pattern
  return jsxPattern.test(normalizedText);
}

/**
 * Format validation results into a readable summary
 */
function formatValidationResults(
  validationMap: Map<string, ComponentValidation>,
): string {
  const results = Array.from(validationMap.values());

  // Count components by status
  const validComponents = results.filter(r => r.status === 'valid');
  const noExamples = results.filter(r => r.status === 'no_examples');
  const noJsx = results.filter(r => r.status === 'no_jsx');
  const partialJsx = results.filter(r => r.status === 'partial_jsx');

  // Build summary text
  let summary = '\nCOMPONENT EXAMPLES VALIDATION SUMMARY\n';
  summary += '====================================\n\n';

  summary += `Total components: ${results.length}\n`;
  summary += `✅ Valid components: ${validComponents.length}\n`;
  summary += `❌ Components with issues: ${results.length - validComponents.length}\n\n`;

  if (noExamples.length > 0) {
    summary += `1️⃣ Missing example tags (${noExamples.length}):\n`;
    noExamples.forEach(comp => {
      summary += `   - ${comp.name}\n`;
    });
    summary += '\n';
  }

  if (noJsx.length > 0) {
    summary += `2️⃣ No JSX code in examples (${noJsx.length}):\n`;
    noJsx.forEach(comp => {
      summary += `   - ${comp.name}\n`;
    });
    summary += '\n';
  }

  if (partialJsx.length > 0) {
    summary += `3️⃣ Some examples missing JSX code (${partialJsx.length}):\n`;
    partialJsx.forEach(comp => {
      summary += `   - ${comp.name}: ${comp.details}\n`;
    });
    summary += '\n';
  }

  return summary;
}

/**
 * Test to check all component JSON files for proper examples with JSX code
 */
describe('Component JSON files', () => {
  // Path to the components JSON directory
  const componentsDir = path.join(process.cwd(), 'public/mcp-data/components');

  // Read all JSON files in the components directory
  it('should have example tags with JSX code blocks in all component files', () => {
    // Make sure the directory exists
    expect(fs.existsSync(componentsDir)).toBe(true);

    // Get all JSON files in the directory
    const files = fs
      .readdirSync(componentsDir)
      .filter(file => file.endsWith('.json'));

    // Make sure we found some files
    expect(files.length).toBeGreaterThan(0);

    // Create a validation map for all components
    const validationMap = new Map<string, ComponentValidation>();

    // Check each file for example tags with code
    files.forEach(file => {
      const filePath = path.join(componentsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const componentData = JSON.parse(content) as ComponentJson;

      // Find all example tags
      const exampleTags =
        componentData.tags?.filter(tag => tag.name === 'example') || [];

      // Default to valid status
      let status: ValidationStatus = 'valid';
      let details = '';

      // Check if there are no example tags at all
      if (exampleTags.length === 0) {
        status = 'no_examples';
        details = 'No example tags found';
      } else {
        // Count how many example tags have JSX code
        const tagsWithJsxCode = exampleTags.filter(tag =>
          containsJsxCode(tag.text),
        );

        // Check if any examples have code
        if (tagsWithJsxCode.length === 0) {
          status = 'no_jsx';
          details = 'No examples contain JSX code';
        }
        // Check if some examples are missing code
        else if (tagsWithJsxCode.length < exampleTags.length) {
          status = 'partial_jsx';
          details = `${exampleTags.length - tagsWithJsxCode.length}/${exampleTags.length} example tags missing JSX code`;
        }
      }

      // Add to validation map
      validationMap.set(componentData.id, {
        details,
        id: componentData.id,
        name: componentData.name,
        path: componentData.path,
        status,
      });
    });

    // Format and log the validation results
    const summary = formatValidationResults(validationMap);
    console.log(summary);

    // Count components with issues
    const componentsWithIssues = Array.from(validationMap.values()).filter(
      comp => comp.status !== 'valid',
    );

    // Fail the test if there are components with missing examples
    expect(
      componentsWithIssues.length,
      `${componentsWithIssues.length} components are missing proper JSX examples. See test output for details.`,
    ).toBe(0);
  });
});
