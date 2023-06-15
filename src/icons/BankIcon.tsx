import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BankIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M11.298 3.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 7.693V9a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2V7.693A2 2 0 0 1 4.298 5.82l7-2.625ZM7 11v4h2v-4H7Zm4 0v4h2v-4h-2Zm4 0v4h2v-4h-2Zm4-3.307-7-2.625-7 2.625V9h14V7.693ZM5 17v2h14v-2H5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
