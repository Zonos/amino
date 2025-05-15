import { forwardRef, type ReactNode } from 'react';

import clsx from 'clsx';

import { ButtonIcon } from 'src/components/button/ButtonIcon';
import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';
import { Text } from 'src/components/text/Text';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';

import styles from './Dialog.module.scss';

export type DialogProps = BaseDialogProps & {
  actions?: ReactNode;
  label?: ReactNode;
  leftActions?: ReactNode;
  onClose: () => void;
  subtitle?: ReactNode;
};

/**
 * Dialog component displays important content in a modal window that requires user attention or interaction.
 * It includes a header with title, optional subtitle, content area, and an optional footer with actions.
 *
 * @example Basic dialog
 * <Dialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   label="Dialog Title"
 * >
 *   <Text>This is the dialog content.</Text>
 * </Dialog>
 *
 * @example With actions
 * <Dialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   label="Confirmation"
 *   actions={
 *     <>
 *       <Button onClick={() => setIsOpen(false)}>Cancel</Button>
 *       <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
 *     </>
 *   }
 * >
 *   <Text>Are you sure you want to proceed with this action?</Text>
 * </Dialog>
 *
 * @example With subtitle
 * <Dialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   label="Account Settings"
 *   subtitle="Manage your personal information and preferences"
 * >
 *   <VStack spacing={16}>
 *     <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
 *     <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
 *   </VStack>
 * </Dialog>
 *
 * @example With left actions
 * <Dialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   label="Edit Item"
 *   leftActions={<Button variant="danger">Delete</Button>}
 *   actions={
 *     <>
 *       <Button onClick={() => setIsOpen(false)}>Cancel</Button>
 *       <Button variant="primary">Save</Button>
 *     </>
 *   }
 * >
 *   <Text>Edit the item details here.</Text>
 * </Dialog>
 *
 * @example Non-modal dialog
 * <Dialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   label="Help Information"
 *   modal={false}
 * >
 *   <Text>This dialog doesn't block interaction with elements behind it.</Text>
 * </Dialog>
 *
 * @example With custom width
 * <Dialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   label="Wide Dialog"
 *   style={{ '--amino-dialog-width': '800px' }}
 * >
 *   <Text>This dialog has a custom width.</Text>
 * </Dialog>
 */
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
    <BaseDialog {...props} onClose={onClose} style={style}>
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
