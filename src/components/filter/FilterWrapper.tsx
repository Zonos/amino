import type { KeyboardEvent, MouseEvent, ReactNode, RefObject } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { MinusCircleDuotoneIcon } from 'src/icons/MinusCircleDuotoneIcon';
import { PlusCircleDuotoneIcon } from 'src/icons/PlusCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import globalStyles from 'src/styles/global.module.scss';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './FilterWrapper.module.scss';

type FilterWrapperProps = BaseProps & {
  active: boolean;
  children: ReactNode;
  dropDownOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement>;
  dropdownTitle: string;
  filterText: string;
  handleApply: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleOpenDropdown: (e: MouseEvent) => void;
  handleToggle: () => void;
  hasFilter: boolean;
  label: string;
};

/**
 * FilterWrapper provides a standardized UI for creating filters in data views.
 * It displays a toggle button to activate the filter, a dropdown to select filter options,
 * and includes the apply button to confirm filter selections.
 *
 * This component is typically used with other filtering components like FilterDate,
 * FilterSelect, etc., and is designed to work with the useFilterWrapper hook for state
 * management.
 *
 * @example Basic usage with useFilterWrapper hook
 * ```tsx
 * const {
 *   renderWrapper,
 *   setFilterText
 * } = useFilterWrapper({
 *   dropdownTitle: "Status Filter",
 *   isActive: isStatusFilterActive,
 *   label: "Status",
 *   setActive: setIsStatusFilterActive,
 *   initialFilterText: "All statuses",
 *   onApply: (setFilterText) => {
 *     setFilterText(selectedStatus ? selectedStatus.label : "All statuses");
 *     onFilterApplied(selectedStatus?.value);
 *   },
 *   onApplyFilterText: (setFilterText) => {
 *     setFilterText(selectedStatus ? selectedStatus.label : "All statuses");
 *   },
 *   onClose: () => {},
 *   onRemove: () => {
 *     setSelectedStatus(undefined);
 *     onFilterApplied(undefined);
 *   }
 * });
 *
 * return renderWrapper(
 *   <FilterSelect
 *     options={[
 *       { label: "Active", value: "active" },
 *       { label: "Pending", value: "pending" },
 *       { label: "Inactive", value: "inactive" }
 *     ]}
 *     onChange={setSelectedStatus}
 *     value={selectedStatus}
 *   />
 * );
 * ```
 *
 * @example With date filter
 * ```tsx
 * const {
 *   renderWrapper,
 *   setFilterText
 * } = useFilterWrapper({
 *   dropdownTitle: "Date Range",
 *   isActive: isDateFilterActive,
 *   label: "Date",
 *   setActive: setIsDateFilterActive,
 *   initialFilterText: "All dates",
 *   onApply: (setFilterText) => {
 *     if (startDate && endDate) {
 *       const formattedText = `${formatDate(startDate)} - ${formatDate(endDate)}`;
 *       setFilterText(formattedText);
 *       onFilterApplied({ startDate, endDate });
 *     }
 *   },
 *   onApplyFilterText: (setFilterText) => {
 *     if (startDate && endDate) {
 *       setFilterText(`${formatDate(startDate)} - ${formatDate(endDate)}`);
 *     }
 *   },
 *   onClose: () => {},
 *   onRemove: () => {
 *     setStartDate(undefined);
 *     setEndDate(undefined);
 *     onFilterApplied({ startDate: null, endDate: null });
 *   }
 * });
 *
 * return renderWrapper(
 *   <FilterDate
 *     startDate={startDate}
 *     endDate={endDate}
 *     onStartDateChange={setStartDate}
 *     onEndDateChange={setEndDate}
 *   />
 * );
 * ```
 *
 * @example Multiple filters in a filter bar
 * ```tsx
 * <div style={{ display: 'flex', gap: '8px' }}>
 *   {statusFilterWrapper}
 *   {dateFilterWrapper}
 *   {textFilterWrapper}
 * </div>
 * ```
 */
export const FilterWrapper = ({
  active,
  children,
  className,
  dropDownOpen,
  dropdownRef,
  dropdownTitle,
  filterText,
  handleApply,
  handleKeyDown,
  handleOpenDropdown,
  handleToggle,
  hasFilter,
  label,
  style,
}: FilterWrapperProps) => (
  <div
    className={clsx(className, styles.filterWrapper)}
    style={{
      ...style,
      '--amino-filter-wrapper-border-bottom-right-radius': hasFilter
        ? '0px'
        : '100px',
      '--amino-filter-wrapper-border-right-color': active
        ? theme.borderColor
        : theme.gray200,
      '--amino-filter-wrapper-border-top-right-radius': hasFilter
        ? '0px'
        : '100px',
    }}
  >
    <div className={clsx(active && 'active', styles.badgeWrapper)}>
      <button
        className={globalStyles.focusable}
        onClick={handleToggle}
        type="button"
      >
        <div className={clsx(active && 'active', styles.toggleWrapper)}>
          {active ? (
            <MinusCircleDuotoneIcon
              color="gray0"
              secondaryColor="gray600"
              size={24}
            />
          ) : (
            <PlusCircleDuotoneIcon
              color="gray0"
              secondaryColor="gray600"
              size={24}
            />
          )}
          <Text className={styles.filterTitle} fontWeight={600}>
            {label}
          </Text>
        </div>
      </button>
      {hasFilter && (
        <button
          className={clsx(styles.styledDropdownTrigger, globalStyles.focusable)}
          onClick={handleOpenDropdown}
          type="button"
        >
          <Text className={styles.filterText}>{filterText}</Text>
          <ChevronDownIcon size={24} />
        </button>
      )}
    </div>
    <div
      ref={dropdownRef}
      className={styles.dropdownWrapper}
      onKeyDown={handleKeyDown}
      role="menu"
      style={{
        display: dropDownOpen ? 'flex' : 'none',
      }}
      tabIndex={-1}
    >
      <Text type="bold-subheader">{dropdownTitle}</Text>
      <div className={styles.controlsWrapper}>{children}</div>
      <Button onClick={handleApply} size="md" variant="primary">
        Apply
      </Button>
    </div>
  </div>
);
