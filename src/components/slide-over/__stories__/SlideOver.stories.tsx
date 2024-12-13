import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { CoverSheet } from 'src/components/cover-sheet/CoverSheet';
import {
  SlideOver,
  type SlideOverProps,
} from 'src/components/slide-over/SlideOver';

import styles from './SlideOver.stories.module.scss';

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
      <Button onClick={() => setOpen(true)}>open</Button>
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
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'Slideover title',
};

export const SlideOverWithBottomActions = Template.bind({});
SlideOverWithBottomActions.args = {
  bottomActions: (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'Slideover title',
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
};

export const WithHover = Template.bind({});
WithHover.args = {
  actions: (
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  ),
  children: <div className={styles.hoverDiv}>Hover me</div>,
  label: 'Slideover title',
  subtitle: 'With a subtitle',
};

export const FullWindowWidth = Template.bind({});
FullWindowWidth.args = {
  children: <div>Children</div>,
  fullWindowWidth: true,
  label: 'Slideover title',
};

export const WithCoverSheet: StoryFn<SlideOverProps> = ({
  actions,
  children,
  label = 'With cover sheet',
  subtitle = 'Slide over should remain open on escape',
  withBackdrop,
  ...props
}: SlideOverProps) => {
  const [open, setOpen] = useState(false);
  const [coverSheetOpen, setCoverSheetOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <SlideOver
        {...props}
        actions={actions}
        label={label}
        onClose={() => setOpen(false)}
        open={open}
        subtitle={subtitle}
        withBackdrop={withBackdrop}
      >
        <Button onClick={() => setCoverSheetOpen(true)}>
          Open Cover Sheet
        </Button>
        <CoverSheet
          className={styles.styledCoverSheet}
          label="Cover sheet"
          onClose={() => setCoverSheetOpen(false)}
          open={coverSheetOpen}
        >
          <div>Content</div>
        </CoverSheet>
      </SlideOver>
    </>
  );
};
