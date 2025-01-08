import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChartIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.75 4A2.75 2.75 0 0 0 13 6.75v10.5A2.75 2.75 0 0 0 15.75 20h1.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4zM14.5 6.75c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25zM6.75 10A2.75 2.75 0 0 0 4 12.75v4.5A2.75 2.75 0 0 0 6.75 20h1.5A2.75 2.75 0 0 0 11 17.25v-4.5A2.75 2.75 0 0 0 8.25 10zM5.5 12.75c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
