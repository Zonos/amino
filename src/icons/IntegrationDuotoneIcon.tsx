import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const IntegrationDuotoneIcon = forwardRef<
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
      clipRule="evenodd"
      d="M19.25 10.25h-3.5v-1.5h3.5a.75.75 0 0 1 0 1.5Zm0 6h-3.5v-1.5h3.5a.75.75 0 0 1 0 1.5Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M4 12a7 7 0 0 1 7-7h4.728c.426 0 .772.346.772.772v12.456a.772.772 0 0 1-.772.772H11a7 7 0 0 1-7-7Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
  </IconBase>
));
