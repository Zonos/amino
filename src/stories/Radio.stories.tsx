import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Radio, type RadioProps } from '../components/Radio';

const RadioMeta: Meta = {
  title: 'Amino/Radio',
  component: Radio,
  decorators: [withDesign],
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    checked: {
      defaultValue: false,
      type: 'boolean',
    },
  },
};

export default RadioMeta;

const Template: Story<RadioProps> = ({
  disabled,
  checked,
  label,
  onChange,
}: RadioProps) => (
  <Radio
    label={label}
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  />
);

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: 'Example radio',
};
BasicRadio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122',
  },
};
