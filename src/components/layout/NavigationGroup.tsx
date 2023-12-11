import type { ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

import { Collapse } from 'src/components/collapse/Collapse';

import styles from './NavigationGroup.module.scss';

export type NavigationItemProps = {
  className?: string;
  content: ReactNode;
  icon?: ReactNode;
  /**
   * @default false
   */
  isActive?: boolean;
};

export type NavigationGroupProps = {
  children: ReactNode;
  className?: string;
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
}: NavigationItemProps) => (
  <div
    className={clsx(
      className,
      styles.styledNavigationItem,
      isActive && styles.active,
    )}
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
}: NavigationGroupProps) => (
  <div className={clsx(className, styles.wrapper)}>
    <div
      className={clsx(styles.styledItemWrapper, !collapsed && styles.collapsed)}
    >
      {content}
    </div>
    <Collapse className={styles.styledGroupItemWrapper} collapsed={collapsed}>
      {children}
    </Collapse>
  </div>
);
