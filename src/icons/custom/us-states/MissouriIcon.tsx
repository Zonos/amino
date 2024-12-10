import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const MissouriIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="M10.353 5.919C7.57 6.077 2 6.161 2 6.161v.465l.465.232.464 1.162.697.464.464.697v.464l.465.465 1.161.697.465-.232.464.232.232.697-.464.232-.232.464-.465.697.465.465.696.464v.465l.465.697h.697l.464.232.465 14.169.232 3.252 23.458-1.626.697.697v.464l-1.161 1.626-.233.232v.465l3.252-.465.232-.697.465-.232-.465-.697h.465l-.233-.696h.465l-.232-.93v-.464l.464.464.232-.232.233-.697v-.232l.697.465.232-.697.232-.697-.232-.465.232-.929h-.465l-.464-.464v.464l-.697-.232v-.464l-.697-.93v-.232l.233-.697v-.232l-.465-.464v-.93l-.929-.464-.464-.697h-.233l-.929-.465-.464-.232-1.858-1.393v-.93l.697-1.858v-.697l.232-.464-.697-.697h-.929l-.697.697-.464-.465-.465-1.161v-.697l-.464-.697-1.394-.697-.232-.464-1.394-1.161-.232-.465-.232-.465-.233-.464-.464-1.394.232-.929.232-.464L22.44 5s-8.057.69-12.086.919Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
