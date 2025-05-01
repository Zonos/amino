import clsx from 'clsx';

import { Stack, type StackProps } from 'src/components/stack/Stack';

import styles from './HStack.module.scss';

/**
 * HStack component arranges children horizontally with consistent spacing.
 * It's a specialized version of Stack that automatically sets horizontal layout.
 *
 * @example Basic horizontal layout
 * <HStack>
 *   <div>Left item</div>
 *   <div>Middle item</div>
 *   <div>Right item</div>
 * </HStack>
 *
 * @example Custom spacing
 * <HStack spacing={8}>
 *   <Button>Save</Button>
 *   <Button>Cancel</Button>
 * </HStack>
 *
 * @example With center alignment
 * <HStack alignment="center">
 *   <Badge>New</Badge>
 *   <Text>Product title</Text>
 * </HStack>
 *
 * @example With space between items
 * <HStack alignment="space-between">
 *   <div>Left aligned</div>
 *   <div>Right aligned</div>
 * </HStack>
 *
 * @example With buttons and consistent spacing
 * <HStack spacing={16}>
 *   <Button variant="primary">Submit</Button>
 *   <Button variant="standard">Cancel</Button>
 *   <Button variant="link">Learn more</Button>
 * </HStack>
 *
 * @example Form actions layout
 * <HStack alignment="end" spacing={8}>
 *   <Button variant="primary">Save</Button>
 *   <Button variant="standard">Cancel</Button>
 * </HStack>
 */
export const HStack = ({
  children,
  className,
  spacing = 24,
  style,
  ...props
}: StackProps) => (
  <Stack
    className={clsx(className, styles.styledHStack)}
    style={{ ...style, '--amino-h-stack-gap': `${spacing}px` }}
    {...props}
  >
    {children}
  </Stack>
);
