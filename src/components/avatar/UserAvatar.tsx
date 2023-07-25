import { type AvatarProps, AvatarBase } from 'src/components/avatar/AvatarBase';

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import avatarImg from '../../../svgReact/icons/custom-svgs/Avatar.svg';

export type UserAvatarProps = AvatarProps;

export const UserAvatar = ({
  bordered = false,
  shape = 'round',
  size = 32,
}: AvatarProps) => (
  <AvatarBase
    backgroundPosition="bottom"
    backgroundSize="80%"
    backgroundUrl={`${avatarImg}`}
    bordered={bordered}
    shape={shape}
    size={size}
  />
);
