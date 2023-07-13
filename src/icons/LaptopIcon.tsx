import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LaptopIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9.02a2 2 0 0 1 1.66 2.465l-.311 1.243A3 3 0 0 1 19.439 21H4.561a3 3 0 0 1-2.91-2.272l-.312-1.243A2 2 0 0 1 3 15.02V6Zm2 9h14V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v9Zm-1.72 2 .311 1.242a1 1 0 0 0 .97.758h14.877a1 1 0 0 0 .97-.758L20.72 17H3.281Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
