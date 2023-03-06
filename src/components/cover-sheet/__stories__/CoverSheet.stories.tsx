import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import {
  CoverSheet,
  CoverSheetProps,
} from 'src/components/cover-sheet/CoverSheet';
import { CoverSheetActions } from 'src/components/cover-sheet/CoverSheetActions';
import { VStack } from 'src/components/stack/VStack';
import styled from 'styled-components';

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

const Template: Story<CoverSheetProps & { actionPortalOpen?: boolean }> = ({
  actionPortalOpen: _actionPortalOpen = false,
  children,
  ...props
}: CoverSheetProps & { actionPortalOpen?: boolean }) => {
  const [open, setOpen] = useState(true);
  const [actionPortalOpen, setActionPortalOpen] = useState(_actionPortalOpen);
  const [secondCoversheetOpen, setSecondCoversheetOpen] = useState(false);

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
            intent="primary"
            onClick={() => setSecondCoversheetOpen(!secondCoversheetOpen)}
          >
            Open second CoverSheet
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
      </CoverSheet>
      <CoverSheet
        open={secondCoversheetOpen}
        label="Second Coversheet"
        onClose={() => setSecondCoversheetOpen(false)}
        actionWrapperId="second-cover-sheet"
      >
        This is a second coversheet set with <b>actionWrapperId</b>. The button
        action <b>Action in second coversheete</b> should be possitioned
        correctly at the top right of this coversheet
        <CoverSheetActions coverSheetActionId="second-cover-sheet">
          <Button onClick={() => setSecondCoversheetOpen(false)}>
            Action in second coversheete
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
      <Button>Save</Button>
    </>
  ),
  label: 'Label',
  children: <div />,
};

export const CoverSheetNoActions = Template.bind({});
CoverSheetNoActions.args = {
  actionPortalOpen: true,
  label: 'Label',
  children: <div />,
};
