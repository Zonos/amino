import React, { type ReactNode, Fragment } from 'react';

import clsx from 'clsx';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Skeleton } from 'src/components/skeleton/Skeleton';
import { TableRowCollapse } from 'src/components/table/TableRowCollapse';
import { Text } from 'src/components/text/Text';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import type { BaseProps } from 'src/types/BaseProps';
import type { ReactComponent } from 'src/types/ReactComponent';

import styles from './SimpleTable.module.scss';

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

const getTooltipPlacement = (
  alignment: SimpleTableHeaderBaseProps['align'],
) => {
  switch (alignment) {
    case 'center':
      return 'bottom';
    case 'end':
      return 'bottom-end';
    case 'start':
    default:
      return 'bottom-start';
  }
};

const tooltipDelay = 800;

type SimpleTableHeaderBaseProps = {
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
  headers: SimpleTableHeader<T>[];
  items: T[];
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
   * Maximum height of the table.
   * @default '100%
   */
  maxHeight?: string;
  /**
   * @default false,
   * Disable hover background color effect on rows
   */
  noHoverBackground?: boolean;
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
    /**
     * Overrides custom handlers for more control
     */
    renderCustomHeaderCheckbox?: ReactNode;
    isRowCheckboxDisabled?: (item: T, index: number) => boolean;
    isRowChecked?: (item: T, index: number) => boolean;
    onHeaderCheckboxChange?: (checked: boolean) => void;
    onRowCheckboxChange?: (checked: boolean, item: T, index: number) => void;
    /**
     * Overrides custom handlers for more control
     */
    renderCustomRowCheckbox?: (item: T, index: number) => ReactNode;
  };
  /**
   * Will make the whole row (each td) an anchor tag so native link functionality exists. If clicking just navigates, use this over onRowClick.
   */
  getRowLink?: (item: T) => string;
  /** Adding unique list keys */
  keyExtractor: (item: T) => string;
  /**
   * Callback for clicking anywhere on row.
   *
   * If having buttons in the table, remember to call e.stopPropagation() to prevent this from firing.
   */
  onRowClick?: (item: T) => void;
  /** Callback for hovering anywhere on row */
  onRowHover?: (item: T) => void;
};

/**
 * A simple table that tries to cover all the use cases of a ... simple table.
 *
 * special CSS class names:
 * - 'row-hover-show': Shows only when the row is hovered
 * - 'cell-hover-show': Shows only when the cell is hovered
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
  const renderHeader = (header: SimpleTableHeader<T>, item: T) => {
    const value = item[header.key];

    const renderContent = (content: ReactNode) => {
      const hasRowHoverShowChild = React.Children.toArray(content).some(
        child => {
          if (React.isValidElement(child)) {
            return /row-hover-show|cell-hover-show/.test(child.props.className);
          }
          return false;
        },
      );

      // If the cell has a child that should only show on hover, don't allow truncating
      const tdClassNames = clsx(
        header.textWrapMethod === 'truncate' &&
          !hasRowHoverShowChild &&
          styles.shouldTruncate,
      );

      const containerStyle = {
        '--amino-cell-min-width': `${header.minWidth || 0}px`,
      };

      const cellClassNames = clsx(
        header.noPadding && styles.noPadding,
        header.textWrapMethod === 'normal' && styles.allowTextWrap,
      );

      const cellStyle = {
        textAlign: header.align || 'start',
      };

      const tooltipPlacement = getTooltipPlacement(header.align);

      if (getRowLink && !selectable.anySelected && !header.disabledLink) {
        const LinkComponent = CustomLinkComponent || 'a';

        return (
          <td className={tdClassNames} style={containerStyle}>
            <Tooltip
              disabled={header.textWrapMethod !== 'truncate'}
              enterDelay={tooltipDelay}
              enterNextDelay={tooltipDelay}
              placement={tooltipPlacement}
              subtitle={content}
            >
              <LinkComponent
                className={cellClassNames}
                href={getRowLink(item)}
                style={cellStyle}
              >
                {content}
              </LinkComponent>
            </Tooltip>
          </td>
        );
      }

      return (
        <td className={tdClassNames} style={containerStyle}>
          <Tooltip
            disabled={header.textWrapMethod !== 'truncate'}
            enterDelay={tooltipDelay}
            enterNextDelay={tooltipDelay}
            placement={tooltipPlacement}
            subtitle={content}
          >
            {/* Child div required for proper truncating */}
            <span className={cellClassNames} style={cellStyle}>
              {content}
            </span>
          </Tooltip>
        </td>
      );
    };

    return header.renderCustom ? (
      <>{renderContent(header.renderCustom(value, item))}</>
    ) : (
      <>{renderContent(String(value))}</>
    );
  };

  const renderRows = () => {
    if (loading) {
      return [...Array(loadingItems).keys()].map(n => (
        <tr key={n}>
          {selectable.enabled && (
            <td>
              <div>
                <Skeleton key={n} height={loadingSkeletonHeight} />
              </div>
            </td>
          )}
          {headers.map(header => (
            <td
              key={header.key}
              className={clsx(
                styles.loading,
                header.noPadding && styles.noPadding,
              )}
            >
              <div
                className={styles.skeletonCellWrapper}
                style={{
                  justifyContent: getFlexAlignment(header.align),
                }}
              >
                <Skeleton
                  key={n}
                  height={loadingSkeletonHeight}
                  style={{
                    width: '50%',
                  }}
                />
              </div>
            </td>
          ))}
        </tr>
      ));
    }

    if (collapsible.enabled && collapsible.collapseContent?.length) {
      const { collapseContent, expandedItemKeys, toggleItem } = collapsible;
      return items.map((item, index) => {
        const key = keyExtractor(item);
        const collapsed = !expandedItemKeys.includes(key);
        const rowCollapseContent = collapseContent?.find(x => x.key === key)
          ?.content;
        return (
          <TableRowCollapse
            key={key}
            className={clsx(
              !noHoverBackground && styles.withHover,
              collapsed && styles.collapsed,
              rowCollapseContent && styles.hasContent,
            )}
            collapsed={collapsed}
            onToggleCollapse={() => {
              toggleItem(key);
              onRowClick?.(item);
            }}
            rowContent={
              <>
                {selectable.enabled && (
                  <td>
                    {selectable.renderCustomRowCheckbox?.(item, index) || (
                      <Checkbox
                        checked={
                          selectable.isRowChecked?.(item, index) || false
                        }
                        disabled={
                          selectable.isRowCheckboxDisabled?.(item, index) ||
                          false
                        }
                        onChange={checked =>
                          selectable.onRowCheckboxChange?.(checked, item, index)
                        }
                      />
                    )}
                  </td>
                )}
                {headers.map(header => (
                  <Fragment key={header.key}>
                    {renderHeader(header, item)}
                  </Fragment>
                ))}
              </>
            }
          >
            {rowCollapseContent}
          </TableRowCollapse>
        );
      });
    }

    return items.map((item, index) => {
      const clickable =
        !!onRowClick ||
        (!!selectable.anySelected && !!selectable.onRowCheckboxChange);

      return (
        <tr
          key={keyExtractor(item)}
          className={clsx(
            clickable && styles.clickable,
            !noHoverBackground && styles.withHover,
          )}
          onClick={e => {
            if (selectable.anySelected) {
              if (!selectable.isRowCheckboxDisabled?.(item, index)) {
                e.preventDefault();
                selectable.onRowCheckboxChange?.(
                  !selectable.isRowChecked?.(item, index),
                  item,
                  index,
                );
              }
            } else {
              onRowClick?.(item);
            }
          }}
          onMouseEnter={() => onRowHover?.(item)}
        >
          {selectable.enabled && (
            <td>
              {selectable.renderCustomRowCheckbox?.(item, index) || (
                <Checkbox
                  checked={selectable.isRowChecked?.(item, index) || false}
                  disabled={
                    selectable.isRowCheckboxDisabled?.(item, index) || false
                  }
                  onChange={checked =>
                    selectable.onRowCheckboxChange?.(checked, item, index)
                  }
                />
              )}
            </td>
          )}
          {headers.map(header => (
            <Fragment key={header.key}>{renderHeader(header, item)}</Fragment>
          ))}
        </tr>
      );
    });
  };

  return (
    <div
      className={clsx(styles.tableContainer, className)}
      style={{
        maxHeight,
        ...style,
      }}
    >
      <table
        className={clsx(
          collapsible.enabled && styles.collapsible,
          styles.tableStyled,
          bordered && styles.bordered,
          headers.every(header => !header.name) && styles.noHeaders,
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
              <th className={styles.noPadding}>
                {selectable.renderCustomHeaderCheckbox || (
                  <Checkbox
                    checked={
                      (!loading && selectable.headerCheckboxValue) || false
                    }
                    className={styles.styledCheckbox}
                    disabled={loading}
                    onChange={selectable.onHeaderCheckboxChange}
                  />
                )}
              </th>
            )}
            {headers.map(header => (
              <th
                key={header.key}
                className={clsx(header.noPadding && styles.noPadding)}
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
