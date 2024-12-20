import { useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Checkbox, type CheckboxProps } from 'src/components/checkbox/Checkbox';
import { Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';
import { Default } from 'src/icons/flags/Default';

import styles from './Checkbox.stories.module.scss';

const Template: StoryFn<CheckboxProps> = ({
  checked,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <Flex>
      <Checkbox
        {...props}
        checked={isChecked}
        onChange={x => setIsChecked(x)}
      />
      <Text>Some text</Text>
    </Flex>
  );
};

const CheckboxMeta: Meta<CheckboxProps> = {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=74%3A856&mode=dev',
    },
  },
  render: Template,
  tags: ['tested'],
};

export default CheckboxMeta;
export const BasicCheckbox: StoryObj<CheckboxProps> = {
  args: {
    icon: <Default height={12} width={16} />,
    label: 'Input label',
    subtitle: 'Subtitle here',
  },
};

export const NoLabel: StoryObj<CheckboxProps> = {
  args: {},
};

export const DisabledBasicCheckbox: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
    icon: <Default height={16} width={16} />,
    label: 'Input label',
    subtitle: 'Subtitle here',
  },
};

export const BasicCheckboxWithoutIcon: StoryObj<CheckboxProps> = {
  args: {
    label: 'Input label',
    subtitle: 'Subtitle here',
  },
};

export const BasicCheckboxWithoutSubtitle: StoryObj<CheckboxProps> = {
  args: {
    icon: <Default height={16} width={16} />,
    label: 'Input label',
  },
};

export const CheckboxWithComplexSubtitle: StoryObj<CheckboxProps> = {
  args: {
    helpText: 'This is help text',
    icon: <Default height={16} width={16} />,
    label:
      'I have read and agree to the Zonos terms of service and UPS agreement',
    subtitle: (
      <div className={styles.labelComponent}>
        See{' '}
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
        .
      </div>
    ),
  },
};
