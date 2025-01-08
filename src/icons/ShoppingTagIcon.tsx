import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingTagIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M19.78 4.22a.75.75 0 0 1 0 1.06l-1.897 1.898q.116.301.117.643v4.223c0 .483-.192.946-.533 1.287l-5.822 5.822a2.89 2.89 0 0 1-4.09 0l-2.708-2.708a2.89 2.89 0 0 1 0-4.09l5.822-5.822A1.82 1.82 0 0 1 11.956 6h4.223q.342.002.643.117L18.72 4.22a.75.75 0 0 1 1.06 0M15.44 7.5h-3.484a.32.32 0 0 0-.227.094l-4.4 4.4 4.677 4.676 4.4-4.4a.32.32 0 0 0 .094-.226V8.56l-2.22 2.22a.75.75 0 1 1-1.06-1.061zm-4.494 10.231-4.677-4.677-.361.362a1.39 1.39 0 0 0 0 1.968l2.708 2.708a1.39 1.39 0 0 0 1.968 0l.362-.36Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
