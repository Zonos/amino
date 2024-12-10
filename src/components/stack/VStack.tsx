import clsx from 'clsx';

import { Stack, type StackProps } from 'src/components/stack/Stack';

import styles from './VStack.module.scss';

/**
 * A vertical stack
 *
 * @param alignment - Optional alignment
 * @param spacing - Optional spacing between elements
 */
export const VStack = ({
  children,
  className,
  spacing = 24,
  style,
  ...props
}: StackProps) => (
  <Stack
    className={clsx(className, styles.styledVStack)}
    style={{ ...style, '--amino-v-stack-gap': `${spacing}px` }}
    {...props}
  >
    {children}
  </Stack>
);
