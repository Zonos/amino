import { Button } from 'src/components/button/Button';
import {
  _dismissableDialogGetButtonVariant,
  DismissableDialog,
  type DismissableDialogProps,
} from 'src/components/dialog/DismissableDialog';

export type ConfirmDialogProps = DismissableDialogProps & {
  confirmText: string;
  dismissText: string;
  confirmAction: () => void;
  dismissAction: () => void;
};

export const ConfirmDialog = ({
  confirmAction,
  confirmText,
  dismissAction,
  dismissText,
  ...props
}: ConfirmDialogProps) => (
  <DismissableDialog
    {...props}
    actions={
      <>
        <Button onClick={dismissAction} size="lg">
          {dismissText}
        </Button>
        <Button
          onClick={confirmAction}
          size="lg"
          variant={_dismissableDialogGetButtonVariant(props.intent)}
        >
          {confirmText}
        </Button>
      </>
    }
    dismissAction={dismissAction}
  />
);
