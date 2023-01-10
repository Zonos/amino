import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CopyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7 4.1a.9.9 0 0 0-.9.9v14a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9V5a.9.9 0 0 0-.9-.9h-.9V5A2.1 2.1 0 0 1 14 7.1h-4A2.1 2.1 0 0 1 7.9 5v-.9H7Zm3.1 0v.8h3.8v-.8h-3.8ZM3.9 5A3.1 3.1 0 0 1 7 1.9h10A3.1 3.1 0 0 1 20.1 5v14a3.1 3.1 0 0 1-3.1 3.1H7A3.1 3.1 0 0 1 3.9 19V5Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
