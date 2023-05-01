import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';
import styled from 'styled-components';

import { ProfileIcon as ProfileIconComponent, Props } from '../ProfileIcon';

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

const Template: Story<Props> = () => {
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
