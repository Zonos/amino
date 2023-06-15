import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const RhodeIslandIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m12 8.571 6.095 21.334V36l3.047-1.524 3.047-3.047h4.572v-6.096l-1.524-3.047 1.524-3.048h-3.048l1.524-3.047-1.524-3.048 1.524-1.524V8.571h-1.524L24.19 4 12 8.571Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
