/**
 * Intents are an expressive way to indicate what purpose an element has, rather than just "primary", "secondary", etc.
 * @desc The types do not build unless you use relative path for import
 * @example import { Intent } from '../../types';
 */
export type Intent =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'primary'
  | 'danger'
  | 'secondary'
  | 'icon';
