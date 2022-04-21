import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const LB = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`} fillRule="evenodd" clipRule="evenodd">
        <path d="M16 0H0v3h16V0zm0 9H0v3h16V9z" fill="#F50101" />
        <path d="M0 3h16v6H0V3z" fill="#F7FCFF" />
        <path
          d="M10.757 6.257c.038.433-1.563-.18-1.563-.007 0 .174 1.715.479 1.712.867-.003.39-2.033-.11-1.578.064.455.175 1.433.594 1.322.854-.238.557-1.813-.386-1.944-.2-.212.3 1.162 1 1.15 1.066-.022.128-.938-.201-1.15.065-.172-.049-.252-.28-.305-.311l-.339-4.362s.304 4.107-.084 4.225c-.388.118-1.466.477-1.497.298-.012-.067 1.298-.681 1.086-.981-.156-.221-1.736.563-1.836.109-.45-.324 1.454-.604 1.454-.935 0-.331-1.741.392-1.533-.069.208-.46 1.602-.626 1.628-.69.048-.116-1.55.182-1.55 0 0-.344.957-.411 1.55-.72.035-.354-1.44.347-1.55.064-.109-.283 1.886-1.016 1.837-1.074-.077-.09-1.685.317-1.42.103.515-.414 1.52-.979 1.75-1.13 0 0 .028-.056.058-.037l.063-.04s0 .355-.005.078c-.005-.277 2.355.935 2.382 1.243.03.359-1.459-.27-1.424.082.303.188 1.164.55 1.52.71.161.073-1.189-.153-1.16-.042.072.282 1.388.317 1.426.77z"
          fill="#52AB0B"
        />
      </g>
    </CountryIconBase>
  );
});
