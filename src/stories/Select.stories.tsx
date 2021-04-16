import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Select, SelectProps } from '../components/Select';

const SelectMeta: Meta = {
  title: 'Amino/Select',
  component: Select,
  decorators: [withDesign],
};

export default SelectMeta;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const BasicSelect = Template.bind({});
BasicSelect.args = {
  label: 'Example select',
  items: [
    {
      label: 'Item A',
      value: 'A',
    },
    {
      label: 'Item B',
      value: 'B',
    },
    {
      label: 'Item C',
      value: 'C',
    },
  ],
};
BasicSelect.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
