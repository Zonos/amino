import type { CSSProperties } from 'react';

/**
 * Filter out all of the undefined values from the object so we don't have undefined css variable values
 */
export const style = (
  props: CSSProperties & { [key: string]: string | undefined },
) =>
  // loop through the object and filter out all of the underfined values
  Object.entries(props).reduce((acc: Record<string, string>, [key, value]) => {
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
