import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import {
  type Props,
  ThemeSelect as ThemeSelectComponent,
} from '../ThemeSelect';

const ThemeSelectMeta: Meta = {
  component: ThemeSelectComponent,
};

export default ThemeSelectMeta;

const Wrapper = styled.div`
  height: auto;
  max-width: 600px;
  margin: 0 auto;
`;

const Template: StoryFn = ({ type }: Props) => (
  <Wrapper>
    <ThemeSelectComponent type={type} />
  </Wrapper>
);

export const Default = Template.bind({});

export const Cards = Template.bind({});
Cards.args = { type: 'cards' };

export const Toggle = Template.bind({});
Toggle.args = { type: 'toggle' };
