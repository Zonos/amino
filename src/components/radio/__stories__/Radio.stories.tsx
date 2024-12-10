import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Radio, type RadioProps } from 'src/components/radio/Radio';

const RadioMeta: Meta = {
  component: Radio,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=5869%3A108561&mode=dev',
    },
  },
};

export default RadioMeta;

const Template: StoryFn<RadioProps> = ({ disabled, label }: RadioProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      disabled={disabled}
      label={label}
      onChange={e => setChecked(e)}
      value="example"
    />
  );
};

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: 'Example radio',
};
