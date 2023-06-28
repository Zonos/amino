import { useEffect, useRef, useState } from 'react';

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
};

const longContent = `lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt.`;
const shortContent = `lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique`;

export default TextAreaMeta;

const Template: StoryFn<TextareaProps> = ({
  error,
  helpText,
  label,
  placeholder,
  value: _value,
}: TextareaProps) => {
  const [value, setValue] = useState(_value);
  const [autoAdjustContent, setAutoAdjustContent] = useState(longContent);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    // focus the first input on mount (ref works)
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // toggle between long and short content every 3 seconds
      setAutoAdjustContent(content =>
        longContent === content ? shortContent : longContent
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '15px 0',
      }}
    >
      <div>
        <Text type="bold-label">No label:</Text>

        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            ref={textareaRef}
            error={error}
            helpText={helpText}
            onChange={() => {}}
            placeholder={placeholder}
            value=""
          />
          <Input onChange={() => {}} value="" />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">No label, has content:</Text>

        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <Input
            onChange={e => setValue(e.target.value)}
            value={value?.toString() || ''}
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
            onChange={() => {}}
            value=""
          />
          <Input label={label} onChange={() => {}} value="" />
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
            value={longContent}
          />
          <Input label={label} onChange={() => {}} value="" />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Empty:</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            helpText={helpText}
            label={label}
            onChange={() => {}}
            placeholder={placeholder}
            value=""
          />
          <Input
            label={label}
            onChange={() => {}}
            placeholder={placeholder}
            value=""
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
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            value={value}
          />
          <Input
            label={label}
            onChange={e => setValue(e.target.value)}
            value={value?.toString() || ''}
          />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Expandable (maxRow 5 | maxRow 3):</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            error={error}
            expandable
            helpText={helpText}
            label={label}
            onChange={e => setAutoAdjustContent(e.target.value)}
            placeholder={placeholder}
            value={autoAdjustContent}
          />
          <Textarea
            error={error}
            expandable
            helpText={helpText}
            label={label}
            maxRows={3}
            onChange={e => setAutoAdjustContent(e.target.value)}
            placeholder={placeholder}
            value={autoAdjustContent}
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
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            readOnly
            value={value}
          />
          <Input
            label={label}
            onChange={e => setValue(e.target.value)}
            value={value?.toString() || ''}
          />
        </StyledGroup>
      </div>
      <div>
        <Text type="bold-label">Disabled:</Text>
        <StyledGroup style={{ display: 'flex', gap: '10px' }}>
          <Textarea
            disabled
            error={error}
            helpText={helpText}
            label={label}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            readOnly
            value={value}
          />
          <Input
            disabled
            label={label}
            onChange={e => setValue(e.target.value)}
            value={value?.toString() || ''}
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
  helpText: '* This field is required',
  label: 'Description',
  placeholder: 'Please fill out the description',
  value: 'HS code for Brazil',
};

export const ErrorWithHelpText = Template.bind({});
ErrorWithHelpText.args = {
  error: true,
  helpText: '* This field is required',
  label: 'Description',
  placeholder: 'Please fill out the description',
  value: 'HS code for Brazil',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  error: true,
  label: 'Description',
  placeholder: 'Please fill out the description',
  value: 'HS code for Brazil',
};
