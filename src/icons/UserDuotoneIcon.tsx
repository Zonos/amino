import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const UserDuotoneIcon = forwardRef<
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
      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M12 13.25c-4.586 0-6.753 1.9-7.733 3.64a1.9 1.9 0 0 0 .205 2.228c.477.562 1.236.882 2.035.882h10.986c.799 0 1.559-.32 2.035-.882a1.905 1.905 0 0 0 .206-2.228c-.98-1.74-3.148-3.64-7.734-3.64"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
