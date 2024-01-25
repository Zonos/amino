import React, { type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';
import { type MotionProps, AnimatePresence, motion } from 'framer-motion';

import type { BaseProps } from 'src/types/BaseProps';
import type { Theme } from 'src/types/Theme';

import styles from './BaseDialog.module.scss';

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
  style,
  themeOverride,
  width = 444,
  withBackdrop = true,
}: BaseDialogProps) => {
  const mouseDownTarget = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      // Prevent other dialogs from closing
      event.stopPropagation();
      if (onClose && closeOnEsc) {
        onClose();
      }
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
    const body = document.querySelector('body');
    if (body) {
      return createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className={styles.backdrop}
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
              style={{
                ...style,
                '--amino-base-dialog-width': `${width}px`,
              }}
              tabIndex={-1}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                {...combinedPopupMotionProps}
                key="dialog"
                className={clsx(className, styles.popup, 'elevated')}
                onClick={e => {
                  // Prevent dialog from closing when clicking in the dialog
                  e.stopPropagation();
                }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        body,
      );
    }
  }

  return null;
};
