import type { ReactNode } from 'react';

import styled from 'styled-components';

import type { ImageSize } from 'src/components/avatar/AvatarBase';
import { theme } from 'src/styles/constants/theme';
import type { ColorPrefix } from 'src/types/Color';

const thumbnailShapes = {
  round: '50%',
  rounded: '20%',
  square: '0px',
} as const;

export type ThumbnailProps = {
  /** @default 'gray' */
  color?: ColorPrefix;
  icon: ReactNode;
  /** @default 'full' */
  intent?: 'full' | 'outline' | 'bordered';
  /** @default 'round' */
  shape?: keyof typeof thumbnailShapes;
  /** @default 32 */
  size?: ImageSize;
};

type StyleProps = Required<
  Pick<ThumbnailProps, 'shape' | 'color' | 'size' | 'intent'>
>;

const Wrapper = styled.div<StyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
  border-radius: ${p => thumbnailShapes[p.shape]};
  border: ${p =>
    p.intent === 'bordered' && `${p.size / 16}px solid ${theme.gray0}`};
  border: ${p => p.intent === 'outline' && `1px solid ${theme.gray200}`};
  box-sizing: content-box;
  background-color: ${p =>
    p.intent === 'outline' ? 'transparent' : theme[`${p.color}100`]};

  svg {
    color: ${p => theme[`${p.color}800`]};

    width: 60%;
    height: 60%;

    path[data-is-secondary-color] {
      fill: ${p => theme[`${p.color}400`]};
    }
  }
`;

export const Thumbnail = ({
  color = 'gray',
  icon,
  intent = 'full',
  shape = 'round',
  size = 32,
}: ThumbnailProps) => (
  <Wrapper color={color} intent={intent} shape={shape} size={size}>
    {icon}
  </Wrapper>
);
