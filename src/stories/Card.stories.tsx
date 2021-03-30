import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "../components/Card";
import { Button } from "../components/Button";

export default {
  title: "Amino/Card",
  component: Card
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: "Card contents",
  label: "My hot card"
};

export const CardWithActions = Template.bind({});
CardWithActions.args = {
  children: "Card contents",
  label: "My hot card",
  actions: <Button>Title action</Button>,
  footerActions: <Button>Footer action</Button>
};
