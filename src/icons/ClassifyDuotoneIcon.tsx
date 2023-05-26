import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ClassifyDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.88 4.527a1 1 0 0 1-.407 1.354A8.597 8.597 0 0 0 4.996 9.29a7.938 7.938 0 0 0-.958 4.614 1 1 0 1 1-1.99.195 9.938 9.938 0 0 1 1.196-5.774A10.597 10.597 0 0 1 7.527 4.12a1 1 0 0 1 1.354.408Z"
      clipRule="evenodd"
    />
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M11 4.18c0-1.548 2.06-2.082 2.811-.729l8.65 15.57a1.5 1.5 0 0 1-1.31 2.229H3.804c-1.521 0-2.076-2.004-.771-2.786l3.917-2.35a5.658 5.658 0 0 1-.496-2.326c0-2.744 1.95-5.045 4.545-5.524V4.18Z"
      clipRule="evenodd"
    />
  </IconBase>
));
