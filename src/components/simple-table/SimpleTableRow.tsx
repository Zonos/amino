import React, { Fragment, type ReactNode, useRef } from 'react';

import clsx from 'clsx';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { TableRowCollapse } from 'src/components/table/TableRowCollapse';
import { Tooltip } from 'src/components/tooltip/Tooltip';

import type {
  SimpleTableHeader,
  SimpleTableHeaderBaseProps,
  SimpleTableProps,
} from './SimpleTable';
import styles from './SimpleTableRow.module.scss';

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
  collapsible: SimpleTableProps<T>['collapsible'];
  getRowLink?: (item: T) => string;
  headers: SimpleTableHeader<T>[];
  index: number;
  item: T;
  keyExtractor: SimpleTableProps<T>['keyExtractor'];
  noHoverBackground: boolean;
  onRowClick?: (item: T) => void;
  onRowHover?: (item: T) => void;
  selectable: SimpleTableProps<T>['selectable'];
};

export const SimpleTableRow = <T extends object>({
  collapsible,
  CustomLinkComponent,
  getRowLink,
  headers,
  index,
  item,
  keyExtractor,
  noHoverBackground,
  onRowClick,
  onRowHover,
  selectable,
}: SimpleTableRowProps<T>) => {
  const key = keyExtractor(item);
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

  const renderRowContent = () => (
    <>
      {selectable?.enabled && (
        <td ref={checkboxRef}>
          {selectable?.renderCustomRowCheckbox?.(item, index) || (
            <Checkbox
              checked={selectable?.isRowChecked?.(item, index) || false}
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
    const collapsed = !expandedItemKeys.includes(key);
    const rowCollapseContent = collapseContent?.find(
      x => x.key === key,
    )?.content;

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
        rowContent={renderRowContent()}
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
      className={clsx(
        clickable && styles.clickable,
        !noHoverBackground && styles.withHover,
      )}
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
