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
