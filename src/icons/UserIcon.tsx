import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UserIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8ZM6.9 7a5.1 5.1 0 1 1 10.2 0A5.1 5.1 0 0 1 6.9 7Zm.1 9.1a.9.9 0 0 0-.9.9v2a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9v-2a.9.9 0 0 0-.9-.9H7Zm-3.1.9A3.1 3.1 0 0 1 7 13.9h10a3.1 3.1 0 0 1 3.1 3.1v2a3.1 3.1 0 0 1-3.1 3.1H7A3.1 3.1 0 0 1 3.9 19v-2Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
