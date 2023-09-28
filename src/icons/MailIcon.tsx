import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MailIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M17.28 9.78a.75.75 0 0 0-1.06-1.06L12 12.94 7.78 8.72a.75.75 0 0 0-1.06 1.06l4.75 4.75a.75.75 0 0 0 1.06 0l4.75-4.75Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M5.5 4.75A2.75 2.75 0 0 0 2.75 7.5v9a2.75 2.75 0 0 0 2.75 2.75h13a2.75 2.75 0 0 0 2.75-2.75v-9a2.75 2.75 0 0 0-2.75-2.75h-13ZM4.25 7.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25v-9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
