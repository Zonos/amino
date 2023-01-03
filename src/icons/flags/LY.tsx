import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const LY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path d="M166.7-20h666.6v500H166.7z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${ids[0]})`} transform="matrix(.96 0 0 .96 -160 19.2)">
        <path fill="#239e46" d="M0-20h1000v500H0z" />
        <path d="M0-20h1000v375H0z" />
        <path fill="#e70013" d="M0-20h1000v125H0z" />
        <path
          fill="#fff"
          d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z"
        />
      </g>
    </FlagIconBase>
  );
});
