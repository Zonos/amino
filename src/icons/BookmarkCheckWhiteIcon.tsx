import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkCheckWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h.172a1 1 0 0 0 .707-.293l1.828-1.828A3 3 0 0 1 11.828 17h.344a3 3 0 0 1 2.12.879l1.83 1.828a1 1 0 0 0 .706.293H17a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7ZM4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-.172a3 3 0 0 1-2.12-.879l-1.83-1.828a1 1 0 0 0-.706-.293h-.344a1 1 0 0 0-.707.293L9.293 21.12a3 3 0 0 1-2.121.88H7a3 3 0 0 1-3-3V5Zm11.707 2.293a1 1 0 0 1 0 1.414l-3.646 3.647a1.5 1.5 0 0 1-2.122 0l-1.646-1.647a1 1 0 0 1 1.414-1.414L11 10.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);