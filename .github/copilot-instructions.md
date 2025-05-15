# GitHub Copilot Instructions for fe-2-amino

## Code Generation

### General Guidelines
- Use TypeScript for all code.
- All React components should be functional components, not class components.
- Export named exports rather than default exports.
- Use explicit return types for functions, especially for components.
- Follow the existing code structure and organization patterns in the codebase.
- Use `clsx` for conditional classname management.
- Use CSS modules with SCSS for styling (.module.scss files).
- Use CSS variables with the `--amino-` prefix for theme variables.
- Place CSS custom properties in the style attribute using the format `'--amino-variable-name': value`.
- Follow the existing naming conventions for files and components.

## Linting Compliance Guidelines

Based on experience fixing common linting issues, please follow these guidelines when generating code:

### TypeScript
- Use `import type` for imports that are only used as types (especially when `verbatimModuleSyntax` is enabled)
- Avoid using the `any` type - use more specific types or `unknown`
- Use appropriate parameter types for Node.js APIs:
  - Use `PathLike` or `PathOrFileDescriptor` from 'fs' for file system operations
  - Avoid using `string` when platform-specific types are required
- Always handle potentially undefined values with optional chaining (`?.`) or null checks
- Add explicit type guards when working with values that might be `undefined`
- Ensure array access is guarded against out-of-bounds errors with optional chaining
- Use non-null assertions (`!`) only when you're certain a value cannot be null

### Code Style
- Follow object key ordering rules (typically alphabetical)
- Always add trailing commas to object properties and in array literals
- Use concise arrow functions without block statements when returning a simple expression:
  - Preferred: `() => value`
  - Avoid when possible: `() => { return value; }`
- Use consistent indentation matching project preferences (typically 2 spaces)
- Variable naming:
  - Avoid shadowing variables from outer scopes
  - Prefix unused parameters with underscore (e.g., `_param`)
- Always terminate statements with semicolons
- Always add a newline at the end of files

### Import Organization
- Use absolute imports instead of relative imports when configured
- Group and sort imports according to project conventions:
  1. External libraries/modules first
  2. Project internal modules
  3. Relative imports last
  4. Style imports at the end

### Testing & Mocking
- Use proper typing for mock implementations with vi.mocked()
- Mock implementations should respect the original function's type signature
- Use explicit return types for mock functions
- Properly nest describe/test blocks for better organization
- Include both happy path and edge case tests
- Use proper cleanup in afterEach blocks
- Use strong typing for test data and fixtures

## React Components

- Always use functional components with appropriate type definitions.
- Extend `BaseProps` for all component props.
- Set default values directly in function parameters rather than using defaultProps.
- Include JSDoc comments with `@default` values for props.
- Use explicit return types for components.
- Component props should be suffixed with `Props` (e.g., `ButtonProps`).
- Use strict typing for any enums or string literals.
- Use `ReactNode` for components that accept children.
- Use the existing theme system for colors, spacing, and other design values.
- Use `clsx` for conditional class names.

## Styling

- Use the `theme` constants from 'src/styles/constants/theme.ts' for accessing theme values.
- Follow the CSS module pattern: `component.module.scss` for styles and accompanying `.d.ts` file.
- Use CSS variables with the `--amino-` prefix in SCSS files.
- Access theme variables using the format `var(--amino-variable-name)`.
- When converting from styled-components to SCSS modules, use SCSS variables with the `$amino` prefix.
- Use CSS custom properties in the style attribute for dynamic styling.
- Component styles should be scoped using CSS modules to avoid global style conflicts.

## Theme Usage

- Import color values from theme rather than hardcoding color values: `theme.blue500` instead of `#0089EA`.
- Use theme design tokens for spacing: `theme.space16` instead of hardcoded pixels.
- Follow the design system's type scale for fonts: `theme.fontSizeBase`, `theme.fontSizeL`, etc.
- Use the defined color intents: `theme.primary`, `theme.danger`, `theme.success`, etc.
- Border-radius should use theme variables: `theme.radius8`, `theme.radius6`, etc.

## File Structure

- Each component should be in its own directory under `src/components`
- Component directories should include the main component file, a module.scss file, and module.scss.d.ts file
- Story files should be in a `__stories__` subdirectory
- Test files should be in a `__tests__` subdirectory
- Icons should be in the `src/icons` directory

## Import Order

- External libraries first
- React imports
- Third-party libraries (clsx, etc.)
- Internal absolute imports (using 'src/...')
- Internal relative imports
- Style imports should be last

## TypeScript Types

- Use TypeScript for all code.
- Define explicit interfaces or types for component props.
- Extend `BaseProps` for all component props.
- Use type inference when it doesn't sacrifice clarity.
- Import shared types from 'src/types/'.
- Define component-specific types within the component file.
- Use more restrictive types where possible (literal types, unions, etc.).

## Test Generation

### Testing Guidelines

- Use Vitest for unit tests
- Create tests in a `__tests__` directory next to the component
- Test file names should match the component name plus .test.tsx
- Mock dependencies when needed
- Test both the happy and edge cases
- Use descriptive test names that explain what the test is checking
- Group related tests with describe blocks
- Test user interactions using proper testing-library methods

## Code Review

### Code Review Guidelines

- Check for proper TypeScript types
- Ensure components are functional and follow project patterns
- Verify proper use of theme variables instead of hardcoded values
- Ensure accessibility standards are maintained
- Check for proper use of SCSS modules
- Ensure all required props have proper JSDoc comments
- Verify proper use of component composition patterns
- Check that state management follows best practices
- Look for proper error handling
- Ensure components are properly tested
- Verify that the component exports are correctly defined

## Commit Message Generation

### Commit Message Guidelines

- Use conventional commits format: https://www.conventionalcommits.org/
- Start with type: feat, fix, docs, style, refactor, test, chore
- Include scope of the change in parentheses if applicable
- Use imperative mood in the subject line
- Include a short description of what changed
- Example: feat(button): add support for xl size
- Example: fix(input): resolve focus state inconsistency
- Example: refactor(theme): improve typing of color variables

## Pull Request Description Generation

### Pull Request Description Guidelines

- Include a clear title that summarizes the change
- Provide context for why the change is needed
- List the major changes made
- Reference any related issues
- Include any testing instructions if applicable
- Document any breaking changes
- Note any dependencies added/removed
- Add screenshots if the change is visual