import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from 'src/components/checkbox/Checkbox';
import { Default } from 'src/icons/flags/Default';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

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

const LabelComponent = styled.div`
  width: 422px;

  a {
    color: -webkit-link;
    text-decoration: underline;
  }
`;

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

export const CheckboxWithSubstitueLabel = Template.bind({});
CheckboxWithSubstitueLabel.args = {
  icon: <Default height={16} width={16} />,
  label: 'Input label',
  labelComponent: (
    <LabelComponent>
      I have read and agree to the{' '}
      <a
        href="https://docs.zonos.com/legal"
        rel="noopener noreferrer"
        target="_blank"
      >
        Zonos terms of service
      </a>
      ,{' '}
      <a
        href="https://www.ups.com/assets/resources/media/UTA_with_EUR.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        UPS Technology Agreement
      </a>
      ,{' '}
      <a
        href="https://www.ups.com/assets/resources/media/en_US/daily_rates.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        UPS Rate and Service Guideline
      </a>
      , and{' '}
      <a
        href="https://www.ups.com/assets/resources/media/terms_service_us.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        Tariff
      </a>
      .
    </LabelComponent>
  ),
};
CheckboxWithSubstitueLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
  },
};
