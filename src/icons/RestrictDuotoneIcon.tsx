import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const RestrictDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M11.252 18.987a1 1 0 0 0 1.025 1.006l3.38-.084a1 1 0 0 0 .702-.313l3.164-3.353A1.75 1.75 0 0 0 20 15.042V8.72a1 1 0 0 0-.345-.755L15.58 4.428A1.75 1.75 0 0 0 14.433 4H8.358a1 1 0 0 0-.69.275L4.312 7.47A1 1 0 0 0 4 8.194v3.937a1 1 0 0 0 1 1h4.891c.229.649.743 1.16 1.392 1.387z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M9.368 18.545a.75.75 0 0 1-1.018.297 7.03 7.03 0 0 1-2.782-2.781.75.75 0 0 1 1.316-.721 5.53 5.53 0 0 0 2.187 2.187.75.75 0 0 1 .297 1.018"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
