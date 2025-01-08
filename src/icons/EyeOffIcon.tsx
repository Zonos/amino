import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const EyeOffIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M19.78 4.22a.75.75 0 0 1 0 1.06l-5.658 5.659h-.001l-3.181 3.182h-.001l-5.659 5.66a.75.75 0 0 1-1.06-1.061l2.086-2.086a9.1 9.1 0 0 1-1.729-2.57C4.202 13.234 4 12.452 4 12c0-.39.15-1.01.412-1.674a9.3 9.3 0 0 1 1.31-2.288C6.958 6.458 8.974 5 12 5c1.882 0 3.384.565 4.553 1.387L18.72 4.22a.75.75 0 0 1 1.06 0m-9.23 8.168 1.838-1.837a1.5 1.5 0 0 0-1.837 1.837Zm2.974-2.973a3.001 3.001 0 0 0-4.109 4.11l-2.049 2.048a7.6 7.6 0 0 1-1.422-2.125C5.604 12.693 5.5 12.14 5.5 12c0-.11.07-.522.307-1.123a7.8 7.8 0 0 1 1.096-1.915C7.917 7.667 9.526 6.5 12 6.5c1.44 0 2.576.394 3.472.967z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M18.295 9.326a.75.75 0 0 1 1.003.344c.239.488.41.946.524 1.335.109.372.178.727.178.995 0 .39-.15 1.01-.412 1.674a9.3 9.3 0 0 1-1.31 2.288C17.042 17.542 15.026 19 12 19a8.4 8.4 0 0 1-2.196-.282.75.75 0 0 1 .392-1.448A7 7 0 0 0 12 17.5c2.474 0 4.083-1.167 5.097-2.462a7.8 7.8 0 0 0 1.096-1.915c.237-.601.307-1.013.307-1.123 0-.058-.024-.253-.118-.575a7 7 0 0 0-.431-1.095.75.75 0 0 1 .344-1.004"
        fill="currentColor"
      />
    </IconBase>
  ),
);
