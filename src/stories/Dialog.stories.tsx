import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Button } from '../components/Button';
import { Dialog, DialogProps } from '../components/Dialog';

const DialogMeta: Meta = {
  title: 'Amino/Dialog',
  component: Dialog,
  decorators: [withDesign],
};

export default DialogMeta;

const Template: Story<DialogProps> = ({
  actions,
  leftActions,
  children,
  label,
  width,
}: DialogProps) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Dialog
        leftActions={leftActions}
        actions={actions}
        label={label}
        open={open}
        onClose={() => setOpen(false)}
        width={width}
      >
        {children}
      </Dialog>
    </>
  );
};

export const BasicDialog = Template.bind({});
BasicDialog.args = {
  leftActions: (
    <>
      <Button>Back</Button>
    </>
  ),
  actions: (
    <>
      <Button>Close</Button>
      <Button intent="primary">Save</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'Label',
  width: 650,
};
BasicDialog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=102%3A79',
  },
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
      <Button>Close</Button>
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
LongContentDialog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=102%3A79',
  },
};
