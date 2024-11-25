import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';
import { getTestId } from 'src/utils/getTestId';
import {
  type UseDropdownParams,
  useDropdown,
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
  testId?: string;
};
export const MenuButton = ({
  action,
  children,
  className,
  dropdownOptions,
  noCloseOnMouseLeave = false,
  noCloseOnSelect = false,
  style,
  testId,
}: MenuButtonProps) => {
  const actionRef = useRef<HTMLDivElement>(null);

  const [actionText, setActionText] = useState('');

  useEffect(() => {
    if (actionRef.current) {
      setActionText(actionRef.current.textContent || '');
    }
  }, [actionRef.current?.textContent]);

  const defaultTestId = useMemo(
    () =>
      getTestId({
        componentName: 'button',
        name: actionText,
      }),
    [actionText],
  );

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
      className={clsx(styles.wrapper, className)}
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
        <div ref={actionRef} data-testid={testId || defaultTestId}>
          {action}
        </div>
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
