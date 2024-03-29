import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const VirginiaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M37.705 23.899v-.432h.215v-1.08l-.431-.648h-1.512l.216.648-.648-.216-.431.432v-.648l-1.08-.431v-.648H32.74l-.432-.432-1.512.216v-.432l1.728-.216.216.432.216-.648.215.648h1.08v.432l1.295.648.432-.432-.431-.216v-.432l-.432-.216h-.648l-1.511-1.296v-.431l1.51 1.295h.649l-.432-.432.216-.647.863.647-.216-.647-.647-.432-.864-.216-.432-.648-.647-.216-.864-.648-.648-.863h-.432l-.647-.216.215-.216h.864l1.512 1.511h.431l.864.864v-.432l.648.432v-.864l-.216-.432.432-.216-.648-.215-.864-.216-.216-.432-.647-.216-.432.216-.864-.216-.648-.648v-.432l-.647.648h-.864v-1.943l.432-.432.432-.216v-.648l-.216-.432-.216-.216h-.648l-.216-.431h-.863l-.432-.432.216-.648L27.125 9h-.864l-.216 1.296L23.455 9l-.216.216.215.432-.215.432v.647l-.432.648v.432l-.432.432v.216h-.432l-.216.864-.648-.216-.215.216-.216.431v.648l-.216.216v.648l-.432.432h-.864l-.431-.432h-.432l-.216.216v.863l-.432.648.216.216-.648.648.216.216-.216.864-.864 1.295-.215.648v.432h.431v.216l-.431.431.215.216-.863.648-.216-.216-.864.648-.431-.216-.432.216.216.432-.216.432h-.864l-.432.432-.863-.432-.216.432-.648.647-.648-.216-.216-.216H8.99l-.216-.431h-.216v-.432H8.34v-.432h-.216l-1.51 1.943-1.512.864v.648l-.432.431v.432l-1.08.432-.215.648L1 30.161l9.5-1.512v.216l27.205-4.966Zm.215-9.069v.432l-.215.216.215.432-.431.647-.216.648v.864l-.216.864.216.863.216.216.216-.648V18.07l.215-.648.648.216v-1.296l.432-.863-.216-.432v-.648l-.864.432Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
