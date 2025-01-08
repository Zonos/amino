import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const SendDuotoneIcon = forwardRef<
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
      d="m10.876 13.492-6.297-2.795c-.831-.369-.778-1.566.083-1.86L18.689 4.05a1 1 0 0 1 1.276 1.25l-4.452 14.017c-.276.868-1.473.946-1.859.12zm8.374-8.42"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M14.46 9.897a.75.75 0 0 1 0 1.06l-1.93 1.93a.75.75 0 0 1-1.06-1.06l1.929-1.93a.75.75 0 0 1 1.06 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
