import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const NewYorkIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m2 28.475.21 1.474 19.158-4 .632.21.21.421.422-.21.631.42v1.054l.421.631h1.263l.421.421 3.79 1.264v-.211l-.21-.632-.422-.42v-.632h.21l.211.42.21.422.211.21.211 1.685.631-.632.211-.421-.421-.632.842-1.052-.42-.421-.633-4.211h-.21l.21-4.211-.21-.21-.842-3.79V15l-.421-.421-.21.21-.211.21v-1.263l-.21-.21v-.21l-.211-.211-.21-.632h-.211V11.42l.21-.42-.42-.632-.211-.843-.21-.42V8.052l-.212-.21V7l-5.894 1.474h-.632l-1.052.842-.422.632-1.263 1.684-.21.421v.632l-.632.631-1.473 1.474.21.21h1.052l.211.211-.21.421-.421.632h-.21l.42.42v.422l.421.21-.21.211v.421l-.421.21h-.421l-.843 1.053-.21.422-.842.42-.21.211h-1.264l-.42.21-.843.422H10l-.421-.421-1.895.21-.42.21H6.42l-2.526 1.053.21.421v.632h.842v.421l-.21.421.42.421v.422l-.42.631-.421.842-.842.632-.421.631L2 28.476Zm26.947 3.79-.21.21-.21.632.42-.21.21-.422-.21-.21Zm.421-.21v.21l.21.21.212-.21.21-.21.21-.211.422.21.21-.21 1.684-.842h.632v-.421h.42l.843-.632 1.053-.21.21-.422-.21-.21-.21.21-.211-.21.842-1.053-.21-.21-.843 1.052-.21.21-1.053.211h-.421l-.21.21h-.211v.211l-.842.211-.21.21-.422-.21v.421l-.21-.21-.21.21v.421l-.422.21-.21.211h-.421l-.211.21-.21.632Zm6.527-3.159v.21h.21l.632-.42.21-.421h.421l.632-.632-.842.421h-.421l-.421.21-.21.211-.211.421Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
