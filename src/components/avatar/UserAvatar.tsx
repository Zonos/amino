import avatarImg from '../../../svgReact/icons/custom-svgs/Avatar.svg';
import { AvatarBase, AvatarProps } from './AvatarBase';

export type UserAvatarProps = AvatarProps;

export const UserAvatar = ({
  size = 32,
  shape = 'round',
  bordered = false,
}: AvatarProps) => (
  <AvatarBase
    backgroundSize="80%"
    backgroundUrl={`${avatarImg}`}
    bordered={bordered}
    shape={shape}
    size={size}
  />
);
