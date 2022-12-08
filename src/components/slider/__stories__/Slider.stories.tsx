import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Slider, SliderProps } from 'src/components/slider/Slider';

const SliderMeta: Meta = {
  component: Slider,
};

export default SliderMeta;

const Template: Story<SliderProps> = ({
  max,
  min,
  step,
  value: _value,
}: SliderProps) => {
  const [value, setValue] = useState(_value);

  return (
    <Slider
      max={max}
      min={min}
      onChange={n => setValue(n)}
      step={step}
      value={value}
    />
  );
};

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
