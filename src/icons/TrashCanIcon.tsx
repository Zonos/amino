import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TrashCanIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.1 4.1v1.8h3.8V4.1h-3.8Zm6 1.8V4A2.1 2.1 0 0 0 14 1.9h-4A2.1 2.1 0 0 0 7.9 4v1.9H5a1.1 1.1 0 0 0-.1 2.195V19A3.1 3.1 0 0 0 8 22.1h8a3.1 3.1 0 0 0 3.1-3.1V8.095A1.1 1.1 0 0 0 19 5.9h-2.9Zm.8 2.2H7.1V19a.9.9 0 0 0 .9.9h8a.9.9 0 0 0 .9-.9V8.1ZM10 12.9a1.1 1.1 0 0 1 1.1 1.1v3a1.1 1.1 0 0 1-2.2 0v-3a1.1 1.1 0 0 1 1.1-1.1Zm4 0a1.1 1.1 0 0 1 1.1 1.1v3a1.1 1.1 0 0 1-2.2 0v-3a1.1 1.1 0 0 1 1.1-1.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
