import type { ReactNode } from 'react';

import type { ImageSize } from 'src/components/avatar/AvatarBase';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color, ColorPrefix } from 'src/types/Color';
import { cn } from 'src/utils/cn';

const thumbnailShapes = {
  round: '50%',
  rounded: '20%',
  square: '0px',
} as const;

export type ThumbnailProps = BaseProps & {
  /** @default 'gray' */
  /** @description automatically applies a color scheme based on the color passed */
  color?: ColorPrefix;
  icon: ReactNode;
  /** @default 'full' */
  intent?: 'full' | 'outline' | 'bordered';
  /** @description mainColorOverride is used if the "color" prop is not sufficient for your needs */
  mainColorOverride?: Color;
  /** @description secondaryColorOverride is used if the "color" prop is not sufficient for your needs */
  secondaryColorOverride?: Color;
  /** @default 'round' */
  shape?: keyof typeof thumbnailShapes;
  /** @default 32 */
  size?: ImageSize;
};

/**
 * Thumbnail displays an icon with customizable styling, color schemes, and shapes.
 * Used for visual representation of items or actions in a compact format.
 * Supports different intents, shapes, colors, and sizes to match various design requirements.
 *
 * @example Basic usage
 * ```tsx
 * <Thumbnail icon={<UserIcon />} />
 * ```
 *
 * @example Custom shape and color
 * ```tsx
 * <Thumbnail
 *   color="blue"
 *   icon={<DocumentIcon />}
 *   shape="square"
 * />
 * ```
 *
 * @example With outline intent and custom size
 * ```tsx
 * <Thumbnail
 *   icon={<StarIcon />}
 *   intent="outline"
 *   size={48}
 * />
 * ```
 *
 * @example With custom color override
 * ```tsx
 * <Thumbnail
 *   icon={<GlobeIcon />}
 *   mainColorOverride="purple800"
 *   secondaryColorOverride="purple400"
 * />
 * ```
 */
export const Thumbnail = ({
  className,
  color = 'gray',
  icon,
  intent = 'full',
  mainColorOverride,
  secondaryColorOverride,
  shape = 'round',
  size = 32,
  style,
}: ThumbnailProps) => (
  <div
    className={cn(
      'inline-flex justify-center items-center box-content [&_svg]:w-[60%] [&_svg]:h-[60%]',
      intent === 'bordered' && 'border-gray-0 dark:border-gray-1000',
      intent === 'outline' &&
        'border border-gray-200 dark:border-gray-800 bg-transparent',
      intent === 'full' && 'bg-[var(--amino-thumbnail-background-color)]',
      className,
    )}
    style={{
      ...style,
      '--amino-thumbnail-background-color': theme[`${color}100`],
      '--amino-thumbnail-svg-main-color':
        theme[mainColorOverride || `${color}800`],
      '--amino-thumbnail-svg-secondary-color':
        theme[secondaryColorOverride || `${color}400`],
      borderRadius: thumbnailShapes[shape],
      borderWidth: intent === 'bordered' ? `calc(${size}px / 16)` : undefined,
      color: `var(--amino-thumbnail-svg-main-color)`,
      height: `${size}px`,
      width: `${size}px`,
    }}
  >
    {icon}
  </div>
);
