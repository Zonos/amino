import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MailIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M1.9 7A3.1 3.1 0 0 1 5 3.9h14A3.1 3.1 0 0 1 22.1 7v10a3.1 3.1 0 0 1-3.1 3.1H5A3.1 3.1 0 0 1 1.9 17V7ZM5 6.1a.9.9 0 0 0-.9.9v10a.9.9 0 0 0 .9.9h14a.9.9 0 0 0 .9-.9V7a.9.9 0 0 0-.9-.9H5Zm1.182 2.164a1.1 1.1 0 0 1 1.554-.082L12 12.02l4.264-3.838a1.1 1.1 0 0 1 1.472 1.636l-4.666 4.199a1.6 1.6 0 0 1-2.14 0l-4.666-4.2a1.1 1.1 0 0 1-.082-1.553Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
