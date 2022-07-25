import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const PercentBadgeDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M10.781 2.608a1.53 1.53 0 0 1 2.438 0l1.374 1.812a1 1 0 0 0 .933.386l2.253-.31a1.53 1.53 0 0 1 1.724 1.725l-.31 2.253a1 1 0 0 0 .387.933l1.812 1.374a1.53 1.53 0 0 1 0 2.438l-1.812 1.374a1 1 0 0 0-.386.933l.31 2.253a1.53 1.53 0 0 1-1.725 1.724l-2.253-.31a1 1 0 0 0-.933.387l-1.374 1.812a1.53 1.53 0 0 1-2.438 0L9.407 19.58a1 1 0 0 0-.933-.386l-2.253.31a1.53 1.53 0 0 1-1.724-1.725l.31-2.253a1 1 0 0 0-.387-.933L2.608 13.22a1.53 1.53 0 0 1 0-2.438L4.42 9.407a1 1 0 0 0 .387-.933l-.31-2.253A1.53 1.53 0 0 1 6.22 4.497l2.253.31a1 1 0 0 0 .933-.387l1.374-1.812Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.707-.293-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414ZM13 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
