import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const IllinoisIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M26.076 2 12.23 3.385l1.154.923V5l1.385.462.23 1.846-.692.692v.923l-1.384.923-1.846.462-.462 1.384.923.923.231.693-.923.923v.923l-1.384.923.23.923-.23.23-.231.462-.231.923L9.462 20l.692 1.385 1.384 1.153.231.462 1.385.692.461.693v.692l.462 1.154.461.461.692-.692h.923l.693.692-.231.231v.923l-.692 1.846v.923L17.769 32l1.384.692h.23l.462.693.923.461v.923l.462.462v.23l-.23.693v.23l.691.924v.461l.693.231v-.462l.461.462.23-.23-.23-.232.462-.692.461-.461h.692l1.616.692h.23l.462-.23-.23-.462-.462-.693.23-.692.693-.23 1.154-.462v-.462l-.462-.461.23-.693.232-.461-.231-.693.23-.23v-.923l.462-.462-.462-.461.231-.462.462-.23.461-.924.462-.461v-.693l.461-.692v-.462l-.23-.692v-.461l-.462-.693-.461-.461.461-.231-.23-.692.46-.462-1.614-15-.693-.692-.23-.692v-.693l-.693-.461-.23-.693-.231-.23V2Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  )
);
