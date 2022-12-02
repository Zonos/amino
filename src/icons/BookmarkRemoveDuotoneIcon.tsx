import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkRemoveDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
      data-is-secondary-color="true"
      d="M8 2a4 4 0 0 0-4 4v14c0 1.684 1.953 2.615 3.26 1.554l4.11-3.335a1 1 0 0 1 1.26 0l4.11 3.335c1.307 1.06 3.26.13 3.26-1.553V6a4 4 0 0 0-4-4H8Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.293 7.293a1 1 0 0 1 1.414 0L12 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 10l1.293 1.293a1 1 0 0 1-1.414 1.414L12 11.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 10 9.293 8.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </IconBase>
));
