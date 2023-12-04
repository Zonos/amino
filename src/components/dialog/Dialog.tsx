import { type ReactNode, forwardRef } from 'react';

import clsx from 'clsx';

import { ButtonIcon } from 'src/components/button/ButtonIcon';
import {
  type BaseDialogProps,
  BaseDialog,
} from 'src/components/dialog/BaseDialog';
import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';

import styles from './Dialog.module.scss';

export type DialogProps = BaseDialogProps & {
  actions?: ReactNode;
  label?: ReactNode;
  leftActions?: ReactNode;
  subtitle?: ReactNode;
  onClose: () => void;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      actions,
      children,
      label,
      leftActions,
      onClose,
      style,
      subtitle,
      ...props
    },
    ref,
  ) => (
    <BaseDialog {...props} onClose={onClose}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Text type="title">{label}</Text>
          <ButtonIcon
            icon={<RemoveCircleDuotoneIcon size={24} />}
            noRipple
            onClick={onClose}
            variant="text"
          />
        </div>
        {subtitle && <Text type="subtitle">{subtitle}</Text>}
      </div>
      <div ref={ref} className={styles.content}>
        {children}
      </div>
      {(actions || leftActions) && (
        <div className={styles.footer}>
          {leftActions && (
            <div
              className={clsx(
                styles.styledActionBaseWrapper,
                styles.styledLeftActionWrapper,
              )}
            >
              {leftActions}
            </div>
          )}
          {actions && (
            <div
              className={clsx(
                styles.styledActionBaseWrapper,
                styles.styledRightActionWrapper,
              )}
            >
              {actions}
            </div>
          )}
        </div>
      )}
    </BaseDialog>
  ),
);
