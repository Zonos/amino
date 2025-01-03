import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const UFODuotoneIcon = forwardRef<
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
      d="M7.284 7.049C7.96 5.373 9.747 4.25 11.75 4.25s3.79 1.123 4.466 2.799c.871.348 1.631.808 2.202 1.366.647.633 1.082 1.428 1.082 2.335 0 1.446-1.082 2.582-2.446 3.313-1.396.747-3.272 1.187-5.304 1.187-2.032 0-3.908-.44-5.304-1.187C5.082 13.332 4 12.196 4 10.75c0-.907.435-1.702 1.082-2.335.57-.558 1.33-1.018 2.202-1.366Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M7.156 7.415C7.707 5.539 9.604 4.25 11.75 4.25c2.146 0 4.043 1.289 4.594 3.165.102.347.156.71.156 1.085 0 .603-.141 1.143-.428 1.603a2.934 2.934 0 0 1-1.142 1.035c-.888.47-2.037.612-3.18.612-1.143 0-2.292-.142-3.18-.612a2.934 2.934 0 0 1-1.142-1.035C7.14 9.643 7 9.103 7 8.5c0-.374.054-.738.156-1.085Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M9.25 16a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm2.5 0a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-1.5 0v-2.75a.75.75 0 0 1 .75-.75Zm2.5 0a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Z"
      fill="currentColor"
    />
  </IconBase>
));
