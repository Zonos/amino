import { type ReactNode, Fragment } from 'react';

import clsx from 'clsx';
import styled from 'styled-components';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Skeleton } from 'src/components/skeleton/Skeleton';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

const TableStyled = styled.table`
  width: 100%;

  > thead {
    text-transform: uppercase;

    > tr {
      border-bottom: ${theme.border};
      height: 56px;

      > th {
        padding: ${theme.space16};
        white-space: nowrap;

        &.noPadding {
          padding: 0;
        }
      }
    }
  }

  > tbody {
    > tr {
      height: 48px;

      & {
        border-bottom: ${theme.border};
      }

      &.withHover:hover {
        background-color: ${theme.gray50};
      }

      &.clickable {
        cursor: pointer;
      }

      &:not(:hover) {
        .row-hover-show {
          visibility: collapse;
        }
      }

      > td {
        padding: ${theme.space12};

        &.noPadding {
          padding: 0;
        }

        &.loading {
          text-align: center;
        }

        &:not(:hover) {
          .cell-hover-show {
            visibility: collapse;
          }
        }

        &.cellLink {
          padding: 0;

          > a {
            display: block;
            width: 100%;
            height: 100%;
            padding: ${theme.space12};

            &.noPadding {
              padding: 0;
            }
          }
        }
      }
    }
  }
`;

const StyledCheckbox = styled(Checkbox)`
  padding: ${theme.space12};
  display: inline-flex;
`;

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
    name: string | null;

    renderCustom?: (value: T[Key], item: T) => React.ReactNode;
  } & SimpleTableHeaderBaseProps;
}[keyof T extends React.Key ? keyof T : never];

export type SimpleTableProps<T extends object> = BaseProps & {
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
}: SimpleTableProps<T>) => {
  const renderHeader = (header: SimpleTableHeader<T>, item: T) => {
    const value = item[header.key];

    const renderContent = (content: ReactNode) => {
      if (getRowLink && !selectable.anySelected) {
        return (
          <td className="cellLink">
            <a
              className={clsx({
                noPadding: header.noPadding,
              })}
              href={getRowLink(item)}
              style={{
                textAlign: header.align || 'start',
              }}
            >
              {content}
            </a>
          </td>
        );
      }

      return (
        <td
          className={clsx({
            noPadding: header.noPadding,
          })}
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
              <Skeleton key={n} height={30} />
            </td>
          )}
          {headers.map(header => (
            <td
              key={header.key}
              className={clsx({
                loading: true,
                noPadding: header.noPadding,
              })}
            >
              <Skeleton key={n} height={30} />
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
          className={clsx({
            clickable,
            withHover: !noHoverBackground,
          })}
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
            <td className="noPadding">
              {selectable.renderCustomRowCheckbox?.(item, index) || (
                <StyledCheckbox
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
    <TableStyled className={className}>
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
            <th className="noPadding">
              {selectable.renderCustomHeaderCheckbox || (
                <StyledCheckbox
                  checked={
                    (!loading && selectable.headerCheckboxValue) || false
                  }
                  disabled={loading}
                  onChange={selectable.onHeaderCheckboxChange}
                />
              )}
            </th>
          )}
          {headers.map(header => (
            <th
              key={header.key}
              style={{
                textAlign: header.align || 'start',
              }}
            >
              <Text color="gray800" type="small-header">
                {header.name}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
      {renderFooter}
    </TableStyled>
  );
};
