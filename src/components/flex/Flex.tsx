import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Flex.module.scss';

export type FlexProps = BaseProps &
  HTMLAttributes<HTMLDivElement> & {
    /**
     * @default 'stretch'
     */
    alignItems?: CSSProperties['alignItems'];
    children: ReactNode;
    /**
     * @default 'initial'
     * @description This is a shorthand for flex-grow, flex-shrink, and flex-basis.
     */
    childrenFlex?:
      | 'auto'
      | '1 0'
      | '0 1'
      | 'initial'
      | 'inherit'
      | 'unset'
      // Combine with never to make sure string doesn't override the union
      | (string & { _?: never });
    /**
     * @default 'row'
     */
    flexDirection?: CSSProperties['flexDirection'];
    flexWrap?: CSSProperties['flexWrap'];
    /**
     * @default false
     */
    fullHeight?: boolean;
    /**
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @default 8
     */
    gap?: number;
    /**
     * @default 'flex-start'
     */
    justifyContent?: CSSProperties['justifyContent'];
    /**
     * @default 0
     */
    padding?: number;
  };

export const Flex = ({
  alignItems = 'stretch',
  children,
  childrenFlex = 'initial',
  className,
  flexDirection = 'row',
  flexWrap = 'nowrap',
  fullHeight = false,
  fullWidth = false,
  gap = 8,
  justifyContent = 'flex-start',
  padding = 0,
  style,
  ...rest
}: FlexProps) => (
  <div
    {...rest}
    className={clsx(
      className,
      styles.flexWrapper,
      fullWidth && styles.fullWidth,
      fullHeight && styles.fullHeight,
    )}
    style={{
      ...style,
      '--amino-flex-wrapper-align-items': alignItems,
      '--amino-flex-wrapper-flex-children': childrenFlex,
      '--amino-flex-wrapper-flex-direction': flexDirection,
      '--amino-flex-wrapper-flex-wrap': flexWrap,
      '--amino-flex-wrapper-gap': `${gap}px`,
      '--amino-flex-wrapper-justify-content': justifyContent,
      '--amino-flex-wrapper-padding': `${padding}px`,
    }}
  >
    {children}
  </div>
);
