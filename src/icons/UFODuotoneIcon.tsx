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
      d="M7.284 7.049C7.96 5.373 9.747 4.25 11.75 4.25s3.79 1.123 4.467 2.799c.87.348 1.63.808 2.201 1.366.647.633 1.082 1.428 1.082 2.335 0 1.446-1.082 2.582-2.446 3.313-1.396.747-3.272 1.187-5.304 1.187s-3.908-.44-5.304-1.187C5.082 13.332 4 12.196 4 10.75c0-.907.435-1.702 1.082-2.335.57-.558 1.33-1.018 2.202-1.366"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M7.156 7.415C7.707 5.539 9.604 4.25 11.75 4.25s4.043 1.289 4.594 3.165q.154.521.156 1.085c0 .603-.141 1.143-.428 1.603a2.93 2.93 0 0 1-1.142 1.035c-.888.47-2.037.612-3.18.612s-2.292-.142-3.18-.612a2.93 2.93 0 0 1-1.142-1.035C7.14 9.643 7 9.103 7 8.5q.002-.563.156-1.085"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M9.25 16a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75m2.5 0a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-1.5 0v-2.75a.75.75 0 0 1 .75-.75m2.5 0a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75"
      fill="currentColor"
    />
  </IconBase>
));
