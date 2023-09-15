import {
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { MinusCircleDuotoneIcon } from 'src/icons/MinusCircleDuotoneIcon';
import { PlusCircleDuotoneIcon } from 'src/icons/PlusCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';

const Wrapper = styled.div`
  position: relative;
`;

const BadgeWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 100px;
  border: 1px dashed ${theme.gray200};
  background-color: transparent;
  color: ${theme.gray700};

  &.active {
    border: ${theme.border};
  }
`;

const ToggleWrapper = styled.div<{ active: boolean; hasFilter: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.space8};
  padding: ${theme.space8};
  border-radius: 100px;

  border-top-right-radius: ${p => (p.hasFilter ? '0px' : '100px')};
  border-bottom-right-radius: ${p => (p.hasFilter ? '0px' : '100px')};

  border-right: 1px solid ${p => (p.active ? theme.borderColor : theme.gray200)};

  &:hover {
    background-color: ${theme.gray100};
  }
`;

const StyledDropdownTrigger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.space8};
  padding: ${theme.space8};
  border-radius: 100px;

  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  &:hover {
    background-color: ${theme.gray100};
  }
`;

const DropdownWrapper = styled.div`
  z-index: 1;
  min-width: 400px;
  position: absolute;
  border-radius: 14px;
  border: ${theme.border};
  background-color: ${theme.gray0};
  padding: ${theme.space24};
  display: flex;
  flex-direction: column;
  gap: ${theme.space16};
  outline: none;
  max-height: 600px;
  overflow: auto;
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space12};
`;

export type BaseFilterProps = {
  className?: string;
  dropdownTitle: string;
  label: string;
};

type UseFilterProps = {
  filterExists: boolean;
  onApply: () => void;
  onToggle: (active: boolean) => void;
};

export type FilterProps = BaseFilterProps & UseFilterProps;

export const useFilterWrapper = ({
  className,
  dropdownTitle,
  filterExists,
  label,
  onApply,
  onToggle,
}: FilterProps) => {
  const [active, setActive] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [filterText, setFilterText] = useState('Filter');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleApply = () => {
    setActive(true);
    onApply();
    setDropDownOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setDropDownOpen(false);
    }

    if (event.key === 'Enter') {
      handleApply();
    }
  };

  const handleClick = useCallback(({ target }: MouseEvent) => {
    if (target instanceof Element && !dropdownRef.current?.contains(target)) {
      setDropDownOpen(false);
    }
  }, []);

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
      onToggle(active);
    }
  };

  useEffect(() => {
    if (!filterExists) {
      setActive(false);
    }
  }, [filterExists]);

  const renderWrapper = (control: ReactNode) => (
    <Wrapper ref={wrapperRef}>
      <BadgeWrapper
        className={[className, active && 'active'].join(' ')}
        onClick={handleToggle}
      >
        <ToggleWrapper active={active} hasFilter={filterExists}>
          {active ? (
            <MinusCircleDuotoneIcon size={16} />
          ) : (
            <PlusCircleDuotoneIcon size={16} />
          )}
          <Text fontWeight={600}>{label}</Text>
        </ToggleWrapper>
        {filterExists && (
          <StyledDropdownTrigger onClick={handleOpenDropdown}>
            <Text color="blue600" fontWeight={600}>
              {filterText}
            </Text>
            <ChevronDownIcon size={16} />
          </StyledDropdownTrigger>
        )}
      </BadgeWrapper>
      {dropDownOpen && (
        <DropdownWrapper
          ref={dropdownRef}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <Text type="bold-subheader">{dropdownTitle}</Text>
          <ControlsWrapper>{control}</ControlsWrapper>
          <Button onClick={handleApply} variant="primary">
            Apply
          </Button>
        </DropdownWrapper>
      )}
    </Wrapper>
  );

  return {
    handleApplyFilter: handleApply,
    renderWrapper,
    setFilterText,
  };
};
