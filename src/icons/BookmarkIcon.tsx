import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7 4.1a.9.9 0 0 0-.9.9v14a.9.9 0 0 0 .9.9h.171a.9.9 0 0 0 .637-.264l1.828-1.828a3.1 3.1 0 0 1 2.192-.908h.344a3.1 3.1 0 0 1 2.191.908l1.829 1.828a.9.9 0 0 0 .636.264H17a.9.9 0 0 0 .9-.9V5a.9.9 0 0 0-.9-.9H7ZM3.9 5A3.1 3.1 0 0 1 7 1.9h10A3.1 3.1 0 0 1 20.1 5v14a3.1 3.1 0 0 1-3.1 3.1h-.172a3.1 3.1 0 0 1-2.192-.908l-1.828-1.829a.9.9 0 0 0-.636-.263h-.344a.9.9 0 0 0-.636.263l-1.828 1.829a3.1 3.1 0 0 1-2.193.908H7A3.1 3.1 0 0 1 3.9 19V5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
