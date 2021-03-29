import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Button } from "./Button";
import { Depth, Surface } from "../../primitives";
import { DropdownAnimation } from "../../animations";
import { DropdownIcon } from "../../icons/DropdownIcon";

const Wrapper = styled.div`
  position: relative;
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;
  border: 1px solid var(${AminoTheme.borderColor});
  z-index: 10;
  position: absolute;
  padding: var(${AminoTheme.radius}) 0;
  margin-top: var(${AminoTheme.spaceQuarter});
  right: 0;
  min-width: 100%;
  width: max-content;
`;

const Trigger = styled(Button)`
  svg {
    color: var(${AminoTheme.textColor});
    width: 16px;
    height: 16px;
    opacity: 0.3;
    margin-left: var(${AminoTheme.spaceQuarter});
    transition: opacity 100ms ease-in-out;
    margin-right: -5px !important;
    pointer-events: none;
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

type MenuButtonProps = {
  label: string;
  children: React.ReactNode;
};

export const MenuButton = ({ label, children }: MenuButtonProps) => {
  const [open, setOpen] = useState(false);
  const node = useRef<any>(null);

  const handleClick = (e: any) => {
    if (node.current.contains(e.target)) {
      e.target.click();
      setOpen(false);
    }

    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
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
