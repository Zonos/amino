import type { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { StyledProps } from 'src/types';

export type ImageSize = 16 | 24 | 32 | 40 | 48 | 56 | 64;

export const avatarShapes = {
  round: '50%',
  rounded: '10px',
  square: '0px',
} as const;

type AvatarShape = keyof typeof avatarShapes;

export type AvatarProps = {
  /** @default false */
  bordered?: boolean;
  /** @default round */
  shape?: AvatarShape;
  /** @default 32 px */
  size?: ImageSize;
};

type AvartarBaseProps = Required<AvatarProps> & {
  backgroundColor?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundUrl?: string;
  children?: ReactNode;
};

type WrapperProp = Required<StyledProps<AvatarProps>>;

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

const StyledAvatarBase = styled.div<AvartarBaseProps>`
  height: 100%;
  width: 100%;

  ${props => css`
    border-radius: ${avatarShapes[props.shape]};
  `}

  ${props =>
    props.backgroundUrl &&
    css`
      background-image: url(${props.backgroundUrl});
      background-position: ${props.backgroundPosition || 'center'};
      background-repeat: no-repeat;
      background-size: ${props.backgroundSize};
      background-color: ${props.backgroundColor || `${theme.gray100}`};
    `}
`;

export const AvatarBase = ({ children, ...rest }: AvartarBaseProps) => (
  <Wrapper $bordered={rest.bordered} $shape={rest.shape} $size={rest.size}>
    {children || <StyledAvatarBase {...rest} />}
  </Wrapper>
);
