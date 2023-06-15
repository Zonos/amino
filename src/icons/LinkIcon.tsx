import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LinkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.929a5 5 0 0 1 7.071 7.07l-2.828 2.83-1.414-1.415 2.828-2.828a3 3 0 0 0-4.243-4.243l-2.828 2.828-1.414-1.414L12 4.93Zm2.83 4.241a1 1 0 0 1 0 1.415l-4.243 4.242a1 1 0 1 1-1.414-1.414l4.242-4.243a1 1 0 0 1 1.415 0Zm-5.657 1.415-2.829 2.828a3 3 0 0 0 4.243 4.243l2.828-2.829 1.415 1.415L12 19.07A5 5 0 0 1 4.93 12l2.827-2.83 1.415 1.415Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
