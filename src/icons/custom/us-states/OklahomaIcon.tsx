import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const OklahomaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="M1 11.193s11.889.323 17.833.291C25.04 11.451 37.457 11 37.457 11l.193 2.894.964 5.594.386 9.645-1.157-.193-.579-.385-.579-.58-.578-.192-.58-.193-.77.386-.772-.193-1.158.386h-.385l-.965.193-.193.578h-.386l-.578-.193-.579-.192-.386-.386-.578.193-.965-.58-.771 1.351-.386-.964-.772.386-.578-.386h-.386l-.193-.579-1.157.965-.386-.772-.579-.193v-.579h-1.157l-.579.386-.579-.579-.578.193-1.158-.386h-.964v-.578l-.772-.772-.193.386h-.385l-.58.193-.578-.579-.579-.579h-.578V14.28L1 14.086v-2.893Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
