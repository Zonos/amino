import { cn } from 'src/utils/cn';

export type TextAvatarProps = {
  className?: string;
  label: string;
  style?: React.CSSProperties;
};

const colorForString = (stringInput: string, brightness: number) => {
  const stringUniqueHash = Array.from(stringInput).reduce(
    (acc, char) => char.charCodeAt(0) + ((acc << 5) - acc),
    0,
  );

  return `hsl(${stringUniqueHash % 360}, 80%, ${brightness}%)`;
};

/**
 * TextAvatar displays a colored avatar with a single character, typically the first letter of a label, using a unique gradient background based on the label string.
 * Useful for representing users, entities, or items when no image is available. The color is algorithmically generated for visual distinction.
 *
 * @example Basic usage
 * ```tsx
 * <TextAvatar label="A" />
 * ```
 *
 * @example With custom label
 * ```tsx
 * <TextAvatar label="Brazil" />
 * ```
 *
 * @example With custom style
 * ```tsx
 * <TextAvatar label="Zonos" style={{ width: 48, height: 48 }} />
 * ```
 */
export const TextAvatar = ({ className, label, style }: TextAvatarProps) => {
  const gradientStart = colorForString(label || 'default label', 45);
  const gradientEnd = colorForString(
    (label && label.split('').reverse().join('')) || 'default label',
    40,
  );

  return (
    <div
      className={cn(
        `rounded-amino-6 text-gray-0 flex size-8 items-center justify-center
        font-medium`,
        'dark:text-gray-1000',
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(137deg, ${gradientStart}, ${gradientEnd})`,
        ...style,
      }}
    >
      {(label && label[0]?.toUpperCase()) || 'D'}
    </div>
  );
};
