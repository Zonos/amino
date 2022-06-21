import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Switch, SwitchProps } from 'src/components/switch/Switch';
import { Default } from 'src/icons/flags/Default';
import { withDesign } from 'storybook-addon-designs';

const SwitchMeta: Meta = {
  title: 'Amino/Switch',
  component: Switch,
  decorators: [withDesign],
  argTypes: {
    checked: {
      type: 'boolean',
      defaultValue: true,
    },
    labelDescription: {
      defaultValue: 'label description',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    subtitle: {
      type: 'string',
      defaultValue: undefined,
    },
  },
};

export default SwitchMeta;

const Template: Story<SwitchProps> = ({ checked, ...props }: SwitchProps) => {
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
  icon: <Default width={16} height={12} />,
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
