import type { DismissableDialogIntent } from 'src/components/dialog/DismissableDialog';

export type AlertDialogOpts = {
  dismissText: string;
  intent: DismissableDialogIntent;
  label: string;
  subtitle: string;
  onDismiss: () => void;
};
