import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ImageIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v8.277l1.012-.578a3 3 0 0 1 2.976 0l1.26.72a1 1 0 0 0 1.161-.12l2.273-2.02a3 3 0 0 1 3.657-.255L19 13.132V6a1 1 0 0 0-1-1H6Zm13 10.535-2.77-1.847a1 1 0 0 0-1.22.085l-2.272 2.02a3 3 0 0 1-3.481.363l-1.26-.72a1 1 0 0 0-.993 0L5 16.58V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.465ZM7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
