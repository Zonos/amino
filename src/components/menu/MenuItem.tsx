import type { MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './MenuItem.module.scss';

type MenuItemProps = BaseProps & {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: MouseEventHandler;
};

export const MenuItem = ({
  children,
  className,
  disabled,
  icon,
  onClick,
  style,
}: MenuItemProps) => (
  <li className={clsx(className, disabled && styles.disabled)} style={style}>
    <button
      className={styles.styledListItem}
      onClick={e => !disabled && onClick?.(e)}
      type="button"
    >
      {icon}
      {children}
    </button>
  </li>
);
