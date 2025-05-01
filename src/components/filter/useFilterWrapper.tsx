import {
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import type { BaseProps } from 'src/types/BaseProps';

import { FilterWrapper } from './FilterWrapper';

export type BaseFilterProps = BaseProps & {
  dropdownTitle: string;
  label: string;
};

export type FilterApplyCallback = (
  setFilterText: (newFilterText: string) => void,
) => void;

type UseFilterProps = {
  initialFilterText?: string;
  isActive: boolean;
  onApply: FilterApplyCallback;
  /**
   * This is called in a use effect to allow for initial states from URL, needs to be memoized.
   */
  onApplyFilterText: FilterApplyCallback;
  /**
   * When the menu is closed without applying.
   */
  onClose: () => void;
  onRemove: () => void;
  setActive?: (active: boolean) => void;
};

export type FilterProps = BaseFilterProps & UseFilterProps;

/**
 * A custom hook that provides state management and behavior for filter components.
 * It works with the FilterWrapper component to create consistent filtering experiences.
 *
 * The hook handles filter state, dropdown behavior, keyboard interactions, and filter application.
 * It returns methods to manage filter state and a renderWrapper function to render the FilterWrapper component.
 *
 * @example Basic filter with select options
 * ```tsx
 * const [isFilterActive, setIsFilterActive] = useState(false);
 * const [selectedOption, setSelectedOption] = useState<Option | null>(null);
 *
 * const {
 *   renderWrapper,
 *   setFilterText
 * } = useFilterWrapper({
 *   dropdownTitle: "Status",
 *   isActive: isFilterActive,
 *   label: "Status",
 *   setActive: setIsFilterActive,
 *   initialFilterText: "All statuses",
 *   onApply: (setFilterText) => {
 *     // Update filter text and apply the filter
 *     setFilterText(selectedOption ? selectedOption.label : "All statuses");
 *     applyFilter(selectedOption?.value);
 *   },
 *   onApplyFilterText: (setFilterText) => {
 *     // Update text only (for URL-derived state)
 *     setFilterText(selectedOption ? selectedOption.label : "All statuses");
 *   },
 *   onClose: () => {
 *     // Handle dropdown close without applying
 *   },
 *   onRemove: () => {
 *     // Clear filter when removed
 *     setSelectedOption(null);
 *     applyFilter(null);
 *   }
 * });
 *
 * // Use the renderWrapper function to create the filter UI
 * const statusFilter = renderWrapper(
 *   <FilterSelect
 *     options={statusOptions}
 *     value={selectedOption}
 *     onChange={setSelectedOption}
 *   />
 * );
 * ```
 *
 * @example Date range filter
 * ```tsx
 * const [isDateFilterActive, setIsDateFilterActive] = useState(false);
 * const [startDate, setStartDate] = useState<Date | null>(null);
 * const [endDate, setEndDate] = useState<Date | null>(null);
 *
 * const formatDateForDisplay = (date: Date) => {
 *   return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
 * };
 *
 * const {
 *   renderWrapper
 * } = useFilterWrapper({
 *   dropdownTitle: "Date Range",
 *   isActive: isDateFilterActive,
 *   label: "Date",
 *   setActive: setIsDateFilterActive,
 *   initialFilterText: "All time",
 *   onApply: (setFilterText) => {
 *     if (startDate && endDate) {
 *       const dateRangeText = `${formatDateForDisplay(startDate)} - ${formatDateForDisplay(endDate)}`;
 *       setFilterText(dateRangeText);
 *       applyDateRangeFilter(startDate, endDate);
 *     }
 *   },
 *   onApplyFilterText: (setFilterText) => {
 *     if (startDate && endDate) {
 *       setFilterText(`${formatDateForDisplay(startDate)} - ${formatDateForDisplay(endDate)}`);
 *     }
 *   },
 *   onClose: () => {
 *     // Optional cleanup when closing without applying
 *   },
 *   onRemove: () => {
 *     setStartDate(null);
 *     setEndDate(null);
 *     applyDateRangeFilter(null, null);
 *   }
 * });
 *
 * const dateFilter = renderWrapper(
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
 * // First, create your individual filters using useFilterWrapper
 * const statusFilter =  useFilterWrapper implementation ;
 * const dateFilter =  useFilterWrapper implementation ;
 * const searchFilter =  useFilterWrapper implementation ;
 *
 * // Then render them together in a filter bar
 * return (
 *   <div style={{ display: 'flex', gap: '8px' }}>
 *     {statusFilter}
 *     {dateFilter}
 *     {searchFilter}
 *
 *     <Button
 *       onClick={resetAllFilters}
 *       variant="ghost"
 *       size="sm"
 *     >
 *       Clear All
 *     </Button>
 *   </div>
 * );
 * ```
 */
export const useFilterWrapper = ({
  className,
  dropdownTitle,
  initialFilterText = 'Filter',
  isActive,
  label,
  onApply,
  onApplyFilterText,
  onClose,
  onRemove,
  setActive,
  style,
}: FilterProps) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [filterText, setFilterText] = useState(initialFilterText);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleApply = () => {
    onApply(setFilterText);
    setDropDownOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setDropDownOpen(false);
      onClose();
    }

    if (event.key === 'Enter') {
      // Inside inputs that handle enter need to apply first
      handleApply();
    }
  };

  const handleClick = useCallback(
    ({ target }: MouseEvent) => {
      if (target instanceof Element && !dropdownRef.current?.contains(target)) {
        if (dropDownOpen) {
          setDropDownOpen(false);
          onClose();
        }
      }
    },
    [dropDownOpen, onClose],
  );

  useEffect(() => {
    document.querySelector('body')?.addEventListener('mousedown', handleClick);

    // Focus the backdrop so we can listen for keypresses ('escape' to close)
    if (!dropdownRef.current?.contains(document.activeElement)) {
      dropdownRef.current?.focus();
    }

    return () => {
      document
        .querySelector('body')
        ?.removeEventListener('mousedown', handleClick);
    };
  }, [dropDownOpen, handleClick]);

  // Focus first text field on open
  useEffect(() => {
    if (dropDownOpen) {
      const firstInput = dropdownRef.current?.querySelector('input');
      firstInput?.focus();
    }
  }, [dropDownOpen]);

  const handleOpenDropdown = (e: ReactMouseEvent) => {
    e.stopPropagation();
    setDropDownOpen(true);
  };

  const handleToggle = () => {
    if (isActive) {
      setActive?.(false);
      onRemove();
    } else {
      setDropDownOpen(true);
    }
  };

  // The state can be derived from the URL, which causes the initial state to be applied. We need to reapply the filter in those situations.
  useEffect(() => {
    if (isActive) {
      onApplyFilterText(setFilterText);
    }
  }, [isActive, onApplyFilterText]);

  const renderWrapper = (control: ReactNode) => (
    <FilterWrapper
      active={isActive}
      className={className}
      dropDownOpen={dropDownOpen}
      dropdownRef={dropdownRef}
      dropdownTitle={dropdownTitle}
      filterText={filterText}
      handleApply={handleApply}
      handleKeyDown={handleKeyDown}
      handleOpenDropdown={handleOpenDropdown}
      handleToggle={handleToggle}
      hasFilter={isActive}
      label={label}
      style={style}
    >
      {control}
    </FilterWrapper>
  );

  return {
    handleApplyFilter: handleApply,
    renderWrapper,
    setFilterText,
  };
};
