import { getGravatarUrl, GravatarOptions } from 'react-awesome-gravatar';

import { UserDuotoneIcon } from 'src/icons/UserDuotoneIcon';
import styled from 'styled-components';

const Avatar = styled.img<{ size?: number }>`
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  height: auto;
  max-width: ${({ size }) => size}px;
`;

export type Props = { email: string | null; size?: number };

export const ProfileIcon = ({ email, size = 32 }: Props) => {
  const options: GravatarOptions = {
    default: 'mp',
    size,
  };

  const profileUrl = email && getGravatarUrl(email, options);

  if (profileUrl) {
    return <Avatar size={size} alt="Profile" src={profileUrl} />;
  }
  return <UserDuotoneIcon color="gray800" secondaryColor="gray800" />;
};
