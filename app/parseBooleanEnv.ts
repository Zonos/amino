/**
 * Parses environment variables as booleans
 * Accepts 'true', '1', 'yes' as true values
 * Everything else is considered false
 */
export function parseBooleanEnv(value?: string): boolean {
  if (!value) return false;
  return ['true', '1', 'yes'].includes(value.toLowerCase());
}
