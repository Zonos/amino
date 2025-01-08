import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MonitorIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.75 4A2.75 2.75 0 0 0 4 6.75v7a2.75 2.75 0 0 0 2.75 2.75h4.5v2H8A.75.75 0 0 0 8 20h8a.75.75 0 0 0 0-1.5h-3.25v-2h4.5A2.75 2.75 0 0 0 20 13.75v-7A2.75 2.75 0 0 0 17.25 4zM5.5 6.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v7c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
