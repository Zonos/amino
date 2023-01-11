import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LockIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 5.1a.9.9 0 0 0-.9.9v2.9h3.8V6a.9.9 0 0 0-.9-.9h-2Zm5.1 3.8V6A3.1 3.1 0 0 0 13 2.9h-2A3.1 3.1 0 0 0 7.9 6v2.9H7A3.1 3.1 0 0 0 3.9 12v6A3.1 3.1 0 0 0 7 21.1h10a3.1 3.1 0 0 0 3.1-3.1v-6A3.1 3.1 0 0 0 17 8.9h-.9ZM7 11.1a.9.9 0 0 0-.9.9v6a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9v-6a.9.9 0 0 0-.9-.9H7Zm5 2.8a1.1 1.1 0 0 1 1.1 1.1v1a1.1 1.1 0 0 1-2.2 0v-1a1.1 1.1 0 0 1 1.1-1.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
