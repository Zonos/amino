import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const KentuckyIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="m1 30.05 7.227-.699v-.466l-.233-.7h1.399l21.447-2.098.467-.466 2.564-1.4.233-.699 1.166-.466v-.466l.466-.466v-.7l1.632-.933L39 18.393v-.233h-.7l-1.165-.7-.932-1.165-.234-.466-.932-.933.233-.933-.233-.699-.466-.7-.933-.232-.466-1.166-.933.7-.233.466h-.7l-.232.233-.467-.467h-.932l-.466.7-.467-.233-.7-.7-1.165.233-.7-.233-.232-.466-.466-.933h-.467L24.546 10l-.466.466-.7-.466-.699.7.233.466v.466l.466.233v.7h-.699l-1.166.699-.466-.233-.932.233.233 1.166-.467.7h-.466v.932l-.466.233h-.466l-.233.932v.933l-.7.466-.7-.466-.699-.233-.233-.466-.466.7-.466.932-.233.7-.467-.234-.699-.466-.7.233-.233.233-.466.932-.466-.466-1.166-.466-.7.466-.232-.466v.7l-.233.232-.233-.466-.467.233-.7-.233v.933h-.699l-.233.466-.233.7.466.466v.466l-1.865.7-.233.699.467.7.233.466-.467.233h-.233l-1.632-.7h-.699l-.466.467-.466.7.233.232-.233.233h.466l-.233.933.233.466-.466 1.4-.7-.467v.233l-.233.7Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
