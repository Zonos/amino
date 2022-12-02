import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EyeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 6c-4.855 0-7.11 3.773-7.903 5.553a1.088 1.088 0 0 0 0 .894C4.89 14.227 7.145 18 12 18c4.855 0 7.11-3.773 7.903-5.553a1.088 1.088 0 0 0 0-.893C19.11 9.772 16.856 6 12 6Zm-9.73 4.74C3.14 8.788 5.891 4 12 4c6.11 0 8.861 4.788 9.73 6.74a3.088 3.088 0 0 1 0 2.52C20.861 15.212 18.11 20 12 20c-6.109 0-8.86-4.788-9.73-6.74a3.088 3.088 0 0 1 0-2.52Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-.085 2.002L12 10a2 2 0 1 1-1.998 1.915 1.5 1.5 0 0 0 1.913-1.913Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
