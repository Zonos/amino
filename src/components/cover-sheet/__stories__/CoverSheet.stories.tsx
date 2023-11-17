import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Button } from 'src/components/button/Button';
import {
  type CoverSheetProps,
  CoverSheet,
} from 'src/components/cover-sheet/CoverSheet';
import { CoverSheetActions } from 'src/components/cover-sheet/CoverSheetActions';
import { VStack } from 'src/components/stack/VStack';

const CoverSheetMeta: Meta = {
  component: CoverSheet,
};

export default CoverSheetMeta;

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Basic: StoryFn<CoverSheetProps> = ({
  children,
  ...props
}: CoverSheetProps) => {
  const [open, setOpen] = useState(false);
  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <CoverSheet
        {...props}
        actions={<Button variant="primary">Click me</Button>}
        label="Cover sheet"
        onClose={() => setOpen(false)}
        open={open}
      >
        <p>
          Bacon ipsum dolor amet drumstick sausage pig beef picanha leberkas ham
          hock doner pork venison t-bone ground round pork belly biltong. Shank
          doner capicola spare ribs cow andouille. Cupim pancetta chislic rump
          beef beef ribs, pork short loin filet mignon pork belly pastrami.
          Ribeye turkey shank pork belly shankle. Ground round cow beef ribs,
          chicken tongue salami chislic drumstick cupim ribeye shankle rump pork
          chop. Chuck pork chop ball tip bacon cupim landjaeger.
        </p>
      </CoverSheet>
    </CenteredDiv>
  );
};

const Template: StoryFn<CoverSheetProps & { actionPortalOpen?: boolean }> = ({
  actionPortalOpen: _actionPortalOpen = false,
  children,
  ...props
}: CoverSheetProps & { actionPortalOpen?: boolean }) => {
  const [open, setOpen] = useState(true);
  const [actionPortalOpen, setActionPortalOpen] = useState(_actionPortalOpen);
  const [secondCoversheetOpen, setSecondCoversheetOpen] = useState(false);
  const [toggleErrorCoversheetAction, setToggleErrorCoversheetAction] =
    useState(false);

  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <CoverSheet {...props} onClose={() => setOpen(false)} open={open}>
        {children}
        <VStack>
          <Button onClick={() => setActionPortalOpen(!actionPortalOpen)}>
            Toggle coversheet action portal
          </Button>
          <Button
            onClick={() => setSecondCoversheetOpen(!secondCoversheetOpen)}
            variant="primary"
          >
            Open second CoverSheet
          </Button>
          <Button onClick={() => setToggleErrorCoversheetAction(true)}>
            Toggle error coversheet action (This will throw an error)
          </Button>
        </VStack>
        {actionPortalOpen && (
          <CoverSheetActions coverSheetActionId="__cover-sheet-actions">
            <Button onClick={() => setActionPortalOpen(false)}>
              Remove coversheet actions
            </Button>
            <Button>Save (coversheet)</Button>
          </CoverSheetActions>
        )}
        {toggleErrorCoversheetAction && (
          <CoverSheetActions coverSheetActionId="non-existing-id">
            <Button onClick={() => setToggleErrorCoversheetAction(false)}>
              Remove coversheet actions
            </Button>
          </CoverSheetActions>
        )}
      </CoverSheet>
      <CoverSheet
        actionWrapperId="second-cover-sheet"
        label="Second Coversheet"
        onClose={() => setSecondCoversheetOpen(false)}
        open={secondCoversheetOpen}
      >
        This is a second coversheet set with <b>actionWrapperId</b>. The button
        action <b>Action in second coversheet</b> should be positioned correctly
        at the top right of this coversheet
        <CoverSheetActions coverSheetActionId="second-cover-sheet">
          <Button onClick={() => setSecondCoversheetOpen(false)}>
            Action in second coversheet
          </Button>
        </CoverSheetActions>
      </CoverSheet>
    </CenteredDiv>
  );
};

export const CoverSheetWithActions = Template.bind({});
CoverSheetWithActions.args = {
  actions: (
    <>
      <Button>Cancel</Button>
      <Button variant="primary">Save</Button>
    </>
  ),
  children: <div />,
  label: 'Label',
};

export const CoverSheetNoActions = Template.bind({});
CoverSheetNoActions.args = {
  actionPortalOpen: true,
  children: <div />,
  label: 'Label',
};
