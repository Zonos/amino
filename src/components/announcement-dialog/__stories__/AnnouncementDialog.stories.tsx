import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import {
  type AnnouncementDialogProps,
  AnnouncementDialog,
} from 'src/components/announcement-dialog/AnnouncementDialog';
import { Button } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';

const AnnouncementDialogMeta: Meta = {
  argTypes: {
    actions: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
  },
  component: AnnouncementDialog,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=224%3A16329',
    },
  },
};

export default AnnouncementDialogMeta;

const StyledAnnouncementDialog = styled(AnnouncementDialog)<{
  $height: number;
}>`
  height: ${p => p.$height}px;
`;

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: StoryFn<AnnouncementDialogProps & { height: number }> = ({
  announcementId,
  children,
  height,
  label,
  width,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <StyledAnnouncementDialog
        {...rest}
        $height={height}
        announcementId={announcementId}
        label={label}
        onClose={() => setOpen(false)}
        open={open}
        width={width}
      >
        {children}
      </StyledAnnouncementDialog>
    </CenteredDiv>
  );
};

export const BasicDialog = Template.bind({});
BasicDialog.args = {
  announcementId: 'amino-storybook-announcement-dialog',
  children: (
    <>
      This cool feature has moved locations.{' '}
      <Text fontWeight={600}>
        Go to settings <ArrowRightIcon size={16} /> Cool Feature{' '}
      </Text>
      to use the updated feature.
    </>
  ),
  image: <img alt="Announcement example" src="/logo.png" />,
  label: 'Feature update',
  title: 'This is a feature update!',
  width: 460,
};
