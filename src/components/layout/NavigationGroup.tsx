import type { ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

import { Collapse } from 'src/components/collapse/Collapse';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './NavigationGroup.module.scss';

export type NavigationItemProps = BaseProps & {
  content: ReactNode;
  icon?: ReactNode;
  /**
   * @default false
   */
  isActive?: boolean;
};

export type NavigationGroupProps = BaseProps & {
  children: ReactNode;
  /**
   * @default false
   */
  collapsed?: boolean;
  /** **NOTE**: Should be `NavigationItem` component in order to have proper styling. If you want to use `href`, WRAP the `anchor` tag outside of the `NavigationItem` component. */
  content: ReactElement<NavigationItemProps> | ReactElement<HTMLAnchorElement>;
};

export const NavigationItem = ({
  className,
  content,
  icon,
  isActive = false,
  style,
}: NavigationItemProps) => (
  <div
    className={clsx(
      className,
      styles.styledNavigationItem,
      isActive && styles.active,
    )}
    style={style}
  >
    {icon && <div className={styles.styledNavigationItemIcon}>{icon}</div>}
    {content}
  </div>
);

export const NavigationGroup = ({
  children,
  className,
  collapsed = false,
  content,
  style,
}: NavigationGroupProps) => (
  <div className={clsx(className, styles.wrapper)} style={style}>
    <div
      className={clsx(styles.styledItemWrapper, !collapsed && styles.collapsed)}
    >
      {content}
    </div>
    <Collapse className={styles.styledGroupItemWrapper} collapsed={collapsed}>
      <div className={styles.styledChildItems}>{children}</div>
    </Collapse>
  </div>
);
