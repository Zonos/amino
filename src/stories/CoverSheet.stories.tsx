import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import {
  CoverSheet,
  CoverSheetProps,
} from 'src/components/cover-sheet/CoverSheet';
import { CoverSheetActions } from 'src/components/cover-sheet/CoverSheetActions';
import styled from 'styled-components';

const CoverSheetMeta: Meta = {
  title: 'Amino/CoverSheet',
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
  const [open, setOpen] = useState(false);
  const [actionPortalOpen, setActionPortalOpen] = useState(_actionPortalOpen);
  return (
    <CenteredDiv>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <CoverSheet {...props} onClose={() => setOpen(false)} open={open}>
        {children}
        <Button onClick={() => setActionPortalOpen(!actionPortalOpen)}>
          Toggle coversheet action portal
        </Button>
        {actionPortalOpen && (
          <CoverSheetActions>
            <Button onClick={() => setActionPortalOpen(false)}>
              Remove coversheet actions
            </Button>
            <Button>Save (coversheet)</Button>
          </CoverSheetActions>
        )}
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
  children: <div>Children</div>,
};

export const CoverSheetNoActions = Template.bind({});
CoverSheetNoActions.args = {
  actionPortalOpen: true,
  label: 'Label',
  children: <div>Children</div>,
};
