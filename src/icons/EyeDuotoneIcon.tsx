import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const EyeDuotoneIcon = forwardRef<
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
      d="M12 5C8.974 5 6.958 6.458 5.722 8.038a9.3 9.3 0 0 0-1.31 2.288C4.149 10.991 4 11.61 4 12s.15 1.01.412 1.674c.272.69.697 1.505 1.31 2.288C6.958 17.542 8.974 19 12 19s5.042-1.458 6.278-3.038a9.3 9.3 0 0 0 1.31-2.288C19.851 13.009 20 12.39 20 12s-.15-1.01-.412-1.674a9.3 9.3 0 0 0-1.31-2.288C17.042 6.458 15.026 5 12 5"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
