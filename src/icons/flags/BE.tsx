import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const BE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path d="M0 0h213.3v480H0z" />
      <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
    </g>
  </FlagIconBase>
));
