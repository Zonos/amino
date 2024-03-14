import styles from './TextAvatar.module.scss';

export type TextAvatarProps = {
  label: string;
};

const colorForString = (stringInput: string, brightness: number) => {
  const stringUniqueHash = Array.from(stringInput).reduce(
    (acc, char) =>
      // eslint-disable-next-line no-bitwise
      char.charCodeAt(0) + ((acc << 5) - acc),
    0,
  );

  return `hsl(${stringUniqueHash % 360}, 80%, ${brightness}%)`;
};

export const TextAvatar = ({ label }: TextAvatarProps) => (
  <div
    className={styles.gradientSquare}
    style={{
      '--amino-text-avatar-gradient-end': colorForString(
        (label && label.split('').reverse().join('')) || 'default label',
        40,
      ),
      '--amino-text-avatar-gradient-start': colorForString(
        label || 'default label',
        45,
      ),
    }}
  >
    {(label && label[0]?.toUpperCase()) || 'D'}
  </div>
);
