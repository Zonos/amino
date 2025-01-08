import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RateIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M19.709 5.655C20.268 5.008 19.81 4 18.957 4H5.742C4.78 4 4 4.784 4 5.75v12.5c0 .966.78 1.75 1.742 1.75h13.215c.853 0 1.31-1.008.752-1.655l-4.129-4.78a3.02 3.02 0 0 0 0-3.13zM5.742 5.5h12.124l-3.663 4.242c-.354.408-.294.966-.012 1.313a1.506 1.506 0 0 1 0 1.89c-.282.347-.342.904.011 1.313l3.664 4.242H5.742a.25.25 0 0 1-.249-.25V5.75a.25.25 0 0 1 .25-.25Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M19.72 10.033a.746.746 0 1 0-1.433.42 5.55 5.55 0 0 1 0 3.093.746.746 0 1 0 1.434.42 7.06 7.06 0 0 0 0-3.933Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
