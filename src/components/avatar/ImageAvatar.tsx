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
    backgroundSize="contain"
    backgroundUrl={imageUrl}
    bordered={bordered}
    shape={shape}
    size={size}
  />
);
