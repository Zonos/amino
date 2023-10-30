import type { ReactNode } from 'react';

import type { Intent } from 'src/types/Intent';

export type ConfirmDialogOpts = {
  confirmText: string;
  dismissText: string;
  intent: Intent;
  label: string;
  subtitle?: ReactNode;
  onConfirm: (ok: boolean) => void;
};
