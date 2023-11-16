import type { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { StyledProps } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';

export type ImageSize = 16 | 24 | 32 | 40 | 48 | 56 | 64;

export const avatarShapes = {
  round: '50%',
  rounded: '10px',
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

type WrapperProp = StyledProps<{
  bordered: boolean;
  shape: AvatarShape;
  size: ImageSize;
}>;

const Wrapper = styled.div<WrapperProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p =>
    p.$bordered ? `${p.$size / 16}px solid ${theme.gray0}` : undefined};

  ${props =>
    props.$size &&
    css`
      border-radius: ${avatarShapes[props.$shape]};
      height: ${props.$size}px;
      width: ${props.$size}px;
    `}
`;

type StyledAvatarProps = StyledProps<
  AvatarStyleProps & {
    shape: AvatarShape;
  }
>;

const StyledAvatarBase = styled.div<StyledAvatarProps>`
  height: 100%;
  width: 100%;

  ${props => css`
    border-radius: ${avatarShapes[props.$shape]};
  `}

  ${props =>
    props.$backgroundUrl &&
    css`
      background-image: url(${props.$backgroundUrl});
      background-position: ${props.$backgroundPosition || 'center'};
      background-repeat: no-repeat;
      background-size: ${props.$backgroundSize};
      background-color: ${props.$backgroundColor || `${theme.gray100}`};
    `}
`;

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
}: AvatarBaseProps) => (
  <Wrapper
    $bordered={bordered}
    $shape={shape}
    $size={size}
    className={className}
  >
    {children || (
      <StyledAvatarBase
        $backgroundColor={backgroundColor}
        $backgroundPosition={backgroundPosition}
        $backgroundSize={backgroundSize}
        $backgroundUrl={backgroundUrl}
        $shape={shape}
      />
    )}
  </Wrapper>
);
