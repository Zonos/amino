import React from 'react';
import * as icons from '../../icons';

export const IconsConsumer = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(icons).map(([args, caller]) => (
        <div key={args}>
          <div style={{ width: 20, height: 20, margin: 60 }}>
            {args}
            {/* @ts-ignore */}
            {caller(args)}
          </div>
        </div>
      ))}
    </div>
  );
};
