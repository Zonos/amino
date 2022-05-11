import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { InputProps, SearchInput } from 'src/components/Input/SearchInput';
import { withDesign } from 'storybook-addon-designs';

const InputMeta: Meta = {
  title: 'Amino/SearchInput',
  component: SearchInput,
  decorators: [withDesign],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      type: 'string',
    },
    value: {
      defaultValue: '',
      type: 'string',
    },
    pattern: {
      type: 'string',
    },
    required: {
      defaultValue: false,
      type: 'boolean',
    },
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    readOnly: {
      defaultValue: false,
      type: 'boolean',
    },
    autoFocus: {
      type: 'boolean',
    },
    tabIndex: {
      type: 'number',
    },
  },
};

export default InputMeta;

const Template: Story<InputProps> = ({
  autoFocus,
  disabled,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  readOnly,
  required,
  tabIndex,
  value,
}) => (
  <SearchInput
    autoFocus={autoFocus}
    disabled={disabled}
    onChange={onChange}
    onKeyDown={onKeyDown}
    pattern={pattern}
    placeholder={placeholder}
    readOnly={readOnly}
    required={required}
    tabIndex={tabIndex}
    value={value}
  />
);

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};
