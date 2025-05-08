import {
  AvatarBase,
  type FullAvatarProps,
} from 'src/components/avatar/AvatarBase';

export type ImageAvatarProps = {
  imageUrl: string;
} & FullAvatarProps;

/**
 * ImageAvatar displays an image in a standardized avatar format with consistent sizing and styling.
 * Use this component when you need to show profile pictures, product images, or any custom image
 * in an avatar format.
 *
 * @component Avatar
 *
 * @example Basic usage
 * ```tsx
 * <ImageAvatar
 *   imageUrl="https://example.com/profile.jpg"
 * />
 * ```
 *
 * @example With custom size and shape
 * ```tsx
 * <ImageAvatar
 *   imageUrl="https://example.com/profile.jpg"
 *   size={48}
 *   shape="square"
 *   bordered
 * />
 * ```
 *
 * @example Multiple sizes in a user profile
 * ```tsx
 * <VStack gap={16} alignItems="center">
 *   <ImageAvatar
 *     imageUrl="https://example.com/profile.jpg"
 *     size={64}
 *     bordered
 *   />
 *   <Text type="heading">Jane Smith</Text>
 *   <Text type="subheader" color={theme.gray600}>Product Manager</Text>
 * </VStack>
 * ```
 *
 * @example Image avatars in a horizontal list
 * ```tsx
 * <HStack gap={8}>
 *   {users.map(user => (
 *     <ImageAvatar
 *       key={user.id}
 *       imageUrl={user.profileImage}
 *       size={32}
 *       shape="rounded"
 *     />
 *   ))}
 * </HStack>
 * ```
 */
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
