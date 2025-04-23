# Component Example Extractor Strategy

## Overview

This document outlines our strategy for extracting component examples from Storybook stories for the MCP documentation system. The example extractor will retrieve usage examples, prop configurations, and interactive demonstrations that showcase how Amino components should be used.

## Approach

We will implement a dedicated component example extractor that analyzes Storybook story files to extract representative examples of component usage. This extractor will complement the type information from the TypeScript interface parser and the documentation from the JSDoc comment extractor.

## Implementation Strategy

Our implementation will focus on extracting component examples from Storybook stories using the following approach:

1. **Story File Discovery**: Locate story files associated with components using standard naming conventions.

2. **Story Parsing**: Extract stories using static analysis of story files, focusing on both CSF (Component Story Format) and MDX format stories.

3. **Props Extraction**: Identify the props used in each story to showcase different component configurations.

4. **Example Code Generation**: Create clean, representative code examples from the story implementations.

5. **Variant Organization**: Group stories by variants to showcase different use cases for each component.

6. **Integration with Documentation System**: Structure the extracted examples to integrate with the broader documentation system.

## Core Components

### 1. Story File Discovery Module

This module will locate story files associated with components:

```typescript
import { glob } from 'glob';
import { resolve, basename } from 'path';
import { ComponentInfo } from '../types';

export async function findComponentStories(
  componentInfo: ComponentInfo
): Promise<string[]> {
  const { name, directory } = componentInfo;
  
  // Look for stories in common locations
  const storyPatterns = [
    // Component-specific stories
    `${directory}/**/${name}.stories.@(tsx|jsx|ts|js|mdx)`,
    `${directory}/**/__stories__/${name}.stories.@(tsx|jsx|ts|js|mdx)`,
    
    // Stories in the root stories directory
    `src/__stories__/${name}.stories.@(tsx|jsx|ts|js|mdx)`
  ];
  
  // Find all matching story files
  const storyFiles = await Promise.all(
    storyPatterns.map(pattern => glob(pattern))
  );
  
  // Flatten and filter unique paths
  return [...new Set(storyFiles.flat())];
}
```

### 2. Story Parser Module

This module will extract stories from story files:

```typescript
import * as ts from 'typescript';
import { readFileSync } from 'fs';
import { ComponentExample } from '../types';

export function extractStoriesFromFile(filePath: string): ComponentExample[] {
  const examples: ComponentExample[] = [];
  
  // Handle different file formats
  if (filePath.endsWith('.mdx')) {
    examples.push(...extractMDXStories(filePath));
  } else {
    examples.push(...extractCSFStories(filePath));
  }
  
  return examples;
}

function extractCSFStories(filePath: string): ComponentExample[] {
  // Read and parse the file
  const fileContent = readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  );
  
  // Find export declarations that represent stories
  const examples: ComponentExample[] = [];
  ts.forEachChild(sourceFile, node => {
    if (ts.isExportDeclaration(node) || 
        (ts.isVariableStatement(node) && 
         hasExportModifier(node))) {
      const example = extractExampleFromNode(node, fileContent);
      if (example) {
        examples.push(example);
      }
    }
  });
  
  return examples;
}

function extractMDXStories(filePath: string): ComponentExample[] {
  // Implementation for MDX story extraction
  // This will require parsing MDX format which combines JSX and Markdown
  // ...
}
```

### 3. Example Generator Module

This module will create clean code examples from stories:

```typescript
import { ComponentExample } from '../types';

export function generateCodeExample(
  storyNode: ts.Node,
  sourceCode: string
): ComponentExample {
  // Extract the story function body
  const storyCode = extractStoryFunction(storyNode, sourceCode);
  
  // Extract story metadata
  const storyName = getStoryName(storyNode);
  const storyDescription = getStoryDescription(storyNode);
  
  // Extract props used in the story
  const props = extractPropsFromStory(storyNode);
  
  // Clean up the code for presentation
  const cleanedCode = cleanCodeForExample(storyCode);
  
  return {
    name: storyName,
    description: storyDescription,
    code: cleanedCode,
    props
  };
}
```

### 4. Integration Module

This module will integrate the extracted examples with the component documentation:

```typescript
import { ComponentDocumentation, ComponentExample } from '../types';

export function integrateExamplesWithDocumentation(
  documentation: ComponentDocumentation,
  examples: ComponentExample[]
): ComponentDocumentation {
  // Group examples by variant
  const groupedExamples = groupExamplesByVariant(examples);
  
  // Add examples to documentation
  return {
    ...documentation,
    examples: groupedExamples
  };
}
```

## Handling Different Story Formats

### Component Story Format (CSF)

For modern CSF stories:

```typescript
function extractCSFStories(sourceFile: ts.SourceFile): ComponentExample[] {
  const examples: ComponentExample[] = [];
  
  // Find default export for component metadata
  const defaultExport = findDefaultExport(sourceFile);
  const componentMetadata = extractComponentMetadata(defaultExport);
  
  // Find named exports for individual stories
  const namedExports = findNamedExports(sourceFile);
  
  // Process each story export
  for (const storyExport of namedExports) {
    const example = processStoryExport(storyExport, componentMetadata);
    if (example) {
      examples.push(example);
    }
  }
  
  return examples;
}
```

### MDX Format

For MDX format stories:

```typescript
function extractMDXStories(filePath: string): ComponentExample[] {
  // Read MDX content
  const mdxContent = readFileSync(filePath, 'utf8');
  
  // Use a custom MDX parser or adapt an existing one
  const parsedMDX = parseMDX(mdxContent);
  
  // Extract stories from the parsed MDX
  const examples = extractStoriesFromMDX(parsedMDX);
  
  return examples;
}
```

## Integration with Documentation Pipeline

The component example extractor will integrate with the broader documentation pipeline as follows:

1. After type information and JSDoc comments are extracted, the example extractor processes story files.
2. Examples are organized by variant and use case.
3. The example data is combined with type information and JSDoc comments.
4. The combined data provides comprehensive documentation including practical usage examples.

## Handling Edge Cases

### Stories without Explicit Props

For stories that don't explicitly define props:

```typescript
function extractImplicitProps(storyNode: ts.Node): Record<string, unknown> {
  const props: Record<string, unknown> = {};
  
  // Analyze the JSX to extract prop values
  ts.forEachChild(storyNode, node => {
    if (isJsxAttribute(node)) {
      const propName = node.name.text;
      const propValue = evaluatePropValue(node.initializer);
      props[propName] = propValue;
    }
  });
  
  return props;
}
```

### Dynamic Stories

For stories that use dynamic props or controls:

```typescript
function handleDynamicProps(storyNode: ts.Node): Record<string, unknown> {
  // Look for args patterns in the story
  const argsPattern = findArgsPattern(storyNode);
  if (argsPattern) {
    return extractArgsObject(argsPattern);
  }
  
  // Look for control usage
  const controlsUsage = findControlsUsage(storyNode);
  if (controlsUsage) {
    return extractControlValues(controlsUsage);
  }
  
  return {};
}
```

## Performance Considerations

To ensure optimal performance of the example extractor:

1. **Caching**: Cache extracted examples for files that haven't changed.
2. **Selective Processing**: Only process story files for components being documented.
3. **Parallel Processing**: Process multiple story files in parallel where possible.

## Next Steps

1. Implement the story file discovery module in `build-utils/mcp/extractors/example-discovery.ts`
2. Develop the story parser with support for CSF and MDX formats
3. Create the example generator for clean code examples
4. Implement the integration with the documentation system
5. Add tests for various story formats used in Amino components

## References

- [Storybook Component Story Format](https://storybook.js.org/docs/react/api/csf)
- [MDX Documentation](https://mdxjs.com/docs/)