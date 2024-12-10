import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Input, type InputProps } from 'src/components/input/Input';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { BagIcon } from 'src/icons/BagIcon';
import { CubeIcon } from 'src/icons/CubeIcon';
import { FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { SearchIcon } from 'src/icons/SearchIcon';

const InputMeta: Meta = {
  argTypes: {
    prefix: {
      mapping: {
        'No prefix': null,
        'With icon': <CubeIcon size={20} />,
        'With text': 'USD',
      },
      options: ['No prefix', 'With text', 'With icon'],
    },
    suffix: {
      mapping: {
        'No suffix': null,
        'With icon': <CubeIcon size={20} />,
        'With text': 'USD',
      },
      options: ['No suffix', 'With text', 'With icon'],
    },
  },
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=243%3A7661&mode=dev',
    },
  },
};

export default InputMeta;

const Template: StoryFn<InputProps> = ({ value: _value, ...props }) => {
  const [value, setValue] = useState(_value);
  return (
    <VStack>
      <Input
        {...props}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Input
        {...props}
        onChange={e => setValue(e.target.value)}
        placeholder="Placeholder text"
        value=""
      />
      <Input
        {...props}
        disabled
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Input
        {...props}
        label={undefined}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Text type="bold-subheader">
        Value: <Text type="code">{value || '--'}</Text>
      </Text>
    </VStack>
  );
};

export const BasicInput = Template.bind({});
BasicInput.args = {
  label: 'Example input',
  value: 'Awesome',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Example input',
  type: 'password',
  value: 'Awesome',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: 'Example input',
  type: 'number',
  value: '123',
};

export const OnSameLine: StoryFn<InputProps> = ({ size }) => {
  const [value, setValue] = useState('');
  const [number, setNumber] = useState(0);

  return (
    <HStack>
      <Input
        label="Text"
        onChange={e => setValue(e.target.value)}
        size={size}
        type="text"
        value={value}
      />
      <Input
        label="Number"
        onChange={e => setNumber(e.target.valueAsNumber)}
        size={size}
        type="number"
        value={number.toString()}
      />
    </HStack>
  );
};

export const DateInput = Template.bind({});
DateInput.args = {
  label: 'Date input',
  type: 'date',
  value: '1995-09-08',
};

export const DateInputClamped = Template.bind({});
DateInputClamped.args = {
  label: 'Date input with range',
  max: new Date('2009-01-18').toISOString().split('T')[0],
  min: new Date('2009-01-10').toISOString().split('T')[0],
  placeholder: 'placeholder',
  type: 'date',
};

export const DateTimeInput = Template.bind({});
DateTimeInput.args = {
  label: 'Datetime input',
  type: 'datetime-local',
  value: '1995-09-08 09:21:00',
};

export const DateTimeInputClamped = Template.bind({});
DateTimeInputClamped.args = {
  label: 'Datetime input with range',
  max: new Date('2009-01-18T03:50:00').toISOString().slice(0, -1),
  min: new Date('2009-01-10T03:24:00').toISOString().slice(0, -1),
  placeholder: 'placeholder',
  type: 'datetime-local',
  value: '2009-01-13 09:21:00',
};

export const TimeInput = Template.bind({});
TimeInput.args = {
  label: 'Time input',
  type: 'time',
  value: '09:21:00',
};

export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  helpText: "This is the input's help text",
  label: 'Example input',
  value: 'Magnificent',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  error: true,
  label: 'Example input',
  value: 'Magnificent',
};

export const InputWithErrorAndHelpText = Template.bind({});
InputWithErrorAndHelpText.args = {
  error: true,
  helpText: 'This is an error',
  label: 'Example input',
  value: 'Magnificent',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Example input',
  prefix: <BagIcon />,
  value: '5 lbs of Chicken',
};

export const PrefixAndValuePrefix = Template.bind({});
PrefixAndValuePrefix.args = {
  label: 'Phone number',
  prefix: <BagIcon />,
  value: '435-229-9136',
  valuePrefix: '+1-383',
};

export const Suffix = Template.bind({});
Suffix.args = {
  label: 'Example input',
  suffix: <FlagIcon code="AI" iconScale="large" />,
};

export const DynamicErrorAndHelpText: StoryFn<InputProps> = ({
  value: _value,
  ...props
}) => {
  const [value, setValue] = useState(_value);
  const hasError = value?.length === 0;
  return (
    <VStack>
      <Input
        {...props}
        error={hasError}
        helpText={hasError ? 'This field is required' : 'Enter some stuff'}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Text type="bold-subheader">
        Value: <Text type="code">{value || '--'}</Text>
      </Text>
    </VStack>
  );
};

export const Search: StoryFn<InputProps> = ({ value: _value, ...props }) => {
  const [value, setValue] = useState(_value);

  return (
    <VStack>
      <Input
        {...props}
        onChange={e => setValue(e.target.value)}
        placeholder="Search..."
        value={value}
        valuePrefix={<SearchIcon color="gray600" size={24} />}
      />
      <Text type="bold-subheader">
        Value: <Text type="code">{value || '--'}</Text>
      </Text>
    </VStack>
  );
};
