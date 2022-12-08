import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DislikeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M20 14a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v9Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.959 13.693V6h-7.95l-.967 7.636h2.566c1.69 0 3.062 1.344 3.062 3V18h.62l2.214-2.913c.162-.213.279-.455.344-.713l.05-.2c.04-.157.06-.319.06-.481Zm-1.339 5.904a1.028 1.028 0 0 1-.818.403h-2.153a1.01 1.01 0 0 1-1.02-1v-2.364c0-.552-.458-1-1.021-1H6.042c-1.228 0-2.177-1.053-2.026-2.246l.967-7.636C5.11 4.752 5.98 4 7.01 4h7.95C16.086 4 17 4.895 17 6v7.693c0 .325-.04.648-.12.963l-.05.2c-.131.515-.365 1-.689 1.425l-2.52 3.316Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
