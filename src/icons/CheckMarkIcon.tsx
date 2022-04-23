import React, { forwardRef } from 'react';

import { type IconProps } from '~/src/types';

import { IconBase } from './IconBase';

export const CheckMarkIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color }, ref) => (
    <IconBase size={size} color={color} ref={ref}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2782 6.79289C19.6687 7.18342 19.6687 7.81658 19.2782 8.20711L10.3284 17.1569C9.9379 17.5474 9.30474 17.5474 8.91421 17.1569L4.79289 13.0355C4.40237 12.645 4.40237 12.0118 4.79289 11.6213C5.18342 11.2308 5.81658 11.2308 6.20711 11.6213L9.62132 15.0355L17.864 6.79289C18.2545 6.40237 18.8876 6.40237 19.2782 6.79289Z"
        fill="currentColor"
      />
    </IconBase>
  )
);

export const CheckMarkSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2782 6.79289C19.6687 7.18342 19.6687 7.81658 19.2782 8.20711L10.3284 17.1569C9.9379 17.5474 9.30474 17.5474 8.91421 17.1569L4.79289 13.0355C4.40237 12.645 4.40237 12.0118 4.79289 11.6213C5.18342 11.2308 5.81658 11.2308 6.20711 11.6213L9.62132 15.0355L17.864 6.79289C18.2545 6.40237 18.8876 6.40237 19.2782 6.79289Z"
      fill="currentColor"
    />
  </IconBase>
);

export const CheckMarkDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2782 6.79289C19.6687 7.18342 19.6687 7.81658 19.2782 8.20711L10.3284 17.1569C9.9379 17.5474 9.30474 17.5474 8.91421 17.1569L4.79289 13.0355C4.40237 12.645 4.40237 12.0118 4.79289 11.6213C5.18342 11.2308 5.81658 11.2308 6.20711 11.6213L9.62132 15.0355L17.864 6.79289C18.2545 6.40237 18.8876 6.40237 19.2782 6.79289Z"
      fill="currentColor"
    />
  </IconBase>
);
