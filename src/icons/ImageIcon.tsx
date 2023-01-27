import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ImageIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 6A3.1 3.1 0 0 1 6 2.9h12A3.1 3.1 0 0 1 21.1 6v12a3.1 3.1 0 0 1-3.1 3.1H6A3.1 3.1 0 0 1 2.9 18V6ZM6 5.1a.9.9 0 0 0-.9.9v8.104l.862-.492a3.1 3.1 0 0 1 3.076 0l1.26.72a.9.9 0 0 0 1.045-.109l2.272-2.02a3.1 3.1 0 0 1 3.78-.262l1.505 1.003V6a.9.9 0 0 0-.9-.9H6Zm12.9 10.489-2.726-1.818a.9.9 0 0 0-1.097.077l-2.273 2.02a3.1 3.1 0 0 1-3.597.374l-1.26-.72a.9.9 0 0 0-.894 0L5.1 16.638V18a.9.9 0 0 0 .9.9h12a.9.9 0 0 0 .9-.9v-2.411Zm-12-6.59a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
