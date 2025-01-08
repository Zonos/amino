import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const FolderListDuotoneIcon = forwardRef<
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
      d="M5.75 5A2.75 2.75 0 0 0 3 7.75v8.5A2.75 2.75 0 0 0 5.75 19h12.5A2.75 2.75 0 0 0 21 16.25V9.673a2.75 2.75 0 0 0-2.75-2.75h-5.635a.25.25 0 0 1-.223-.137l-.416-.824A1.75 1.75 0 0 0 10.414 5z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M15.75 11a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H15a.75.75 0 0 1 .75.75M15 15.75a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5zm-5.5 0a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm0-4a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
