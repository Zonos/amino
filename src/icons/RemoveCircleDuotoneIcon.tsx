import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const RemoveCircleDuotoneIcon = forwardRef<
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
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M14.475 9.525a.75.75 0 0 1 0 1.06L13.061 12l1.414 1.414a.75.75 0 1 1-1.06 1.06L12 13.062l-1.414 1.414a.75.75 0 0 1-1.06-1.06L10.94 12l-1.415-1.414a.75.75 0 0 1 1.061-1.06L12 10.938l1.414-1.414a.75.75 0 0 1 1.061 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
