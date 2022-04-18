import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Switch, type SwitchProps } from '../components/Switch';

const SwitchMeta: Meta = {
  title: 'Amino/Switch',
  component: Switch,
  decorators: [withDesign],
  argTypes: {
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    subtitle: {
      type: 'string',
      defaultValue: 'test',
    },
  },
};

export default SwitchMeta;

const Template: Story<SwitchProps> = ({
  checked,
  disabled,
  label,
  onChange,
  subtitle,
}: SwitchProps) => (
  <Switch
    checked={checked}
    disabled={disabled}
    label={label}
    onChange={onChange}
    subtitle={subtitle}
  />
);

export const BasicSwitch = Template.bind({});
BasicSwitch.args = {
  label: 'Switch label',
};
BasicSwitch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
