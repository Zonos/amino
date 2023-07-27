import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import {
  type SlideOverProps,
  SlideOver,
} from 'src/components/slide-over/SlideOver';
import { theme } from 'src/styles/constants/theme';

const SlideOverMeta: Meta = {
  component: SlideOver,
};

export default SlideOverMeta;

const Template: StoryFn<SlideOverProps> = ({
  actions,
  children,
  label,
  subtitle,
  withBackdrop,
}: SlideOverProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <SlideOver
        actions={actions}
        label={label}
        onClose={() => setOpen(false)}
        open={open}
        subtitle={subtitle}
        withBackdrop={withBackdrop}
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
  withBackdrop: false,
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
  subtitle: 'With a subtitle',
  withBackdrop: false,
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
  withBackdrop: false,
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
  withBackdrop: true,
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
  subtitle: 'With a subtitle',
  withBackdrop: true,
};
KitchenSinkSlideOver.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};

const HoverDiv = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;

  &:hover {
    background-color: ${theme.hoverColor};
  }
`;

export const WithHover = Template.bind({});
WithHover.args = {
  actions: (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
  children: <HoverDiv>Hover me</HoverDiv>,
  label: 'Slideover title',
  subtitle: 'With a subtitle',
  withBackdrop: true,
};
WithHover.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/Amino-Stickers?node-id=510%3A270',
  },
};
