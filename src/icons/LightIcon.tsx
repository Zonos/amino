import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LightIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9 18h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z"
      />
      <path
        fill="currentColor"
        d="M10.707 10.293a1 1 0 1 0-1.414 1.414L11 13.414V20h2v-6.586l1.707-1.707a1 1 0 0 0-1.414-1.414L12 11.586l-1.293-1.293Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15 15.285.75-.6a6 6 0 1 0-7.498 0l.748.6V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.715Zm2 .96V17a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-.755a8 8 0 1 1 10 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
