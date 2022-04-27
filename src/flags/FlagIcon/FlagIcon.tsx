import React, { forwardRef } from 'react';

import * as icons from '../FlagIndex';

export type IFlag = keyof typeof icons;
export type IFlagScale = 'small' | 'medium' | 'large';

export type FlagIconProps = { iconScale: IFlagScale } & {
  code: IFlag;
};

export const FlagIcon = forwardRef<SVGSVGElement, FlagIconProps>(
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
