import { Button } from 'src/components/button/Button';
import {
  type DismissableDialogProps,
  _dismissableDialogGetButtonVariant,
  DismissableDialog,
} from 'src/components/dialog/DismissableDialog';

export type AlertDialogProps = DismissableDialogProps & {
  dismissText: string;
  dismissAction: () => void;
};

export const AlertDialog = ({
  dismissAction,
  dismissText,
  ...props
}: AlertDialogProps) => (
  <DismissableDialog
    {...props}
    actions={
      <Button
        onClick={dismissAction}
        size="lg"
        variant={_dismissableDialogGetButtonVariant(props.intent)}
      >
        {dismissText}
      </Button>
    }
    dismissAction={dismissAction}
  />
);
