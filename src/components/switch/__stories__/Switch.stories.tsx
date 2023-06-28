import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { type SwitchProps, Switch } from 'src/components/switch/Switch';
import { Default } from 'src/icons/flags/Default';

const SwitchMeta: Meta = {
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
  component: Switch,
};

export default SwitchMeta;

const Template: StoryFn<SwitchProps> = ({ checked, ...props }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <Switch
      {...props}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export const BasicSwitch = Template.bind({});
BasicSwitch.args = {
  icon: <Default height={12} width={16} />,
  label: 'Input label',
  subtitle: 'Subtitle here',
};
BasicSwitch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};

export const DisabledBasicSwitch = Template.bind({});
DisabledBasicSwitch.args = {
  disabled: true,
  icon: <Default height={16} width={16} />,
  label: 'Input label',
  subtitle: 'Subtitle here',
};
DisabledBasicSwitch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};

export const BasicSwitchWithoutIcon = Template.bind({});
BasicSwitchWithoutIcon.args = {
  label: 'Input label',
  subtitle: 'Subtitle here',
};
BasicSwitchWithoutIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
export const BasicSwitchWithoutSubtitle = Template.bind({});
BasicSwitchWithoutSubtitle.args = {
  icon: <Default height={16} width={16} />,
  label: 'Input label',
};
BasicSwitchWithoutSubtitle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
