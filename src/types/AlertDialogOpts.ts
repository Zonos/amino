import type { Intent } from './Intent';

export type AlertDialogOpts = {
  dismissText: string;
  intent: Intent;
  label: string;
  subtitle: string;
  onDismiss: () => void;
};
