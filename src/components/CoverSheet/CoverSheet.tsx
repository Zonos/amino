import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { HStack } from "../Stack";
import { Text, TextStyle } from "../Text";
import { CloseIcon } from "../../icons";

const StyledDialog = styled.div`
  /* notify z-index is 9999, dialog z-index is 1001 */
  z-index: 990;
  outline: none;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overscroll-behavior: contain;
  background: var(--amino-page-background);
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--amino-shadow-small);
  backdrop-filter: blur(5px);
  padding: var(--amino-space-half) var(--amino-space);
  display: flex;
  align-items: center;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 99;

  @media print {
    display: none !important;
  }

  h4 {
    display: flex;
    flex: 1;
    margin: 0;
  }
`;

const Content = styled.div`
  padding: var(--amino-space);
`;

const Close = styled.div`
  transition: all 100ms ease-in-out;
  background: transparent;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: var(--amino-gray-400);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: var(--amino-text-color);
    transition: all 100ms ease-in-out;
  }
`;

const Actions = styled.div`
  margin-right: var(--amino-space);
`;

export type CoverSheetProps = {
  children: React.ReactNode;
  open: boolean;
  label: string;
  onClose: () => void;
  actions?: React.ReactNode;
};

export const CoverSheet = ({
  open,
  label,
  onClose,
  children,
  actions,
}: CoverSheetProps) => {
  return createPortal(
    <>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={200}
        classNames="amino-cover-sheet"
      >
        <StyledDialog className="print">
          <Header>
            <Text style={TextStyle.h4}>{label}</Text>
            {actions && (
              <Actions>
                <HStack>{actions}</HStack>
              </Actions>
            )}
            <Close onClick={onClose}>
              <CloseIcon />
            </Close>
          </Header>
          <Content>{children}</Content>
        </StyledDialog>
      </CSSTransition>
    </>,
    document.querySelector("body")!
  );
};
