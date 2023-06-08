import React, { type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { Backdrop } from 'src/components/backdrop/Backdrop';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types/Theme';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';
import styled from 'styled-components';

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

const Popup = styled(motion.div)<{ noBorder?: boolean; width: number }>`
  position: relative;
  z-index: 1001;
  background: ${theme.surfaceColor};
  width: ${p => p.width}px;
  max-height: 90vh;
  border-radius: ${theme.radius12};
  outline: none;
  box-shadow: ${theme.v3ShadowXxl};
  border: ${p => !p.noBorder && theme.border};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export type BaseDialogProps = {
  children: ReactNode;
  className?: string;
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  noBorder?: boolean;
  open: boolean;
  themeOverride?: Theme;
  width?: number;
  onClose?: () => void;
};

export const BaseDialog = ({
  children,
  className,
  closeOnBlur = true,
  closeOnEsc = true,
  noBorder = false,
  onClose,
  open,
  themeOverride,
  width,
}: BaseDialogProps) => {
  const { aminoTheme } = useAminoTheme();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClose && closeOnEsc && event.key === 'Escape') {
      onClose();
    }
  };

  const dialogBackdrop = useRef<HTMLDivElement>(null);

  // Focus the backdrop so we can listen for keypress ('escape' to close)
  useEffect(() => {
    if (!dialogBackdrop.current?.contains(document.activeElement)) {
      dialogBackdrop.current?.focus();
    }

    if (!document?.body) {
      return;
    }
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  if (typeof document !== 'undefined') {
    return createPortal(
      <AnimatePresence>
        {open && (
          <Backdrop
            key="dialog-backdrop"
            animate={{ opacity: 0.65 }}
            data-theme={themeOverride || aminoTheme}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {open && (
          <DialogLayout
            data-theme={themeOverride || aminoTheme}
            onClick={() => onClose && closeOnBlur && onClose()}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <Popup
              key="dialog"
              animate={{ opacity: 1, scale: 1 }}
              className={className}
              exit={{ opacity: 0, scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.95 }}
              noBorder={noBorder}
              onClick={e => {
                // Prevent dialog from closing when clicking in the dialog
                e.stopPropagation();
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
