import styled from 'styled-components';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Skeleton } from 'src/components/skeleton/Skeleton';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { StyledProps } from 'src/types';

const Table = styled.table`
  width: 100%;
`;

const Header = styled.thead`
  text-transform: uppercase;
`;

const HeaderRow = styled.tr`
  border-bottom: ${theme.border};
  height: 48px;
`;

type StyledHeaderColumn = {
  textAlign: SimpleTableHeaderBaseProps['align'];
};
const HeaderColumn = styled.th<StyledProps<StyledHeaderColumn>>`
  padding: ${theme.space16};
  white-space: nowrap;
  text-align: ${p => p.$textAlign};
`;

const Row = styled.tr<{ clickable: boolean }>`
  height: 48px;
  cursor: ${p => (p.clickable ? 'pointer' : 'auto')};
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
  padding: ${p => (!p.$noPadding ? theme.space16 : undefined)};
  text-align: ${p => p.$textAlign};

  &:not(:hover) {
    .cell-hover-show {
      visibility: collapse;
    }
  }
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

export type SimpleTableProps<T extends object> = {
  className?: string;
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
   * @default false
   * Show checkbox on each row, and checkbox for toggling all in header
   */
  selectable?: {
    enabled: boolean;
    headerCheckboxValue?: boolean;
    selectedRowIndexes?: number[];
    onHeaderCheckboxChange?: (checked: boolean) => void;
    onRowCheckboxChange?: (checked: boolean, index: number) => void;
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
        <Row key={n} clickable={false}>
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
        className={!noHoverBackground ? 'with-hover' : ''}
        clickable={!!onRowClick}
        onClick={() => onRowClick?.(item)}
        onMouseEnter={() => onRowHover?.(item)}
      >
        {selectable.enabled && (
          <RowColumn $noPadding={false} $textAlign="center">
            <Checkbox
              checked={selectable.selectedRowIndexes?.includes(index) || false}
              onChange={checked =>
                selectable.onRowCheckboxChange?.(checked, index)
              }
            />
          </RowColumn>
        )}
        {headers.map(header => renderHeader(header, item))}
      </Row>
    ));
  };

  return (
    <Table className={className}>
      <colgroup>
        {!!selectable.onHeaderCheckboxChange && <col />}
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
            <HeaderColumn $textAlign="center">
              <Checkbox
                checked={(!loading && selectable.headerCheckboxValue) || false}
                disabled={loading}
                onChange={selectable.onHeaderCheckboxChange}
              />
            </HeaderColumn>
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
    </Table>
  );
};
