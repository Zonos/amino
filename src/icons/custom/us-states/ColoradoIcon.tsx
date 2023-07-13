import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const ColoradoIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M22.087 9.41C17.255 9.188 5.789 8.218 5.789 8.218L4 30.28s7.558.65 12.032.874c6.06.305 19.57.716 19.57.716L36 9.61s-8.674.042-13.913-.199Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
