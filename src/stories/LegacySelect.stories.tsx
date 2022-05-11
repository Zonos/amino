import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  LegacySelect,
  LegacySelectItem,
  LegacySelectProps,
} from 'src/components/Select/LegacySelect';
import { withDesign } from 'storybook-addon-designs';

const SelectMeta: Meta = {
  title: 'Amino/LegacySelect',
  component: LegacySelect,
  decorators: [withDesign],
};

export default SelectMeta;

const Template: Story<LegacySelectProps<LegacySelectItem>> = ({
  label,
  items,
  value,
  onChange,
}: LegacySelectProps<LegacySelectItem>) => (
  <LegacySelect label={label} items={items} value={value} onChange={onChange} />
);

export const BasicLegacySelect = Template.bind({});
BasicLegacySelect.args = {
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
BasicLegacySelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
