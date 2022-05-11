import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupProps,
} from 'src/components/Radio/RadioGroup';
import { withDesign } from 'storybook-addon-designs';

const RadioMeta: Meta = {
  title: 'Amino/RadioGroup',
  component: RadioGroup,
  decorators: [withDesign],
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
  },
};

export default RadioMeta;

const Template: Story<RadioGroupProps<RadioGroupItem>> = ({
  items,
  initialValue,
  disabled,
  onChange,
}: RadioGroupProps<RadioGroupItem>) => (
  <RadioGroup
    initialValue={initialValue}
    onChange={onChange}
    disabled={disabled}
    items={items}
  />
);

export const SimpleRadioGroup: Story<RadioGroupProps<RadioGroupItem>> =
  Template.bind({});

const args: RadioGroupProps<RadioGroupItem> = {
  items: [
    {
      value: 'not_for_resale',
      label: 'For personal use (not for resale)',
    },
    { value: 'for_resale', label: 'For resale' },
  ],
  initialValue: 'not_for_resale',
  /**
   * @todo find a way to better show the internal state change
   * Perhaps an child component with the current state :thinking:
   */
  // eslint-disable-next-line no-console
  onChange: newValue => console.log(newValue),
};
const parameters: {
  design: {
    type: string;
    url: string;
  };
} = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122',
  },
};

SimpleRadioGroup.args = args;
SimpleRadioGroup.parameters = parameters;
