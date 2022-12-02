import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PrinterDuotoneIcon = forwardRef<
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
      fill="currentColor"
      d="M7 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C8.52 3 9.08 3 10.2 3h3.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C17 4.52 17 5.08 17 6.2V8H7V6.2Z"
    />
    <path
      fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
      data-is-secondary-color="true"
      d="M3 11.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 8 5.08 8 6.2 8h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.52 21 10.08 21 11.2v4.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8v-4.6Z"
    />
    <path
      fill="currentColor"
      d="M7 16.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C7.76 15 8.04 15 8.6 15h6.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C17 15.76 17 16.04 17 16.6v1.2c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C15.48 21 14.92 21 13.8 21h-3.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C7 19.48 7 18.92 7 17.8v-1.2Z"
    />
  </IconBase>
));
