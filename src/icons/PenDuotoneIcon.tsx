import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const PenDuotoneIcon = forwardRef<
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
      d="M12.785 4.384a1 1 0 0 0-1.57 0l-4.692 5.943a1.75 1.75 0 0 0-.246 1.747l1.775 4.339a1.75 1.75 0 0 0 1.62 1.087h4.657c.71 0 1.35-.43 1.62-1.087l1.774-4.339a1.75 1.75 0 0 0-.246-1.747z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M12.75 6.5a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0zM5 17.75C5 16.666 5.997 16 6.94 16h10.12c.943 0 1.94.666 1.94 1.75v.5c0 1.084-.997 1.75-1.94 1.75H6.94C5.997 20 5 19.334 5 18.25z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
