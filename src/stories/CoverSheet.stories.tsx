import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "../components/Button";
import { CoverSheet, CoverSheetProps } from "../components/CoverSheet";

const CoverSheetMeta: Meta = {
  title: "Amino/CoverSheet",
  component: CoverSheet,
};

export default CoverSheetMeta;

const Template: Story<CoverSheetProps> = ({
  label,
  onClose,
  children,
  actions,
}: CoverSheetProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <CoverSheet
        actions={actions}
        label={label}
        onClose={() => {
          setOpen(false);
          onClose();
        }}
        open={open}
      >
        {children}
      </CoverSheet>
    </>
  );
};

export const CoverSheetSelects = Template.bind({});
CoverSheetSelects.args = {
  label: "Label",
  onClose: () => console.log("closed"),
  children: <div>Children</div>,
};
