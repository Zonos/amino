import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Input } from 'src/components/input/Input';
import {
  ProfileIcon as ProfileIconComponent,
  type Props,
} from 'src/components/profile-icon/ProfileIcon';
import { Text } from 'src/components/text/Text';

import styles from './ProfileIcon.stories.module.scss';

const ProfileIconMeta: Meta = {
  component: ProfileIconComponent,
};

export default ProfileIconMeta;

const Template: StoryFn<Props> = () => {
  const [email, setEmail] = useState('');
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexWrap}>
        <ProfileIconComponent email={email} />
        <Input
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
        />
      </div>

      <Text fontSize="s">Enter your email to see your associated gravatar</Text>
    </div>
  );
};

export const ProfileIcon = Template.bind({});
