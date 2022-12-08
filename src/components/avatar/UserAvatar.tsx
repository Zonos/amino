import avatarImg from '../../../svgReact/icons/custom-svgs/Avatar.svg';
import { AvatarBase, AvatarProps } from './AvatarBase';

export type UserAvatarProps = AvatarProps;

export const UserAvatar = ({ size, shape }: AvatarProps) => (
  <AvatarBase
    shape={shape}
    size={size}
    backgroundUrl={`${avatarImg}`}
    backgroundSize="80%"
  />
);
