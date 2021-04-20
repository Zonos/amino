import { Intent } from './Intent';

export type ConfirmDialogOpts = {
  label: string;
  subtitle: string;
  intent: Intent;
  dismissText: string;
  confirmText: string;
  onConfirm: (ok: boolean) => void;
};
