import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const FolderUploadDuotoneIcon = forwardRef<
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
      d="M5.75 6.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25H12a.75.75 0 0 1 0 1.5H5.75A2.75 2.75 0 0 1 3 16.25v-8.5A2.75 2.75 0 0 1 5.75 5h4.664c.66 0 1.265.372 1.562.962l.416.824a.25.25 0 0 0 .223.137h5.635A2.75 2.75 0 0 1 21 9.673v.885a.75.75 0 0 1-1.5 0v-.885c0-.69-.56-1.25-1.25-1.25h-5.635a1.75 1.75 0 0 1-1.562-.961l-.416-.825a.25.25 0 0 0-.223-.137z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M18.75 13.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5z"
      fill="currentColor"
    />
  </IconBase>
));
