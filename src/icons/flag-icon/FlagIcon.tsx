import { forwardRef } from 'react';

// eslint-disable-next-line import/no-internal-modules
import * as flags from '../flags/FlagIndex';

export type IFlag = keyof typeof flags;
export type IFlagScale = 'small' | 'medium' | 'large';

export type FlagIconProps = { iconScale: IFlagScale } & {
  code: IFlag;
};

export const FlagIcon = forwardRef<SVGSVGElement, FlagIconProps>(
  ({ code, iconScale }, ref) => {
    const Icon = flags[code];
    if (iconScale === 'small') {
      return <Icon ref={ref} width={16} height={12} />;
    }
    if (iconScale === 'medium') {
      return <Icon ref={ref} width={20} height={15} />;
    }

    return Icon ? <Icon ref={ref} width={32} height={24} /> : null;
  }
);
