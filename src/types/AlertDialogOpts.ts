import { Intent } from './Intent';
/**
 * @desc The types do not build unless you use relative path for import
 * @example import { AlertDialogOpts } from '../../types';
 */
export type AlertDialogOpts = {
  label: string;
  subtitle: string;
  intent: Intent;
  dismissText: string;
  onDismiss: () => void;
};
