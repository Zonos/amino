import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
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
  label,
  children,
  actions,
}: DialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Dialog actions={actions} label={label} open={open}>
        {children}
      </Dialog>
    </>
  );
};

export const BasicDialog = Template.bind({});
BasicDialog.args = {
  label: 'Label',
  children: <div>Children</div>,
  actions: <Button>Close</Button>,
};
BasicDialog.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=102%3A79',
  },
};
