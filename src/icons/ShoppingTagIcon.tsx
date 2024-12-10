import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingTagIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      ref={ref}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M19.78 4.22a.75.75 0 0 1 0 1.06l-1.897 1.898c.076.2.117.416.117.643v4.223c0 .483-.192.946-.533 1.287l-5.822 5.822a2.892 2.892 0 0 1-4.09 0l-2.708-2.708a2.892 2.892 0 0 1 0-4.09l5.822-5.822A1.821 1.821 0 0 1 11.956 6h4.223c.227 0 .443.041.643.117L18.72 4.22a.75.75 0 0 1 1.06 0ZM15.44 7.5h-3.484a.32.32 0 0 0-.227.094l-4.4 4.4 4.677 4.676 4.4-4.4a.32.32 0 0 0 .094-.226V8.56l-2.22 2.22a.75.75 0 1 1-1.06-1.061l2.22-2.22Zm-4.494 10.231-4.677-4.677-.361.362a1.392 1.392 0 0 0 0 1.968l2.708 2.708a1.392 1.392 0 0 0 1.968 0l.362-.36Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
