import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const FileDuotoneIcon = forwardRef<
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
      d="M7.75 3A2.75 2.75 0 0 0 5 5.75v12.5A2.75 2.75 0 0 0 7.75 21h8.5A2.75 2.75 0 0 0 19 18.25V9.59a1 1 0 0 0-.229-.637l-4.618-5.59a1 1 0 0 0-.77-.363z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M14.078 3.272a.75.75 0 0 0-1.328.478V8.5c0 .967.784 1.75 1.75 1.75h3.75a.75.75 0 0 0 .578-1.228z"
      fill="currentColor"
    />
  </IconBase>
));
