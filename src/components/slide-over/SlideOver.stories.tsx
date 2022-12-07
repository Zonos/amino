import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { SlideOver, SlideOverProps } from 'src/components/slide-over/SlideOver';

const SlideOverMeta: Meta = {
  component: SlideOver,
};

export default SlideOverMeta;

const Template: Story<SlideOverProps> = ({
  children,
  label,
  actions,
  modal,
  subtitle,
}: SlideOverProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <SlideOver
        subtitle={subtitle}
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
  label: 'Slideover title',
  children: <div>Children</div>,
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
  label: 'Slideover title',
  subtitle: 'With a subtitle',
  children: <div>Children</div>,
  modal: false,
};
SlideOverWithSubtitle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};

export const SlideOverWithActions = Template.bind({});
SlideOverWithActions.args = {
  label: 'Slideover title',
  children: <div>Children</div>,
  modal: false,
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
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A290',
  },
};

export const ModalSlideOver = Template.bind({});
ModalSlideOver.args = {
  label: 'Slideover title',
  children: <div>Children</div>,
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
  label: 'Slideover title',
  subtitle: 'With a subtitle',
  children: <div>Children</div>,
  actions: (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
  modal: true,
};
KitchenSinkSlideOver.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};
