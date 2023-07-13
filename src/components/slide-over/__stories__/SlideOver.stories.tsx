import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  type SlideOverProps,
  SlideOver,
} from 'src/components/slide-over/SlideOver';

const SlideOverMeta: Meta = {
  component: SlideOver,
};

export default SlideOverMeta;

const Template: StoryFn<SlideOverProps> = ({
  actions,
  children,
  label,
  modal,
  subtitle,
}: SlideOverProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <SlideOver
        actions={actions}
        label={label}
        modal={modal}
        onClose={() => setOpen(false)}
        open={open}
        subtitle={subtitle}
      >
        {children}
      </SlideOver>
    </>
  );
};

export const BasicSlideOver = Template.bind({});
BasicSlideOver.args = {
  children: <div>Children</div>,
  label: 'Slideover title',
  modal: false,
};
BasicSlideOver.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};

export const SlideOverWithSubtitle = Template.bind({});
SlideOverWithSubtitle.args = {
  children: <div>Children</div>,
  label: 'Slideover title',
  modal: false,
  subtitle: 'With a subtitle',
};
SlideOverWithSubtitle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};

export const SlideOverWithActions = Template.bind({});
SlideOverWithActions.args = {
  actions: (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'Slideover title',
  modal: false,
};
SlideOverWithActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A290',
  },
};

export const ModalSlideOver = Template.bind({});
ModalSlideOver.args = {
  children: <div>Children</div>,
  label: 'Slideover title',
  modal: true,
};
ModalSlideOver.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};

export const KitchenSinkSlideOver = Template.bind({});
KitchenSinkSlideOver.args = {
  actions: (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'Slideover title',
  modal: true,
  subtitle: 'With a subtitle',
};
KitchenSinkSlideOver.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};
