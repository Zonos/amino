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
