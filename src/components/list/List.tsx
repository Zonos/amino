import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './List.module.scss';

export type ListProps = BaseProps & {
  children?: ReactNode;
  withBorder?: boolean;
  withNegativeMargin?: boolean;
};

export const List = ({
  children,
  className,
  style,
  withBorder,
  withNegativeMargin,
}: ListProps) => (
  <section
    className={clsx(
      className,
      styles.styledList,
      withBorder && styles.withBorder,
      withNegativeMargin && styles.withNegativeMargin,
    )}
    style={style}
  >
    {children}
  </section>
);
