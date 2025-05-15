# Code Review Guidelines

## Core Principles
- Use functional components, not classes
- Export named exports, not default exports
- Extend BaseProps for component props
- Use CSS modules with SCSS and appropriate class naming
- Follow theme system for colors, spacing, and typography
- Ensure accessibility standards are maintained

## Component Structure
```
ComponentName/
├── ComponentName.tsx            # Component implementation
├── ComponentName.module.scss    # Component styles
├── ComponentName.module.scss.d.ts  # Type definitions
├── __tests__/                   # Test files
└── __stories__/                 # Storybook files
```

## Props Pattern
```typescript
export type ButtonProps = BaseProps & {
  /** 
   * Button variant that changes appearance
   * @default 'standard'
   */
  variant?: 'primary' | 'standard' | 'danger';
  
  /** 
   * Size of the button 
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /** Whether the button is disabled */
  disabled?: boolean;
  
  /** Click handler */
  onClick?: () => void;
};

export const Button = ({
  children,
  className,
  variant = 'standard',
  size = 'md',
  disabled = false,
  onClick,
  style,
}: ButtonProps): ReactElement => {
  // Implementation
};
```

## TypeScript Patterns
- Use specific types (not generic string/number)
- Add explicit return types for components
- Use null/undefined checks properly
- Use utility types appropriately (Partial<T>, Omit<T, K>)

## CSS & Styling
```typescript
// In TSX file
<div
  className={clsx(
    styles.button,
    styles[variant],
    size && styles[size],
    disabled && styles.disabled,
    className
  )}
  style={{
    '--amino-button-background': theme.primary,
    '--amino-button-spacing': theme.space16,
  }}
/>

// In SCSS file
.button {
  background-color: var(--amino-button-background);
  padding: var(--amino-button-padding, 8px 16px);
}
```

## Import Order
```typescript
// React imports
import { useState, useEffect } from 'react';

// External libraries
import clsx from 'clsx';

// Internal absolute imports
import { theme } from 'src/styles/constants/theme';
import { Button } from 'src/components/button/Button';

// Internal relative imports
import { useComponentLogic } from './useComponentLogic';

// Style imports (last)
import styles from './Component.module.scss';
```

## Accessibility
- Use semantic HTML elements
- Add ARIA attributes appropriately
- Ensure keyboard navigation
- Maintain sufficient color contrast
- Test with screen readers

## Performance Review
- Check for unnecessary renders
- Verify proper dependency arrays in hooks
- Look for expensive computations that should be memoized
- Review prop drilling and consider context when appropriate

## Review Checklist
- TypeScript types are correct and specific
- Component follows functional pattern
- Props have JSDoc comments with @default values
- CSS modules are used properly
- Theme variables are used instead of hardcoded values
- Accessibility attributes are included
- Error states are handled
- Tests cover main functionality
- Storybook stories demonstrate component variations