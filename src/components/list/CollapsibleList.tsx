import { type ReactNode, useState } from 'react';

import { Collapse } from 'src/components/collapse/Collapse';
import { List, type ListProps } from 'src/components/list/List';
import { ListItem } from 'src/components/list-item/ListItem';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { cn } from 'src/utils/cn';

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
      className={cn(
        'flex flex-col gap-[2px]',
        withBorder &&
          'p-amino-8 border border-gray-200 dark:border-gray-800 rounded-amino-12',
        withNegativeMargin && 'm-amino-negative-24',
        className,
      )}
      style={style}
      withBorder={withBorder}
      withNegativeMargin={withNegativeMargin}
    >
      <ListItem
        className="[&_.__icon-wrapper]:hidden"
        decorator={icon}
        label={title}
        onClick={() => setCollapsed(!collapsed)}
        rightDecorator={
          <ChevronUpIcon
            className={cn(
              'transition-all',
              collapsed && 'opacity-100 rotate-180',
            )}
          />
        }
      />
      <Collapse
        className="[&_.__icon-wrapper]:w-amino-32 [&_.__icon-wrapper]:inline-block"
        collapsed={collapsed}
      >
        {children}
      </Collapse>
    </List>
  );
};
