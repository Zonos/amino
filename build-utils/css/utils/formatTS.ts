/**
 * TypeScript code formatter utility
 * Applies consistent formatting to TypeScript code using Prettier
 */

import type { Options } from 'prettier';
import { format } from 'prettier';

/**
 * Format TypeScript code according to project standards
 *
 * @param code - The TypeScript code to format
 * @param options - Optional Prettier options to override defaults
 * @returns Formatted TypeScript code
 */
export async function formatTS(
  code: string,
  options: Partial<Options> = {},
): Promise<string> {
  try {
    // Get Prettier configuration from project config
    const prettierConfig = await import('../../../prettier.config.mjs');

    // Apply formatting with project config and any overrides
    return format(code, {
      ...prettierConfig.default,
      ...options,
      parser: 'typescript',
    });
  } catch (error) {
    console.error('Error formatting TypeScript code:', error);
    // Return original code if formatting fails
    return code;
  }
}
