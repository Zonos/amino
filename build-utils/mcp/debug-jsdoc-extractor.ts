/**
 * Debug utility for JSDoc extraction
 * This file is used to manually validate our JSDoc extraction logic
 */

import type { JSDocTag } from 'build-utils/mcp/types';

// Create sample JSDoc comments to simulate our test scenario
const buttonImplJSDoc = `/**
 * Button implementation comment.
 * This is the main Button component implementation.
 * 
 * @example Implementation example
 * <Button variant="primary">Implementation Button</Button>
 * 
 * @example Another implementation example
 * <Button variant="secondary">Another Implementation</Button>
 */`;

const buttonIndexJSDoc = `/**
 * Button index file comment.
 * This file re-exports the Button component.
 * 
 * @example Index example
 * <Button size="sm">Index Button</Button>
 */`;

// Example tag parsing using our updated algorithm
function parseJSDocComment(commentText: string): {
  description: string;
  tags: JSDocTag[];
} {
  // Clean up the comment text by removing the /** and */ markers and leading asterisks
  const cleanComment = commentText
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map(line => line.trim().replace(/^\* ?/, ''))
    .join('\n')
    .trim();

  // Extract tags and description
  // This regex will match tags and capture their multiline content properly
  const tagRegex = /^@(\w+)(?:\s+([\s\S]*?))?(?=\n@\w+|\s*$)/gm;
  const tags: JSDocTag[] = [];
  let match;
  let lastTagEndIndex = 0;
  let description = cleanComment;

  // Find all tags in the comment
  while ((match = tagRegex.exec(cleanComment)) !== null) {
    // If this is the first tag, set description to everything before it
    if (lastTagEndIndex === 0) {
      description = cleanComment.substring(0, match.index).trim();
      lastTagEndIndex = match.index;
    }

    // Add the tag to the list with proper content preservation
    const tagName = match[1] ?? '';
    const tagText = match[2] ? match[2].trim() : '';

    tags.push({
      name: tagName,
      text: tagText,
    });
  }

  return { description, tags };
}

// Test the extraction separately to validate our algorithm
function debugExtractionLogic(): void {
  console.log('=== Debug JSDoc Extraction ===');

  // Parse both JSDoc comments
  const implComment = parseJSDocComment(buttonImplJSDoc);
  const indexComment = parseJSDocComment(buttonIndexJSDoc);

  console.log('Implementation comment description:', implComment.description);
  console.log('Index comment description:', indexComment.description);

  console.log('\nExample tags from implementation:');
  implComment.tags
    .filter(tag => tag.name === 'example')
    .forEach((tag, i) => {
      console.log(`  Tag #${i + 1} text:`, tag.text);
    });

  console.log('\nExample tags from index:');
  indexComment.tags
    .filter(tag => tag.name === 'example')
    .forEach((tag, i) => {
      console.log(`  Tag #${i + 1} text:`, tag.text);
    });

  // Merge the example tags as our extraction logic would
  const allTags = [
    ...implComment.tags.filter(tag => tag.name === 'example'),
    ...indexComment.tags.filter(tag => tag.name === 'example'),
  ];

  console.log('\nAll merged example tags:');
  allTags.forEach((tag, i) => {
    console.log(`  Tag #${i + 1} text:`, tag.text);
  });

  // Verify index tag contains "Index Button"
  const hasIndexButton = allTags.some(
    tag => tag.name === 'example' && tag.text.includes('Index Button'),
  );
  console.log('\nContains "Index Button":', hasIndexButton);
}

// Run the debug function
debugExtractionLogic();

// Export the debug function for potential use elsewhere
export { debugExtractionLogic };
