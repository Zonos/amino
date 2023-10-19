import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Badge } from 'src/components/badge/Badge';
import { Button } from 'src/components/button/Button';
import { type DialogProps, Dialog } from 'src/components/dialog/Dialog';
import { Input } from 'src/components/input/Input';
import { theme } from 'src/styles/constants/theme';

const DialogMeta: Meta = {
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
  },
  component: Dialog,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=224%3A16329',
    },
  },
};

export default DialogMeta;

const StyledDialog = styled(Dialog)<{ $height: number }>`
  height: ${p => p.$height}px;
`;

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: StoryFn<DialogProps & { height: number }> = ({
  actions,
  children,
  label,
  leftActions,
  width,
  height,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <StyledDialog
        {...rest}
        $height={height}
        actions={actions}
        label={label}
        leftActions={leftActions}
        onClose={() => setOpen(false)}
        open={open}
        width={width}
      >
        {children}
      </StyledDialog>
    </CenteredDiv>
  );
};

export const BasicDialog = Template.bind({});
BasicDialog.args = {
  actions: (
    <>
      <Button size="md" variant="subtle">
        Close
      </Button>
      <Button size="md" variant="primary">
        Save
      </Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'StyledDialog title',
  width: 460,
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  actions: (
    <>
      <Button size="md" variant="subtle">
        Close
      </Button>
      <Button size="md" variant="primary">
        Save
      </Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'With subtitle',
  subtitle:
    'Choose your preferred units to be shown across the Zonos Dashboard.',
  width: 460,
};
WithSubtitle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=3602%3A67909',
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
      <Button size="md" variant="subtle">
        Close
      </Button>
      <Button size="md" variant="primary">
        Save
      </Button>
    </>
  ),
  children: <HoverDiv>Hover me</HoverDiv>,
  label: 'With subtitle',
  subtitle:
    'Choose your preferred units to be shown across the Zonos Dashboard.',
  width: 460,
};
WithHover.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=3602%3A67909',
  },
};

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const WithLink = Template.bind({});
WithLink.args = {
  actions: (
    <>
      <Button size="md" variant="subtle">
        Close
      </Button>
      <Button size="md" variant="primary">
        Save
      </Button>
    </>
  ),
  children: (
    <div>
      <a href="http://zonos.com">Here is a link</a>
    </div>
  ),
  label: (
    <StyledTitle>
      <span>StyledDialog title</span>
      <Badge color="blue">With a link</Badge>
    </StyledTitle>
  ),
  width: 460,
};

export const WithLeftActions = Template.bind({});
WithLeftActions.args = {
  actions: (
    <>
      <Button size="md" variant="subtle">
        Close
      </Button>
      <Button size="md" variant="primary">
        Do something amazing
      </Button>
    </>
  ),
  children: <div>Children</div>,
  label: 'StyledDialog title',
  leftActions: <Button size="md">Back</Button>,
  width: 650,
};

export const LongContentDialog = Template.bind({});
LongContentDialog.args = {
  actions: (
    <>
      <Button size="md" variant="subtle">
        Close
      </Button>
      <Button size="md" variant="primary">
        Save
      </Button>
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
  leftActions: <Button size="md">Back</Button>,
  width: 500,
};

export const WithInput = ({ height }: { height: number }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <StyledDialog
        $height={height}
        actions={
          <>
            <Button onClick={() => setOpen(false)} size="md" variant="subtle">
              Close
            </Button>
            <Button size="md" variant="primary">
              Submit
            </Button>
          </>
        }
        label="With an input"
        onClose={() => setOpen(false)}
        open={open}
        width={460}
      >
        <Input
          autoFocus
          onChange={e => setValue(e.target.value)}
          value={value}
        />
      </StyledDialog>
    </CenteredDiv>
  );
};
