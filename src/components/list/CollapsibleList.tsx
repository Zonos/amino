import { type ReactNode, useState } from 'react';

import clsx from 'clsx';

import { Collapse } from 'src/components/collapse/Collapse';
import { List, type ListProps } from 'src/components/list/List';
import { ListItem } from 'src/components/list-item/ListItem';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';

import styles from './CollapsibleList.module.scss';

export type CollapsibleListProps = ListProps & {
  icon?: ReactNode;
  /**
   * Whether to start expanded
   * @default false
   */
  startExpanded?: boolean;
  title: ReactNode;
};

export const CollapsibleList = ({
  children,
  /** @description list of ListItem are recommended to pass in */
  className,
  icon,
  startExpanded,
  style,
  title,
  withBorder,
  withNegativeMargin,
}: CollapsibleListProps) => {
  const [collapsed, setCollapsed] = useState(!startExpanded);

  return (
    <List
      className={clsx(
        className,
        styles.styledList,
        withBorder && styles.withBorder,
        withNegativeMargin && styles.withNegativeMargin,
      )}
      style={{
        ...style,
        '--amino-collapsible-list-collapse-icon-display': icon
          ? 'inline-block'
          : '',
        '--amino-collapsible-list-primary-icon-display': icon ? '' : 'none',
      }}
      withBorder={withBorder}
      withNegativeMargin={withNegativeMargin}
    >
      <ListItem
        className={clsx(styles.styledPrimaryListItem)}
        decorator={icon}
        label={title}
        onClick={() => setCollapsed(!collapsed)}
        rightDecorator={
          <ChevronUpIcon className={collapsed ? styles.collapsed : ''} />
        }
      />
      <Collapse className={styles.styledCollapse} collapsed={collapsed}>
        {children}
      </Collapse>
    </List>
  );
};
