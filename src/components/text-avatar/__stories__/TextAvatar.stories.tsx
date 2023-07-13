import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import {
  type TextAvatarProps,
  TextAvatar as TextAvatarComponent,
} from 'src/components/text-avatar/TextAvatar';
import { theme } from 'src/styles/constants/theme';

const TextAvatarMeta: Meta = {
  component: TextAvatarComponent,
};

export default TextAvatarMeta;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space16};
`;

// Just a crazy function to make unique strings
const codes = [...Array(250).keys()].map(
  n =>
    String.fromCharCode((n % 26) + 65).repeat(n % 40) +
    String.fromCharCode(((n + 10) % 26) + 65),
);

const Template: StoryFn<TextAvatarProps> = () => (
  <Wrapper>
    {codes.map(n => (
      <TextAvatarComponent key={n} label={n} />
    ))}
  </Wrapper>
);

export const TextAvatar = Template.bind({});
