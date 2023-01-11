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
        fillRule="evenodd"
        d="M12 4.1a5.9 5.9 0 0 0-4.053 10.188c.628.594 1.153 1.464 1.153 2.5V17a.9.9 0 0 0 .9.9h.9v-4.444l-1.678-1.678a1.1 1.1 0 1 1 1.556-1.556L12 11.444l1.222-1.222a1.1 1.1 0 1 1 1.556 1.556L13.1 13.456V17.9h.9a.9.9 0 0 0 .9-.9v-.211c0-1.037.524-1.907 1.153-2.501A5.9 5.9 0 0 0 12 4.1ZM9.049 19.951A3.101 3.101 0 0 1 6.899 17v-.211c0-.27-.141-.598-.463-.903a8.1 8.1 0 1 1 11.128 0c-.322.305-.464.632-.464.903V17a3.1 3.1 0 0 1-2.149 2.951 3.101 3.101 0 0 1-5.902 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
