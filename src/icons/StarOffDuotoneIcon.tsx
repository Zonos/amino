import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const StarOffDuotoneIcon = forwardRef<
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
      d="M12.646 4.37a.75.75 0 0 0-1.292 0L9.01 8.353 4.56 9.525a.75.75 0 0 0-.36 1.235l2.438 2.625a.75.75 0 1 0 1.1-1.02L6.15 10.657l3.44-.905a1 1 0 0 0 .608-.46L12 6.228l.604 1.026a.75.75 0 1 0 1.293-.76l-1.25-2.125Zm2.639 4.061a.75.75 0 0 0-.727.2l-7.875 8.031a.75.75 0 0 0-.196.36l-.468 2.062a.75.75 0 0 0 1.053.843L12 17.581l4.928 2.346a.75.75 0 0 0 1.053-.843L16.82 13.97l2.98-3.21a.75.75 0 0 0-.358-1.235L15.285 8.43Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M19.78 4.22a.75.75 0 0 1 0 1.06l-14.5 14.5a.75.75 0 0 1-1.06-1.06l14.5-14.5a.75.75 0 0 1 1.06 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
