import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const SN = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#0b7226" d="M0 0h213.3v480H0z" />
      <path fill="#ff0" d="M213.3 0h213.3v480H213.3z" />
      <path fill="#bc0000" d="M426.6 0H640v480H426.6z" />
    </g>
    <path
      fill="#0b7226"
      d="M342 218.8h71.8l-56.6 43.6 20.7 69.3-56.6-43.6-56.6 41.6 20.7-67.3-56.6-43.6h69.8l22.7-71.3z"
    />
  </FlagIconBase>
));
