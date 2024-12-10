import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const NewMexicoIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="M7.584 4s7.203.62 10.805.83c5.474.32 16.423.76 16.423.76v2.783h-.398l-.795 25.242-16.893-.795v.596l.596.596-8.148-.596-.2 2.584L5 35.602 7.584 4Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
