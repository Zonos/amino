import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  type RadioGroupItem,
  type RadioGroupProps,
  RadioGroup,
} from 'src/components/radio/RadioGroup';

const RadioMeta: Meta = {
  component: RadioGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122',
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
