import {
  AvatarBase,
  type FullAvatarProps,
} from 'src/components/avatar/AvatarBase';

export type ImageAvatarProps = {
  imageUrl: string;
} & FullAvatarProps;

export const ImageAvatar = ({
  bordered = false,
  className,
  imageUrl,
  shape = 'round',
  size = 32,
  style,
}: ImageAvatarProps) => (
  <AvatarBase
    backgroundColor="transparent"
    backgroundSize="contain"
    backgroundUrl={imageUrl}
    bordered={bordered}
    className={className}
    shape={shape}
    size={size}
    style={style}
  />
);
