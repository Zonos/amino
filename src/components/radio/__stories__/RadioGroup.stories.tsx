import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  RadioGroup,
  type RadioGroupItem,
  type RadioGroupProps,
} from 'src/components/radio/RadioGroup';

const RadioMeta: Meta = {
  component: RadioGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=74%3A848&mode=dev',
    },
  },
};

export default RadioMeta;

const Template: StoryFn<RadioGroupProps> = ({
  disabled,
  initialValue,
  items,
}: RadioGroupProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <RadioGroup
      disabled={disabled}
      initialValue={value}
      items={items}
      onChange={e => setValue(e)}
    />
  );
};

export const SimpleRadioGroup: StoryFn<RadioGroupProps> = Template.bind({});

const options: RadioGroupItem[] = [
  {
    label: 'For personal use (not for resale)',
    value: 'not_for_resale',
  },
  { label: 'For resale', value: 'for_resale' },
];

SimpleRadioGroup.args = {
  initialValue: 'not_for_resale',
  items: options,
};
