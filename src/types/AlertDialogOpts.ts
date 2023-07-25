import type { Intent } from 'src/types/Intent';

export type AlertDialogOpts = {
  dismissText: string;
  intent: Intent;
  label: string;
  subtitle: string;
  onDismiss: () => void;
};
