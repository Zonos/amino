import { type GravatarOptions, getGravatarUrl } from 'react-awesome-gravatar';

import type { ImageSize } from 'src/components/avatar/AvatarBase';
import { UserAvatar } from 'src/components/avatar/UserAvatar';

import styles from './ProfileIcon.module.scss';

export type Props = { email: string | null; size?: ImageSize };

export const ProfileIcon = ({ email, size = 32 }: Props) => {
  const options: GravatarOptions = {
    default: 'mp',
    size,
  };

  const profileUrl = email && getGravatarUrl(email, options);

  if (profileUrl) {
    return (
      <img
        alt="Profile"
        className={styles.avatar}
        src={profileUrl}
        style={{ '--amino-profile-icon-max-width': `${size}px` }}
      />
    );
  }
  return <UserAvatar size={size} />;
};
