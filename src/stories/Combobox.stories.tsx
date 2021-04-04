import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Combobox, ComboboxProps } from "../components/Combobox";

const ComboboxMeta: Meta = {
  title: "Amino/Combobox",
  component: Combobox
};

export default ComboboxMeta;

const Template: Story<ComboboxProps> = args => <Combobox {...args} />;

export const BasicCombobox = Template.bind({});
BasicCombobox.args = {
  label: "Example combobox",
  items: [
    {
      label: "Item A",
      value: "A"
    },
    {
      label: "Item B",
      value: "B"
    },
    {
      label: "Item C",
      value: "C"
    }
  ]
};
