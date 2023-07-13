import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const KansasIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M19.096 11.418c-5.555.077-16.665.013-16.665.013L2 29.325s11.665.291 17.497.221C25.665 29.472 38 28.894 38 28.894l-.431-13.151-.431-.216h-.647l-.431-.646v-.432l-.647-.43-.431-.432.431-.647.216-.43.43-.216-.215-.647-.43-.216-.432.216L33.904 11s-9.872.35-14.808.418Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
