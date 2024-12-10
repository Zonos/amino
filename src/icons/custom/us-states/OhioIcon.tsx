import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const OhioIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="m5.661 10.642 2.717 21.735.604-.603.905.603.604-.603.604.603h.604l.905 1.812.906.302 1.51-.302.905.905.604.302.603-.905h1.208l.603.603.302-.302h.906l.302-.603 1.207-.906.604 1.51 1.207.301.604.906.604-.302 1.207-.604v-.905l.604-.302-.302-1.51v-.603l.302-.906.604-.604.604.302v.604h.301l.604-.604v-.604l-.302-.302.302-.603.302-1.208.604-.302v-.604l.905-.603.604.603 1.208-1.207v-.906l1.509-.905v-1.208l.302-1.811v-1.51l.302-1.207-.302-.906.302-.906-.906-.603.906-.604L32.528 4l-4.83 3.019-2.114 2.415-.905.302H23.47l-1.207.604-.906.302-.302.603-1.81-.302h-.604l-.604.302-.906-.302 1.811-.905h-.603l-.604.302-1.51-.604-1.509-.302-.604-.302-8.452 1.51Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
