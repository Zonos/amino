import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const PaletteDuotoneIcon = forwardRef<
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
      d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h4.5A2.75 2.75 0 0 0 14 17.25V6.75A2.75 2.75 0 0 0 11.25 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M13.377 5.007c.331.403.55.903.608 1.451q.066-.002.136-.002c.471.003.805.107.96.272l3.08 3.274a1.25 1.25 0 0 1-.017 1.731l-2.93 2.992a.75.75 0 0 0 1.072 1.05l2.93-2.992a2.75 2.75 0 0 0 .038-3.809l-3.08-3.273c-.6-.638-1.484-.741-2.043-.745a5 5 0 0 0-.754.05ZM9 16.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      fill="currentColor"
    />
  </IconBase>
));
