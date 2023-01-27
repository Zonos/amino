import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MailWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm1.257 2.331a1 1 0 0 1 1.412-.074L12 12.155l4.331-3.898a1 1 0 0 1 1.338 1.486l-4.666 4.2a1.5 1.5 0 0 1-2.006 0l-4.666-4.2a1 1 0 0 1-.074-1.412Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
