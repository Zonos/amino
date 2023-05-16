import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { type RadioProps, Radio } from 'src/components/radio/Radio';

const RadioMeta: Meta = {
  component: Radio,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    checked: {
      type: 'boolean',
    },
  },
};

export default RadioMeta;

const Template: StoryFn<RadioProps> = ({
  disabled,
  checked: initialChecked,
  label,
}: RadioProps) => {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <Radio
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={e => setChecked(e)}
    />
  );
};

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: 'Example radio',
};
BasicRadio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122',
  },
};
