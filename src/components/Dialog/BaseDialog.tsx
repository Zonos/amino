import React from 'react';
import ReactDOM from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { Backdrop } from 'src/components/Backdrop/Backdrop';
import { IAminoTheme } from 'src/types/IAminoTheme';
import styled from 'styled-components';

// TODO: scrollable dialog, max height, etc.
// TODO: close with keyboard shortcut?

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

const Popup = styled(motion.div)<{ width: number }>`
  position: relative;
  z-index: 1001;
  background: var(--amino-surface-color);
  width: ${p => p.width}px;
  border-radius: var(--amino-radius-xl);
  outline: none;
  box-shadow: var(--amino-shadow-larger);
  border: var(--amino-border);
`;

export type DialogProps = {
  open: boolean;
  theme?: IAminoTheme;
  children: React.ReactNode;
  width?: number;
};

export const BaseDialog = ({ width, theme, open, children }: DialogProps) => {
  if (typeof document !== 'undefined') {
    return ReactDOM.createPortal(
      <AnimatePresence>
        {open && (
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            key="dialog-backdrop"
            data-theme={theme}
          />
        )}
        {open && (
          <DialogLayout data-theme={theme}>
            <Popup
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="dialog"
              width={width || 444}
            >
              {children}
            </Popup>
          </DialogLayout>
        )}
      </AnimatePresence>,
      document.querySelector('body')!
    );
  }
  return null;
};
