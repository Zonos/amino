import { type ReactNode, useEffect } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import { CoverSheetActions } from 'src/components/cover-sheet/CoverSheetActions';
import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';

import styles from './CoverSheet.module.scss';

export type CoverSheetProps = BaseDialogProps & {
  /**
   * used for setting id of the wrapper of where the action will be located */
  actionWrapperId?: string;
  actions?: ReactNode;
  headerComponent?: ReactNode;
  hideCloseButton?: boolean;
  label: string;
};

export const CoverSheet = ({
  actions,
  actionWrapperId = '__cover-sheet-actions',
  children,
  className,
  headerComponent,
  hideCloseButton = false,
  label,
  onClose,
  open,
  ...props
}: CoverSheetProps) => {
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

  return (
    <BaseDialog
      className={clsx(styles.coverSheet, className)}
      onClose={onClose}
      open={open}
      popupMotionProps={{
        animate: { translateY: 0 },
        exit: { translateY: '100vh' },
        initial: { translateY: '100vh' },
        transition: { duration: 0.35, ease: [0, 0, 0, 1] },
      }}
      {...props}
    >
      <header className={styles.headerContainer}>
        <div className={styles.header}>
          {!hideCloseButton && (
            <Button icon={<RemoveIcon size={20} />} onClick={onClose} />
          )}
          <Text type="subheader">{label}</Text>
        </div>
        <div className={styles.headerComponent}>{headerComponent}</div>
        <div id={actionWrapperId}>
          {actions && (
            <CoverSheetActions coverSheetActionId={actionWrapperId}>
              {actions}
            </CoverSheetActions>
          )}
        </div>
      </header>
      <div className={styles.content}>{children}</div>
    </BaseDialog>
  );
};
