import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ArrowSwapDuotoneIcon = forwardRef<
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
      d="M15.822 12.284a.75.75 0 0 1 0-1.061l1.72-1.721H8.75a.75.75 0 1 1 0-1.5h8.793L15.82 6.28a.75.75 0 1 1 1.06-1.06l2.826 2.825a1 1 0 0 1 0 1.414l-2.824 2.825a.75.75 0 0 1-1.061 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M8.178 11.716a.75.75 0 0 1 0 1.061l-1.72 1.721h8.792a.75.75 0 0 1 0 1.5H6.457L8.18 17.72a.75.75 0 1 1-1.06 1.06l-2.826-2.825a1 1 0 0 1 0-1.414l2.824-2.825a.75.75 0 0 1 1.061 0Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
  </IconBase>
));
