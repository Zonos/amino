import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const NightIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.887 4.276c.18.22.22.525.102.784a6.8 6.8 0 0 0-.603 2.807c0 3.662 2.86 6.586 6.335 6.586q.704-.002 1.362-.153a.75.75 0 0 1 .85 1.041C17.689 18.081 14.987 20 11.835 20 7.484 20 4 16.355 4 11.914c0-3.848 2.61-7.092 6.14-7.895a.75.75 0 0 1 .747.257M9.103 5.97C6.98 7.028 5.5 9.283 5.5 11.914c0 3.662 2.86 6.586 6.335 6.586 2.027 0 3.842-.992 5.005-2.548h-.12c-4.35 0-7.834-3.644-7.834-8.085 0-.652.075-1.287.217-1.896Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
