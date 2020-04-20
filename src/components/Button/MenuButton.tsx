import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
  border: 1px solid var(--amino-border-color);
  z-index: 10;
  position: absolute;
  padding: var(--amino-radius-large) 0;
  width: 100%;
  margin-top: var(--amino-space-quarter);
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
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

type Props = {
  label: string;
};

export const MenuButton: React.FC<Props> = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef<any>(null);

  const handleClick = (e: any) => {
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
        <AnimatedSurface depth={Depth.depth16}>{children}</AnimatedSurface>
      )}
    </Wrapper>
  );
};
