import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PrepayIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M4.317 18.272c-.66.62-.22 1.728.687 1.728h6.982c2.05 0 4.102-.781 5.667-2.343a7.99 7.99 0 0 0 0-11.314A7.999 7.999 0 0 0 11.986 4H5.004c-.907 0-1.347 1.107-.687 1.728l5.07 4.766a3 3 0 0 0 0 3.012l-5.07 4.766Zm7.669.228h-5.72l4.453-4.186c.426-.4.386-1.01.09-1.382a1.499 1.499 0 0 1 0-1.864c.296-.373.336-.982-.09-1.382L6.266 5.5h5.72c1.667 0 3.333.634 4.604 1.904a6.492 6.492 0 0 1 0 9.192 6.495 6.495 0 0 1-4.604 1.904Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M5.255 13.967a.751.751 0 0 0 1.442-.42 5.52 5.52 0 0 1 0-3.094.752.752 0 0 0-1.442-.42 7.017 7.017 0 0 0 0 3.934Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
