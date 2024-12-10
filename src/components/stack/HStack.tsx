import clsx from 'clsx';

import { Stack, type StackProps } from 'src/components/stack/Stack';

import styles from './HStack.module.scss';

/**
 * A horizontal stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
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
