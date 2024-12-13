import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const IndianaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m10.303 4.685.907.605h.907l2.723-1.513 13.008-1.815v.605l2.722 21.782-.303.302.303.605v.605l.605.303v.907h-.908l-1.512.908-.605-.303-1.21.303.302 1.512-.605.908h-.605v1.21l-.605.302h-.604l-.303 1.21v1.21l-.907.606-.908-.605-.907-.303-.303-.605-.605.908-.303.605-.302.605-.302.907-.605-.302-.908-.605-.907.302-.303.303-.605 1.21-.605-.605-1.513-.605-.907.605-.303-.605v.907l-.302.303-.303-.605-.604.302-.908-.302v1.21h-.908L10 37.054l.303-.302v-1.21l.604-.605-.604-.605.302-.605.605-.303.605-1.21.605-.605v-.908l.605-.907v-.605l-.303-.908v-.605l-.604-.907-.606-.605.605-.303-.302-.908.605-.604-2.117-19.664Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
