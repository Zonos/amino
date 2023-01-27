import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

/** @deprecated Use CoinsDuotoneIcon instead */
export const TaxesDuotoneIcon = forwardRef<
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
      d="M13 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Z"
    />
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#CACACE'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M10.742 1.996c.767-1.328 2.685-1.328 3.452 0l3.472 6.015C18.433 9.339 17.475 11 15.941 11H8.996C7.462 11 6.503 9.34 7.27 8.01l3.472-6.014Z"
      clipRule="evenodd"
    />
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#CACACE'}
      data-is-secondary-color="true"
      d="M1 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
    />
  </IconBase>
));
