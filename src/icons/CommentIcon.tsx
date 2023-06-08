import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CommentIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 6.1A3.1 3.1 0 0 1 6.1 3h12a3.1 3.1 0 0 1 3.1 3.1v8a3.1 3.1 0 0 1-3.1 3.1h-7a.9.9 0 0 0-.72.36l-1.8 2.4A3.1 3.1 0 0 1 3 18.1v-12Zm3.1-.9a.9.9 0 0 0-.9.9v12a.9.9 0 0 0 1.62.54l1.8-2.4A3.1 3.1 0 0 1 11.1 15h7a.9.9 0 0 0 .9-.9v-8a.9.9 0 0 0-.9-.9h-12ZM7 8.1A1.1 1.1 0 0 1 8.1 7h8a1.1 1.1 0 0 1 0 2.2h-8A1.1 1.1 0 0 1 7 8.1Zm0 4A1.1 1.1 0 0 1 8.1 11h3a1.1 1.1 0 0 1 0 2.2h-3A1.1 1.1 0 0 1 7 12.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
