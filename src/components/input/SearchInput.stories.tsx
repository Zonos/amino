import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { InputProps, SearchInput } from 'src/components/input/SearchInput';

const InputMeta: Meta = {
  component: SearchInput,
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
      type: 'string',
    },
    pattern: {
      type: 'string',
    },
    required: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    readOnly: {
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
  onKeyDown,
  pattern,
  placeholder,
  readOnly,
  required,
  tabIndex,
  value,
}) => {
  const [search, setSearch] = useState(value);

  return (
    <SearchInput
      autoFocus={autoFocus}
      disabled={disabled}
      onChange={e => setSearch(e.target.value)}
      onKeyDown={onKeyDown}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      tabIndex={tabIndex}
      value={search}
    />
  );
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};
