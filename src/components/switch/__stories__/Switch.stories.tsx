import { useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Flex } from 'src/components/flex/Flex';
import { Switch, type SwitchProps } from 'src/components/switch/Switch';
import { Text } from 'src/components/text/Text';
import { Default } from 'src/icons/flags/Default';
import { LaptopIcon } from 'src/icons/LaptopIcon';
import { MobileIcon } from 'src/icons/MobileIcon';

const Template: StoryFn<SwitchProps> = ({ ...props }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Flex>
      <Switch
        {...props}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <Text>Some text</Text>
    </Flex>
  );
};

const SwitchMeta: Meta<SwitchProps> = {
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
  render: Template,
};

export default SwitchMeta;

export const BasicSwitch: StoryObj<SwitchProps> = {
  args: {
    label: 'Input label',
    labelIcon: <Default height={12} width={16} />,
    subtitle: 'Subtitle here',
  },
};

export const NoLabel: StoryObj<SwitchProps> = {};

export const DisabledBasicSwitch: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
    label: 'Input label',
    labelIcon: <Default height={16} width={16} />,
    subtitle: 'Subtitle here',
  },
};

export const BasicSwitchWithoutIcon: StoryObj<SwitchProps> = {
  args: {
    label: 'Input label',
    subtitle: 'Subtitle here',
  },
};

export const BasicSwitchWithoutSubtitle: StoryObj<SwitchProps> = {
  args: {
    label: 'Input label',
    labelIcon: <Default height={16} width={16} />,
  },
};

export const SwitchWithIcons: StoryObj<SwitchProps> = {
  args: {
    switchIconLeft: <MobileIcon />,
    switchIconRight: <LaptopIcon />,
  },
};
