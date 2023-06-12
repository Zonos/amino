import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ExternalIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 6A3.1 3.1 0 0 1 6 2.9h12A3.1 3.1 0 0 1 21.1 6v12a3.1 3.1 0 0 1-3.1 3.1H6A3.1 3.1 0 0 1 2.9 18V6ZM6 5.1a.9.9 0 0 0-.9.9v12a.9.9 0 0 0 .9.9h12a.9.9 0 0 0 .9-.9V6a.9.9 0 0 0-.9-.9H6ZM9.9 8A1.1 1.1 0 0 1 11 6.9h4.5a1.6 1.6 0 0 1 1.6 1.6V13a1.1 1.1 0 0 1-2.2 0v-2.344l-6.122 6.122a1.1 1.1 0 1 1-1.556-1.556L13.344 9.1H11A1.1 1.1 0 0 1 9.9 8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
