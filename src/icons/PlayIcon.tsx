import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlayIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 6.007C4 2.71 7.762.83 10.399 2.806l7.997 5.993c2.135 1.6 2.135 4.802 0 6.402L10.4 21.194C7.762 23.17 4 21.288 4 17.993V6.007Zm5.2-1.6C7.88 3.417 6 4.358 6 6.006v11.986c0 1.648 1.88 2.588 3.2 1.6l7.997-5.993a2 2 0 0 0 0-3.2L9.199 4.405Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
