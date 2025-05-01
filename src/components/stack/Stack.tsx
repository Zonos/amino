import type { HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';
import type { GridAlignment, GridSpacing } from 'src/types/GridSpacing';

import styles from './Stack.module.scss';

type DivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  | 'translate'
  | 'style'
  | 'prefix'
  | 'contentEditable'
  | 'inputMode'
  | 'children'
>;

export type StackProps = {
  /** @default 'unset' */
  alignment?: GridAlignment;
  children: ReactNode;
  /** @default 24 */
  spacing?: GridSpacing;
} & DivProps &
  BaseProps;

/**
 * Stack component creates a container for vertical or horizontal layouts with consistent spacing between items.
 * It serves as the base component for more specific HStack and VStack components.
 *
 * @example Basic stack
 * <Stack spacing={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 *
 * @example With different spacing values
 * <Stack spacing={8}>
 *   <div>Closely spaced items</div>
 *   <div>With 8px gap</div>
 * </Stack>
 *
 * <Stack spacing={24}>
 *   <div>Standard spacing</div>
 *   <div>With 24px gap</div>
 * </Stack>
 *
 * <Stack spacing={32}>
 *   <div>Widely spaced items</div>
 *   <div>With 32px gap</div>
 * </Stack>
 *
 * @example With alignment
 * <Stack alignment="center">
 *   <div>Centered content</div>
 *   <div>Also centered</div>
 * </Stack>
 *
 * <Stack alignment="end">
 *   <div>Right/end aligned content</div>
 *   <div>Also right/end aligned</div>
 * </Stack>
 *
 * @example With custom className
 * <Stack className="custom-stack" spacing={16}>
 *   <div>Custom styled stack</div>
 *   <div>With additional classes</div>
 * </Stack>
 *
 * @example Combining with other components
 * <Stack spacing={16}>
 *   <Card>First card</Card>
 *   <Card>Second card</Card>
 *   <Button>Action button</Button>
 * </Stack>
 */
export const Stack = ({
  alignment,
  children,
  className,
  style,
  ...otherProps
}: StackProps) => (
  <div
    className={clsx(className, styles.styledStack)}
    style={{ ...style, '--amino-stack-alignment': alignment || 'unset' }}
    {...otherProps}
  >
    {children}
  </div>
);
