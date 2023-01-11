import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const StarOffDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C8C8CB'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M10.713 3.2a1.5 1.5 0 0 1 2.573 0l2.358 3.93 4.797 1.2a1.5 1.5 0 0 1 .758 2.451l-2.119 2.383a1 1 0 0 1-1.494-1.328l1.57-1.766-4.198-1.05a1.5 1.5 0 0 1-.922-.683L12 4.944l-.643 1.07a1 1 0 0 1-1.715-1.028L10.714 3.2ZM6.997 7.47a1.5 1.5 0 0 1 1.375.347l9.67 8.823a1.5 1.5 0 0 1 .473.896l.34 2.378c.17 1.198-1.074 2.095-2.156 1.554l-4.7-2.35-4.698 2.35c-1.083.54-2.327-.356-2.156-1.554l.8-5.596L2.8 10.78a1.5 1.5 0 0 1 .757-2.451l3.44-.86Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </IconBase>
));
