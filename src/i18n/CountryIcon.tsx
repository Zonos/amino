import React, { forwardRef } from 'react';

import * as icons from './flags';

export type ICountryCode = keyof typeof icons;
export type ICountryIconScale = 'small' | 'medium' | 'large';

export type CountryIconProps = { iconScale: ICountryIconScale } & {
  code: ICountryCode;
};

export const CountryIcon = forwardRef<SVGSVGElement, CountryIconProps>(
  ({ code, iconScale }, ref) => {
    const Icon = icons[code];
    if (iconScale === 'small') {
      return <Icon ref={ref} width={16} height={12} />;
    }
    if (iconScale === 'medium') {
      return <Icon ref={ref} width={20} height={15} />;
    }

    return <Icon ref={ref} width={32} height={24} />;
  }
);
