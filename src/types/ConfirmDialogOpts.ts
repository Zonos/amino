import type { Intent } from './Intent';

export type ConfirmDialogOpts = {
  confirmText: string;
  dismissText: string;
  intent: Intent;
  label: string;
  subtitle?: string;
  onConfirm: (ok: boolean) => void;
};
