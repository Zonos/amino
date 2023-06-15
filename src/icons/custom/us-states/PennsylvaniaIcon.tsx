import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const PennsylvaniaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m4 15.334 1.455 8.97 1.212 6.061 24.727-4.849.242-.727.485-.485h1.212l.243-.485.727-.485v-.485L36 21.395v-.485l-1.455-.97h-.484l-.243-.97-.727.243-.242-.97.242-.727.242-.485-.484-.485v-.485l.484-.485.485-.97v-.485l.727-.727-.484-.485h-1.455l-.485-.727V10.97l-.727-.485-.485.242-.242-.485-.728-.242-22.06 4.606-.243-1.697L4 15.334Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
