import { type ReactNode, Fragment } from 'react';

import clsx from 'clsx';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Skeleton } from 'src/components/skeleton/Skeleton';
import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import type { ReactComponent } from 'src/types/ReactComponent';

import styles from './SimpleTable.module.scss';

type SimpleTableHeaderBaseProps = {
  /**
   * Text alignment for a column
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end';
  /**
   * @default false
   * Disable padding on cells
   */
  noPadding?: boolean;
  /**
   * Minimum width of column in percent
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
  className,
  CustomLinkComponent,
  getRowLink,
  headers,
  items,
  keyExtractor,
  loading = false,
  loadingItems = 10,
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
      if (getRowLink && !selectable.anySelected) {
        const LinkComponent = CustomLinkComponent || 'a';

        return (
          <td className={styles.cellLink}>
            <LinkComponent
              className={clsx(header.noPadding && styles.noPadding)}
              href={getRowLink(item)}
              style={{
                textAlign: header.align || 'start',
              }}
            >
              {content}
            </LinkComponent>
          </td>
        );
      }

      return (
        <td
          className={clsx(header.noPadding && styles.noPadding)}
          style={{
            textAlign: header.align || 'start',
          }}
        >
          {content}
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
              <Skeleton key={n} height={14} />
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
              <Skeleton key={n} height={14} />
            </td>
          ))}
        </tr>
      ));
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
          onClick={() => {
            if (selectable.anySelected) {
              if (!selectable.isRowCheckboxDisabled?.(item, index)) {
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
            <td className={styles.noPadding}>
              {selectable.renderCustomRowCheckbox?.(item, index) || (
                <Checkbox
                  checked={selectable.isRowChecked?.(item, index) || false}
                  className={styles.styledCheckbox}
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
    <table className={clsx(className, styles.tableStyled)} style={style}>
      <colgroup>
        {!!selectable.onHeaderCheckboxChange && <col width={0} />}
        {headers.map(header => (
          <col
            key={header.key}
            width={header.width !== undefined ? `${header.width}%` : undefined}
          />
        ))}
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
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
      {renderFooter}
    </table>
  );
};
