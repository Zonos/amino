import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RemoveWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.343 6.343a1 1 0 0 1 1.415 0L12 10.586l4.243-4.243a1 1 0 1 1 1.414 1.414L13.415 12l4.242 4.243a1 1 0 0 1-1.414 1.414L12 13.414l-4.242 4.243a1 1 0 0 1-1.415-1.414L10.586 12 6.343 7.757a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
