import type { Meta, StoryFn } from '@storybook/react';

import {
  TextAvatar as TextAvatarComponent,
  type TextAvatarProps,
} from 'src/components/text-avatar/TextAvatar';

import styles from './TextAvatar.stories.module.scss';

const TextAvatarMeta: Meta = {
  component: TextAvatarComponent,
};

export default TextAvatarMeta;

// Just a crazy function to make unique strings
const codes = [...Array(250).keys()].map(
  n =>
    String.fromCharCode((n % 26) + 65).repeat(n % 40) +
    String.fromCharCode(((n + 10) % 26) + 65),
);

const Template: StoryFn<TextAvatarProps> = () => (
  <div className={styles.wrapper}>
    {codes.map(n => (
      <TextAvatarComponent key={n} label={n} />
    ))}
  </div>
);

export const TextAvatar = Template.bind({});
