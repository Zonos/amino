import { type ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

/**
 * A minimal data grid, built to cover exactly what `PivotTable` and
 * `NestedDataTable` need: a CSS-grid layout with a sticky header, an optional
 * frozen first column, click-to-sort, drag-to-resize, per-cell renderers and
 * column spanning.
 *
 * It replaces `react-data-grid`, which amino carried at 100kB for these two
 * components. The prop and type names mirror react-data-grid's so the wrapping
 * components' public APIs did not have to change.
 *
 * Deliberately NOT implemented, because nothing in amino used them: row and
 * column virtualization, cell selection, keyboard navigation, editing,
 * copy/paste, row grouping and tree data. If a consumer ever needs a grid over
 * thousands of rows, virtualization is the thing to add here first.
 */

export type SortDirection = 'ASC' | 'DESC';

export type SortColumn = {
  readonly columnKey: string;
  readonly direction: SortDirection;
};

export type RenderSortStatusProps = {
  priority: number | undefined;
  sortDirection: SortDirection | undefined;
};

export type RenderCellProps<TRow> = {
  column: CalculatedColumn<TRow>;
  onRowChange: (row: TRow) => void;
  row: TRow;
  rowIdx: number;
};

export type ColSpanArgs<TRow> = {
  row: TRow;
  type: 'ROW';
};

/**
 * `TSummaryRow` is unused — summary rows were a react-data-grid feature amino
 * never rendered. The parameter stays so `ColumnProps<TRow, TSummaryRow>`, which
 * consumers already import, keeps its arity.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Column<TRow, TSummaryRow = unknown> = {
  /** Extra class name for every cell in this column. */
  cellClass?: string | ((row: TRow) => string | undefined);
  /** Number of columns this cell should span, per row. */
  colSpan?: (args: ColSpanArgs<TRow>) => number | undefined;
  /** Pin the column to the start of the grid. */
  frozen?: boolean;
  /** Unique within a column set, and the row property the column reads. */
  key: string;
  /** @default 80 */
  minWidth?: number;
  name: ReactNode;
  renderCell?: (props: RenderCellProps<TRow>) => ReactNode;
  resizable?: boolean;
  sortable?: boolean;
  /** Pixels, or any valid grid track size. Defaults to `1fr`. */
  width?: number | string;
};

/** A column with its defaults resolved. */
export type CalculatedColumn<TRow, TSummaryRow = unknown> = Column<
  TRow,
  TSummaryRow
> & {
  idx: number;
};

export type DefaultColumnOptions<TRow, TSummaryRow = unknown> = Pick<
  Column<TRow, TSummaryRow>,
  'minWidth' | 'resizable' | 'sortable' | 'width'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Renderers<TRow, TSummaryRow = unknown> = {
  renderSortStatus?: (props: RenderSortStatusProps) => ReactNode;
};

export type DataGridHandle = {
  element: HTMLDivElement | null;
};

export type DataGridProps<TRow, TSummaryRow = unknown> = BaseProps & {
  columns: readonly Column<TRow, TSummaryRow>[];
  defaultColumnOptions?: DefaultColumnOptions<TRow, TSummaryRow>;
  /** @default 40 */
  headerRowHeight?: number;
  onRowsChange?: (rows: TRow[], data: { indexes: number[] }) => void;
  onSortColumnsChange?: (sortColumns: SortColumn[]) => void;
  ref?: React.Ref<DataGridHandle>;
  renderers?: Renderers<TRow, TSummaryRow>;
  /** @default 45 */
  rowHeight?: number | ((row: TRow) => number);
  rows: readonly TRow[];
  sortColumns?: readonly SortColumn[];
};

/**
 * Semantic class names are kept as stable hooks for callers (and for
 * `NestedDataTable`'s `.expanding` rule); all styling is Tailwind.
 *
 * Colours come from amino tokens, which already carry night-theme values, so
 * the grid themes itself. The old react-data-grid stylesheet needed explicit
 * `[data-theme='night']` overrides only because it shipped its own hardcoded
 * palette.
 */
const CELL_CLASS = `amino-grid-cell relative box-border flex min-w-0 items-center
  overflow-hidden border-b border-e border-gray-200 px-amino-8 whitespace-nowrap
  text-ellipsis`;

const DEFAULT_MIN_WIDTH = 80;
const DEFAULT_ROW_HEIGHT = 45;
const DEFAULT_HEADER_ROW_HEIGHT = 40;

/** Cycle a column through ascending → descending → unsorted. */
const nextSort = (
  current: SortDirection | undefined,
): SortDirection | undefined => {
  if (!current) {
    return 'ASC';
  }
  return current === 'ASC' ? 'DESC' : undefined;
};

const toTrackSize = (width: number | string | undefined, minWidth: number) => {
  if (typeof width === 'number') {
    return `${width}px`;
  }
  if (typeof width === 'string') {
    return width;
  }
  return `minmax(${minWidth}px, 1fr)`;
};

export const DataGrid = <TRow, TSummaryRow = unknown>({
  className,
  columns: rawColumns,
  defaultColumnOptions,
  headerRowHeight = DEFAULT_HEADER_ROW_HEIGHT,
  onRowsChange,
  onSortColumnsChange,
  ref,
  renderers,
  rowHeight = DEFAULT_ROW_HEIGHT,
  rows,
  sortColumns,
  style,
}: DataGridProps<TRow, TSummaryRow>): ReactNode => {
  const elementRef = useRef<HTMLDivElement>(null);
  /** Widths set by dragging, keyed by column. Overrides the column's own. */
  const [resizedWidths, setResizedWidths] = useState<Record<string, number>>(
    {},
  );

  const columns: CalculatedColumn<TRow, TSummaryRow>[] = useMemo(
    () =>
      rawColumns.map((column, idx) => ({
        ...defaultColumnOptions,
        ...column,
        idx,
        minWidth:
          column.minWidth ??
          defaultColumnOptions?.minWidth ??
          DEFAULT_MIN_WIDTH,
      })),
    [defaultColumnOptions, rawColumns],
  );

  /** Left offset of each frozen column, so they stack without overlapping. */
  const frozenOffsets = useMemo(() => {
    const offsets: Record<string, number> = {};
    let offset = 0;
    for (const column of columns) {
      if (column.frozen) {
        offsets[column.key] = offset;
        const width = resizedWidths[column.key] ?? column.width;
        offset +=
          typeof width === 'number'
            ? width
            : (column.minWidth ?? DEFAULT_MIN_WIDTH);
      }
    }
    return offsets;
  }, [columns, resizedWidths]);

  const gridTemplateColumns = columns
    .map(column =>
      toTrackSize(
        resizedWidths[column.key] ?? column.width,
        column.minWidth ?? DEFAULT_MIN_WIDTH,
      ),
    )
    .join(' ');

  const handleSort = useCallback(
    (columnKey: string) => {
      if (!onSortColumnsChange) {
        return;
      }
      const current = sortColumns?.find(s => s.columnKey === columnKey);
      const direction = nextSort(current?.direction);
      onSortColumnsChange(direction ? [{ columnKey, direction }] : []);
    },
    [onSortColumnsChange, sortColumns],
  );

  const handleResize = useCallback(
    (
      event: React.PointerEvent<HTMLDivElement>,
      column: CalculatedColumn<TRow, TSummaryRow>,
    ) => {
      event.preventDefault();
      event.stopPropagation();
      const headerCell = event.currentTarget.parentElement;
      if (!headerCell) {
        return;
      }
      const startX = event.clientX;
      const startWidth = headerCell.getBoundingClientRect().width;
      const minWidth = column.minWidth ?? DEFAULT_MIN_WIDTH;

      const onMove = (moveEvent: PointerEvent) => {
        const width = Math.max(
          minWidth,
          startWidth + moveEvent.clientX - startX,
        );
        setResizedWidths(prev => ({ ...prev, [column.key]: width }));
      };
      const onUp = () => {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
      };
      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
    },
    [],
  );

  const handleRowChange = useCallback(
    (rowIdx: number, row: TRow) => {
      if (!onRowsChange) {
        return;
      }
      const nextRows = [...rows];
      nextRows[rowIdx] = row;
      onRowsChange(nextRows, { indexes: [rowIdx] });
    },
    [onRowsChange, rows],
  );

  // `ref` only ever needs to expose the element; nothing in amino calls grid
  // methods, so there is no imperative surface to keep in sync.
  const handleRef = useCallback(
    (node: HTMLDivElement | null) => {
      elementRef.current = node;
      const handle: DataGridHandle = { element: node };
      if (typeof ref === 'function') {
        ref(handle);
      } else if (ref) {
        (ref as { current: DataGridHandle | null }).current = handle;
      }
    },
    [ref],
  );

  /**
   * Rendered in every cell of a resizable column, so the column edge can be
   * grabbed anywhere down the table rather than only in the header.
   */
  const renderResizeHandle = (column: CalculatedColumn<TRow, TSummaryRow>) => (
    <div
      className={cn(
        `amino-grid-resize-handle absolute inset-y-0 end-0 z-1 w-[10px]
        cursor-col-resize touch-none`,
        `after:absolute after:inset-y-0 after:end-0 after:w-[2px]
        after:bg-transparent after:transition-colors hover:after:bg-blue-400`,
      )}
      onClick={event => event.stopPropagation()}
      onPointerDown={event => handleResize(event, column)}
      role="presentation"
    />
  );

  return (
    <div
      ref={handleRef}
      aria-colcount={columns.length}
      aria-rowcount={rows.length + 1}
      className={cn(
        `amino-grid bg-gray-0 text-text-color relative z-0 box-border grid
        auto-rows-min content-start overflow-auto border border-gray-200
        text-sm`,
        className,
      )}
      role="grid"
      style={{ gridTemplateColumns, ...style }}
    >
      <div className="amino-grid-header-row contents" role="row">
        {columns.map(column => {
          const sortIndex = sortColumns?.findIndex(
            s => s.columnKey === column.key,
          );
          const sort =
            sortIndex !== undefined && sortIndex >= 0
              ? sortColumns?.[sortIndex]
              : undefined;
          return (
            <div
              key={column.key}
              aria-sort={
                sort
                  ? sort.direction === 'ASC'
                    ? 'ascending'
                    : 'descending'
                  : undefined
              }
              className={cn(
                CELL_CLASS,
                'amino-grid-header-cell gap-amino-4 sticky top-0 z-[2]',
                'bg-gray-100 font-bold',
                column.frozen && 'amino-grid-cell-frozen z-[3]',
                column.sortable &&
                  `amino-grid-header-cell-sortable cursor-pointer select-none
                  focus-visible:outline-2 focus-visible:-outline-offset-2
                  focus-visible:outline-blue-400`,
              )}
              onClick={
                column.sortable ? () => handleSort(column.key) : undefined
              }
              onKeyDown={
                column.sortable
                  ? event => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleSort(column.key);
                      }
                    }
                  : undefined
              }
              role="columnheader"
              style={{
                height: headerRowHeight,
                insetInlineStart: column.frozen
                  ? frozenOffsets[column.key]
                  : undefined,
              }}
              tabIndex={column.sortable ? 0 : undefined}
            >
              <span
                className="amino-grid-header-cell-name grow overflow-hidden
                  text-ellipsis"
              >
                {column.name}
              </span>
              {column.sortable &&
                renderers?.renderSortStatus?.({
                  priority:
                    sort && sortColumns && sortColumns.length > 1
                      ? (sortIndex ?? 0) + 1
                      : undefined,
                  sortDirection: sort?.direction,
                })}
              {column.resizable && renderResizeHandle(column)}
            </div>
          );
        })}
      </div>

      {rows.map((row, rowIdx) => {
        const height =
          typeof rowHeight === 'function' ? rowHeight(row) : rowHeight;
        let skip = 0;
        return (
          <div
            key={rowIdx}
            className="amino-grid-row group contents"
            role="row"
          >
            {columns.map(column => {
              if (skip > 0) {
                skip -= 1;
                return null;
              }
              const colSpan = column.colSpan?.({ row, type: 'ROW' });
              const isSpanning = !!colSpan && colSpan > 1;
              if (isSpanning) {
                skip = colSpan - 1;
              }
              const cellClass =
                typeof column.cellClass === 'function'
                  ? column.cellClass(row)
                  : column.cellClass;
              return (
                <div
                  key={column.key}
                  className={cn(
                    CELL_CLASS,
                    'group-hover:bg-gray-50',
                    column.frozen &&
                      'amino-grid-cell-frozen bg-gray-0 sticky z-1',
                    isSpanning &&
                      `amino-grid-cell-span items-start overflow-auto
                      whitespace-normal`,
                    cellClass,
                  )}
                  role="gridcell"
                  style={{
                    gridColumn: isSpanning ? `span ${colSpan}` : undefined,
                    insetInlineStart: column.frozen
                      ? frozenOffsets[column.key]
                      : undefined,
                    minHeight: height,
                  }}
                >
                  {column.renderCell
                    ? column.renderCell({
                        column,
                        onRowChange: nextRow =>
                          handleRowChange(rowIdx, nextRow),
                        row,
                        rowIdx,
                      })
                    : String(
                        (row as Record<string, unknown>)[column.key] ?? '',
                      )}
                  {column.resizable &&
                    !isSpanning &&
                    renderResizeHandle(column)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
