import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';
import {
  useDropdown,
  type UseDropdownParams,
} from 'src/utils/hooks/useDropdown';

import styles from './MenuButton.module.scss';

export type MenuButtonProps = BaseProps & {
  action: ReactNode;
  children: ReactNode;
  dropdownOptions?: UseDropdownParams;
  /**
   * Close the menu when the mouse leaves the dropdown/parent.
   * @default false
   */
  noCloseOnMouseLeave?: boolean;
  /**
   * Close the menu when clicking anywhere in the the dropdown.
   * @default false
   */
  noCloseOnSelect?: boolean;
};

export const MenuButton = ({
  action,
  children,
  className,
  dropdownOptions,
  noCloseOnMouseLeave = false,
  noCloseOnSelect = false,
  style,
}: MenuButtonProps) => {
  const { floatingStyles, refs, setVisible, visibility, visible, wrapperRef } =
    useDropdown<HTMLDivElement, HTMLDivElement>({
      offsetCrossAxis: 0,
      offsetMainAxis: 0,
      ...dropdownOptions,
    });

  const handleMouseLeave = () => {
    if (!noCloseOnMouseLeave) {
      setVisible(false);
    }
  };

  const handleClickChildren = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation();
    if (!noCloseOnSelect) {
      setVisible(false);
    }
  };

  return (
    <div
      className={clsx(styles.wrapper, className)}
      onMouseLeave={handleMouseLeave}
      ref={wrapperRef}
      style={style}
    >
      <div
        className="menu-button-action"
        onClick={e => {
          e.stopPropagation();
          setVisible(true);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            setVisible(true);
          }
        }}
        ref={refs.setReference}
        role="button"
        tabIndex={0}
      >
        {action}
      </div>
      <div
        className={styles.dropdownWrapper}
        ref={refs.setFloating}
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
                handleClickChildren(e);
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
