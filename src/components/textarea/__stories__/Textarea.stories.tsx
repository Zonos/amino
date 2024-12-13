import { useEffect, useRef, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';
import { Textarea, type TextareaProps } from 'src/components/textarea/Textarea';

const TextAreaMeta: Meta = {
  component: Textarea,
};

const longContent = `lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt.`;
const shortContent = `lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique`;

export default TextAreaMeta;

export const Basic: StoryFn<TextareaProps> = props => {
  const [value, setValue] = useState('');

  return (
    <Textarea
      label="Label"
      {...props}
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  );
};
Basic.args = {
  placeholder: 'Type something',
};

const Template: StoryFn<TextareaProps> = ({
  actions,
  error,
  helpText,
  label,
  placeholder,
  value: _value,
  ...rest
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
        longContent === content ? shortContent : longContent,
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

        <Flex gap={10}>
          <Textarea
            {...rest}
            ref={textareaRef}
            actions={actions}
            error={error}
            helpText={helpText}
            onChange={() => {}}
            placeholder={placeholder}
            value=""
          />
          <Input onChange={() => {}} value="" />
        </Flex>
      </div>
      <div>
        <Text type="bold-label">No label, has content:</Text>

        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
            error={error}
            helpText={helpText}
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <Input
            onChange={e => setValue(e.target.value)}
            value={value?.toString() || ''}
          />
        </Flex>
      </div>
      <div>
        <Text type="bold-label">No placeholder:</Text>

        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
            error={error}
            helpText={helpText}
            label={label}
            onChange={() => {}}
            value=""
          />
          <Input label={label} onChange={() => {}} value="" />
        </Flex>
      </div>
      <div>
        <Text type="bold-label">Long content:</Text>
        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
            error={error}
            helpText={helpText}
            label={label}
            onChange={() => {}}
            placeholder={placeholder}
            value={longContent}
          />
          <Input label={label} onChange={() => {}} value="" />
        </Flex>
      </div>
      <div>
        <Text type="bold-label">Empty:</Text>
        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
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
        </Flex>
      </div>
      <div>
        <Text type="bold-label">Editable:</Text>
        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
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
        </Flex>
      </div>

      <div>
        <Text type="bold-label">Disabled expand:</Text>
        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
            disableExpand
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
        </Flex>
      </div>

      <div>
        <Text type="bold-label">maxRow 5 | maxRow 3:</Text>
        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
            error={error}
            helpText={helpText}
            label={label}
            onChange={e => setAutoAdjustContent(e.target.value)}
            placeholder={placeholder}
            value={autoAdjustContent}
          />
          <Textarea
            {...rest}
            actions={actions}
            error={error}
            helpText={helpText}
            label={label}
            maxRows={3}
            onChange={e => setAutoAdjustContent(e.target.value)}
            placeholder={placeholder}
            value={autoAdjustContent}
          />
        </Flex>
      </div>
      <div>
        <Text type="bold-label">Read only:</Text>
        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
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
        </Flex>
      </div>
      <div>
        <Text type="bold-label">Disabled:</Text>
        <Flex gap={10}>
          <Textarea
            {...rest}
            actions={actions}
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
        </Flex>
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

export const WithActions = Template.bind({});
WithActions.args = {
  actions: (
    <Flex>
      <Button>Clear</Button>
      <Button variant="primary">Save</Button>
    </Flex>
  ),
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
