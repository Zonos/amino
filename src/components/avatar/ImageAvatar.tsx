import { AvatarBase, AvatarProps } from './AvatarBase';

export type ImageAvatarProps = {
  imageUrl: string;
} & AvatarProps;

export const ImageAvatar = ({
  bordered = false,
  imageUrl,
  shape = 'round',
  size = 32,
}: ImageAvatarProps) => (
  <AvatarBase
    shape={shape}
    size={size}
    bordered={bordered}
    backgroundUrl={imageUrl}
    backgroundSize="cover"
  />
);
