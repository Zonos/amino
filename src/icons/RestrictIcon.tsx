import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RestrictIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.146 2.44A1.5 1.5 0 0 1 8.207 2h7.586a1.5 1.5 0 0 1 1.06.44l4.708 4.706A1.5 1.5 0 0 1 22 8.207v7.586a1.5 1.5 0 0 1-.44 1.06l-4.706 4.708a1.5 1.5 0 0 1-1.061.439H12.5a1.5 1.5 0 0 1-1.5-1.5v-3.842A6.014 6.014 0 0 1 7.342 13H3.5A1.5 1.5 0 0 1 2 11.5V8.207c0-.398.158-.78.44-1.06l4.706-4.708ZM8.414 4 4 8.414V11h3.691c.73 0 1.29.51 1.467 1.118a4.01 4.01 0 0 0 2.724 2.724c.608.176 1.118.736 1.118 1.467V20h2.586L20 15.586V8.414L15.586 4H8.414ZM4.692 14.602a1 1 0 0 1 1.364.371 8 8 0 0 0 2.95 2.96 1 1 0 0 1-.998 1.732 10 10 0 0 1-3.687-3.699 1 1 0 0 1 .37-1.364Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
