import React, { type ReactNode } from 'react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Skeleton } from 'src/components/skeleton/Skeleton';
import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import type { ReactComponent } from 'src/types/ReactComponent';
import { cn } from 'src/utils/cn';

import { SimpleTableRow } from './SimpleTableRow';

const getFlexAlignment = (alignment: SimpleTableHeaderBaseProps['align']) => {
  switch (alignment) {
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'start':
    default:
      return 'flex-start';
  }
};

export type SimpleTableHeaderBaseProps = {
  /**
   * Text alignment for a column
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end';
  /**
   * @default false
   * Disable link routing on cells
   */
  disabledLink?: boolean;
  /**
   * @default 0
   * Minimum width of column in pixels
   */
  minWidth?: number;
  /**
   * @default false
   * Disable padding on cells
   */
  noPadding?: boolean;
  /**
   * Determines cell content wrapping method
   * @default 'nowrap'
   */
  textWrapMethod?: 'truncate' | 'normal' | 'nowrap';
  /**
   * Width of column in percent
   * @default undefined
   */
  width?: number;
};

export type SimpleTableHeader<T extends object> = {
  [Key in keyof T]: {
    /** The key for each record that the header corresponds to */
    key: Key;
    /** null means don't show a header for this column */
    name: ReactNode | null;

    renderCustom?: (value: T[Key], item: T) => React.ReactNode;
  } & SimpleTableHeaderBaseProps;
}[keyof T extends React.Key ? keyof T : never];

export type SimpleTableProps<T extends object> = BaseProps & {
  /**
   * Custom component for the link. Defaults to <a>
   */
  CustomLinkComponent?: ReactComponent<{
    children: ReactNode;
    href: string;
  }>;
  /**
   * @default false
   * Use bordered variant of table
   */
  bordered?: boolean;
  /**
   * @default false
   * Enable rows to collapse and expand with more information
   */
  collapsible?: {
    /**
     * Content to show when row is expanded
     */
    collapseContent?: {
      content: ReactNode;
      /**
       * @note Key must match the key of the item it is expanding from
       */
      key: string;
    }[];
    enabled: boolean;
    expandedItemKeys: string[];
    toggleItem: (key: string) => void;
  };
  /**
   * Will make the whole row (each td) an anchor tag so native link functionality exists. If clicking just navigates, use this over onRowClick.
   */
  getRowLink?: (item: T) => string;
  headers: SimpleTableHeader<T>[];
  items: T[];
  /** Adding unique list keys */
  keyExtractor: (item: T) => string;
  /**
   * Render loading skeleton
   * @default false
   */
  loading?: boolean;
  /**
   * Number of rows to render while loading
   * @default 10
   */
  loadingItems?: number;
  /**
   * Height of loading skeleton
   * @default 13
   */
  loadingSkeletonHeight?: number;
  /**
   * Maximum height of the table. Required for the sticky header to work correctly.
   * @default '100%
   */
  maxHeight?: string;
  /**
   * @default false,
   * Disable hover background color effect on rows
   */
  noHoverBackground?: boolean;
  /**
   * Callback for clicking anywhere on row.
   *
   * If having buttons in the table, remember to call e.stopPropagation() to prevent this from firing.
   */
  onRowClick?: (item: T) => void;
  /** Callback for hovering anywhere on row */
  onRowHover?: (item: T) => void;
  /**
   * Component places at the bottom of the table
   */
  renderFooter?: ReactNode;
  /**
   * @default false
   * Show checkbox on each row, and checkbox for toggling all in header
   */
  selectable?: {
    /**
     * If this is true, then onRowClick will call onRowCheckboxChange with the opposite of the current value
     */
    anySelected?: boolean;
    enabled: boolean;
    headerCheckboxValue?: boolean;
    isRowCheckboxDisabled?: (item: T, index: number) => boolean;
    isRowChecked?: (item: T, index: number) => boolean;
    onHeaderCheckboxChange?: (checked: boolean) => void;
    onRowCheckboxChange?: (checked: boolean, item: T, index: number) => void;
    /**
     * Overrides custom handlers for more control
     */
    renderCustomHeaderCheckbox?: ReactNode;
    /**
     * Overrides custom handlers for more control
     */
    renderCustomRowCheckbox?: (item: T, index: number) => ReactNode;
  };
};

/**
 * SimpleTable provides a flexible, accessible table component for displaying tabular data.
 * It supports features like selectable rows, collapsible rows, custom cell rendering, loading skeletons,
 * and sticky headers. Designed for use cases where you need a straightforward but powerful table UI.
 *
 * @example Basic usage
 * ```tsx
 * type User = { id: number; name: string; age: number };
 * const headers: SimpleTableHeader<User>[] = [
 *   { key: 'name', name: 'Name' },
 *   { key: 'age', name: 'Age' },
 * ];
 * const users: User[] = [
 *   { id: 1, name: 'Alice', age: 30 },
 *   { id: 2, name: 'Bob', age: 25 },
 * ];
 * <SimpleTable
 *   headers={headers}
 *   items={users}
 *   keyExtractor={user => String(user.id)}
 * />
 * ```
 *
 * @example With selectable rows
 * ```tsx
 * const [selected, setSelected] = useState<number[]>([]);
 * <SimpleTable
 *   headers={headers}
 *   items={users}
 *   keyExtractor={user => String(user.id)}
 *   selectable={{
 *     enabled: true,
 *     isRowChecked: (item) => selected.includes(item.id),
 *     onRowCheckboxChange: (checked, item) => {
 *       setSelected(checked
 *         ? [...selected, item.id]
 *         : selected.filter(id => id !== item.id)
 *       );
 *     },
 *   }}
 * />
 * ```
 *
 * @example With collapsible rows
 * ```tsx
 * <SimpleTable
 *   headers={headers}
 *   items={users}
 *   keyExtractor={user => String(user.id)}
 *   collapsible={{
 *     enabled: true,
 *     expandedItemKeys: expandedKeys,
 *     toggleItem: key => setExpandedKeys(keys =>
 *       keys.includes(key) ? keys.filter(k => k !== key) : [...keys, key]
 *     ),
 *     collapseContent: users.map(user => ({
 *       key: String(user.id),
 *       content: <div>More info about {user.name}</div>,
 *     })),
 *   }}
 * />
 * ```
 *
 * @example With custom cell rendering
 * ```tsx
 * const headers: SimpleTableHeader<User>[] = [
 *   { key: 'name', name: 'Name' },
 *   {
 *     key: 'age',
 *     name: 'Age',
 *     renderCustom: (age) => <Text color={age > 25 ? 'green600' : 'red600'}>{age}</Text>,
 *   },
 * ];
 * ```
 *
 * @example With loading skeleton
 * ```tsx
 * <SimpleTable
 *   headers={headers}
 *   items={[]}
 *   keyExtractor={user => String(user.id)}
 *   loading
 * />
 * ```
 *
 * @example With row click handler
 * ```tsx
 * <SimpleTable
 *   headers={headers}
 *   items={users}
 *   keyExtractor={user => String(user.id)}
 *   onRowClick={user => alert(`Clicked: ${user.name}`)}
 * />
 * ```
 */
export const SimpleTable = <T extends object>({
  bordered = false,
  className,
  collapsible = {
    enabled: false,
    expandedItemKeys: [],
    toggleItem: () => {},
  },
  CustomLinkComponent,
  getRowLink,
  headers,
  items,
  keyExtractor,
  loading = false,
  loadingItems = 10,
  loadingSkeletonHeight = 13,
  maxHeight = '100%',
  noHoverBackground = false,
  onRowClick,
  onRowHover,
  renderFooter,
  selectable = {
    enabled: false,
  },
  style,
}: SimpleTableProps<T>) => {
  const renderRows = () => {
    if (loading) {
      return [...Array(loadingItems).keys()].map(n => (
        <tr key={n}>
          {selectable.enabled && (
            <td className="h-12 p-amino-12">
              <div>
                <Skeleton key={n} height={loadingSkeletonHeight} />
              </div>
            </td>
          )}
          {headers.map(header => (
            <td
              key={header.key}
              className={cn('h-12 p-amino-12', header.noPadding && 'p-0')}
            >
              <div
                className="flex"
                style={{
                  justifyContent: getFlexAlignment(header.align),
                }}
              >
                <Skeleton
                  key={n}
                  height={loadingSkeletonHeight}
                  style={{
                    width: '70%',
                  }}
                />
              </div>
            </td>
          ))}
          {collapsible.enabled && <td />}
        </tr>
      ));
    }

    return items.map((item, index) => {
      const key = keyExtractor(item);

      return (
        <SimpleTableRow
          key={key}
          CustomLinkComponent={CustomLinkComponent}
          bordered={bordered}
          collapsible={collapsible}
          getRowLink={getRowLink}
          headers={headers}
          index={index}
          item={item}
          noHoverBackground={noHoverBackground}
          onRowClick={onRowClick}
          onRowHover={onRowHover}
          rowKey={key}
          selectable={selectable}
        />
      );
    });
  };

  return (
    <div
      className={cn('w-full overflow-auto', className)}
      style={{
        maxHeight,
        ...style,
      }}
    >
      <table
        className={cn(
          'h-fit w-full border-separate border-spacing-0 text-amino-base',
          '[&>tbody>tr]:h-12',
          '[&>thead]:no-underline [&>thead>tr]:border-b [&>thead>tr]:border-b-amino-subtle [&>thead>tr]:h-12',
          '[&>thead>tr>th]:sticky [&>thead>tr>th]:top-0 [&>thead>tr>th]:bg-gray-0 [&>thead>tr>th]:dark:bg-gray-50 [&>thead>tr>th]:p-amino-12 [&>thead>tr>th]:whitespace-nowrap [&>thead>tr>th]:border-b [&>thead>tr>th]:border-b-amino-subtle [&>thead>tr>th]:z-[1]',
          '[&>thead>tr>th.p-0]:p-0',
          collapsible.enabled &&
            '[&_tr>td:last-child]:w-10 [&_tr>td:last-child>div]:p-0 [&>tbody_*]:transition-all [&>tbody>tr:not(:has(.h-12))]:h-auto',
          bordered &&
            '[&_th]:border-0 [&_tr:first-child_td]:border-t [&_tr:first-child_td]:border-t-amino-subtle [&_tr:first-child_td:first-child]:rounded-tl-amino-12 [&_tr:first-child_td:last-child]:rounded-tr-amino-12 [&_tr:last-child_td:first-child]:rounded-bl-amino-12 [&_tr:last-child_td:last-child]:rounded-br-amino-12 [&_td:first-child]:border-l [&_td:first-child]:border-l-amino-subtle [&_td:last-child]:border-r [&_td:last-child]:border-r-amino-subtle',
          headers.every(header => !header.name) &&
            '[&_thead]:hidden [&_thead]:max-h-0',
        )}
      >
        <colgroup>
          {!!selectable.onHeaderCheckboxChange && <col width={0} />}
          {headers.map(header => (
            <col
              key={header.key}
              style={{
                minWidth:
                  header.minWidth !== undefined
                    ? `${header.minWidth}px`
                    : undefined,
              }}
              width={
                header.width !== undefined ? `${header.width}%` : undefined
              }
            />
          ))}
          {collapsible.enabled && <col />}
        </colgroup>
        <thead>
          <tr>
            {!!selectable.onHeaderCheckboxChange && (
              <th className="p-0">
                {selectable.renderCustomHeaderCheckbox || (
                  <Checkbox
                    checked={
                      (!loading && selectable.headerCheckboxValue) || false
                    }
                    className="p-amino-12 inline-flex"
                    data-testid="amino--header-checkbox"
                    disabled={loading}
                    onChange={selectable.onHeaderCheckboxChange}
                  />
                )}
              </th>
            )}
            {headers.map(header => (
              <th
                key={header.key}
                className={cn(header.noPadding && 'p-0')}
                style={{
                  textAlign: header.align || 'start',
                }}
              >
                {typeof header.name === 'string' ? (
                  <Text color="gray800" type="small-header">
                    {header.name}
                  </Text>
                ) : (
                  header.name
                )}
              </th>
            ))}
            {collapsible.enabled && <th />}
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
        {renderFooter}
      </table>
    </div>
  );
};
