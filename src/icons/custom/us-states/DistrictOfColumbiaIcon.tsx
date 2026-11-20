import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const DistrictOfColumbiaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M20 3 37 20 21.5 35.5l-2.769-3.692-2.77-2.77-.922-2.769-2.77-2.769L11.346 20.6 8.577 14.423 20 3Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".947"
      />
    </StateIconBase>
  ),
);
