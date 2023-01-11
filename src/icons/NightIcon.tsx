import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const NightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11.086 4.152A7.901 7.901 0 0 0 12 19.9h.997a7.796 7.796 0 0 0 6.234-3.115l-1.107-.209a9.059 9.059 0 0 1-7.137-6.827l-.067-.285a10.192 10.192 0 0 1 .069-4.943l.097-.369ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9h.23c.873 0 1.51.827 1.286 1.671l-.4 1.513a7.993 7.993 0 0 0-.054 3.876l.067.285a6.859 6.859 0 0 0 5.404 5.17l2.375.448a1.322 1.322 0 0 1 .923 1.918 9.995 9.995 0 0 1-8.834 5.319H12C6.422 22.1 1.9 17.578 1.9 12Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
