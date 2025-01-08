import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const CopilotDuotoneIcon = forwardRef<
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
      d="M16.42 17.483a.994.994 0 0 0 1.429-.022 8 8 0 1 0-11.698 0 .994.994 0 0 0 1.43.022l2.895-2.896c.938.554 2.11.554 3.048 0l2.895 2.896Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M13.967 18.722a.75.75 0 0 0-.42-1.44 5.53 5.53 0 0 1-3.094 0 .75.75 0 0 0-.42 1.44 7.03 7.03 0 0 0 3.934 0"
      fill="currentColor"
    />
  </IconBase>
));
