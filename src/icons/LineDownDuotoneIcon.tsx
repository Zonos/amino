import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LineDownDuotoneIcon = forwardRef<
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
      d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M6.25 7.25A.75.75 0 0 1 7 6.5h1.251a6.75 6.75 0 0 1 6.75 6.75v2.043l1.722-1.722a.75.75 0 1 1 1.06 1.06l-2.825 2.826a1 1 0 0 1-1.414 0l-2.824-2.824a.75.75 0 0 1 1.06-1.061l1.721 1.72V13.25c0-2.9-2.35-5.25-5.25-5.25H7a.75.75 0 0 1-.75-.75"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
