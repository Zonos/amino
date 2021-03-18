import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { HStack } from "../stack";
import { Text, TextStyle } from "../Text";

// TODO: scrollable dialog, max height, etc.
// TODO: close with keyboard shortcut?

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: var(--amino-backdrop-color);
  opacity: 0.8;
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
  width: 550px;
  border-radius: var(--amino-radius-lg);
  outline: none;
  box-shadow: var(--amino-shadow-larger);
`;

const Header = styled.div`
  padding: var(--amino-space);
  border-bottom: var(--amino-border);
  border-top-left-radius: var(--amino-radius-lg);
  border-top-right-radius: var(--amino-radius-lg);
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
  border-bottom-left-radius: var(--amino-radius-lg);
  border-bottom-right-radius: var(--amino-radius-lg);

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

type Props = {
  open: boolean;
  label?: string;
  actions?: React.ReactNode;
  theme?: IAminoTheme;
};

export const Dialog: React.FC<Props> = ({
  theme,
  open,
  label,
  actions,
  children
}) => {
  const toggleScroll = () => document.body.classList.toggle("no-scroll");

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={300}
        classNames="amino-backdrop"
        onEnter={toggleScroll}
        onExit={toggleScroll}
      >
        <Backdrop data-theme={theme} />
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={300}
        classNames="amino-dialog"
      >
        <DialogLayout data-theme={theme}>
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
        </DialogLayout>
      </CSSTransition>
    </>,
    document.querySelector("body")!
  );
};
