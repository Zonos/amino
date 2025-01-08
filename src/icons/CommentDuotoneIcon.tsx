import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const CommentDuotoneIcon = forwardRef<
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
      d="M12 5c-2.08 0-4.292.437-6.011 1.493C4.235 7.571 3 9.3 3 11.76c0 1.108.251 2.083.706 2.925.198.364.256.672.201.918l-.298 1.345c-.144.65.135 1.232.562 1.593a2.02 2.02 0 0 0 1.616.433l3.65-.579c.202-.032.422-.03.652 0a14 14 0 0 0 1.911.126c2.08 0 4.292-.437 6.011-1.494C19.765 15.95 21 14.221 21 11.76c0-2.46-1.235-4.189-2.989-5.267C16.291 5.437 14.08 5 12 5"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M9.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M16 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      fill="currentColor"
    />
  </IconBase>
));
