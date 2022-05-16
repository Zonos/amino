import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Input, type InputProps } from 'src/components/input/Input';
import { BagIcon } from 'src/icons/BagIcon';
import { CubeIcon } from 'src/icons/CubeIcon';
import { FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { withDesign } from 'storybook-addon-designs';

const InputMeta: Meta = {
  title: 'Amino/Input',
  component: Input,
  decorators: [withDesign],
  argTypes: {
    width: {
      type: 'number',
    },
    placeholder: {
      defaultValue: 'Example placeholder',
      type: 'string',
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
    prefix: {
      options: ['No prefix', 'With text', 'With icon'],
      mapping: {
        'No prefix': '',
        'With text': 'USD',
        'With icon': <CubeIcon size={20} />,
      },
    },
    suffix: {
      options: ['No prefix', 'With text', 'With icon'],
      mapping: {
        'No prefix': '',
        'With text': 'USD',
        'With icon': <CubeIcon size={20} />,
      },
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

const Template: Story<InputProps> = ({ value: _value, ...props }) => {
  const [value, setValue] = useState(_value);
  return (
    <Input {...props} onChange={e => setValue(e.target.value)} value={value} />
  );
};

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

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Example input',
  type: 'password',
};
PasswordInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: 'Example input',
  type: 'number',
};
NumberInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};

export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  label: 'Example input',
  helpText: "This is the input's help text",
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Example input',
  prefix: <BagIcon />,
  value: '5 lbs of Chicken',
};
Prefix.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};

export const PrefixAndValuePrefix = Template.bind({});
PrefixAndValuePrefix.args = {
  label: 'Phone number',
  prefix: <BagIcon />,
  valuePrefix: '+1-383',
  value: '435-229-9136',
};
PrefixAndValuePrefix.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};

export const Suffix = Template.bind({});
Suffix.args = {
  label: 'Example input',
  suffix: <FlagIcon iconScale="large" code="AI" />,
};
Suffix.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
  },
};
