import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CopilotIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.42 17.483a.994.994 0 0 0 1.429-.022 8 8 0 1 0-11.698 0 .994.994 0 0 0 1.43.022l2.895-2.896c.938.554 2.11.554 3.048 0l2.895 2.896Zm.176-10.077a6.5 6.5 0 0 1 .5 8.632l-2.798-2.798c-.404-.404-.997-.357-1.362-.065a1.5 1.5 0 0 1-1.872 0c-.365-.292-.958-.339-1.362.065l-2.798 2.798a6.501 6.501 0 0 1 9.692-8.632"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M13.967 18.722a.75.75 0 0 0-.42-1.44 5.53 5.53 0 0 1-3.094 0 .75.75 0 1 0-.42 1.44 7.03 7.03 0 0 0 3.934 0"
        fill="currentColor"
      />
    </IconBase>
  ),
);
