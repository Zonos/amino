import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckoutIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M5.551 18.996A1.75 1.75 0 0 0 7.134 20h7.682a1.75 1.75 0 0 0 1.63-1.116l3.432-6.25a1.75 1.75 0 0 0 0-1.268l-3.431-6.25A1.75 1.75 0 0 0 14.816 4H7.134a1.75 1.75 0 0 0-1.583 1.005l-.65 1.381a1 1 0 0 0 .233 1.168l3.264 2.952a3 3 0 0 0 0 2.988l-3.264 2.952a1 1 0 0 0-.234 1.168zm1.583-.496a.25.25 0 0 1-.226-.143l-.493-1.047 3.302-2.986c.44-.397.404-1.017.105-1.395a1.5 1.5 0 0 1 0-1.858c.3-.378.334-.997-.105-1.394L6.415 6.69l.493-1.046a.25.25 0 0 1 .226-.144h7.682a.25.25 0 0 1 .233.16l3.431 6.25a.25.25 0 0 1 0 .18l-3.431 6.25a.25.25 0 0 1-.233.16z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M4.28 13.967a.75.75 0 0 0 1.44-.42 5.53 5.53 0 0 1 0-3.094.75.75 0 0 0-1.44-.42 7.03 7.03 0 0 0 0 3.934"
        fill="currentColor"
      />
    </IconBase>
  ),
);
