import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FileIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.984 2.744A3.1 3.1 0 0 1 10.11 1.9H17A3.1 3.1 0 0 1 20.1 5v14a3.1 3.1 0 0 1-3.1 3.1H7A3.1 3.1 0 0 1 3.9 19V7.93a3.1 3.1 0 0 1 .974-2.255l3.11-2.931ZM10.11 4.1a.9.9 0 0 0-.617.245l-3.11 2.93a.9.9 0 0 0-.271.51H9.3a.9.9 0 0 0 .9-.9V4.1h-.09Zm2.29 0v2.785a3.1 3.1 0 0 1-3.1 3.1H6.1V19a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9V5a.9.9 0 0 0-.9-.9h-4.6Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
