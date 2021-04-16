import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { Button } from "../components/Button";
import { ConfirmDialog, ConfirmDialogProps } from "../components/ConfirmDialog";

const ConfirmDialogMeta: Meta = {
  title: "Amino/ConfirmDialog",
  component: ConfirmDialog,
  decorators: [withDesign],
};

export default ConfirmDialogMeta;

const Template: Story<ConfirmDialogProps> = ({
  label,
  dismissText,
  confirmText,
  subtitle,
  intent,
}: ConfirmDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open</Button>
      <ConfirmDialog
        label={label}
        subtitle={subtitle}
        open={open}
        confirmText={confirmText}
        confirmAction={() => setOpen(false)}
        dismissText={dismissText}
        dismissAction={() => setOpen(false)}
        intent={intent}
      />
    </>
  );
};

export const DefaultConfirm = Template.bind({});
DefaultConfirm.args = {
  label: "Are you sure?",
  subtitle: "Do you want to perform this action?",
  confirmText: "Don't do it",
  dismissText: "Do action",
  intent: "primary",
};
DefaultConfirm.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=151%3A53",
  },
};

export const DangerConfirm = Template.bind({});
DangerConfirm.args = {
  label: "Are you sure?",
  subtitle:
    "Do you want to email these 50,000 customers your middle school yearbook photo?",
  confirmText: "Email photos",
  dismissText: "Don't email",
  intent: "danger",
};
DangerConfirm.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=151%3A70",
  },
};
