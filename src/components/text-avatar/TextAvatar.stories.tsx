import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  TextAvatar as TextAvatarComponent,
  TextAvatarProps,
} from 'src/components/text-avatar/TextAvatar';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

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
    String.fromCharCode(((n + 10) % 26) + 65)
);

const Template: Story<TextAvatarProps> = () => (
  <Wrapper>
    {codes.map(n => (
      <TextAvatarComponent label={n} key={n} />
    ))}
  </Wrapper>
);

export const TextAvatar = Template.bind({});
