import { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
import { StyledProps } from 'src/types';
import styled, { css } from 'styled-components';

export type ImageSize = 16 | 24 | 32 | 40 | 48 | 56 | 64;

export const avatarShapes = {
  round: '50%',
  rounded: '10px',
  square: '0px',
} as const;

type AvatarShape = keyof typeof avatarShapes;

export type AvatarProps = {
  /** @default round */
  shape: AvatarShape;
  /** @default 32 px */
  size?: ImageSize;
  /** @default false */
  bordered?: boolean;
};

type AvartarBaseProps = Required<AvatarProps> & {
  backgroundUrl?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  children?: ReactNode;
};

type WrapperProp = Required<StyledProps<AvatarProps>>;

const Wrapper = styled.div<WrapperProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.gray100};
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

const StyledAvatarBase = styled.div<AvartarBaseProps>`
  background-color: ${theme.gray100};
  height: 100%;
  width: 100%;

  ${props =>
    css`
      border-radius: ${avatarShapes[props.shape]};
    `}

  ${props =>
    props.backgroundUrl &&
    css`
      background-image: url(${props.backgroundUrl});
      background-position: ${props.backgroundPosition || 'center'};
      background-repeat: no-repeat;
      background-size: ${props.backgroundSize};
    `}
`;

export const AvatarBase = ({ children, ...rest }: AvartarBaseProps) => (
  <Wrapper $bordered={rest.bordered} $size={rest.size} $shape={rest.shape}>
    {children || <StyledAvatarBase {...rest} />}
  </Wrapper>
);
