import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const DislikeDuotoneIcon = forwardRef<
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
      d="M11.445 19a2.75 2.75 0 0 0 1.906-.768l2.305-2.217a2.75 2.75 0 0 0 .844-1.982V7.75A2.75 2.75 0 0 0 13.75 5H7.86c-1.292 0-2.41.9-2.687 2.162L4.05 12.296a2.75 2.75 0 0 0 2.686 3.339H8.25a.25.25 0 0 1 .25.25v1.365c0 .966.784 1.75 1.75 1.75z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M19.25 14.5a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
