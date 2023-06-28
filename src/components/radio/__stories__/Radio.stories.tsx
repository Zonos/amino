import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { type RadioProps, Radio } from 'src/components/radio/Radio';

const RadioMeta: Meta = {
  component: Radio,
};

export default RadioMeta;

const Template: StoryFn<RadioProps> = ({
  checked: initialChecked,
  disabled,
  label,
}: RadioProps) => {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <Radio
      checked={checked}
      disabled={disabled}
      label={label}
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
