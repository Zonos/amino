import {
  AvatarBase,
  type FullAvatarProps,
} from 'src/components/avatar/AvatarBase';

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import avatarImg from '../../../svgReact/icons/custom-svgs/Avatar.svg';

export type UserAvatarProps = FullAvatarProps;

export const UserAvatar = ({
  bordered = false,
  className,
  shape = 'round',
  size = 32,
  style,
}: UserAvatarProps) => (
  <AvatarBase
    backgroundPosition="bottom"
    backgroundSize="80%"
    backgroundUrl={`${avatarImg}`}
    bordered={bordered}
    className={className}
    shape={shape}
    size={size}
    style={style}
  />
);
