import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { TagIcon } from '~/src/icons';

import { Checkbox, type CheckboxProps } from '../components/Checkbox';

const CheckboxMeta: Meta = {
  title: 'Amino/Checkbox',
  component: Checkbox,
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
    labelComponent: {
      defaultValue: 'Icon Label Component',
      options: ['No Icon Component', 'Icon Label Component'],
      mapping: {
        'No Icon Component': undefined,
        'Icon Label Component': (
          <>
            <TagIcon size={22} /> Checkbox label
          </>
        ),
      },
    },
  },
};

export default CheckboxMeta;

const Template: Story<CheckboxProps> = ({
  checked,
  disabled,
  label,
  labelComponent,
  onChange,
  subtitle,
}: CheckboxProps) => (
  <Checkbox
    checked={checked}
    disabled={disabled}
    label={label}
    onChange={onChange}
    subtitle={subtitle}
    labelComponent={labelComponent}
  />
);

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  label: 'Checkbox label',
};
BasicCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
