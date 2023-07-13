import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const WyomingIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M17.663 9.204C13.866 8.94 6.271 8 6.271 8L4 30.711s8.436.817 12.654 1.123c6.242.451 18.727 1.148 18.727 1.148L36 10.065s-12.224-.436-18.337-.86Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
