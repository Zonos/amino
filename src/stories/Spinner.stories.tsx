import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { type SpinnerProps, Spinner } from '~/src/components/Spinner/Spinner';

const SpinnerMeta: Meta = {
  title: 'Amino/Spinner',
  component: Spinner,
};

export default SpinnerMeta;

const Template: Story<SpinnerProps> = ({ size }: SpinnerProps) => (
  <Spinner size={size} />
);

export const BasicSpinner = Template.bind({});
BasicSpinner.args = {
  size: 32,
};
