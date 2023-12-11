import type { MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './MenuItem.module.scss';

type MenuItemProps = BaseProps & {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: MouseEventHandler;
};

export const MenuItem = ({
  children,
  className,
  icon,
  onClick,
  style,
}: MenuItemProps) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  <li
    className={clsx(className, styles.styledListItem)}
    onClick={onClick}
    style={style}
  >
    {icon}
    {children}
  </li>
);
