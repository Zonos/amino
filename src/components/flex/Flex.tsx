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
   * @default 'row'
   */
  flexDirection?: CSSProperties['flexDirection'];
  /**
   * @default 8
   */
  gap?: number;
  /**
   * @default 'flex-start'
   */
  justifyContent?: CSSProperties['justifyContent'];
  padding?: number;
};

export const Flex = ({
  alignItems = 'stretch',
  children,
  className,
  flexDirection = 'row',
  gap = 8,
  justifyContent = 'flex-start',
  padding,
  style,
}: FlexProps) => (
  <div
    className={clsx(className, styles.flexWrapper)}
    style={{
      ...style,
      '--dashboard-flex-wrapper-align-items': alignItems,
      '--dashboard-flex-wrapper-flex-direction': flexDirection,
      '--dashboard-flex-wrapper-gap': `${gap}px`,
      '--dashboard-flex-wrapper-justify-content': justifyContent,
      '--dashboard-flex-wrapper-padding': `${padding || 0}px`,
    }}
  >
    {children}
  </div>
);
