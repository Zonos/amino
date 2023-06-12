import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BufferDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M11.39 3.176a1.5 1.5 0 0 1 1.22 0l7.768 3.453c1.188.528 1.188 2.214 0 2.742l-7.769 3.452a1.5 1.5 0 0 1-1.218 0L3.62 9.371c-1.187-.528-1.187-2.214 0-2.742l7.77-3.453Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M3.084 12.1a1 1 0 0 1 1.317-.516l7.6 3.325 7.598-3.325a1 1 0 1 1 .802 1.832l-7.8 3.412a1.5 1.5 0 0 1-1.202 0l-7.8-3.412a1 1 0 0 1-.515-1.317Zm0 4a1 1 0 0 1 1.317-.516l7.6 3.325 7.598-3.325a1 1 0 1 1 .802 1.832l-7.8 3.412a1.5 1.5 0 0 1-1.202 0l-7.8-3.412a1 1 0 0 1-.515-1.317Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
