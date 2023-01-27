import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h.172a1 1 0 0 0 .707-.293l1.828-1.828A3 3 0 0 1 11.828 17h.344a3 3 0 0 1 2.12.879l1.83 1.828a1 1 0 0 0 .706.293H17a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7ZM4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-.172a3 3 0 0 1-2.12-.879l-1.83-1.828a1 1 0 0 0-.706-.293h-.344a1 1 0 0 0-.707.293L9.293 21.12a3 3 0 0 1-2.121.88H7a3 3 0 0 1-3-3V5Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
