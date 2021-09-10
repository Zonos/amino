import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { Depth, Surface } from 'types';

import { DropdownAnimation } from '../../animations';
import { DropdownIcon } from '../../icons/DropdownIcon';
import { Button } from './Button';

const Wrapper = styled.div`
  position: relative;
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;
  border: var(--amino-border);
  z-index: 10;
  position: absolute;
  padding: var(--amino-radius) 0;
  margin-top: var(--amino-space-quarter);
  right: 0;
  min-width: 100%;
  width: max-content;
`;

const Trigger = styled(Button)`
  svg {
    color: var(--amino-text-color);
    width: 16px;
    height: 16px;
    opacity: 0.3;
    margin-left: var(--amino-space-quarter);
    transition: opacity 100ms ease-in-out;
    margin-right: -5px !important;
    pointer-events: none;
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

export type MenuButtonProps = {
  label: string;
  children: React.ReactNode;
};

export const MenuButton = ({ label, children }: MenuButtonProps) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (node.current?.contains(target)) {
      target.click();
      setOpen(false);
    }

    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <Wrapper ref={node}>
      <Trigger onClick={() => setOpen(true)}>
        {label}
        <DropdownIcon />
      </Trigger>
      {open && (
        <AnimatedSurface dense depth={Depth.depth16}>
          {children}
        </AnimatedSurface>
      )}
    </Wrapper>
  );
};
