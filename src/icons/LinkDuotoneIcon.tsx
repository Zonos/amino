import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LinkDuotoneIcon = forwardRef<
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
      d="M17.655 6.35a4.993 4.993 0 0 0-7.06 0l-.543.543a.75.75 0 1 0 1.06 1.06l.543-.542a3.493 3.493 0 1 1 4.94 4.939l-.543.543a.75.75 0 1 0 1.06 1.06l.543-.542a4.993 4.993 0 0 0 0-7.061m-9.707 4.768a.75.75 0 1 0-1.06-1.06l-.543.542a4.993 4.993 0 1 0 7.06 7.06l.543-.542a.75.75 0 1 0-1.06-1.06l-.543.542a3.493 3.493 0 0 1-4.94-4.94z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M14.784 9.221a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
