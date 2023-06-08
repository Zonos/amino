import avatarImg from '../../../svgReact/icons/custom-svgs/Avatar.svg';
import { type AvatarProps, AvatarBase } from './AvatarBase';

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
