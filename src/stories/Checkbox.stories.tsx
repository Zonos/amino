import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Checkbox, CheckboxProps } from '../components/Checkbox';

const CheckboxMeta: Meta = {
  title: 'Amino/Checkbox',
  component: Checkbox,
  decorators: [withDesign],
};

export default CheckboxMeta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  label: 'Checkbox label',
};
BasicCheckbox.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
