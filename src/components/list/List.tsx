import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './List.module.scss';

export type ListProps = BaseProps & {
  /**
   * List items to be displayed
   * Typically ListItem components
   */
  children?: ReactNode;
  /**
   * Whether to display a border around the list
   * @default false
   */
  withBorder?: boolean;
  /**
   * Whether to apply negative margin to make the list flush with its container
   * @default false
   */
  withNegativeMargin?: boolean;
};

/**
 * List component provides a container for displaying a collection of related items.
 * It's typically used with ListItem components as children.
 *
 * @example Basic usage
 * ```tsx
 * <List>
 *   <ListItem label="Item 1" />
 *   <ListItem label="Item 2" />
 *   <ListItem label="Item 3" />
 * </List>
 * ```
 *
 * @example With border
 * ```tsx
 * <List withBorder>
 *   <ListItem label="Item 1" subtitle="Description for item 1" />
 *   <ListItem label="Item 2" subtitle="Description for item 2" />
 * </List>
 * ```
 *
 * @example With selection
 * ```tsx
 * const [selectedItem, setSelectedItem] = useState<number | null>(null);
 *
 * <List>
 *   <ListItem
 *     label="Item 1"
 *     selected={selectedItem === 1}
 *     onClick={() => setSelectedItem(selectedItem === 1 ? null : 1)}
 *   />
 *   <ListItem
 *     label="Item 2"
 *     selected={selectedItem === 2}
 *     onClick={() => setSelectedItem(selectedItem === 2 ? null : 2)}
 *   />
 *   <ListItem
 *     label="Disabled Item"
 *     disabled
 *     onClick={() => {}}
 *   />
 * </List>
 * ```
 *
 * @example With negative margin
 * ```tsx
 * <div style={{ padding: '20px', border: '1px solid #ccc' }}>
 *   <List withNegativeMargin>
 *     <ListItem label="This list is flush with container" />
 *     <ListItem label="No padding around the list" />
 *   </List>
 * </div>
 * ```
 *
 * @example With decorators
 * ```tsx
 * <List>
 *   <ListItem
 *     label="With icon"
 *     decorator={<Thumbnail icon={<UserIcon />} shape="round" />}
 *   />
 *   <ListItem
 *     label="With right decorator"
 *     rightDecorator={<Badge>New</Badge>}
 *   />
 * </List>
 * ```
 */
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
