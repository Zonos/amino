import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { HStack } from "../Stack";
import { Text, TextStyle } from "../Text";
import { CloseIcon } from "../../icons";

const StyledDialog = styled(motion.div)`
  z-index: 990;
  outline: none;
  overflow-y: auto;
  box-sizing: border-box;
  overscroll-behavior: contain;
  background: var(--amino-page-background);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  background: var(--amino-surface-color);
  border-bottom: var(--amino-border);
  box-shadow: var(--amino-shadow-small);
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
  border-radius: 32px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    background: var(--amino-gray-200);
    opacity: 1;
  }

  svg {
    width: 16px;
    height: 16px;
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
    <AnimatePresence>
      {open && (
        <StyledDialog
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 5 }}
          className="print"
        >
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
      )}
    </AnimatePresence>,
    document.querySelector("body")!
  );
};
