import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const TagDuotoneIcon = forwardRef<
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
      d="M12.803 4a2.75 2.75 0 0 0-1.901.763l-6.043 5.782a2.75 2.75 0 0 0-.043 3.931l4.708 4.708a2.75 2.75 0 0 0 3.932-.043l5.781-6.042A2.75 2.75 0 0 0 20 11.197V5.75A1.75 1.75 0 0 0 18.25 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <circle cx="14.45" cy="9.55" fill="currentColor" r="1.25" />
  </IconBase>
));
