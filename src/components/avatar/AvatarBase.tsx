import type { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type ImageSize = 16 | 24 | 32 | 40 | 48 | 56 | 64;

export const avatarShapes = {
  round: '50%',
  rounded: '', // custom calculation based on size
  square: '0px',
} as const;

type AvatarShape = keyof typeof avatarShapes;

type AvatarStyleProps = {
  backgroundColor?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundUrl?: string;
};

export type AvatarProps = {
  /** @default false */
  bordered?: boolean;
  /** @default round */
  shape?: AvatarShape;
  /** @default 32 px */
  size?: ImageSize;
};

export type FullAvatarProps = BaseProps & {
  /** @default false */
  bordered?: boolean;
  /** @default round */
  shape?: AvatarShape;
  /** @default 32 px */
  size?: ImageSize;
};

type AvatarBaseProps = BaseProps & {
  children?: ReactNode;
} & Required<AvatarProps> &
  AvatarStyleProps;

/**
 * AvatarBase is the foundation component for all avatar variations in the Amino design system.
 * It provides consistent styling and layout for avatars with customizable appearance.
 *
 * This component is not typically used directly. Instead, use one of the specialized
 * avatar components like ImageAvatar or UserAvatar that build upon this base.
 *
 * @component Avatar
 *
 * @example Custom avatar implementation
 * <AvatarBase
 *   backgroundColor={theme.blue100}
 *   bordered={true}
 *   shape="rounded"
 *   size={48}
 * >
 *   <Text fontWeight={700} textAlign="center">AB</Text>
 * </AvatarBase>
 *
 * @example Background image with custom styling
 * <AvatarBase
 *   backgroundUrl="https://example.com/image.jpg"
 *   backgroundSize="cover"
 *   backgroundPosition="center"
 *   shape="square"
 *   size={64}
 * />
 *
 * @example Avatar with child content
 * <AvatarBase
 *   size={40}
 *   shape="round"
 *   backgroundColor={theme.gray200}
 * >
 *   <IconUser size={24} color="gray600" />
 * </AvatarBase>
 */
export const AvatarBase = ({
  backgroundColor,
  backgroundPosition,
  backgroundSize,
  backgroundUrl,
  bordered,
  children,
  className,
  shape,
  size,
  style,
}: AvatarBaseProps) => {
  const borderRadius =
    shape === 'rounded' ? `${(size / 8 - 1) * 2}px` : avatarShapes[shape];

  return (
    <div
      className={cn('flex justify-center items-center', className)}
      style={{
        ...style,
        border: bordered ? `${size / 16}px solid ${theme.gray0}` : undefined,
        borderRadius,
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      {children || (
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundColor: backgroundColor || theme.gray100,
            backgroundImage: backgroundUrl
              ? `url(${backgroundUrl})`
              : undefined,
            backgroundPosition: backgroundPosition || 'center',
            backgroundSize: backgroundSize || undefined,
            borderRadius,
          }}
        />
      )}
    </div>
  );
};
