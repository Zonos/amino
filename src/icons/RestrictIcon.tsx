import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RestrictIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.076 2.369a1.6 1.6 0 0 1 1.131-.47h7.586a1.6 1.6 0 0 1 1.131.47l4.707 4.707c.3.3.469.707.469 1.131v7.586a1.6 1.6 0 0 1-.469 1.131l-4.707 4.707a1.6 1.6 0 0 1-1.131.469H12.5a1.6 1.6 0 0 1-1.6-1.6v-3.771a6.115 6.115 0 0 1-3.629-3.63H3.5a1.6 1.6 0 0 1-1.6-1.6V8.208a1.6 1.6 0 0 1 .469-1.131L7.076 2.37Zm1.38 1.73L4.1 8.457V10.9h3.59c.78 0 1.375.544 1.563 1.19a3.91 3.91 0 0 0 2.656 2.656c.646.187 1.19.783 1.19 1.563v3.59h2.444l4.356-4.355V8.456L15.544 4.1H8.456ZM4.642 14.516a1.1 1.1 0 0 1 1.501.408 7.9 7.9 0 0 0 2.914 2.922 1.1 1.1 0 0 1-1.099 1.907 10.1 10.1 0 0 1-3.724-3.736 1.1 1.1 0 0 1 .408-1.501Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
