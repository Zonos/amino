import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const NorthDakotaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M20.21 28.475c-5.435 0-16.21-.21-16.21-.21L4.421 11s7.93.27 11.894.3c5.44.04 16.317-.09 16.317-.09l.631 1.685-.21.632v2.315l1.263 2.948.21 1.053v1.684l.21 1.053V23l.211 1.475.21.842.633.842.21 2.105s-10.558.21-15.79.21Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".66"
      />
    </StateIconBase>
  ),
);
