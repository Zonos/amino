import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const UZ = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(5);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <path d="M0 320h640v160H0z" fill="#1eb53a" />
        <path d="M0 0h640v160H0z" fill="#0099b5" />
        <path d="M0 153.6h640v172.8H0z" fill="#ce1126" />
        <path d="M0 163.2h640v153.6H0z" fill="#fff" />
        <circle cx="134.4" cy="76.8" fill="#fff" r="57.6" />
        <circle cx="153.6" cy="76.8" fill="#0099b5" r="57.6" />
        <g fill="#fff" transform="matrix(1.92 0 0 1.92 261.1 122.9)">
          <g id={`${ids[0]}`}>
            <g id={`${ids[1]}`}>
              <g id={`${ids[2]}`}>
                <g id={`${ids[3]}`}>
                  <path d="M0-6-1.9-.3 1 .7" id={`${ids[4]}`} />
                  <use
                    height="100%"
                    transform="scale(-1 1)"
                    width="100%"
                    xlinkHref={`#${ids[4]}`}
                  />
                </g>
                <use
                  height="100%"
                  transform="rotate(72)"
                  width="100%"
                  xlinkHref={`#${ids[3]}`}
                />
              </g>
              <use
                height="100%"
                transform="rotate(-72)"
                width="100%"
                xlinkHref={`#${ids[3]}`}
              />
              <use
                height="100%"
                transform="rotate(144)"
                width="100%"
                xlinkHref={`#${ids[2]}`}
              />
            </g>
            <use height="100%" width="100%" xlinkHref={`#${ids[1]}`} y="-24" />
            <use height="100%" width="100%" xlinkHref={`#${ids[1]}`} y="-48" />
          </g>
          <use height="100%" width="100%" x="24" xlinkHref={`#${ids[0]}`} />
          <use height="100%" width="100%" x="48" xlinkHref={`#${ids[0]}`} />
          <use height="100%" width="100%" x="-48" xlinkHref={`#${ids[1]}`} />
          <use height="100%" width="100%" x="-24" xlinkHref={`#${ids[1]}`} />
          <use
            height="100%"
            width="100%"
            x="-24"
            xlinkHref={`#${ids[1]}`}
            y="-24"
          />
        </g>
      </FlagIconBase>
    );
  },
);
