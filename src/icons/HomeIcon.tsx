import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HomeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m13.058 4.36 6.645 5.042A.75.75 0 0 1 19 10.707v6.543A2.75 2.75 0 0 1 16.25 20h-8.5A2.75 2.75 0 0 1 5 17.25v-6.543a.75.75 0 0 1-.703-1.305l6.645-5.041a1.75 1.75 0 0 1 2.116 0Zm-1.21 1.196a.25.25 0 0 1 .303 0L17.5 9.614v7.636c0 .69-.56 1.25-1.25 1.25H14.5v-2a2.5 2.5 0 0 0-5 0v2H7.75c-.69 0-1.25-.56-1.25-1.25V9.614zM11 18.5h2v-2a1 1 0 1 0-2 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
