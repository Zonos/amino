import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SunnyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 3"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M17.78 7.28a.75.75 0 1 0-1.06-1.06l-1.184 1.184a.75.75 0 1 0 1.06 1.06zM18 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 18 12m-1.404 3.536a.75.75 0 1 0-1.06 1.06l1.184 1.184a.75.75 0 0 0 1.06-1.06zM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18m-3.536-1.404a.75.75 0 0 0-1.06-1.06L6.22 16.72a.75.75 0 1 0 1.06 1.06zM3 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 3 12m4.28-5.78a.75.75 0 0 0-1.06 1.06l1.184 1.185a.75.75 0 0 0 1.06-1.061z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
