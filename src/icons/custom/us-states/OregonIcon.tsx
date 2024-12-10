import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const OregonIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase className={className} ref={ref} size={size}>
      <path
        clipRule="evenodd"
        d="m31.2 32.713 1.422-8.89.356-.71v-.534l.355-.356-.355-.355-.711-.178.177-1.067.89-1.067.71-.71.178-.534.711-1.067.178-.355.889-1.067-.178-.89-1.066-.888v-.534l-7.467-1.244-.533.356-1.6-.356-.534.178-1.6.178-.889.177-.889-.177L20 12.8l-.178-.177-.71.177-.179-.533-.889-.356-1.066-.177-1.778.533-.533-.356-1.245-.355V11.2l.178-1.244-.356-.89-.533-.533-.533.178h-.534l-.177-.533-.711.178-.356-.178-.178.355L9.69 8v.889l-.356.356v.71l.178.356-.355.356.177.711h-.355L7.91 14.4l-.178.534.178.355-.178.356-.177.356v.355l-.356.356-.356 1.6-.355.889.178.355-.356.178-.533.89h.355v.533l-.355-.178-.356.533-.178-.355-.533 1.244-.533 1.067.178.71-.178 1.068L4 26.312v.712l.356.71L20 30.936l11.2 1.778Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
