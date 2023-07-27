import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import { Card } from 'src/components/card/Card';
import { BaseDialog } from 'src/components/dialog/BaseDialog';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';

const DialogMeta: Meta = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  component: BaseDialog,
};

export default DialogMeta;

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Template: StoryFn<typeof BaseDialog> = ({ children, width, ...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Card label="I am a card">
        <Text type="subheader">Here is some other content</Text>
      </Card>
      <BaseDialog
        {...rest}
        onClose={() => setOpen(false)}
        open={open}
        width={width}
      >
        {children}
      </BaseDialog>
    </CenteredDiv>
  );
};

export const WithText = Template.bind({});
WithText.args = {
  children: <Text type="page-header">Some text</Text>,
};

export const WithInput = Template.bind({});
const ExampleInput = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: '10px' }}>
      <Input
        autoFocus
        label="What is your favorite color?"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
WithInput.args = {
  children: <ExampleInput />,
};

export const CustomAnimation = Template.bind({});
CustomAnimation.args = {
  children: <Text type="page-header">I come in from the bottom</Text>,
  popupMotionProps: {
    animate: { opacity: 1, translateY: 0 },
    exit: { opacity: 0, translateY: 300 },
    initial: { opacity: 0, translateY: 300 },
  },
};
