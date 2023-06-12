import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CommentWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7a1 1 0 0 0-.8.4l-1.8 2.4A3 3 0 0 1 3 18V6Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1.8.6l1.8-2.4A3 3 0 0 1 11 15h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm1 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
