import { type GravatarOptions, getGravatarUrl } from 'react-awesome-gravatar';

import styled from 'styled-components';

import type { ImageSize } from 'src/components/avatar/AvatarBase';
import { UserAvatar } from 'src/components/avatar/UserAvatar';

const Avatar = styled.img<{ $size?: number }>`
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  height: auto;
  max-width: ${p => p.$size}px;
`;

export type Props = { email: string | null; size?: ImageSize };

export const ProfileIcon = ({ email, size = 32 }: Props) => {
  const options: GravatarOptions = {
    default: 'mp',
    size,
  };

  const profileUrl = email && getGravatarUrl(email, options);

  if (profileUrl) {
    return <Avatar $size={size} alt="Profile" src={profileUrl} />;
  }
  return <UserAvatar size={size} />;
};
