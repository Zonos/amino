import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Input, InputProps } from '../components/Input';

const InputMeta: Meta = {
  title: 'Amino/Input',
  component: Input,
  decorators: [withDesign],
  argTypes: {
    width: {
      type: 'number',
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    helpText: {
      defaultValue: '',
      type: 'string',
    },
    value: {
      defaultValue: '',
      type: 'string',
    },
    inputPrefix: {
      table: {
        disable: true,
      },
    },
    inputSuffix: {
      table: {
        disable: true,
      },
    },
    pattern: {
      type: 'string',
    },
    required: {
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
    error: {
      defaultValue: '',
      type: 'string',
    },
    type: {
      defaultValue: 'text',
      type: 'string',
    },
  },
};

export default InputMeta;

const Template: Story<InputProps> = ({
  autoFocus,
  disabled,
  error,
  helpText,
  inputMode,
  inputPrefix,
  inputSuffix,
  label,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  prefix,
  readOnly,
  required,
  suffix,
  tabIndex,
  type,
  value,
  width,
}) => (
  <Input
    autoFocus={autoFocus}
    disabled={disabled}
    error={error}
    helpText={helpText}
    inputMode={inputMode}
    inputPrefix={inputPrefix}
    inputSuffix={inputSuffix}
    label={label}
    onChange={onChange}
    onKeyDown={onKeyDown}
    pattern={pattern}
    placeholder={placeholder}
    prefix={prefix}
    readOnly={readOnly}
    required={required}
    suffix={suffix}
    tabIndex={tabIndex}
    type={type}
    value={value}
    width={width}
  />
);

export const BasicInput = Template.bind({});
BasicInput.args = {
  label: 'Example input',
};
BasicInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A56',
  },
};

export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  label: 'Example input',
  helpText: "This is the input's help text",
};

export const PrefixesAndSuffixes = Template.bind({});
PrefixesAndSuffixes.args = {
  label: 'Example input',
  prefix: 'Prefix',
  suffix: 'Suffix',
};
PrefixesAndSuffixes.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};
