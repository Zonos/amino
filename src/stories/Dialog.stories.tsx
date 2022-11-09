import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Dialog, DialogProps } from 'src/components/dialog/Dialog';
import { Input } from 'src/components/input/Input';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const DialogMeta: Meta = {
  title: 'Amino/Dialog',
  component: Dialog,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=224%3A16329',
    },
  },
};

export default DialogMeta;

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story<DialogProps> = ({
  actions,
  leftActions,
  children,
  label,
  width,
  ...rest
}: DialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
        {...rest}
        leftActions={leftActions}
        actions={actions}
        label={label}
        open={open}
        onClose={() => setOpen(false)}
        width={width}
      >
        {children}
      </Dialog>
    </CenteredDiv>
  );
};

export const BasicDialog = Template.bind({});
BasicDialog.args = {
  actions: (
    <>
      <Button intent="outline">Close</Button>
      <Button intent="primary">Save</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'Dialog title',
  width: 460,
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  actions: (
    <>
      <Button intent="outline">Close</Button>
      <Button intent="primary">Save</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'With subtitle',
  subtitle:
    'Choose your preferred units to be shown across the Zonos Dashboard.',
  width: 460,
};

export const WithLink = Template.bind({});
WithLink.args = {
  actions: (
    <>
      <Button intent="outline">Close</Button>
      <Button intent="primary">Save</Button>
    </>
  ),
  children: (
    <div>
      <a href="http://zonos.com">Here is a link</a>
    </div>
  ),
  label: 'Dialog title',
  width: 460,
};

export const WithLeftActions = Template.bind({});
WithLeftActions.args = {
  leftActions: (
    <>
      <Button>Back</Button>
    </>
  ),
  actions: (
    <>
      <Button intent="outline">Close</Button>
      <Button intent="primary">Save</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'Dialog title',
  width: 650,
};

export const LongContentDialog = Template.bind({});
LongContentDialog.args = {
  leftActions: (
    <>
      <Button>Back</Button>
    </>
  ),
  actions: (
    <>
      <Button intent="outline">Close</Button>
      <Button intent="primary">Save</Button>
    </>
  ),
  children: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ipsa
      itaque earum a facilis eos? Obcaecati dolorem ratione ex, perspiciatis
      animi nihil fuga necessitatibus soluta tenetur veritatis. Accusamus, quasi
      quaerat?
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id fugit
      ab explicabo consequuntur in necessitatibus officiis, minus distinctio
      consequatur debitis animi quaerat repellendus eius? A amet quae quibusdam
      laudantium.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id fugit
      ab explicabo consequuntur in necessitatibus officiis, minus distinctio
      consequatur debitis animi quaerat repellendus eius? A amet quae quibusdam
      laudantium.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id fugit
      ab explicabo consequuntur in necessitatibus officiis, minus distinctio
      consequatur debitis animi quaerat repellendus eius? A amet quae quibusdam
      laudantium.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id fugit
      ab explicabo consequuntur in necessitatibus officiis, minus distinctio
      consequatur debitis animi quaerat repellendus eius? A amet quae quibusdam
      laudantium.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id fugit
      ab explicabo consequuntur in necessitatibus officiis, minus distinctio
      consequatur debitis animi quaerat repellendus eius? A amet quae quibusdam
      laudantium.
    </div>
  ),
  label: 'Label',
  width: 500,
};

export const WithInput = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
        actions={
          <>
            <Button intent="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button intent="primary">Submit</Button>
          </>
        }
        label="With an input"
        open={open}
        onClose={() => setOpen(false)}
        width={460}
      >
        <Input
          onChange={e => setValue(e.target.value)}
          value={value}
          autoFocus
        />
      </Dialog>
    </CenteredDiv>
  );
};
