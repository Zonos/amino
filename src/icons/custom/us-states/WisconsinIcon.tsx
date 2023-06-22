import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const WisconsinIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m7.41 5.836-.262.787h-.525l.262 2.623v1.574l-2.098 1.312-.262.787-.525.787v.787l.787.262.524.787-.262 1.05-.262.786.262.525-.262.262.262.525-.262 1.573 1.311 1.05h1.05l.786.787 1.05.262 1.049 1.05.787 1.049.787.524h1.049l1.049 1.05.262.786v2.099h.262l.263.787.787.524-.525.787.262 1.837.787 1.573h1.574l.525 1.312 15.737-1.574-.262-1.05.262-.524v-.787l-.524-.262-.263-1.05-.262-1.573v-1.05l.262-.786v-.787l.525-1.05-.525-.524.263-1.574.262-.787.787-.525-.525-.787v-1.573l.787-1.312-.262-.787.787-.787.262-1.312.262-1.049.525-.787h-.525l-.262.787-.525.787h-.262v.787l-.524.525.262.524-.262.263h-.263l-.787.262-.524 1.05-.525.524-.524.787-.525-.262v-.787l.525-1.312.524-.787.787-.525v-.524l-.787-.525.525-1.574h-.262l-.787.263h-.263l.525-1.05-.525-1.311-.786-.525h-.787v-.787l-.787-.262-1.836-.262-1.05.262-1.049-.525-3.41-.787-2.885-.524-.787-1.05-.787-.262-1.836-.524-1.049.524V6.1l.525-1.837L13.967 4l-1.311.787-.787.262-1.836 1.05-1.574.262-1.05-.525Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);