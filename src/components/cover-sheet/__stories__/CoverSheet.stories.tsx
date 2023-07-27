import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { LegacyButton } from 'src/components/button/LegacyButton';
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
      <LegacyButton onClick={() => setOpen(true)}>Open</LegacyButton>

      <CoverSheet {...props} onClose={() => setOpen(false)} open={open}>
        {children}
        <VStack>
          <LegacyButton onClick={() => setActionPortalOpen(!actionPortalOpen)}>
            Toggle coversheet action portal
          </LegacyButton>
          <LegacyButton
            intent="primary"
            onClick={() => setSecondCoversheetOpen(!secondCoversheetOpen)}
          >
            Open second CoverSheet
          </LegacyButton>
          <LegacyButton onClick={() => setToggleErrorCoversheetAction(true)}>
            Toggle error coversheet action (This will throw an error)
          </LegacyButton>
        </VStack>
        {actionPortalOpen && (
          <CoverSheetActions coverSheetActionId="__cover-sheet-actions">
            <LegacyButton onClick={() => setActionPortalOpen(false)}>
              Remove coversheet actions
            </LegacyButton>
            <LegacyButton>Save (coversheet)</LegacyButton>
          </CoverSheetActions>
        )}
        {toggleErrorCoversheetAction && (
          <CoverSheetActions coverSheetActionId="non-existing-id">
            <LegacyButton onClick={() => setToggleErrorCoversheetAction(false)}>
              Remove coversheet actions
            </LegacyButton>
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
          <LegacyButton onClick={() => setSecondCoversheetOpen(false)}>
            Action in second coversheet
          </LegacyButton>
        </CoverSheetActions>
      </CoverSheet>
    </CenteredDiv>
  );
};

export const CoverSheetWithActions = Template.bind({});
CoverSheetWithActions.args = {
  actions: (
    <>
      <LegacyButton>Cancel</LegacyButton>
      <LegacyButton>Save</LegacyButton>
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
