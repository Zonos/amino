import { type ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';
import {
  type UseDropdownParams,
  useDropdown,
} from 'src/utils/hooks/useDropdown';

import styles from './MenuButton.module.scss';

export type MenuButtonProps = BaseProps & {
  action: ReactNode;
  children: ReactNode;
  /**
   * Close the menu when the mouse leaves the dropdown/parent.
   * @default true
   */
  closeOnMouseLeave?: boolean;
  /**
   * Close the menu when clicking anywhere in the the dropdown.
   * @default true
   */
  closeOnSelect?: boolean;
  dropdownOptions?: UseDropdownParams;
};

export const MenuButton = ({
  action,
  children,
  className,
  closeOnMouseLeave = true,
  closeOnSelect = true,
  dropdownOptions,
}: MenuButtonProps) => {
  const { floatingStyles, refs, setVisible, visibility, visible, wrapperRef } =
    useDropdown<HTMLDivElement, HTMLDivElement>({
      offsetCrossAxis: 0,
      offsetMainAxis: 0,
      ...dropdownOptions,
    });

  const handleMouseLeave = () => {
    if (closeOnMouseLeave) {
      setVisible(false);
    }
  };

  const handleClickChildren = () => {
    if (closeOnSelect) {
      setVisible(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={clsx([styles.wrapper, className])}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={refs.setReference}
        onClick={e => {
          e.stopPropagation();
          setVisible(true);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            setVisible(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        {action}
      </div>
      <div
        ref={refs.setFloating}
        className={styles.dropdownWrapper}
        style={{
          ...floatingStyles,
          visibility,
        }}
      >
        {visible && (
          <div
            className={styles.animatedSurface}
            onClick={handleClickChildren}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleClickChildren();
              }
            }}
            role="button"
            tabIndex={-1}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
