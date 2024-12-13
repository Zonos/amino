import { Button } from 'src/components/button/Button';
import {
  _dismissableDialogGetButtonVariant,
  DismissableDialog,
  type DismissableDialogProps,
} from 'src/components/dialog/DismissableDialog';

export type AlertDialogProps = DismissableDialogProps & {
  dismissAction: () => void;
  dismissText: string;
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
        style={{ gridColumn: 'span 2' }}
        variant={_dismissableDialogGetButtonVariant(props.intent)}
      >
        {dismissText}
      </Button>
    }
    dismissAction={dismissAction}
  />
);
