import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const SouthDakotaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M13.109 27.459C10.072 27.407 4 27.102 4 27.102l.201-11.07h.202l.2-5.032s11.213.201 16.906.201c4.504 0 13.686-.201 13.686-.201l-.201.604-.403.604-.604.402.604 1.208.805.201.403.604.201 9.862h-.604v.403l.403.402-.202.604.403.403-.201 1.61-.403.604L36 29.92h-.403l-.402-.604v-.403h-.604l-.201-.201-.604-.201h-.604l-.603-.604-1.007.201h-1.409l-.402.403h-.604l-1.61-1.007s-9.626.037-14.438-.045Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".941"
      />
    </StateIconBase>
  ),
);
