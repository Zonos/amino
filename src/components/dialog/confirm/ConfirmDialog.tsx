import { Button } from 'src/components/button/Button';
import {
  _dismissableDialogGetButtonVariant,
  DismissableDialog,
  type DismissableDialogProps,
} from 'src/components/dialog/DismissableDialog';

export type ConfirmDialogProps = DismissableDialogProps & {
  confirmAction: () => void;
  confirmText: string;
  dismissAction: () => void;
  dismissText: string;
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
