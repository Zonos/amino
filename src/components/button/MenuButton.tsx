import { type ReactNode, useCallback, useEffect, useRef } from 'react';

import styled from 'styled-components';

import { DropdownAnimation } from 'src/animations/DropdownAnimation';
import { Surface } from 'src/components/surface/Surface';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

const Wrapper = styled.div`
  position: relative;
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;
  border: ${theme.border};
  z-index: 10;
  position: absolute;
  padding: ${theme.radius6} 0;
  margin-top: ${theme.space8};
  right: 0;
  min-width: 100%;
  width: max-content;
`;

export type MenuButtonProps = BaseProps & {
  action: ReactNode;
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const MenuButton = ({
  action,
  children,
  className,
  open,
  setOpen,
}: MenuButtonProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!wrapperRef?.current?.contains(target)) {
        setOpen(false);
      }
    },
    [setOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  return (
    <Wrapper ref={wrapperRef} className={className}>
      {action}
      {open && (
        <AnimatedSurface dense depth="depth16">
          {children}
        </AnimatedSurface>
      )}
    </Wrapper>
  );
};
