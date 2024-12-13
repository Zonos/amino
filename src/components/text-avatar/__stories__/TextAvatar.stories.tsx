import type { Meta, StoryFn } from '@storybook/react';

import { Flex } from 'src/components/flex/Flex';
import {
  TextAvatar as TextAvatarComponent,
  type TextAvatarProps,
} from 'src/components/text-avatar/TextAvatar';

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
  <Flex flexWrap="wrap" gap={16}>
    {codes.map(n => (
      <TextAvatarComponent key={n} label={n} />
    ))}
  </Flex>
);

export const TextAvatar = Template.bind({});
