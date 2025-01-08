import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ScreenIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.728 4.317C5.108 3.657 4 4.097 4 5.004v6.982c0 2.05.781 4.102 2.343 5.667a7.99 7.99 0 0 0 11.314 0A8 8 0 0 0 20 11.986V5.004c0-.907-1.107-1.347-1.728-.687l-4.766 5.07a3 3 0 0 0-3.012 0zM5.5 11.986v-5.72l4.186 4.453c.4.426 1.01.386 1.382.09a1.5 1.5 0 0 1 1.864 0c.373.296.982.336 1.382-.09L18.5 6.266v5.72a6.5 6.5 0 0 1-1.904 4.604 6.49 6.49 0 0 1-9.192 0A6.5 6.5 0 0 1 5.5 11.986"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M10.033 5.255a.752.752 0 0 0 .42 1.442 5.5 5.5 0 0 1 3.094 0 .752.752 0 0 0 .42-1.442 7 7 0 0 0-3.934 0"
        fill="currentColor"
      />
    </IconBase>
  ),
);
