import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Toggle, type ToggleProps } from 'src/components/toggle/Toggle';

const Template = (props: ToggleProps) => {
  const [value, setValue] = useState<string>('1');

  return <Toggle {...props} onChange={setValue} value={value} />;
};

const meta: Meta<typeof Template> = {
  component: Toggle,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=7430%3A2&mode=dev',
    },
  },
  render: Template,
};

export default meta;

export const Basic: StoryObj<ToggleProps> = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
};

export const Multiple: StoryObj<ToggleProps> = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'X', value: '2' },
      { label: 'Super long option', value: '3' },
      { label: 'Option 4', value: '4' },
    ],
  },
};
