import { Intent } from './Intent';

export type AlertDialogOpts = {
  label: string;
  subtitle: string;
  intent: Intent;
  dismissText: string;
  onDismiss: () => void;
};
