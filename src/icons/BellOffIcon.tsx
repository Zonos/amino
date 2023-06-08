import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.222 2.222a1.1 1.1 0 0 1 1.556 0l4 4 11.998 11.999.003.002 1.999 2a1.1 1.1 0 1 1-1.556 1.555L18.544 20.1h-4.446a2.1 2.1 0 0 1-4.196 0H8.253c-2.418 0-4.353-1.995-4.353-4.385 0-1.173.485-2.313 1.35-3.12a2.05 2.05 0 0 0 .65-1.496V7.456L2.222 3.778a1.1 1.1 0 0 1 0-1.556ZM8.1 9.656v1.443a4.248 4.248 0 0 1-1.35 3.105c-.41.384-.65.938-.65 1.51 0 1.204.978 2.186 2.153 2.186h8.091L8.1 9.656ZM12 1.9A1.1 1.1 0 0 1 13.1 3v.999c2.844.518 5 3.008 5 6v1a1.1 1.1 0 0 1-2.2 0v-1A3.9 3.9 0 0 0 12 6.1h-2a1.1 1.1 0 1 1 0-2.2h.9V3A1.1 1.1 0 0 1 12 1.9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
