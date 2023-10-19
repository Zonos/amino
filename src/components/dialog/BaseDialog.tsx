import React, { type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { type MotionProps, AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Theme } from 'src/types/Theme';

const Backdrop = styled(motion.div)`
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

const Popup = styled(motion.div)<{ $width: number; $withBorder: boolean }>`
  z-index: 1001;
  background: ${theme.surfaceColor};
  width: ${p => p.$width}px;
  max-height: 90vh;
  border-radius: ${theme.radius12};
  outline: none;
  box-shadow: ${theme.v3ShadowXxl};
  border: ${p => p.$withBorder && theme.border};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export type BaseDialogProps = BaseProps & {
  children: ReactNode;
  /** Close when clicking outside dialog (on the backdrop)
   * @default true
   */
  closeOnBlur?: boolean;
  /** Close on pressing 'escape' key
   * @default true
   */
  closeOnEsc?: boolean;
  open: boolean;
  /**
   * framer-motion props for the popup container.
   *
   * Gets shallowly combined with defaults.
   *
   * @default
   *
   * {
   *   animate: { opacity: 1, scale: 1 },
   *   exit: { opacity: 0, scale: 0.95 },
   *   initial: { opacity: 0, scale: 0.95 },
   *   transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
   * }
   */
  popupMotionProps?: MotionProps;
  themeOverride?: Theme;
  /**
   * @default 444
   */
  width?: number;
  /**
   * Disable the backdrop color
   * @default true
   */
  withBackdrop?: boolean;
  /**
   * @default true
   */
  withBorder?: boolean;
  onClose?: () => void;
};

export const BaseDialog = ({
  children,
  className,
  closeOnBlur = true,
  closeOnEsc = true,
  onClose,
  open,
  popupMotionProps,
  themeOverride,
  width = 444,
  withBackdrop = true,
  withBorder = true,
}: BaseDialogProps) => {
  const mouseDownTarget = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClose && closeOnEsc && event.key === 'Escape') {
      onClose();
    }
  };

  const backdropRef = useRef<HTMLDivElement>(null);

  // Focus the backdrop so we can listen for keypress ('escape' to close)
  useEffect(() => {
    // If an inner element is focused (inputs with autoFocus), don't focus the backdrop
    if (!backdropRef.current?.contains(document.activeElement)) {
      backdropRef.current?.focus();
    }

    if (document?.body) {
      document.body.style.overflow = open ? 'hidden' : 'auto';
    }
  }, [open]);

  const backdropMotionProps: MotionProps = withBackdrop
    ? {
        animate: { backgroundColor: 'rgba(16, 17, 22, 0.65)' },
        exit: { backgroundColor: 'rgba(16, 17, 22, 0)' },
        initial: { backgroundColor: 'rgba(16, 17, 22, 0)' },
      }
    : {};

  const combinedPopupMotionProps: MotionProps = {
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    initial: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    ...popupMotionProps,
  };

  if (typeof document !== 'undefined') {
    return createPortal(
      <AnimatePresence>
        {open && (
          <Backdrop
            {...backdropMotionProps}
            key="dialog-backdrop"
            ref={backdropRef}
            data-theme={themeOverride}
            onKeyDown={handleKeyDown}
            onMouseDown={e => {
              // Store the target of the mouse down event so we can compare it to the target of the mouse up event
              mouseDownTarget.current = e.target as HTMLDivElement;
            }}
            onMouseUp={e => {
              const isSameTarget = e.target === mouseDownTarget.current;
              const shouldClose =
                onClose && closeOnBlur && e.target === backdropRef.current;
              // only want to trigger close if key down and key up targets are the same and the clicking is on the overlay
              if (isSameTarget && shouldClose) {
                onClose();
              }
              // reset the mouse down target
              mouseDownTarget.current = null;
            }}
            tabIndex={-1}
            transition={{ duration: 0.3 }}
          >
            <Popup
              {...combinedPopupMotionProps}
              key="dialog"
              $width={width}
              $withBorder={withBorder}
              className={[className || '', 'elevated'].join(' ')}
              onClick={e => {
                // Prevent dialog from closing when clicking in the dialog
                e.stopPropagation();
              }}
            >
              {children}
            </Popup>
          </Backdrop>
        )}
      </AnimatePresence>,
      document.querySelector('body')!,
    );
  }
  return null;
};
