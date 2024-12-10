import clsx from 'clsx';

import styles from './TextAvatar.module.scss';

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

export const TextAvatar = ({ className, label, style }: TextAvatarProps) => {
  const gradientStyles = {
    '--amino-text-avatar-gradient-end': colorForString(
      (label && label.split('').reverse().join('')) || 'default label',
      40,
    ),
    '--amino-text-avatar-gradient-start': colorForString(
      label || 'default label',
      45,
    ),
  };

  return (
    <div
      className={clsx([styles.gradientSquare, className])}
      style={{ ...gradientStyles, ...style }}
    >
      {(label && label[0]?.toUpperCase()) || 'D'}
    </div>
  );
};
