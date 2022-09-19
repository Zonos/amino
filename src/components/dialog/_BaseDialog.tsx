import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { Backdrop } from 'src/components/backdrop/Backdrop';
import { theme } from 'src/styles/constants/theme';
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
  color: ${theme.textColor};
`;

const Popup = styled(motion.div)<{ width: number }>`
  position: relative;
  z-index: 1001;
  background: ${theme.surfaceColor};
  width: ${p => p.width}px;
  border-radius: ${theme.radiusXl};
  outline: none;
  box-shadow: ${theme.v3ShadowXxl};
  border: ${theme.border};
`;

export type BaseDialogProps = {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  theme?: IAminoTheme;
  width?: number;
  onClose: () => void;
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
};

export const BaseDialog = ({
  children,
  className,
  open,
  theme: _theme,
  width,
  onClose,
  closeOnBlur = true,
  closeOnEsc = true,
}: BaseDialogProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (closeOnEsc && event.key === 'Escape') {
      onClose();
    }
  };

  const dialogBackdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogBackdrop?.current?.focus();
  }, [open]);

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
            data-theme={_theme}
          />
        )}
        {open && (
          <DialogLayout
            data-theme={_theme}
            onClick={() => closeOnBlur && onClose()}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            ref={dialogBackdrop}
          >
            <Popup
              className={className}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="dialog"
              width={width || 444}
              onClick={e => {
                // e.preventDefault();
                e.stopPropagation();
              }}
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
