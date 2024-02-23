import type { ReactNode } from 'react';

import type { DismissableDialogIntent } from 'src/components/dialog/DismissableDialog';

export type ConfirmDialogOpts = {
  confirmText: string;
  dismissText: string;
  intent: DismissableDialogIntent;
  label: string;
  subtitle?: ReactNode;
  onConfirm: (ok: boolean) => void;
};
