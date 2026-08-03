import { useEffect, useRef, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';
import { Textarea, type TextareaProps } from 'src/components/textarea/Textarea';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { InfoIcon } from 'src/icons/InfoIcon';

const TextAreaMeta: Meta = {
  component: Textarea,
};

const longContent = `lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id iure amet accusantium ea consequuntur eaque animi fugiat iusto similique, vero velit distinctio sequi nesciunt odit nobis consequatur nihil sunt.`;

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

export const ClickPlacesCaret: StoryFn<TextareaProps> = props => {
  const [value, setValue] = useState('HS code for Brazil');
  return (
    <Textarea
      {...props}
      label="Description"
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  );
};
ClickPlacesCaret.tags = ['tested'];
ClickPlacesCaret.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textarea = canvas.getByRole<HTMLTextAreaElement>('textbox');

  // The decorative ::after overlay must be click-through: if it covers the
  // field it becomes the click target, and the label's click handler then
  // yanks the caret to the end of the value instead of leaving it where the
  // user clicked.
  const rect = textarea.getBoundingClientRect();
  const hit = document.elementFromPoint(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2,
  );
  expect(hit).toBe(textarea);

  // Click what a real pointer would hit, then place the caret mid-text. If
  // the overlay had captured the click, the label handler's deferred
  // "move caret to end" would override this position on the next tick.
  await userEvent.click(hit as HTMLElement);
  textarea.setSelectionRange(7, 7);
  await new Promise(resolve => {
    setTimeout(resolve, 50);
  });
  expect(textarea.selectionStart).toBe(7);
  expect(textarea.selectionStart).not.toBe(textarea.value.length);
};

export const LabelWithTooltip: StoryFn<TextareaProps> = props => {
  const [value, setValue] = useState('');
  return (
    <Textarea
      {...props}
      label={
        <span className="inline-flex items-center gap-1 align-middle">
          Description
          <Tooltip title="Explain the item's purpose and any special handling.">
            <InfoIcon color="gray600" inlineBlock size={14} />
          </Tooltip>
        </span>
      }
      onChange={e => setValue(e.target.value)}
      placeholder="Please fill out the description"
      value={value}
    />
  );
};
