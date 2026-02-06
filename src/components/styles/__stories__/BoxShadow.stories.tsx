import { Fragment } from 'react';

import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Box Shadows',
};

export default meta;

const shadows = [
  { label: 'Inset', value: 'inset' },
  { label: 'Base', value: 'small' },
  { label: 'Medium', value: 'base' },
  { label: 'Large', value: 'medium' },
  { label: 'XL', value: 'large' },
  { label: '2XL', value: 'larger' },
] as const;

type ShadowIntensity = (typeof shadows)[number]['value'];
type AminoShadow = `--amino-shadow-${ShadowIntensity}`;

export const BoxShadows = () => (
  <div className="bg-gray-0 p-[8px_24px]">
    {shadows.map(({ label, value }) => {
      const aminoShadow: AminoShadow = `--amino-shadow-${value}`;
      return (
        <Fragment key={aminoShadow}>
          <p>Shadow intensity: {label}</p>
          <div
            className="mb-10 shadow-[var(--amino-box-shadow-stories-box-shadow)] bg-gray-100 p-[16px_24px]"
            style={{ '--amino-box-shadow-stories-box-shadow': aminoShadow }}
          >
            <p>var({aminoShadow})</p>
          </div>
        </Fragment>
      );
    })}
  </div>
);
