import type { Meta, StoryFn } from '@storybook/react';
import { ThemeSelect as ThemeSelectComponent } from 'src/components/select/ThemeSelect';
import styled from 'styled-components';

const ThemeSelectMeta: Meta = {
  component: ThemeSelectComponent,
};

export default ThemeSelectMeta;

const Wrapper = styled.div`
  height: auto;
  width: 360px;
  margin: 0 auto;
`;

const Template: StoryFn = () => (
  <Wrapper>
    <ThemeSelectComponent />
  </Wrapper>
);

export const ThemeSelect = Template.bind({});
