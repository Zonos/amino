import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';
import { type TextareaProps, Textarea } from 'src/components/textarea/Textarea';
import styled from 'styled-components';

const StyledGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const TextAreaMeta: Meta = {
  component: Textarea,
  argTypes: {
    iconRight: {
      type: 'boolean',
    },
  },
};

export default TextAreaMeta;

const Template: StoryFn<TextareaProps> = ({
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
        <Text type="bold-label">No label:</Text>

        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            value=""
            onChange={() => {}}
            placeholder={placeholder}
          />
          <Input value="" onChange={() => {}} />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">No label, has content:</Text>

        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Input
            value={value?.toString() || ''}
            onChange={e => setValue(e.target.value)}
          />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">No placeholder:</Text>

        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            label={label}
            value=""
            onChange={() => {}}
          />
          <Input label={label} value="" onChange={() => {}} />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Long content:</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            label={label}
            onChange={() => {}}
            placeholder={placeholder}
            value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id
            iure amet accusantium ea consequuntur eaque animi fugiat iusto
            similique, vero velit distinctio sequi nesciunt odit nobis
            consequatur nihil sunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat id iure amet accusantium ea consequuntur
            eaque animi fugiat iusto similique, vero velit distinctio sequi
            nesciunt odit nobis consequatur nihil sunt. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellat id iure amet accusantium
            ea consequuntur eaque animi fugiat iusto similique, vero velit
            distinctio sequi nesciunt odit nobis consequatur nihil sunt.`}
          />
          <Input label={label} value="" onChange={() => {}} />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Empty:</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            label={label}
            value=""
            onChange={() => {}}
            placeholder={placeholder}
          />
          <Input
            label={label}
            value=""
            onChange={() => {}}
            placeholder={placeholder}
          />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Editable:</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            label={label}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
          />
          <Input
            label={label}
            value={value?.toString() || ''}
            onChange={e => setValue(e.target.value)}
          />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Read only:</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            label={label}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            readOnly
          />
          <Input
            label={label}
            value={value?.toString() || ''}
            onChange={e => setValue(e.target.value)}
          />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Disabled:</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            disabled
            helpText={helpText}
            label={label}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            readOnly
          />
          <Input
            label={label}
            value={value?.toString() || ''}
            disabled
            onChange={e => setValue(e.target.value)}
          />
        </StyledGroup>
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
