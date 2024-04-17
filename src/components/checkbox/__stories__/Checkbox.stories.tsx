import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Checkbox, type CheckboxProps } from 'src/components/checkbox/Checkbox';
import { Default } from 'src/icons/flags/Default';

import styles from './Checkbox.stories.module.scss';

const CheckboxMeta: Meta = {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=74%3A856&mode=dev',
    },
  },
};

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
  icon: <Default height={12} width={16} />,
  label: 'Input label',
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
  icon: <Default height={16} width={16} />,
  label: 'Input label',
};

export const CheckboxWithSubstitueLabel = Template.bind({});
CheckboxWithSubstitueLabel.args = {
  icon: <Default height={16} width={16} />,
  label: 'Input label',
  labelComponent: (
    <div className={styles.labelComponent}>
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
    </div>
  ),
};
