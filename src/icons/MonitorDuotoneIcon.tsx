import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const MonitorDuotoneIcon = forwardRef<
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
      d="M7 20a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
    />
    <path
      fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
      data-is-secondary-color="true"
      d="M7.8 17c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 14.72 3 13.88 3 12.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 17 17.88 17 16.2 17H7.8Z"
    />
  </IconBase>
));
