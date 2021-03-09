import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { AminoTheme } from "../../styles/AminoTheme";
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
  border-radius: var(${AminoTheme.radiusLg});
  outline: none;
  box-shadow: var(${AminoTheme.shadowLarger});
`;

const Header = styled.div`
  padding: var(${AminoTheme.space});
  border-bottom: var(${AminoTheme.border});
  border-top-left-radius: var(${AminoTheme.radiusLg});
  border-top-right-radius: var(${AminoTheme.radiusLg});
  background: var(${AminoTheme.surfaceColorSecondary});

  h4 {
    margin: 0;
  }
`;

const Footer = styled.div`
  padding: var(${AminoTheme.space});
  border-top: var(${AminoTheme.border});
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(${AminoTheme.surfaceColorSecondary});
  border-bottom-left-radius: var(${AminoTheme.radiusLg});
  border-bottom-right-radius: var(${AminoTheme.radiusLg});

  & > div + div {
    margin-left: var(${AminoTheme.spaceQuarter});
  }
`;

const Content = styled.div`
  padding: var(${AminoTheme.space});
  max-height: calc(90vh - (83px * 2));
  overflow-y: auto;
  overscroll-behavior: contain;
`;

type IAminoTheme = "dark" | "light";

type Props = {
  open: boolean;
  label?: string;
  actions?: Array<React.ReactNode>;
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
            {actions && actions.length && (
              <Footer>
                {actions.map((action: any, index: number) => (
                  <div key={index}>{action}</div>
                ))}
              </Footer>
            )}
          </Popup>
        </DialogLayout>
      </CSSTransition>
    </>,
    document.querySelector("body")!
  );
};
