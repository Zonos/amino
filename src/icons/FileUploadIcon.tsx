import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FileUploadIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.984 2.744A3.1 3.1 0 0 1 10.11 1.9H17A3.1 3.1 0 0 1 20.1 5v6a1.1 1.1 0 0 1-2.2 0V5a.9.9 0 0 0-.9-.9h-4.6v2.785a3.1 3.1 0 0 1-3.1 3.1H6.1V19a.9.9 0 0 0 .9.9h8a1.1 1.1 0 0 1 0 2.2H7A3.1 3.1 0 0 1 3.9 19V7.93a3.1 3.1 0 0 1 .974-2.256l3.11-2.93Zm-1.872 5.04H9.3a.9.9 0 0 0 .9-.9V4.1h-.09a.9.9 0 0 0-.617.245l-3.11 2.93a.9.9 0 0 0-.271.51ZM20.1 17.656l.122.123a1.1 1.1 0 1 0 1.556-1.556l-1.647-1.646a1.6 1.6 0 0 0-2.262 0l-1.647 1.646a1.1 1.1 0 1 0 1.556 1.556l.122-.122V21a1.1 1.1 0 0 0 2.2 0v-3.345Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
