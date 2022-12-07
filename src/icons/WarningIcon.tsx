import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const WarningIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.782 16.107 13.79 6.104c-.737-1.476-2.843-1.476-3.58 0L5.219 16.107A2 2 0 0 0 7.008 19h9.985a2 2 0 0 0 1.79-2.893ZM15.58 5.21c-1.473-2.951-5.685-2.951-7.158 0L3.428 15.214C2.101 17.874 4.035 21 7.008 21h9.985c2.972 0 4.906-3.127 3.579-5.786L15.579 5.21Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 8a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      />
    </IconBase>
  )
);
