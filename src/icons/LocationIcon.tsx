import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LocationIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a7 7 0 0 0-7 7c0 2.206 1.336 4.268 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0l3.441-2.982C17.664 15.268 19 13.206 19 11a7 7 0 0 0-7-7Zm-9 7a9 9 0 0 1 18 0c0 3.026-1.81 5.592-3.895 7.399l-3.441 2.983a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.592 3 14.026 3 11Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </IconBase>
  )
);
