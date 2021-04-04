import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Select, SelectProps } from "../../components/Select";
import { HStack, HStackProps } from "../../components/Stack";

const HStackMeta: Meta = {
  title: "Amino/HStack",
  component: HStack,
  subcomponents: { Select }
};

export default HStackMeta;

const Template: Story<HStackProps> = args => (
  <HStack {...args}>
    <Select
      label="Frankfurters"
      helpText="When you go to a ballgame..."
      items={[]}
      onChange={() => {}}
      value=""
    />

    <Select
      label="HotDogs"
      helpText="If you are a fan."
      items={[]}
      onChange={() => {}}
      value=""
    />
  </HStack>
);

export const HStackSelects = Template.bind({});
HStackSelects.args = {
  spacing: "space"
};
