import { Intent } from './Intent';

/**
 * @desc The types do not build unless you use relative path for import
 * @example import { ConfirmDialogOpts } from '../../types';
 */
export type ConfirmDialogOpts = {
  label: string;
  subtitle: string;
  intent: Intent;
  dismissText: string;
  confirmText: string;
  onConfirm: (ok: boolean) => void;
};
