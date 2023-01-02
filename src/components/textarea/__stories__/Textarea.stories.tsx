import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Text } from 'src/components/text/Text';
import { Textarea, TextareaProps } from 'src/components/textarea/Textarea';

const TextAreaMeta: Meta = {
  component: Textarea,
  argTypes: {
    iconRight: {
      type: 'boolean',
    },
  },
};

export default TextAreaMeta;

const Template: Story<TextareaProps> = ({
  error,
  helpText,
  label,
  value: _value,
  placeholder,
}: TextareaProps) => {
  const [value, setValue] = useState(_value);
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        padding: '15px 0',
      }}
    >
      <div>
        <Text type="bold-label">No placeholder:</Text>
        <Textarea
          error={error}
          helpText={helpText}
          label={label}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div>
        <Text type="bold-label">Empty:</Text>
        <Textarea
          error={error}
          helpText={helpText}
          label={label}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </div>
      <div>
        <Text type="bold-label">Editable:</Text>
        <Textarea
          error={error}
          helpText={helpText}
          label={label}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </div>
      <div>
        <Text type="bold-label">Read only:</Text>
        <Textarea
          error={error}
          helpText={helpText}
          label={label}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          readOnly
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Description',
  placeholder: 'Please fill out the description',
  value: 'HS code for Brazil',
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  label: 'Description',
  placeholder: 'Please fill out the description',
  value: 'HS code for Brazil',
  helpText: '* This field is required',
};

export const ErrorWithHelpText = Template.bind({});
ErrorWithHelpText.args = {
  label: 'Description',
  placeholder: 'Please fill out the description',
  value: 'HS code for Brazil',
  error: true,
  helpText: '* This field is required',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Description',
  placeholder: 'Please fill out the description',
  value: 'HS code for Brazil',
  error: true,
};
