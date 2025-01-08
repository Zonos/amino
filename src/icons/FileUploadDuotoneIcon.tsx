import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const FileUploadDuotoneIcon = forwardRef<
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
      d="M6.5 5.75c0-.69.56-1.25 1.25-1.25h5v4c0 .967.784 1.75 1.75 1.75h3V12a.75.75 0 0 0 1.5 0V9.59c0-.05-.198-.12-.205-.17.01-.198-.15-.243-.295-.42L14 3.5c-.175-.213-.158-.418-.385-.473A1 1 0 0 0 13.382 3H7.75A2.75 2.75 0 0 0 5 5.75v12.5A2.75 2.75 0 0 0 7.75 21h2.75a.75.75 0 0 0 0-1.5H7.75c-.69 0-1.25-.56-1.25-1.25z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M13.246 3.044a.75.75 0 0 1 .832.228l4.75 5.75a.75.75 0 0 1-.578 1.228H14.5a1.75 1.75 0 0 1-1.75-1.75V3.75a.75.75 0 0 1 .496-.706M16 15a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 16 15"
      fill="currentColor"
    />
  </IconBase>
));
