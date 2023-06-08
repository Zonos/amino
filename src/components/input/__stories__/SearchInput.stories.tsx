import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { type InputProps, SearchInput } from 'src/components/input/SearchInput';

const InputMeta: Meta = {
  argTypes: {
    autoFocus: {
      type: 'boolean',
    },
    className: {
      table: {
        disable: true,
      },
    },
    disabled: {
      type: 'boolean',
    },
    pattern: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    readOnly: {
      type: 'boolean',
    },
    required: {
      type: 'boolean',
    },
    tabIndex: {
      type: 'number',
    },
    value: {
      type: 'string',
    },
  },
  component: SearchInput,
};

export default InputMeta;

const Template: StoryFn<InputProps> = ({
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
