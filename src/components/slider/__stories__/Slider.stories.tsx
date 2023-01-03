import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Slider as SliderComponent,
  SliderProps,
} from 'src/components/slider/Slider';

const SliderMeta: Meta = {
  component: SliderComponent,
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
    <SliderComponent
      max={max}
      min={min}
      onChange={n => setValue(n)}
      step={step}
      value={value}
    />
  );
};

export const Slider = Template.bind({});
Slider.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
};
Slider.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
