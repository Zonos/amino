import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { type SwitchProps, Switch } from 'src/components/switch/Switch';
import { Default } from 'src/icons/flags/Default';
import { LaptopIcon } from 'src/icons/LaptopIcon';
import { MobileIcon } from 'src/icons/MobileIcon';

const SwitchMeta: Meta = {
  argTypes: {
    labelIcon: {
      table: {
        disable: true,
      },
    },
  },
  component: Switch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=74%3A901&mode=dev',
    },
  },
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
  label: 'Input label',
  labelIcon: <Default height={12} width={16} />,
  subtitle: 'Subtitle here',
};

export const DisabledBasicSwitch = Template.bind({});
DisabledBasicSwitch.args = {
  disabled: true,
  label: 'Input label',
  labelIcon: <Default height={16} width={16} />,
  subtitle: 'Subtitle here',
};

export const BasicSwitchWithoutIcon = Template.bind({});
BasicSwitchWithoutIcon.args = {
  label: 'Input label',
  subtitle: 'Subtitle here',
};

export const BasicSwitchWithoutSubtitle = Template.bind({});
BasicSwitchWithoutSubtitle.args = {
  label: 'Input label',
  labelIcon: <Default height={16} width={16} />,
};

export const SwitchWithIcons = Template.bind({});
SwitchWithIcons.args = {
  switchIconLeft: <MobileIcon />,
  switchIconRight: <LaptopIcon />,
};
