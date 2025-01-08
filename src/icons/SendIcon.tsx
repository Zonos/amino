import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SendIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.235 5.79 6.355 9.844l4.915 2.182 2.13-2.129a.75.75 0 1 1 1.06 1.06l-2.122 2.122 2.133 4.564zm-7.36 7.702L4.58 10.697c-.831-.369-.778-1.566.083-1.86L18.689 4.05a1 1 0 0 1 1.276 1.25l-4.452 14.017c-.276.868-1.473.946-1.859.12z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
