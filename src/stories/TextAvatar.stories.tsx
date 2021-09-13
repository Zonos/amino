import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { TextAvatar, TextAvatarProps } from '../components/TextAvatar';

const TextAvatarMeta: Meta = {
  title: 'Amino/TextAvatar',
  component: TextAvatar,
};

export default TextAvatarMeta;

const Template: Story<TextAvatarProps> = ({ label }: TextAvatarProps) => (
  <TextAvatar label={label} />
);

export const BasicTextAvatar = Template.bind({});
BasicTextAvatar.args = {
  label: 'Rocketship Inc',
};
