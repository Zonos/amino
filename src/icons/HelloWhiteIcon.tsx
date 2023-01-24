import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelloWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.022 8.368a8 8 0 0 1 3.496-3.496 1 1 0 1 1 .908 1.782 6 6 0 0 0-2.622 2.622 1 1 0 0 1-1.782-.908Zm6.128-5.06c0-1.337 1.615-2.006 2.56-1.061l7.986 7.985a1.5 1.5 0 0 1 0 2.122l-9.193 9.192a1.5 1.5 0 0 1-2.121 0L2.397 13.56C1.452 12.616 2.12 11 3.457 11h4.82A3.986 3.986 0 0 1 9.32 9.172a3.986 3.986 0 0 1 1.829-1.045v-4.82Zm2 1.207V8.5c0 .862-.681 1.418-1.333 1.528a1.987 1.987 0 0 0-1.082.558 1.986 1.986 0 0 0-.558 1.081C10.068 12.32 9.511 13 8.65 13H4.664l6.779 6.778 8.485-8.485-6.778-6.778Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
