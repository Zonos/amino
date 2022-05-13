import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox, type CheckboxProps } from 'src/components/checkbox/Checkbox';
import { Default } from 'src/icons/flags/Default';
import { withDesign } from 'storybook-addon-designs';

const CheckboxMeta: Meta = {
  title: 'Amino/Checkbox',
  component: Checkbox,
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

export default CheckboxMeta;

const Template: Story<CheckboxProps> = ({
  checked,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <Checkbox
      {...props}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  label: 'Input label',
  icon: <Default width={16} height={12} />,
  subtitle: 'Subtitle here',
};
BasicCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};

export const DisabledBasicCheckbox = Template.bind({});
DisabledBasicCheckbox.args = {
  disabled: true,
  icon: <Default height={16} width={16} />,
  label: 'Input label',
  subtitle: 'Subtitle here',
};
DisabledBasicCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};

export const BasicCheckboxWithoutIcon = Template.bind({});
BasicCheckboxWithoutIcon.args = {
  label: 'Input label',
  subtitle: 'Subtitle here',
};
BasicCheckboxWithoutIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
export const BasicCheckboxWithoutSubtitle = Template.bind({});
BasicCheckboxWithoutSubtitle.args = {
  icon: <Default height={16} width={16} />,
  label: 'Input label',
};
BasicCheckboxWithoutSubtitle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
