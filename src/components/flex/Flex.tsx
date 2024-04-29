import type { CSSProperties, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Flex.module.scss';

export type FlexProps = BaseProps & {
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
  gap = 8,
  justifyContent = 'flex-start',
  padding = 0,
  style,
}: FlexProps) => (
  <div
    className={clsx(className, styles.flexWrapper)}
    style={{
      ...style,
      '--dashboard-flex-wrapper-align-items': alignItems,
      '--dashboard-flex-wrapper-flex-children': childrenFlex,
      '--dashboard-flex-wrapper-flex-direction': flexDirection,
      '--dashboard-flex-wrapper-flex-wrap': flexWrap,
      '--dashboard-flex-wrapper-gap': `${gap}px`,
      '--dashboard-flex-wrapper-justify-content': justifyContent,
      '--dashboard-flex-wrapper-padding': `${padding}px`,
    }}
  >
    {children}
  </div>
);
