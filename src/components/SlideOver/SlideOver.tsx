import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { XIcon } from 'icons';
import { HStack } from 'components/Stack';
import { Text } from 'components/Text';

import { IAminoTheme } from '../../types';

const Backdrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: var(--amino-backdrop-color);
  z-index: 999;
  position: fixed;
`;

const Popup = styled(motion.div)`
  position: absolute;
  z-index: 1001;
  background: var(--amino-surface-color);
  width: 300px;
  outline: none;
  box-shadow: var(--amino-shadow-larger);
  height: 100vh;
  right: 0;
  top: 0;
`;

const SlideOverHeader = styled.header`
  padding: var(--amino-space);
  border-bottom: var(--amino-border);
  display: flex;
  align-items: center;

  h4 {
    margin: 0;
    flex: 1;
  }
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
    width: 14px;
    height: 14px;
    fill: var(--amino-text-color);
    transition: all 100ms ease-in-out;
  }
`;

const SlideOverContent = styled.div`
  padding: var(--amino-space);
  overflow-y: auto;
  overscroll-behavior: contain;
`;

const Footer = styled.div`
  padding: var(--amino-space);
  border-top: var(--amino-border);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--amino-surface-color-secondary);
  position: absolute;
  bottom: 0;
  width: 100%;

  & > div + div {
    margin-left: var(--amino-space-quarter);
  }
`;

export type SlideOverProps = {
  children: React.ReactNode;
  actions?: React.ReactNode;
  label?: string;
  onClose: () => void;
  open: boolean;
  theme?: IAminoTheme;
};

export const SlideOver = ({
  children,
  actions,
  label,
  onClose,
  open,
  theme,
}: SlideOverProps) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          key="dialog-backdrop"
          data-theme={theme}
          onClick={onClose}
        />
      )}
      {open && (
        <Popup
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.3 }}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 25 }}
          key="slide-over"
        >
          <SlideOverHeader>
            <Text type="h4">{label}</Text>
            <Close onClick={onClose}>
              <XIcon />
            </Close>
          </SlideOverHeader>
          <SlideOverContent>{children}</SlideOverContent>
          {actions && (
            <Footer>
              <HStack spacing="space-quarter">{actions}</HStack>
            </Footer>
          )}
        </Popup>
      )}
    </AnimatePresence>,
    document.querySelector('body')!
  );
};
