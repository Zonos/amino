import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EditIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.586 4a2 2 0 0 1 2.828 0L20 5.586a2 2 0 0 1 0 2.828L9.1 19.315a3 3 0 0 1-1.394.79l-3.3.825a1.1 1.1 0 0 1-1.335-1.334l.826-3.301a3 3 0 0 1 .789-1.394L15.586 4Zm-.172 3L17 8.586 18.586 7 17 5.414 15.414 7Zm.172 3L14 8.414 8.414 14 10 15.586 15.586 10Zm-7 7L7 15.414l-.901.901a1 1 0 0 0-.263.465l-.461 1.846 1.845-.462a1 1 0 0 0 .465-.263L8.586 17Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
