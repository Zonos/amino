# JSON File Generator Strategy

## Overview

This document outlines our strategy for generating structured JSON files from the extracted component documentation for the MCP documentation system. The JSON file generator is the final stage in the documentation pipeline, responsible for transforming the internal documentation representation into the standardized file format required by the MCP server.

## Approach

We will implement a dedicated JSON file generator that takes the aggregated documentation data from all extractors and produces a set of organized JSON files according to our specified documentation format. This generator will ensure consistent file structure, proper organization, and optimal access patterns.

## Implementation Strategy

Our implementation will focus on creating an efficient and organized file generation system using the following approach:

1. **Documentation Transformation**: Convert internal documentation objects to the standardized MCP format.

2. **File Structure Organization**: Create a logical hierarchy of files for efficient access.

3. **Index Generation**: Create index files for component listings and categories.

4. **File Writing**: Efficiently write files to the output directory.

5. **Validation**: Verify generated files match the expected schema.

## Core Components

### 1. Documentation Transformer

This module will transform the internal documentation format to the standardized MCP format:

```typescript
import { ComponentDocumentation, SearchIndex } from '../types';
import { MCPComponent, MCPIndex } from './types';

export function transformComponentDocumentation(
  componentDoc: ComponentDocumentation
): MCPComponent {
  return {
    id: componentDoc.id,
    name: componentDoc.name,
    description: componentDoc.description,
    category: componentDoc.category,
    tags: componentDoc.tags,
    api: {
      props: transformProps(componentDoc.api.props),
      interfaces: transformInterfaces(componentDoc.api.interfaces),
      types: transformTypes(componentDoc.api.types)
    },
    examples: transformExamples(componentDoc.examples),
    usage: {
      import: generateImportStatement(componentDoc),
      basic: generateBasicExample(componentDoc)
    },
    storybook: {
      url: generateStorybookUrl(componentDoc)
    }
  };
}

function transformProps(props: Record<string, any>): any[] {
  return Object.entries(props).map(([name, prop]) => ({
    name,
    type: prop.type,
    description: prop.description,
    default: prop.default,
    required: prop.required ?? false,
    values: prop.values
  }));
}

function transformInterfaces(interfaces: any[]): any[] {
  return interfaces.map(iface => ({
    name: iface.name,
    properties: Object.entries(iface.properties || {}).map(([name, prop]: [string, any]) => ({
      name,
      type: prop.type,
      description: prop.description
    }))
  }));
}

function transformTypes(types: any[]): any[] {
  return types.map(type => ({
    name: type.name,
    type: type.type,
    values: type.values
  }));
}

function transformExamples(examples: any[]): any[] {
  return examples.map((example, index) => ({
    id: example.id || `example-${index + 1}`,
    name: example.name,
    description: example.description,
    code: example.code
  }));
}

function generateImportStatement(componentDoc: ComponentDocumentation): string {
  return `import { ${componentDoc.name} } from 'amino';`;
}

function generateBasicExample(componentDoc: ComponentDocumentation): string {
  const firstExample = componentDoc.examples?.[0];
  return firstExample?.code || `<${componentDoc.name} />`;
}

function generateStorybookUrl(componentDoc: ComponentDocumentation): string {
  return `https://amino.example.com/storybook/?path=/docs/components-${componentDoc.id.toLowerCase()}--docs`;
}
```

### 2. File Structure Generator

This module will create the directory structure and organize files:

```typescript
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { ComponentDocumentation, SearchIndex } from '../types';

export function createFileStructure(outputDir: string): void {
  // Create base directory if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  
  // Create component directory
  const componentsDir = join(outputDir, 'components');
  if (!existsSync(componentsDir)) {
    mkdirSync(componentsDir);
  }
  
  // Create categories directory
  const categoriesDir = join(outputDir, 'categories');
  if (!existsSync(categoriesDir)) {
    mkdirSync(categoriesDir);
  }
  
  // Create search directory
  const searchDir = join(outputDir, 'search');
  if (!existsSync(searchDir)) {
    mkdirSync(searchDir);
  }
}

export function generateFilePaths(
  componentDocs: ComponentDocumentation[],
  outputDir: string
): FilePaths {
  const filePaths: FilePaths = {
    index: join(outputDir, 'index.json'),
    components: {},
    categories: {}
  };
  
  // Generate component file paths
  for (const doc of componentDocs) {
    filePaths.components[doc.id] = join(
      outputDir,
      'components',
      `${doc.id}.json`
    );
  }
  
  // Generate category file paths
  const categories = extractCategories(componentDocs);
  for (const category of categories) {
    filePaths.categories[category] = join(
      outputDir,
      'categories',
      `${category}.json`
    );
  }
  
  return filePaths;
}

function extractCategories(componentDocs: ComponentDocumentation[]): string[] {
  const categories = new Set<string>();
  
  for (const doc of componentDocs) {
    if (doc.category) {
      categories.add(doc.category);
    }
  }
  
  return Array.from(categories);
}
```

### 3. Index File Generator

This module will create the main index file:

```typescript
import { ComponentDocumentation } from '../types';
import { MCPIndex, MCPIndexComponent, MCPCategory } from './types';

export function generateIndexFile(
  componentDocs: ComponentDocumentation[]
): MCPIndex {
  const components: MCPIndexComponent[] = componentDocs.map(doc => ({
    id: doc.id,
    name: doc.name,
    description: doc.description,
    category: doc.category,
    tags: doc.tags,
    path: `/components/${doc.id}`
  }));
  
  const categories = generateCategoriesIndex(componentDocs);
  
  return {
    components,
    categories
  };
}

function generateCategoriesIndex(
  componentDocs: ComponentDocumentation[]
): MCPCategory[] {
  // Group components by category
  const categoryMap = new Map<string, string[]>();
  
  for (const doc of componentDocs) {
    if (doc.category) {
      if (!categoryMap.has(doc.category)) {
        categoryMap.set(doc.category, []);
      }
      categoryMap.get(doc.category)!.push(doc.id);
    }
  }
  
  // Create category objects
  const categories: MCPCategory[] = [];
  
  for (const [categoryId, componentIds] of categoryMap.entries()) {
    categories.push({
      id: categoryId,
      name: formatCategoryName(categoryId),
      components: componentIds
    });
  }
  
  return categories;
}

function formatCategoryName(categoryId: string): string {
  // Convert category ID to a readable name
  return categoryId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
```

### 4. Category File Generator

This module will create individual category files:

```typescript
import { ComponentDocumentation } from '../types';
import { MCPCategory, MCPCategoryFile } from './types';

export function generateCategoryFiles(
  componentDocs: ComponentDocumentation[]
): Record<string, MCPCategoryFile> {
  const categoryFiles: Record<string, MCPCategoryFile> = {};
  
  // Group components by category
  const categoryMap = new Map<string, ComponentDocumentation[]>();
  
  for (const doc of componentDocs) {
    if (doc.category) {
      if (!categoryMap.has(doc.category)) {
        categoryMap.set(doc.category, []);
      }
      categoryMap.get(doc.category)!.push(doc);
    }
  }
  
  // Create category files
  for (const [categoryId, docs] of categoryMap.entries()) {
    categoryFiles[categoryId] = generateCategoryFile(categoryId, docs);
  }
  
  return categoryFiles;
}

function generateCategoryFile(
  categoryId: string, 
  componentDocs: ComponentDocumentation[]
): MCPCategoryFile {
  return {
    category: {
      id: categoryId,
      name: formatCategoryName(categoryId)
    },
    components: componentDocs.map(doc => ({
      id: doc.id,
      name: doc.name,
      description: doc.description
    }))
  };
}

function formatCategoryName(categoryId: string): string {
  // Convert category ID to a readable name
  return categoryId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
```

### 5. File Writer

This module will write the generated files to disk:

```typescript
import { writeFileSync } from 'fs';
import { ComponentDocumentation, SearchIndex } from '../types';
import { MCPComponent, MCPIndex, MCPCategoryFile } from './types';
import { transformComponentDocumentation } from './documentation-transformer';
import { createFileStructure, generateFilePaths } from './file-structure';
import { generateIndexFile } from './index-generator';
import { generateCategoryFiles } from './category-generator';

export async function generateJsonFiles(
  componentDocs: ComponentDocumentation[],
  searchIndex: SearchIndex,
  outputDir: string,
  options: JsonGeneratorOptions = {}
): Promise<void> {
  // Create file structure
  createFileStructure(outputDir);
  
  // Generate file paths
  const filePaths = generateFilePaths(componentDocs, outputDir);
  
  // Generate and write index file
  const indexFile = generateIndexFile(componentDocs);
  writeJsonFile(filePaths.index, indexFile, options.prettyPrint);
  
  // Generate and write component files
  for (const doc of componentDocs) {
    const componentFile = transformComponentDocumentation(doc);
    writeJsonFile(filePaths.components[doc.id], componentFile, options.prettyPrint);
  }
  
  // Generate and write category files
  const categoryFiles = generateCategoryFiles(componentDocs);
  for (const [categoryId, categoryFile] of Object.entries(categoryFiles)) {
    writeJsonFile(filePaths.categories[categoryId], categoryFile, options.prettyPrint);
  }
  
  // Write search index
  writeJsonFile(
    `${outputDir}/search/index.json`,
    { index: searchIndex },
    options.prettyPrint
  );
}

function writeJsonFile(
  filePath: string,
  data: any,
  prettyPrint = false
): void {
  const jsonContent = prettyPrint
    ? JSON.stringify(data, null, 2)
    : JSON.stringify(data);
  
  writeFileSync(filePath, jsonContent);
}
```

### 6. Schema Validator

This module will validate the generated files against the expected schema:

```typescript
import Ajv from 'ajv';
import { readFileSync } from 'fs';
import { glob } from 'glob';
import { join } from 'path';

export async function validateGeneratedFiles(
  outputDir: string,
  schemasDir: string
): Promise<ValidationResult> {
  const ajv = new Ajv();
  
  // Load schemas
  const componentSchema = JSON.parse(
    readFileSync(join(schemasDir, 'component.schema.json'), 'utf8')
  );
  const indexSchema = JSON.parse(
    readFileSync(join(schemasDir, 'index.schema.json'), 'utf8')
  );
  const categorySchema = JSON.parse(
    readFileSync(join(schemasDir, 'category.schema.json'), 'utf8')
  );
  const searchSchema = JSON.parse(
    readFileSync(join(schemasDir, 'search.schema.json'), 'utf8')
  );
  
  // Compile validators
  const validateComponent = ajv.compile(componentSchema);
  const validateIndex = ajv.compile(indexSchema);
  const validateCategory = ajv.compile(categorySchema);
  const validateSearch = ajv.compile(searchSchema);
  
  const result: ValidationResult = {
    valid: true,
    failures: []
  };
  
  // Validate index file
  try {
    const indexFile = JSON.parse(
      readFileSync(join(outputDir, 'index.json'), 'utf8')
    );
    const indexValid = validateIndex(indexFile);
    
    if (!indexValid) {
      result.valid = false;
      result.failures.push({
        file: 'index.json',
        errors: validateIndex.errors || []
      });
    }
  } catch (error) {
    result.valid = false;
    result.failures.push({
      file: 'index.json',
      errors: [{ message: `Failed to parse: ${error}` }]
    });
  }
  
  // Validate component files
  const componentFiles = await glob(join(outputDir, 'components', '*.json'));
  for (const filePath of componentFiles) {
    try {
      const componentFile = JSON.parse(readFileSync(filePath, 'utf8'));
      const componentValid = validateComponent(componentFile);
      
      if (!componentValid) {
        result.valid = false;
        result.failures.push({
          file: filePath,
          errors: validateComponent.errors || []
        });
      }
    } catch (error) {
      result.valid = false;
      result.failures.push({
        file: filePath,
        errors: [{ message: `Failed to parse: ${error}` }]
      });
    }
  }
  
  // Validate category files
  const categoryFiles = await glob(join(outputDir, 'categories', '*.json'));
  for (const filePath of categoryFiles) {
    try {
      const categoryFile = JSON.parse(readFileSync(filePath, 'utf8'));
      const categoryValid = validateCategory(categoryFile);
      
      if (!categoryValid) {
        result.valid = false;
        result.failures.push({
          file: filePath,
          errors: validateCategory.errors || []
        });
      }
    } catch (error) {
      result.valid = false;
      result.failures.push({
        file: filePath,
        errors: [{ message: `Failed to parse: ${error}` }]
      });
    }
  }
  
  // Validate search index
  try {
    const searchFile = JSON.parse(
      readFileSync(join(outputDir, 'search', 'index.json'), 'utf8')
    );
    const searchValid = validateSearch(searchFile);
    
    if (!searchValid) {
      result.valid = false;
      result.failures.push({
        file: 'search/index.json',
        errors: validateSearch.errors || []
      });
    }
  } catch (error) {
    result.valid = false;
    result.failures.push({
      file: 'search/index.json',
      errors: [{ message: `Failed to parse: ${error}` }]
    });
  }
  
  return result;
}
```

## File Organization

The JSON file generator will produce a standardized file structure for the MCP server:

```
public/mcp-data/
  index.json                 # List of all components with basic metadata
  components/
    button.json              # Full documentation for the Button component
    input.json               # Full documentation for the Input component
    ...
  categories/
    inputs.json              # Components in the "inputs" category
    layout.json              # Components in the "layout" category
    ...
  search/
    index.json               # Search index for component documentation
```

### Index File (index.json)

The main index file provides a list of all components with basic metadata:

```json
{
  "components": [
    {
      "id": "button",
      "name": "Button",
      "description": "A versatile button component with various styles and states",
      "category": "inputs",
      "tags": ["interactive", "form", "action"],
      "path": "/components/button"
    },
    // Additional components...
  ],
  "categories": [
    {
      "id": "inputs",
      "name": "Input Components",
      "components": ["button", "input", "select", "checkbox"]
    },
    // Additional categories...
  ]
}
```

### Component File (components/[id].json)

Each component has its own JSON file with comprehensive documentation:

```json
{
  "id": "button",
  "name": "Button",
  "description": "A versatile button component with various styles and states",
  "category": "inputs",
  "tags": ["interactive", "form", "action"],
  "api": {
    "props": [
      {
        "name": "variant",
        "type": "string",
        "description": "The visual style variant of the button",
        "default": "primary",
        "required": false,
        "values": ["primary", "secondary", "tertiary", "ghost"]
      },
      // Additional props...
    ],
    "interfaces": [
      {
        "name": "ButtonProps",
        "properties": [
          {
            "name": "variant",
            "type": "ButtonVariant",
            "description": "The visual style variant of the button"
          },
          // Additional properties...
        ]
      },
      // Additional interfaces...
    ],
    "types": [
      {
        "name": "ButtonVariant",
        "type": "string",
        "values": ["primary", "secondary", "tertiary", "ghost"]
      },
      // Additional types...
    ]
  },
  "examples": [
    {
      "id": "primary",
      "name": "Primary Button",
      "description": "Default primary button style",
      "code": "<Button variant=\"primary\">Click Me</Button>"
    },
    // Additional examples...
  ],
  "usage": {
    "import": "import { Button } from 'amino';",
    "basic": "<Button variant=\"primary\">Click Me</Button>"
  },
  "storybook": {
    "url": "https://amino.example.com/storybook/?path=/docs/components-button--docs"
  }
}
```

### Category File (categories/[id].json)

Each category has its own file listing components within that category:

```json
{
  "category": {
    "id": "inputs",
    "name": "Input Components"
  },
  "components": [
    {
      "id": "button",
      "name": "Button",
      "description": "A versatile button component with various styles and states"
    },
    // Additional components...
  ]
}
```

### Search Index (search/index.json)

The search index file provides optimized structures for component searching:

```json
{
  "index": {
    "terms": {
      "button": ["button"],
      "primary": ["button", "tab"],
      "select": ["select", "multi-select"],
      // Additional terms...
    },
    "documents": {
      "button": {
        "id": "button",
        "name": "Button",
        "description": "A versatile button component with various styles and states",
        "fieldContent": {
          "name": "Button",
          "description": "A versatile button component with various styles and states",
          "props": "variant size disabled onClick className children",
          "examples": "Primary Button Secondary Button"
        }
      },
      // Additional documents...
    },
    "specialized": {
      "nameIndex": {
        "but": ["button"],
        "butt": ["button"],
        "butto": ["button"],
        "button": ["button"],
        // Additional prefixes...
      },
      "propsIndex": {
        "variant": ["button", "badge", "tag"],
        "size": ["button", "input", "avatar"],
        // Additional props...
      }
    }
  }
}
```

## Configuration Options

The JSON file generator will support configuration options to customize output:

```typescript
export interface JsonGeneratorOptions {
  // Generate pretty-printed JSON with indentation
  prettyPrint?: boolean;
  
  // Include or exclude search index
  includeSearchIndex?: boolean;
  
  // Include or exclude component examples
  includeExamples?: boolean;
  
  // JSON schema validation
  validateSchema?: boolean;
  
  // Custom schemas directory
  schemasDir?: string;
}
```

## Performance Considerations

1. **Efficient File Writing**: Optimize file writing to minimize I/O operations
2. **Incremental Generation**: Support updating only changed files when possible
3. **Parallelization**: Implement parallel file writing for large documentation sets
4. **Compression**: Optional compression of output files for reduced storage requirements

## Integration with Documentation Pipeline

The JSON file generator integrates with the broader documentation pipeline as follows:

1. After all specialized extractors have completed their work, the main extractor passes aggregated documentation to the JSON file generator.
2. The generator transforms the documentation to the standardized MCP format.
3. It creates the necessary directory structure in the output directory.
4. It writes component, index, category, and search files.
5. It validates the generated files against expected schemas.

## Next Steps

1. Implement the documentation transformer in `build-utils/mcp/generators/documentation-transformer.ts`
2. Create the file structure generator
3. Implement the index file generator
4. Add the category file generator
5. Develop the file writer
6. Create JSON schema definitions for validation
7. Add tests for file generation and validation

## References

- [JSON Schema Specification](https://json-schema.org/)
- [Node.js File System API](https://nodejs.org/api/fs.html)