import type { ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';
import {
  useDropdown,
  type UseDropdownParams,
} from 'src/utils/hooks/useDropdown';

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
      ref={wrapperRef}
      className={cn('relative inline-flex', className)}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div
        ref={refs.setReference}
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
        role="button"
        tabIndex={0}
      >
        {action}
      </div>
      <div
        ref={refs.setFloating}
        className="z-10 min-w-full"
        style={{
          ...floatingStyles,
          visibility,
        }}
      >
        {visible && (
          <div
            className="bg-amino-surface rounded-amino12 shadow-amino-large animate-dropdown p-amino-8 mt-amino-4 right-0 min-w-full w-max"
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
