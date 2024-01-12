import { Fragment } from 'react';

import type { Meta } from '@storybook/react';

import styles from './BoxShadow.stories.module.scss';

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
  <div className={styles.styledWrapper}>
    {shadows.map(({ label, value }) => {
      const aminoShadow: AminoShadow = `--amino-shadow-${value}`;
      return (
        <Fragment key={aminoShadow}>
          <p>Shadow intensity: {label}</p>
          <div
            className={styles.styledBoxShadowWrapper}
            style={{ '--amino-box-shadow-stories-box-shadow': aminoShadow }}
          >
            <p>var({aminoShadow})</p>
          </div>
        </Fragment>
      );
    })}
  </div>
);
