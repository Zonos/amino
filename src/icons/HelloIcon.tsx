import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelloIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.53 3.22a.75.75 0 0 0-1.28.53v5.792a2.56 2.56 0 0 0-1.744 1.708H3.75a.75.75 0 0 0-.53 1.28l8.25 8.25a.75.75 0 0 0 1.06 0l8.25-8.25a.75.75 0 0 0 0-1.06zm.22 6.976V5.56L19.19 12 12 19.19l-6.44-6.44h4.584a.75.75 0 0 0 .75-.75c0-.582.472-1.054 1.054-1.054H12a.75.75 0 0 0 .75-.75"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M5.917 9.356a.737.737 0 0 1-.29-.998A6.9 6.9 0 0 1 8.34 5.63a.73.73 0 0 1 .993.292.737.737 0 0 1-.29.998A5.4 5.4 0 0 0 6.91 9.065a.73.73 0 0 1-.993.291"
        fill="currentColor"
      />
    </IconBase>
  ),
);
