import React, { Fragment, type ReactNode, useRef } from 'react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { TableRowCollapse } from 'src/components/table/TableRowCollapse';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { cn } from 'src/utils/cn';

import type {
  SimpleTableHeader,
  SimpleTableHeaderBaseProps,
  SimpleTableProps,
} from './SimpleTable';

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

type SimpleTableRowProps<T extends object> = {
  CustomLinkComponent?: SimpleTableProps<T>['CustomLinkComponent'];
  bordered: SimpleTableProps<T>['bordered'];
  collapsible: SimpleTableProps<T>['collapsible'];
  getRowLink?: (item: T) => string;
  headers: SimpleTableHeader<T>[];
  index: number;
  item: T;
  noHoverBackground: boolean;
  onRowClick?: (item: T) => void;
  onRowHover?: (item: T) => void;
  rowKey: string;
  selectable: SimpleTableProps<T>['selectable'];
};

/**
 * SimpleTableRow is an internal component used by SimpleTable to render each table row.
 * It supports selectable rows, collapsible content, custom cell rendering, and row click/hover handlers.
 *
 * @remarks
 * This component is not intended for direct use. Use `SimpleTable` for all table needs.
 *
 * @example Used internally by SimpleTable
 * ```tsx
 * <SimpleTable
 *   headers={headers}
 *   items={items}
 *   keyExtractor={item => String(item.id)}
 * />
 * ```
 */
export const SimpleTableRow = <T extends object>({
  bordered,
  collapsible,
  CustomLinkComponent,
  getRowLink,
  headers,
  index,
  item,
  noHoverBackground,
  onRowClick,
  onRowHover,
  rowKey,
  selectable,
}: SimpleTableRowProps<T>) => {
  const checkboxRef = useRef<HTMLTableCellElement>(null);

  const renderHeader = (header: SimpleTableHeader<T>) => {
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
      const tdClassNames = cn(
        header.textWrapMethod === 'truncate' &&
          !hasRowHoverShowChild &&
          'max-w-[var(--amino-cell-min-width)] min-w-[var(--amino-cell-min-width)] [&>:first-child]:overflow-hidden [&>:first-child]:text-ellipsis',
      );

      const containerStyle = {
        '--amino-cell-min-width': `${header.minWidth || 0}px`,
      };

      const cellClassNames = cn(
        header.noPadding && 'p-0',
        header.textWrapMethod === 'normal' && 'whitespace-normal',
      );

      const cellStyle = {
        textAlign: header.align || 'start',
      };

      const tooltipPlacement = getTooltipPlacement(header.align);

      if (getRowLink && !selectable?.anySelected && !header.disabledLink) {
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
                className={cn(
                  'block items-center h-full w-full p-amino-12 whitespace-nowrap overflow-hidden text-ellipsis',
                  cellClassNames,
                )}
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
            <span
              className={cn(
                'block items-center h-full w-full p-amino-12 whitespace-nowrap overflow-hidden text-ellipsis',
                cellClassNames,
              )}
              style={cellStyle}
            >
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

  const renderRowContent = () => (
    <>
      {selectable?.enabled && (
        <td ref={checkboxRef}>
          {selectable?.renderCustomRowCheckbox?.(item, index) || (
            <Checkbox
              checked={selectable?.isRowChecked?.(item, index) || false}
              data-testid={`amino--row-checkbox-${rowKey}`}
              disabled={
                selectable?.isRowCheckboxDisabled?.(item, index) || false
              }
              onChange={checked =>
                selectable?.onRowCheckboxChange?.(checked, item, index)
              }
            />
          )}
        </td>
      )}
      {headers.map(header => (
        <Fragment key={header.key}>{renderHeader(header)}</Fragment>
      ))}
    </>
  );

  if (collapsible?.enabled && collapsible.collapseContent?.length) {
    const { collapseContent, expandedItemKeys, toggleItem } = collapsible;
    const collapsed = !expandedItemKeys.includes(rowKey);
    const rowCollapseContent = collapseContent?.find(
      x => x.key === rowKey,
    )?.content;

    return (
      <TableRowCollapse
        key={rowKey}
        className={cn(
          'h-12 [&:not(:hover)_.row-hover-show]:invisible [&>td]:border-b [&>td]:border-b-amino-subtle [&>td]:p-0 [&>td>:first-child]:block [&>td>:first-child]:items-center [&>td>:first-child]:h-full [&>td>:first-child]:w-full [&>td>:first-child]:p-amino-12 [&>td>:first-child]:whitespace-nowrap [&>td>:first-child.tooltip-wrapper]:p-0 [&>td>:first-child.tooltip-wrapper>a]:items-center [&>td>:first-child.tooltip-wrapper>a]:p-amino-12 [&>td>:first-child.tooltip-wrapper>a]:w-full [&>td>:first-child.tooltip-wrapper>a]:h-full [&>td>:first-child.tooltip-wrapper>a]:block [&>td>:first-child.tooltip-wrapper>a]:overflow-hidden [&>td>:first-child.tooltip-wrapper>a]:text-ellipsis [&>td>:first-child.tooltip-wrapper>span]:items-center [&>td>:first-child.tooltip-wrapper>span]:p-amino-12 [&>td>:first-child.tooltip-wrapper>span]:w-full [&>td>:first-child.tooltip-wrapper>span]:h-full [&>td>:first-child.tooltip-wrapper>span]:block [&>td>:first-child.tooltip-wrapper>span]:overflow-hidden [&>td>:first-child.tooltip-wrapper>span]:text-ellipsis [&>td>:first-child:not(:hover)_.cell-hover-show]:invisible',
          !noHoverBackground && 'hover:bg-amino-hover',
          collapsed && '[&>td]:border-b [&>td]:border-b-amino-subtle',
          !collapsed && '[&_td]:border-b [&_td]:border-b-amino-subtle',
          rowCollapseContent &&
            collapsed &&
            '[&+tr>td]:border-0 [&+tr>td>:first-child]:p-0',
          bordered &&
            collapsed &&
            'nth-[nth-last-child(2)]:rounded-bl-amino-12 [&:nth-last-child(2)_td:first-child]:rounded-bl-amino-12 [&:nth-last-child(2)_td:last-child]:rounded-br-amino-12',
        )}
        collapsed={collapsed}
        onToggleCollapse={() => {
          toggleItem(rowKey);
          onRowClick?.(item);
        }}
        rowContent={renderRowContent()}
        rowKey={rowKey}
      >
        {rowCollapseContent}
      </TableRowCollapse>
    );
  }

  const clickable =
    !!onRowClick ||
    (!!selectable?.anySelected && !!selectable?.onRowCheckboxChange);

  return (
    <tr
      key={rowKey}
      className={cn(
        'h-12 [&:not(:hover)_.row-hover-show]:invisible [&>td]:border-b [&>td]:border-b-amino-subtle [&>td]:p-0 [&>td>:first-child]:block [&>td>:first-child]:items-center [&>td>:first-child]:h-full [&>td>:first-child]:w-full [&>td>:first-child]:p-amino-12 [&>td>:first-child]:whitespace-nowrap [&>td>:first-child.tooltip-wrapper]:p-0 [&>td>:first-child.tooltip-wrapper>a]:items-center [&>td>:first-child.tooltip-wrapper>a]:p-amino-12 [&>td>:first-child.tooltip-wrapper>a]:w-full [&>td>:first-child.tooltip-wrapper>a]:h-full [&>td>:first-child.tooltip-wrapper>a]:block [&>td>:first-child.tooltip-wrapper>a]:overflow-hidden [&>td>:first-child.tooltip-wrapper>a]:text-ellipsis [&>td>:first-child.tooltip-wrapper>span]:items-center [&>td>:first-child.tooltip-wrapper>span]:p-amino-12 [&>td>:first-child.tooltip-wrapper>span]:w-full [&>td>:first-child.tooltip-wrapper>span]:h-full [&>td>:first-child.tooltip-wrapper>span]:block [&>td>:first-child.tooltip-wrapper>span]:overflow-hidden [&>td>:first-child.tooltip-wrapper>span]:text-ellipsis [&>td>:first-child:not(:hover)_.cell-hover-show]:invisible',
        clickable && 'cursor-pointer',
        !noHoverBackground && 'hover:bg-amino-hover',
      )}
      data-testid={`amino--row-${rowKey}`}
      onClick={e => {
        if (
          selectable?.anySelected ||
          checkboxRef.current?.contains(e.target as Node)
        ) {
          if (!selectable?.isRowCheckboxDisabled?.(item, index)) {
            e.preventDefault();
            selectable?.onRowCheckboxChange?.(
              !selectable?.isRowChecked?.(item, index),
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
      {renderRowContent()}
    </tr>
  );
};
