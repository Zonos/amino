import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { type CheckboxProps, Checkbox } from 'src/components/checkbox/Checkbox';
import { Default } from 'src/icons/flags/Default';
import styled from 'styled-components';

const CheckboxMeta: Meta = {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A49',
    },
  },
  argTypes: {
    labelDescription: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    subtitle: {
      type: 'string',
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

const Template: StoryFn<CheckboxProps> = ({
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

export const DisabledBasicCheckbox = Template.bind({});
DisabledBasicCheckbox.args = {
  disabled: true,
  icon: <Default height={16} width={16} />,
  label: 'Input label',
  subtitle: 'Subtitle here',
};

export const BasicCheckboxWithoutIcon = Template.bind({});
BasicCheckboxWithoutIcon.args = {
  label: 'Input label',
  subtitle: 'Subtitle here',
};
export const BasicCheckboxWithoutSubtitle = Template.bind({});
BasicCheckboxWithoutSubtitle.args = {
  label: 'Input label',
  icon: <Default height={16} width={16} />,
};

export const CheckboxWithSubstitueLabel = Template.bind({});
CheckboxWithSubstitueLabel.args = {
  label: 'Input label',
  icon: <Default height={16} width={16} />,
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
