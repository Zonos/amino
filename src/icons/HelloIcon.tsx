import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const HelloIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4645 11.2929L12.7072 5.53554C12.3166 5.14501 11.6835 5.14501 11.2929 5.53554L5.53557 11.2929C5.14505 11.6834 5.14504 12.3166 5.53557 12.7071L11.2929 18.4645C11.6835 18.855 12.3166 18.855 12.7072 18.4645L18.4645 12.7071C18.8551 12.3166 18.8551 11.6834 18.4645 11.2929ZM14.1214 4.12132C12.9498 2.94975 11.0503 2.94975 9.87873 4.12133L4.12135 9.8787C2.94978 11.0503 2.94978 12.9498 4.12136 14.1213L9.87873 19.8787C11.0503 21.0503 12.9498 21.0503 14.1214 19.8787L19.8787 14.1213C21.0503 12.9498 21.0503 11.0503 19.8787 9.8787L14.1214 4.12132Z"
      fill="currentColor"
    />
  </IconBase>
);

export const HelloSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <rect
      x="12"
      y="2"
      width="14.1422"
      height="14.1422"
      rx="3"
      transform="rotate(45 12 2)"
      fill="currentColor"
    />
  </IconBase>
);

export const HelloDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <rect
      x="12"
      y="3"
      width="12.7279"
      height="12.7279"
      rx="3"
      transform="rotate(45 12 3)"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4645 11.2929L12.7071 5.53553C12.3166 5.14501 11.6834 5.14501 11.2929 5.53554L5.53552 11.2929C5.14499 11.6834 5.14499 12.3166 5.53552 12.7071L11.2929 18.4645C11.6834 18.855 12.3166 18.855 12.7071 18.4645L18.4645 12.7071C18.855 12.3166 18.855 11.6834 18.4645 11.2929ZM14.1213 4.12132C12.9497 2.94975 11.0503 2.94975 9.87868 4.12132L4.1213 9.8787C2.94973 11.0503 2.94973 12.9498 4.1213 14.1213L9.87868 19.8787C11.0503 21.0503 12.9497 21.0503 14.1213 19.8787L19.8787 14.1213C21.0503 12.9498 21.0503 11.0503 19.8787 9.8787L14.1213 4.12132Z"
      fill="#3D3D40"
    />
  </IconBase>
);
