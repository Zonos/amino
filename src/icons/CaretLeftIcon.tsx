import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretLeftIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.862 5.923c1.099-.961 2.82-.18 2.82 1.28v9.592c0 1.46-1.721 2.241-2.82 1.28L8.38 13.278a1.7 1.7 0 0 1 0-2.558l5.482-4.797Z"
      />
    </IconBase>
  )
);
