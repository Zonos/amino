import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ImageDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C8C8CB'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M3 17.69V15.4l1.508-.842 1.504-.86a3 3 0 0 1 2.976 0l1.26.721a1 1 0 0 0 1.161-.12l2.273-2.02a3 3 0 0 1 3.657-.255L21 14.464v2.405l-4.77-3.18a1 1 0 0 0-1.22.084l-2.272 2.02a3 3 0 0 1-3.481.363l-1.26-.72a1 1 0 0 0-.993 0l-1.516.866L3 17.69ZM9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
    />
  </IconBase>
));
