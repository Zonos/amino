import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const HelpDuotoneIcon = forwardRef<
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
      d="M10.25 10.25a1.75 1.75 0 1 1 2.431 1.613c-.616.26-1.431.885-1.431 1.887a.75.75 0 0 0 1.5 0c0-.053.02-.128.108-.228.092-.104.236-.205.408-.278A3.25 3.25 0 1 0 8.75 10.25a.75.75 0 0 0 1.5 0m2.5 5.75a.75.75 0 0 0-1.5 0v.25a.75.75 0 0 0 1.5 0z"
      fill="currentColor"
    />
  </IconBase>
));
