import { type ReactNode } from 'react';

import styled from 'styled-components';

import { DropdownAnimation } from 'src/animations/DropdownAnimation';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { useDropdown } from 'src/utils/hooks/useDropdown';

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const DropdownWrapper = styled.div`
  z-index: 10;
  min-width: 100%;
`;

const AnimatedSurface = styled.div`
  background: ${theme.surfaceColor};
  border-radius: ${theme.radius12};
  box-shadow: ${theme.v3ShadowLarge};
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;
  padding: ${theme.space8};
  margin-top: ${theme.space4};
  right: 0;
  min-width: 100%;
  width: max-content;
`;

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
};

export const MenuButton = ({
  action,
  children,
  className,
  closeOnMouseLeave = true,
  closeOnSelect = true,
}: MenuButtonProps) => {
  const { floatingStyles, refs, setVisible, visibility, visible, wrapperRef } =
    useDropdown<HTMLDivElement, HTMLDivElement>({
      offsetCrossAxis: 0,
      offsetMainAxis: 0,
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
    <Wrapper
      ref={wrapperRef}
      className={className}
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
      <DropdownWrapper
        ref={refs.setFloating}
        style={{
          ...floatingStyles,
          visibility,
        }}
      >
        {visible && (
          <AnimatedSurface
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
          </AnimatedSurface>
        )}
      </DropdownWrapper>
    </Wrapper>
  );
};
