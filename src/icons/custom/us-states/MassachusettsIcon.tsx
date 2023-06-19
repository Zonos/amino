import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const MassachusettsIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M1 27.318h.481l6.253-1.443.481.48 10.102-2.886v.481l3.848-1.443.48 1.443h.962v1.444l1.444.48.48-1.443h.482v.962l-.481.963.48 1.924.482.48.48-.961.482-.481.48.48.482-.961v-.962h.48l.963-.962v-.963h.962l.48.963v1.443h.963l.48-.963.482-.48 1.443-.482 2.886-1.443v-1.443l-.481-.48-.481-.963-.962-1.443h-.481l.48.962s1.112 1.05 1.427 1.575c.166.276.017.83.017.83l-1.443.481-.481.481-.481.481h-2.886l-.481-.962v-1.443l-.962.481-1.443-.48.48-1.444-1.923-1.924-.962.48-.481.482-.962-.481-.481-.481v-.962l.48-.481v-.481l.963-.482-.481-.48v-.963l1.924-.48.48-.963-.961.481-.962-.48-.481-.482v-.962h-.962l.48-.962h-.961l-.962.481-.481.962h-.481l-.962 1.924-1.444.481-10.1 2.406-8.178 1.443L1 27.317Zm29.823 1.443v.962l.962-.962 1.924-.481-1.443-.962-.481.962-.962.48Zm6.253-.481.481.48h.962l.481-.48-.481-.962-.481.962h-.962ZM25.05 26.837l-.481.962.48 1.443.482-.481-.481-1.924Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
