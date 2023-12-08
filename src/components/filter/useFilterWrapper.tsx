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
  filterExists: boolean;
  onApply: FilterApplyCallback;
  /**
   * When the menu is closed without applying.
   */
  onClose: () => void;
  onRemove: () => void;
};

export type FilterProps = BaseFilterProps & UseFilterProps;

export const useFilterWrapper = ({
  className,
  dropdownTitle,
  filterExists,
  label,
  onApply,
  onClose,
  onRemove,
  style,
}: FilterProps) => {
  const [active, setActive] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [filterText, setFilterText] = useState('Filter');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleApply = () => {
    setActive(true);
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
        setDropDownOpen(false);
        onClose();
      }
    },
    [onClose],
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
    if (!filterExists) {
      setDropDownOpen(true);
    } else {
      setActive(!active);
      onRemove();
    }
  };

  useEffect(() => {
    if (!filterExists) {
      setActive(false);
    }
  }, [filterExists]);

  const renderWrapper = (control: ReactNode) => (
    <FilterWrapper
      ref={wrapperRef}
      active={active}
      className={className}
      dropDownOpen={dropDownOpen}
      dropdownRef={dropdownRef}
      dropdownTitle={dropdownTitle}
      filterText={filterText}
      handleApply={handleApply}
      handleKeyDown={handleKeyDown}
      handleOpenDropdown={handleOpenDropdown}
      handleToggle={handleToggle}
      hasFilter={active && filterExists}
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
