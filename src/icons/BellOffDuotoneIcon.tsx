import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BellOffDuotoneIcon = forwardRef<
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
      d="M12 5.5a5.25 5.25 0 0 0-5.25 5.25v.933c0 .361-.112.714-.32 1.009l-1.317 1.865a.59.59 0 0 0 .001.692.75.75 0 1 1-1.228.862 2.09 2.09 0 0 1 .001-2.418l1.317-1.866a.25.25 0 0 0 .046-.144v-.933a6.75 6.75 0 0 1 9.818-6.014.75.75 0 1 1-.683 1.336A5.2 5.2 0 0 0 12 5.5m4.889.513.526.706a6.72 6.72 0 0 1 1.335 4.031v.933a.25.25 0 0 0 .046.144l.59.837C20.674 14.486 19.37 17 17.14 17H6.227L16.89 6.013Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M19.78 5.28a.75.75 0 0 0-1.06-1.06l-14.5 14.5a.75.75 0 1 0 1.06 1.06zM8.25 17h7.5v.25A2.75 2.75 0 0 1 13 20h-2a2.75 2.75 0 0 1-2.75-2.75z"
      fill="currentColor"
    />
  </IconBase>
));
