import { type GravatarOptions, getGravatarUrl } from 'react-awesome-gravatar';

import styled from 'styled-components';

import type { ImageSize } from '../avatar/AvatarBase';
import { UserAvatar } from '../avatar/UserAvatar';

const Avatar = styled.img<{ size?: number }>`
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  height: auto;
  max-width: ${({ size }) => size}px;
`;

export type Props = { email: string | null; size?: ImageSize };

export const ProfileIcon = ({ email, size = 32 }: Props) => {
  const options: GravatarOptions = {
    default: 'mp',
    size,
  };

  const profileUrl = email && getGravatarUrl(email, options);

  if (profileUrl) {
    return <Avatar alt="Profile" size={size} src={profileUrl} />;
  }
  return <UserAvatar size={size} />;
};
