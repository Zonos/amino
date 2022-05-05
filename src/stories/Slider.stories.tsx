import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Slider, type SliderProps } from '~/src/components/radix/Slider/Slider';

const SliderMeta: Meta = {
  title: 'Amino/Slider',
  component: Slider,
  decorators: [withDesign],
};

export default SliderMeta;

const Template: Story<SliderProps> = ({
  max,
  min,
  onChange,
  step,
  value,
}: SliderProps) => (
  <Slider max={max} min={min} onChange={onChange} step={step} value={value} />
);

export const Default = Template.bind({});
Default.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
