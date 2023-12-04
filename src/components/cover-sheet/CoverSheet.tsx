import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from 'src/components/button/Button';
import { CoverSheetActions } from 'src/components/cover-sheet/CoverSheetActions';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import type { Theme } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

import styles from './CoverSheet.module.scss';

export type CoverSheetProps = BaseProps & {
  /** used for setting id of the wrapper of where the action will be located */
  actionWrapperId?: string;
  actions?: ReactNode;
  children: ReactNode;
  label: string;
  open: boolean;
  themeOverride?: Theme;
  onClose: () => void;
};

export const CoverSheet = ({
  actions,
  actionWrapperId = '__cover-sheet-actions',
  children,
  className,
  label,
  onClose,
  open,
  style,
  themeOverride,
}: CoverSheetProps) => {
  const { aminoTheme } = useAminoTheme();

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    if (document.querySelectorAll(`[id='${actionWrapperId}']`).length > 1) {
      // eslint-disable-next-line no-console
      console.error(
        `Duplicate id "${actionWrapperId}" detected in "CoverSheet" component. Please set "actionWrapperId" to a unique id.`,
      );
    }
  }, [actionWrapperId]);

  useEffect(() => {
    if (!document?.body) {
      return;
    }
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  if (typeof document !== 'undefined') {
    const body = document.querySelector('body');
    if (body) {
      return createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              animate={{ opacity: 1, translateY: 0 }}
              className={clsx(styles.dialog, className)}
              data-theme={themeOverride || aminoTheme}
              exit={{ opacity: 0, translateY: 5 }}
              initial={{ opacity: 0, translateY: 10 }}
              style={style}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <header className={styles.headerContainer}>
                <Button
                  className={styles.closeButton}
                  icon={<RemoveIcon size={20} />}
                  onClick={onClose}
                />
                <Text className={styles.header} type="subheader">
                  {label}
                </Text>
                <div id={actionWrapperId}>
                  {actions && (
                    <CoverSheetActions coverSheetActionId={actionWrapperId}>
                      {actions}
                    </CoverSheetActions>
                  )}
                </div>
              </header>
              <div className={styles.content}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>,
        body,
      );
    }
  }
  return null;
};
