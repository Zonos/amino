import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const NZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path d="M0 0h600v300H0z" />
        </clipPath>
        <clipPath id={`${ids[1]}`}>
          <path d="m0 0 300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
        </clipPath>
        <g id={`${ids[2]}`}>
          <g id={`${ids[3]}`}>
            <path d="M0-.3v.5l1-.5z" />
            <path d="M.213.256-.081-.15l1.103-.183z" />
          </g>
          <use xlinkHref={`#${ids[3]}`} transform="scale(-1 1)" />
          <use xlinkHref={`#${ids[3]}`} transform="rotate(72 0 0)" />
          <use xlinkHref={`#${ids[3]}`} transform="rotate(-72 0 0)" />
          <use xlinkHref={`#${ids[3]}`} transform="scale(-1 1) rotate(72)" />
        </g>
      </defs>
      <path fill="#00247d" fillRule="evenodd" d="M0 0h640v480H0z" />
      <g transform="translate(-93 36.1) scale(.66825)">
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#fff"
          transform="matrix(45.4 0 0 45.4 900 120)"
        />
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="matrix(30 0 0 30 900 120)"
        />
      </g>
      <g transform="rotate(82 534.2 125) scale(.66825)">
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#fff"
          transform="rotate(-82 519 -457.7) scale(40.4)"
        />
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="rotate(-82 519 -457.7) scale(25)"
        />
      </g>
      <g transform="rotate(82 534.2 125) scale(.66825)">
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#fff"
          transform="rotate(-82 668.6 -327.7) scale(45.4)"
        />
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="rotate(-82 668.6 -327.7) scale(30)"
        />
      </g>
      <g transform="translate(-93 36.1) scale(.66825)">
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#fff"
          transform="matrix(50.4 0 0 50.4 900 480)"
        />
        <use
          xlinkHref={`#${ids[2]}`}
          width="100%"
          height="100%"
          fill="#cc142b"
          transform="matrix(35 0 0 35 900 480)"
        />
      </g>
      <path
        stroke="#fff"
        strokeWidth="60"
        d="m0 0 600 300M0 300 600 0"
        clipPath={`url(#${ids[0]})`}
        transform="scale(.60681 .73139)"
      />
      <path
        stroke="#cc142b"
        strokeWidth="40"
        d="m0 0 600 300M0 300 600 0"
        clipPath={`url(#${ids[1]})`}
        transform="scale(.60681 .73139)"
      />
      <path
        fill="#fff"
        d="M151.7 0v79.4H0V140h151.7v79.4h60.7v-79.3H364V79.4H212.4V0z"
        clipPath={`url(#${ids[0]})`}
        color="#000"
        fontFamily="sansSerif"
        fontWeight="400"
        overflow="visible"
      />
      <path
        fill="#cc142b"
        d="M163.8 0v91.5H0v36.4h163.8v91.5h36.4V128h163.9V91.5H200.2V0z"
        color="#000"
        fontFamily="sansSerif"
        fontWeight="400"
        overflow="visible"
      />
    </FlagIconBase>
  );
});
