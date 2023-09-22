import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { LegacyButton } from 'src/components/button/LegacyButton';
import {
  type SlideOverProps,
  SlideOver,
} from 'src/components/slide-over/SlideOver';
import { theme } from 'src/styles/constants/theme';

const SlideOverMeta: Meta = {
  component: SlideOver,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KQ4abEtUOTVtoEIm8mImZe/Dashboard?node-id=8905%3A168619',
    },
  },
};

export default SlideOverMeta;

const Template: StoryFn<SlideOverProps> = ({
  actions,
  children,
  label,
  subtitle,
  withBackdrop,
  ...props
}: SlideOverProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <LegacyButton onClick={() => setOpen(true)}>open</LegacyButton>
      <SlideOver
        {...props}
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
};

export const SlideOverWithSubtitle = Template.bind({});
SlideOverWithSubtitle.args = {
  children: <div>Children</div>,
  label: 'Slideover title',
  subtitle: 'With a subtitle',
};

export const SlideOverWithActions = Template.bind({});
SlideOverWithActions.args = {
  actions: (
    <>
      <LegacyButton>Action 1</LegacyButton>
      <LegacyButton>Action 2</LegacyButton>
    </>
  ),
  children: <div>Children</div>,
  label: 'Slideover title',
};

export const ModalSlideOver = Template.bind({});
ModalSlideOver.args = {
  children: <div>Children</div>,
  label: 'Slideover title',
};

export const KitchenSinkSlideOver = Template.bind({});
KitchenSinkSlideOver.args = {
  actions: (
    <>
      <LegacyButton>Action 1</LegacyButton>
      <LegacyButton>Action 2</LegacyButton>
    </>
  ),
  children: <div>Children</div>,
  label: 'Slideover title',
  subtitle: 'With a subtitle',
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
      <LegacyButton>Action 1</LegacyButton>
      <LegacyButton>Action 2</LegacyButton>
    </>
  ),
  children: <HoverDiv>Hover me</HoverDiv>,
  label: 'Slideover title',
  subtitle: 'With a subtitle',
};
