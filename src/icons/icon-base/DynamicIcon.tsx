import React, { ReactElement } from 'react';

import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

import * as icons from '../IconIndex';

export type DynamicIconType = Exclude<
  keyof typeof icons,
  'IconBase' | 'DynamicIcon'
>;
export type DynamicIconProps = IconProps & {
  /**
   * Only apply to the icon has secondary color (Duotone)
   * */
  secondaryColor?: Color;
} & {
  type: DynamicIconType;
};

export const DynamicIcon = ({
  size,
  color,
  type,
  secondaryColor,
  className,
}: DynamicIconProps): ReactElement => {
  if (type && icons[type]) {
    const Icon = icons[type];
    return (
      <Icon
        size={size}
        color={color}
        className={className}
        secondaryColor={secondaryColor}
      />
    );
  }
  return (
    <div
      title={`No icon type "${type}" available.`}
      style={{
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
