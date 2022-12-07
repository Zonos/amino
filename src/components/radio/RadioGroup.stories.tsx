import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupProps,
} from 'src/components/radio/RadioGroup';

const RadioMeta: Meta = {
  component: RadioGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122',
    },
  },
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
};

export default RadioMeta;

const Template: Story<RadioGroupProps<RadioGroupItem>> = ({
  items,
  initialValue,
  disabled,
}: RadioGroupProps<RadioGroupItem>) => {
  const [value, setValue] = useState(initialValue);

  return (
    <RadioGroup
      initialValue={value}
      onChange={e => setValue(e)}
      disabled={disabled}
      items={items}
    />
  );
};

export const SimpleRadioGroup: Story<RadioGroupProps<RadioGroupItem>> =
  Template.bind({});

const options: RadioGroupItem[] = [
  {
    value: 'not_for_resale',
    label: 'For personal use (not for resale)',
  },
  { value: 'for_resale', label: 'For resale' },
];

SimpleRadioGroup.args = {
  initialValue: 'not_for_resale',
  items: options,
};
