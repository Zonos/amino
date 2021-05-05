import React from 'react';

import { IconProps } from 'types';
import * as icons from 'icons';

export const IconsConsumer = ({ size, color }: IconProps) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(icons).map(([args, caller]) => (
        <div key={args}>
          <div style={{ width: size, height: size, margin: 60 }}>
            {args}
            {/* @ts-ignore */}
            {caller(args)}
          </div>
        </div>
      ))}
    </div>
  );
};
