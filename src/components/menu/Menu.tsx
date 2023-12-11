import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Menu.module.scss';

export const Menu = ({
  children,
  className,
  style,
}: BaseProps & { children?: ReactNode }) => (
  <div className={clsx(className, styles.menu)} style={style}>
    {children}
  </div>
);
