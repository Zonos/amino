import type { Meta, StoryFn } from '@storybook/react';

import { Flex } from 'src/components/flex/Flex';
import {
  type Props,
  ThemeSelect as ThemeSelectComponent,
} from 'src/components/theme-select/ThemeSelect';

const ThemeSelectMeta: Meta = {
  component: ThemeSelectComponent,
};

export default ThemeSelectMeta;

const Template: StoryFn = ({ type }: Props) => (
  <Flex alignItems="center" justifyContent="center">
    <ThemeSelectComponent type={type} />
  </Flex>
);

export const Default = Template.bind({});

export const Cards = Template.bind({});
Cards.args = { type: 'cards' };

export const Toggle = Template.bind({});
Toggle.args = { type: 'toggle' };
