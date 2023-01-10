import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ExportWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        fillRule="evenodd"
        d="M20 11a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a1 1 0 0 1 2 0v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1Zm-4.293-3.293a1 1 0 0 1-1.414 0L13 6.414V16a1 1 0 1 1-2 0V6.414L9.707 7.707a1 1 0 1 1-1.414-1.414l2.646-2.647a1.5 1.5 0 0 1 2.122 0l2.646 2.647a1 1 0 0 1 0 1.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
