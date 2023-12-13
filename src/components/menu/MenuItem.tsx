import type { MouseEventHandler, ReactNode } from 'react';

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
  <li className={className} style={style}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
    <div
      className={styles.styledListItem}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {icon}
      {children}
    </div>
  </li>
);
