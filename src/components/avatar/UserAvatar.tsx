import {
  AvatarBase,
  type FullAvatarProps,
} from 'src/components/avatar/AvatarBase';

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import avatarImg from '../../../svgReact/icons/custom-svgs/Avatar.svg';

export type UserAvatarProps = FullAvatarProps;

/**
 * UserAvatar displays a default user placeholder avatar.
 * Use this component when you need to show a user avatar but don't have a specific image,
 * such as for anonymous users or as a fallback when user images are unavailable.
 *
 * @component Avatar
 *
 * @example Basic usage
 * <UserAvatar />
 *
 * @example Custom size with border
 * <UserAvatar
 *   size={48}
 *   bordered
 * />
 *
 * @example Different shapes
 * <HStack gap={16}>
 *   <UserAvatar shape="round" />
 *   <UserAvatar shape="rounded" />
 *   <UserAvatar shape="square" />
 * </HStack>
 *
 * @example In a user card
 * <Card>
 *   <VStack gap={8} alignItems="center" padding={16}>
 *     <UserAvatar size={64} bordered />
 *     <Text type="heading">Guest User</Text>
 *     <Text type="subheader" color={theme.gray600}>Unregistered</Text>
 *   </VStack>
 * </Card>
 */
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
