import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const MaineIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="m13.669 3.134-2.551 6.52.283 1.984-.567.85v.567l-.283.85.567.284-.284.283v1.134h.567l-.567 1.134v.85l-.85 1.134-.283.85.567.568-.284.567-.567-.284v1.418l-.85-.85-.567.85 4.535 13.322v.85l1.134.568v.85l1.134.567.283-1.417-.283-1.134.85-.567.283-.284-.283-1.133.85-.284-.567-1.134 1.134-1.417h.567v.85l.284-.567.566.567.284-.567-1.417-1.7 1.417 1.133V28.93l.85 1.418.567-1.985.85.567.567-.567.284-1.134-.284-1.984.284-.567.567-.85.283.567.567.85h.85l.284-1.134.85.284.567.567.567-1.701-.567-.567 1.134.567.85-.567.85-1.7h.567l1.134-.568 1.417-1.134.284-1.134-.85.284v-1.134l-1.134-.85-.567.283-1.134-.567-.284-.567-.283-.85.284-.85-.567-.284H26.14l-.567-.283-.283-1.701-2.834-8.22-1.418-.568-.85-.85-1.134.283-.567.85-1.133.568-1.134.567-.85-.284-.284-1.134-1.417.284Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
