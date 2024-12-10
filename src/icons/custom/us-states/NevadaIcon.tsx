import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const NevadaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="M21.373 3.79c3.523.535 10.569 1.436 10.569 1.436l-3.396 27-.17.34-.34.68h-.51l-.169-.68-.34.17-.509-.34-.68.34-.169.68.17.509-.17.34.17.848-.17.51.17.849v.679l-.34.17V38L8 15.755 10.547 2s7.274 1.25 10.826 1.79Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
