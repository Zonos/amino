import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';
import styled from 'styled-components';

import {
  type Props,
  ProfileIcon as ProfileIconComponent,
} from '../ProfileIcon';

const ProfileIconMeta: Meta = {
  component: ProfileIconComponent,
};

export default ProfileIconMeta;

const Wrapper = styled.div`
  height: auto;
  width: 360px;
  margin: 0 auto;
`;

const FlexWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Template: StoryFn<Props> = () => {
  const [email, setEmail] = useState('');
  return (
    <Wrapper>
      <FlexWrap>
        <ProfileIconComponent email={email} />
        <Input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FlexWrap>

      <Text fontSize="s">Enter your email to see your associated gravatar</Text>
    </Wrapper>
  );
};

export const ProfileIcon = Template.bind({});
