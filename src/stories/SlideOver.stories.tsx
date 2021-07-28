import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Button } from '../components/Button';
import { SlideOver, SlideOverProps } from '../components/SlideOver';

const SlideOverMeta: Meta = {
  title: 'Amino/SlideOver',
  component: SlideOver,
  decorators: [withDesign],
};

export default SlideOverMeta;

const Template: Story<SlideOverProps> = ({
  children,
  label,
  actions,
  modal,
}: SlideOverProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <SlideOver
        modal={modal}
        actions={actions}
        label={label}
        open={open}
        onClose={() => setOpen(false)}
      >
        {children}
      </SlideOver>
    </>
  );
};

export const BasicSlideOver = Template.bind({});
BasicSlideOver.args = {
  label: 'Basic slide over',
  children: <div>Children</div>,
  modal: false,
};
BasicSlideOver.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};

export const ModalSlideOver = Template.bind({});
ModalSlideOver.args = {
  label: 'Modal slide over',
  children: <div>Children</div>,
  modal: true,
};
ModalSlideOver.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};

export const SlideOverWithActions = Template.bind({});
SlideOverWithActions.args = {
  label: 'Slide over with actions',
  children: <div>Children</div>,
  actions: (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
};
SlideOverWithActions.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A290',
  },
};
