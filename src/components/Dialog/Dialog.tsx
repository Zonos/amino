import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { HStack } from "../Stack";
import { Text, TextStyle } from "../Text";

// TODO: scrollable dialog, max height, etc.
// TODO: close with keyboard shortcut?

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: var(--amino-backdrop-color);
  opacity: 0.65;
  z-index: 999;
  position: fixed;
`;

const DialogLayout = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--amino-text-color);
`;

const Popup = styled.div`
  position: relative;
  z-index: 1001;
  background: var(--amino-surface-color);
  width: 444px;
  border-radius: var(--amino-radius-xl);
  outline: none;
  box-shadow: var(--amino-shadow-larger);
`;

const Header = styled.div`
  padding: var(--amino-space);
  border-bottom: var(--amino-border);
  border-top-left-radius: var(--amino-radius-xl);
  border-top-right-radius: var(--amino-radius-xl);
  background: var(--amino-surface-color-secondary);

  h4 {
    margin: 0;
  }
`;

const Footer = styled.div`
  padding: var(--amino-space);
  border-top: var(--amino-border);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--amino-surface-color-secondary);
  border-bottom-left-radius: var(--amino-radius-xl);
  border-bottom-right-radius: var(--amino-radius-xl);

  & > div + div {
    margin-left: var(--amino-space-quarter);
  }
`;

const Content = styled.div`
  padding: var(--amino-space);
  max-height: calc(90vh - (83px * 2));
  overflow-y: auto;
  overscroll-behavior: contain;
`;

type IAminoTheme = "dark" | "light";

export type DialogProps = {
  open: boolean;
  label?: string;
  actions?: React.ReactNode;
  theme?: IAminoTheme;
  children: React.ReactNode;
};

export const Dialog = ({
  theme,
  open,
  label,
  actions,
  children,
}: DialogProps) => {
  const toggleScroll = () => document.body.classList.toggle("no-scroll");

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Backdrop data-theme={theme} />
        </motion.div>
      )}
      {open && (
        <DialogLayout data-theme={theme}>
          <motion.div
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Popup>
              <Header>
                <Text style={TextStyle.h4}>{label}</Text>
              </Header>
              <Content>{children}</Content>
              {actions && (
                <Footer>
                  <HStack spacing="space-quarter">{actions}</HStack>
                </Footer>
              )}
            </Popup>
          </motion.div>
        </DialogLayout>
      )}
    </AnimatePresence>,
    document.querySelector("body")!
  );
};
