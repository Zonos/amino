import { type ReactNode, useState } from 'react';

import clsx from 'clsx';

import { Collapse } from 'src/components/collapse/Collapse';
import { List, type ListProps } from 'src/components/list/List';
import { ListItem } from 'src/components/list-item/ListItem';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';

import styles from './CollapsibleList.module.scss';

export type CollapsibleListProps = ListProps & {
  /**
   * Optional icon to display next to the title in the header
   */
  icon?: ReactNode;
  /**
   * Whether to start expanded
   * @default false
   */
  startExpanded?: boolean;
  /**
   * Title text or element for the collapsible header
   */
  title: ReactNode;
};

/**
 * CollapsibleList component provides a list with a collapsible section that can be expanded
 * or collapsed by clicking on the header. It's an extension of the List component with added
 * functionality for expandable content.
 *
 * @example Basic usage
 * ```tsx
 * <CollapsibleList title="Settings">
 *   <ListItem label="Profile" />
 *   <ListItem label="Account" />
 *   <ListItem label="Security" />
 * </CollapsibleList>
 * ```
 *
 * @example With icon and starting expanded
 * ```tsx
 * <CollapsibleList
 *   icon={<SettingsIcon size={24} />}
 *   title="Advanced Settings"
 *   startExpanded
 * >
 *   <ListItem label="Developer Options" />
 *   <ListItem label="Experimental Features" />
 * </CollapsibleList>
 * ```
 *
 * @example With border and selectable items
 * ```tsx
 * const [selected, setSelected] = useState<string | null>(null);
 *
 * <CollapsibleList
 *   title="Categories"
 *   withBorder
 * >
 *   <ListItem
 *     label="Electronics"
 *     selected={selected === 'electronics'}
 *     onClick={() => setSelected(selected === 'electronics' ? null : 'electronics')}
 *   />
 *   <ListItem
 *     label="Clothing"
 *     selected={selected === 'clothing'}
 *     onClick={() => setSelected(selected === 'clothing' ? null : 'clothing')}
 *   />
 *   <ListItem
 *     label="Books"
 *     selected={selected === 'books'}
 *     onClick={() => setSelected(selected === 'books' ? null : 'books')}
 *   />
 * </CollapsibleList>
 * ```
 *
 * @example Multiple collapsible lists
 * ```tsx
 * <div>
 *   <CollapsibleList title="First Section" startExpanded>
 *     <ListItem label="Item 1" />
 *     <ListItem label="Item 2" />
 *   </CollapsibleList>
 *
 *   <CollapsibleList title="Second Section">
 *     <ListItem label="Item A" />
 *     <ListItem label="Item B" />
 *   </CollapsibleList>
 * </div>
 * ```
 *
 * @example With decorators in list items
 * ```tsx
 * <CollapsibleList title="Files">
 *   <ListItem
 *     label="Document.pdf"
 *     decorator={<Thumbnail icon={<DocumentIcon />} shape="square" />}
 *     rightDecorator={<Badge>3 MB</Badge>}
 *   />
 *   <ListItem
 *     label="Image.png"
 *     decorator={<Thumbnail icon={<ImageIcon />} shape="square" />}
 *     rightDecorator={<Badge>1.2 MB</Badge>}
 *   />
 * </CollapsibleList>
 * ```
 */
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
