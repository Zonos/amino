import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FilterSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M18.9938 3H5.00624C3.3163 3 2.38809 4.96607 3.46198 6.27093L8.77214 12.7231C8.91946 12.9021 9.00001 13.1268 9.00001 13.3586V18.9929C9.00001 20.531 10.6636 21.4934 11.997 20.7268L13.997 19.5768C14.6175 19.22 15 18.5587 15 17.8429V13.3586C15 13.1268 15.0806 12.9021 15.2279 12.7231L20.538 6.27093C21.6119 4.96607 20.6837 3 18.9938 3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
