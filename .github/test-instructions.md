# Test Guidelines

When writing tests, always run the tests to make sure they pass. Additionally, always run the tests without the watch mode so it doesn't hang up the terminal.

## Setup
```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
```

## File Structure
- Place tests in `__tests__` directory next to component
- Name test files as `ComponentName.test.tsx`
- Group related tests with describe blocks

## Component Testing

### Basic Tests
```typescript
it('renders with default props', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

it('renders with variants and sizes', () => {
  render(<Button variant="primary" size="lg">Large Button</Button>);
  const button = screen.getByText('Large Button');
  expect(button).toHaveClass(styles.primaryButton);
  expect(button).toHaveClass(styles.lgButton);
});
```

### Interaction Tests
```typescript
it('calls onClick when clicked', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('updates value when typed into', () => {
  const handleChange = vi.fn();
  render(<Input onChange={handleChange} value="" />);
  
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
  expect(handleChange).toHaveBeenCalled();
});
```

### Accessibility Tests
```typescript
it('has appropriate ARIA attributes', () => {
  render(<Button aria-label="Close dialog">×</Button>);
  expect(screen.getByLabelText('Close dialog')).toBeInTheDocument();
});

it('is keyboard navigable', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole('button');
  button.focus();
  expect(button).toHaveFocus();
});
```

## Mocking
```typescript
// Mock CSS modules
vi.mock('./Component.module.scss', () => ({
  default: {
    wrapper: 'wrapper-class',
    button: 'button-class',
  }
}));

// Mock theme
vi.mock('src/styles/constants/theme', () => ({
  theme: {
    primary: 'var(--amino-primary)',
    space16: '16px'
  }
}));

// Mock component
vi.mock('src/icons/CheckmarkIcon', () => ({
  CheckmarkIcon: () => <div data-testid="checkmark-icon" />
}));
```

## Async Testing
```typescript
it('loads data asynchronously', async () => {
  vi.spyOn(api, 'fetchData').mockResolvedValue({ name: 'Test' });
  
  render(<AsyncComponent />);
  
  expect(screen.getByTestId('loading')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

// With timers
beforeEach(() => { vi.useFakeTimers(); });
afterEach(() => { vi.useRealTimers(); });

it('hides toast after timeout', async () => {
  render(<Toast duration={3000}>Message</Toast>);
  
  vi.advanceTimersByTime(3000);
  
  await waitFor(() => {
    expect(screen.queryByText('Message')).not.toBeInTheDocument();
  });
});
```

## Error Testing
```typescript
it('shows error message when API fails', async () => {
  vi.spyOn(api, 'fetchData').mockRejectedValue(new Error('API error'));
  
  render(<DataComponent />);
  
  await waitFor(() => {
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });
});
```

## Test Data
```typescript
const createButtonProps = (overrides = {}) => ({
  onClick: vi.fn(),
  variant: 'primary',
  size: 'md',
  children: 'Button Text',
  ...overrides
});

it('renders correctly', () => {
  render(<Button {...createButtonProps()} />);
  expect(screen.getByText('Button Text')).toBeInTheDocument();
});
```

## Best Practices
- Use descriptive test names
- Test behavior, not implementation
- Keep tests independent
- Test edge cases
- Avoid testing styles directly
- Use screen queries appropriately: getBy*, queryBy*, findBy*
- Clean up after tests