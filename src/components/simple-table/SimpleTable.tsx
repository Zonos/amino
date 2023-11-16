import type { ReactNode } from 'react';

import styled from 'styled-components';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Skeleton } from 'src/components/skeleton/Skeleton';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { StyledProps } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';

const Table = styled.table`
  width: 100%;
`;

const Header = styled.thead`
  text-transform: uppercase;
`;

const HeaderRow = styled.tr`
  border-bottom: ${theme.border};
  height: 56px;
`;

type StyledHeaderColumn = {
  textAlign: SimpleTableHeaderBaseProps['align'];
};
const HeaderColumn = styled.th<StyledProps<StyledHeaderColumn>>`
  padding: ${theme.space16};
  white-space: nowrap;
  text-align: ${p => p.$textAlign};
`;

const Row = styled.tr<{ $clickable: boolean }>`
  height: 48px;
  cursor: ${p => (p.$clickable ? 'pointer' : 'auto')};
  & {
    border-bottom: ${theme.border};
  }

  &.with-hover:hover {
    background-color: ${theme.gray50};
  }

  &:not(:hover) {
    .row-hover-show {
      visibility: collapse;
    }
  }
`;

type StyledRowColumn = {
  noPadding: boolean;
  textAlign: SimpleTableHeaderBaseProps['align'];
};
const RowColumn = styled.td<StyledProps<StyledRowColumn>>`
  padding: ${p => (!p.$noPadding ? theme.space12 : undefined)};
  text-align: ${p => p.$textAlign};

  &:not(:hover) {
    .cell-hover-show {
      visibility: collapse;
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

    return header.renderCustom ? (
      <RowColumn
        key={header.key}
        $noPadding={header.noPadding || false}
        $textAlign={header.align || 'start'}
      >
        {header.renderCustom(value, item)}
      </RowColumn>
    ) : (
      <RowColumn
        key={header.key}
        $noPadding={header.noPadding || false}
        $textAlign={header.align || 'start'}
      >
        {String(value)}
      </RowColumn>
    );
  };

  const renderRows = () => {
    if (loading) {
      return [...Array(loadingItems + 1).keys()].map(n => (
        <Row key={n} $clickable={false}>
          {selectable.enabled && (
            <td>
              <Skeleton key={n} height={30} />
            </td>
          )}
          {headers.map(header => (
            <RowColumn
              key={header.key}
              $noPadding={!!header.noPadding}
              $textAlign="center"
            >
              <Skeleton key={n} height={30} />
            </RowColumn>
          ))}
        </Row>
      ));
    }

    return items.map((item, index) => (
      <Row
        key={keyExtractor(item)}
        $clickable={
          !!onRowClick ||
          (!!selectable.anySelected && !!selectable.onRowCheckboxChange)
        }
        className={!noHoverBackground ? 'with-hover' : ''}
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
          <td>
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
        {headers.map(header => renderHeader(header, item))}
      </Row>
    ));
  };

  return (
    <Table className={className}>
      <colgroup>
        {!!selectable.onHeaderCheckboxChange && <col width={0} />}
        {headers.map(header => (
          <col
            key={header.key}
            width={header.width !== undefined ? `${header.width}%` : undefined}
          />
        ))}
      </colgroup>
      <Header>
        <HeaderRow>
          {!!selectable.onHeaderCheckboxChange && (
            <th>
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
            <HeaderColumn key={header.key} $textAlign={header.align || 'start'}>
              <Text color="gray800" type="small-header">
                {header.name}
              </Text>
            </HeaderColumn>
          ))}
        </HeaderRow>
      </Header>
      <tbody>{renderRows()}</tbody>
      {renderFooter}
    </Table>
  );
};
