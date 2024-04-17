import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Badge } from 'src/components/badge/Badge';
import { Button } from 'src/components/button/Button';
import { CoverSheet } from 'src/components/cover-sheet/CoverSheet';
import { Dialog, type DialogProps } from 'src/components/dialog/Dialog';
import { Input } from 'src/components/input/Input';

import styles from './Dialog.stories.module.scss';

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

const Template: StoryFn<DialogProps & { height: number }> = ({
  actions,
  children,
  height,
  label,
  leftActions,
  width,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.centeredDiv}
      style={{ '--amino-dialog-stories-height': height }}
    >
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
        className={styles.styledDialog}
        {...rest}
        actions={actions}
        label={label}
        leftActions={leftActions}
        onClose={() => setOpen(false)}
        open={open}
        width={width}
      >
        {children}
      </Dialog>
    </div>
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
  children: <div className={styles.hoverDiv}>Hover me</div>,
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
    <div className={styles.styledTitle}>
      <span>StyledDialog title</span>
      <Badge color="blue">With a link</Badge>
    </div>
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
    <div
      className={styles.centeredDiv}
      style={{ '--amino-dialog-stories-height': height }}
    >
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
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
        className={styles.styledDialog}
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
      </Dialog>
    </div>
  );
};

export const Nested = () => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  return (
    <div className={styles.centeredDiv}>
      <Button onClick={() => setFirstOpen(true)}>Open</Button>
      <Dialog
        actions={
          <>
            <Button
              onClick={() => setFirstOpen(false)}
              size="md"
              variant="subtle"
            >
              Close
            </Button>
            <Button size="md" variant="primary">
              Submit
            </Button>
          </>
        }
        label="With an input"
        onClose={() => setFirstOpen(false)}
        open={firstOpen}
        style={{
          maxHeight: '600px',
        }}
        width={460}
      >
        <Button onClick={() => setSecondOpen(true)}>Open</Button>

        <CoverSheet
          label="Cover sheet"
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
        >
          <Button onClick={() => setThirdOpen(true)}>Open</Button>

          <Dialog
            actions={
              <>
                <Button
                  onClick={() => setThirdOpen(false)}
                  size="md"
                  variant="subtle"
                >
                  Close
                </Button>
                <Button size="md" variant="primary">
                  Submit
                </Button>
              </>
            }
            label="With an input"
            onClose={() => setThirdOpen(false)}
            open={thirdOpen}
            width={460}
          >
            матрёшка
          </Dialog>
        </CoverSheet>
      </Dialog>
    </div>
  );
};
