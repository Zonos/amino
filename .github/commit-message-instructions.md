# Commit Message Guidelines

## Format
```
<type>(<scope>): <short summary>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Header
- Type: build, ci, docs, feat, fix, perf, refactor, test, style, chore
- Scope: components, styles, icons, utils, hooks, types, build-utils, animations, svgReact, config, test-utils, story, theme, ci, docs, dependencies
- Summary: Present tense, not capitalized, no period

## Body
- Explain the motivation for the change
- Use imperative, present tense
- Minimum 20 characters (except for docs)

## Footer
- Breaking changes: Start with "BREAKING CHANGE: "
- Deprecations: Start with "DEPRECATED: "
- Reference issues: "Fixes #123" or "Closes #456"

## Examples
```
feat(components): add xl size to button component

Added the xl size option to the Button component according to design specs.
This provides a larger button option for high-emphasis CTAs on landing pages.

Implemented with proper styling and updated stories.
```

```
fix(components): resolve input focus state in night theme

The input wasn't showing focus states correctly in night theme.
This fix ensures CSS variables are properly applied with theme context.

Fixes #432
```

```
refactor(styles): convert Card component to CSS modules

Converted from styled-components to CSS modules to improve
server-side rendering compatibility and reduce bundle size.
```