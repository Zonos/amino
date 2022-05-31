import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

export const FilterIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9924 5H6.00247C5.15088 5 4.689 5.99649 5.23941 6.64632L9.05224 11.1479C9.66415 11.8703 9.99997 12.7864 9.99997 13.7332V17.9978C9.99997 18.7271 10.7554 19.2111 11.4179 18.9063L13.4179 17.9863C13.7726 17.8231 14 17.4683 14 17.0778V13.7325C14 12.7866 14.3352 11.8712 14.9462 11.149L18.7559 6.64587C19.3057 5.99594 18.8437 5 17.9924 5ZM6.00247 3H17.9924C20.5464 3 21.9323 5.98782 20.2827 7.93762L16.4731 12.4408C16.1676 12.8019 16 13.2595 16 13.7325V17.0778C16 18.2493 15.318 19.3137 14.2537 19.8033L12.2537 20.7233C10.2662 21.6376 7.99997 20.1855 7.99997 17.9978V13.7332C7.99997 13.2598 7.83206 12.8018 7.5261 12.4405L3.71327 7.93896C2.06207 5.98949 3.4477 3 6.00247 3Z"
      fill="currentColor"
    />
  </IconBase>
);

export const FilterSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M18.9938 3H5.00624C3.3163 3 2.38809 4.96607 3.46198 6.27093L8.77214 12.7231C8.91946 12.9021 9.00001 13.1268 9.00001 13.3586V18.9929C9.00001 20.531 10.6636 21.4934 11.997 20.7268L13.997 19.5768C14.6175 19.22 15 18.5587 15 17.8429V13.3586C15 13.1268 15.0806 12.9021 15.2279 12.7231L20.538 6.27093C21.6119 4.96607 20.6837 3 18.9938 3Z"
      fill="currentColor"
    />
  </IconBase>
);

export const FilterDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M18.9938 3H5.00624C3.3163 3 2.38809 4.96607 3.46198 6.27093L8.77214 12.7231C8.91946 12.9021 9.00001 13.1268 9.00001 13.3586V18.9929C9.00001 20.531 10.6636 21.4934 11.997 20.7268L13.997 19.5768C14.6175 19.22 15 18.5587 15 17.8429V13.3586C15 13.1268 15.0806 12.9021 15.2279 12.7231L20.538 6.27093C21.6119 4.96607 20.6837 3 18.9938 3Z"
      fill="currentColor"
    />
  </IconBase>
);
