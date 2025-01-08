import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CalendarIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7 11.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M8.75 4.75a.75.75 0 0 0-1.5 0V6h-.5A2.75 2.75 0 0 0 4 8.75v8.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25v-8.5A2.75 2.75 0 0 0 17.25 6h-.5V4.75a.75.75 0 0 0-1.5 0V6h-6.5zM7.25 7.5v.75a.75.75 0 0 0 1.5 0V7.5h6.5v.75a.75.75 0 0 0 1.5 0V7.5h.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25v-8.5c0-.69.56-1.25 1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
