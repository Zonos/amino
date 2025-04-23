# Storybook Example Extractor Implementation Prompt

## Background
Storybook stories provide interactive examples of components in different variations and contexts. These examples are valuable for documentation as they demonstrate proper usage of components. The Storybook example extractor needs to parse story files and extract clean, representative examples for inclusion in the documentation.

## Task Description
Implement a Storybook example extractor that:

1. Discovers story files associated with components
2. Parses CSF (Component Story Format) and MDX stories
3. Extracts individual story examples and their variants
4. Identifies the props and configuration used in each example
5. Formats examples for inclusion in documentation

## Technical Requirements

- Must support latest Storybook formats (CSF and MDX)
- Should extract clean examples without Storybook-specific boilerplate
- Must identify different variants/states of components
- Should extract the props used in each example
- Must handle complex story patterns including templates and args
- Should provide context about what each example demonstrates

## Story Formats to Support

1. CSF (Component Story Format) stories
2. MDX format stories
3. Stories with templates and args
4. Stories with decorators
5. Stories with dynamic content

## Current Environment

- Stories are primarily written in CSF format
- Some stories use MDX format
- Stories often include multiple variants of the same component
- Many stories use templates with args to configure examples
- Some stories include complex decorators or context providers

## Expected Implementation

Provide a detailed implementation strategy for the Storybook example extractor including:

1. Story discovery mechanism
2. Story parsing approach for different formats
3. Example extraction algorithm
4. Props identification strategy
5. Example formatting for documentation

Include code examples for:
1. Main story extraction function
2. CSF parsing logic
3. MDX parsing logic
4. Example code formatting

## Implementation Guidance

### Story Parsing Strategy
- Use static analysis with Babel/TypeScript parser to analyze story files without execution
- Create separate parsers for CSF and MDX formats with a unified output structure
- Implement AST-based analysis to extract story definitions and metadata
- For MDX files, use a combination of MDX parser and code block extractors
- Create a registry of story patterns to handle various Storybook patterns consistently

### Complex Story Pattern Handling
- Implement template resolution that combines templates with args to generate final examples
- Extract decorators and identify their purpose (styling, context providers, etc.)
- Create a simplified representation of context providers for documentation
- Handle dynamically generated stories by capturing the generation logic
- Use static analysis to determine the effective props after template application

### Example Extraction Approach
- Generate clean, standalone examples by removing Storybook-specific code
- Normalize component usage to follow best practices
- Include only relevant props and configuration in examples
- Provide multiple examples showing different prop combinations
- Extract the story title and description to provide context for each example

### Props Identification Method
- Analyze the AST to identify props passed to components
- Track prop spread operations and resolve them to individual props where possible
- Compare used props against the component's interface to ensure completeness
- Extract literal values, variables, and expressions used as props
- Identify patterns of related props that work together

### Example Storage Format
- Store extracted examples in a structured JSON format
- Include the raw example code, a normalized version, and metadata
- Categorize examples by their demonstrated features or use cases
- Link examples to specific props they demonstrate
- Support syntax highlighting with language markers
- Include context about what each example demonstrates
- Store prop values used in each example for reference