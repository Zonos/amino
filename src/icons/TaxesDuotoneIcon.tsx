import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const TaxesDuotoneIcon = forwardRef<
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
        d="M13 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.742 1.996c.767-1.328 2.685-1.328 3.452 0l3.472 6.015C18.433 9.339 17.475 11 15.941 11H8.996C7.462 11 6.503 9.34 7.27 8.01l3.472-6.014Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        d="M1 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
    </IconBase>
  );
});
