import React, { ReactElement } from 'react';

import * as largeIcons from './large';
import * as mediumIcons from './medium';
import * as smallIcons from './small';

export type ICountryCode = keyof typeof largeIcons;
export type ICountryIconScale = 'small' | 'medium' | 'large';

export type CountryIconProps = { scale: ICountryIconScale } & {
  code: ICountryCode;
};

export const CountryIcon = ({
  code,
  scale,
}: CountryIconProps): ReactElement => {
  if (scale === 'small') {
    const SmallIcon = smallIcons[code] || smallIcons.Default;
    return <SmallIcon />;
  }
  if (scale === 'medium') {
    const MediumIcon = mediumIcons[code] || mediumIcons.Default;
    return <MediumIcon />;
  }

  const LargeIcon = largeIcons[code] || largeIcons.Default;
  return <LargeIcon />;
};
