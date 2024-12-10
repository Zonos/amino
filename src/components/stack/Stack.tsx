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
 * A stack
 *
 * @param alignment - Optional alignment
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
