import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

export const avatarSizes = {
  sm: theme.fontSizeS,
  md: theme.fontSizeBase,
  lg: theme.fontSizeL,
  xl: theme.fontSizeXl,
} as const;

export const iconSizes: { [key in AvatarSize]: number } = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

export const avatarShapes = {
  round: '50%',
  rounded: '10px',
  square: '0px',
} as const;

type AvatarSize = keyof typeof avatarSizes;
type AvatarShape = keyof typeof avatarShapes;

export interface AvatarProps {
  size: AvatarSize;
  shape: AvatarShape;
}

type AvartarBaseProps = AvatarProps & {
  backgroundUrl?: string;
  backgroundSize?: string;
};

export const AvatarBase = styled.div<AvartarBaseProps>`
  background-color: ${theme.grayL80};
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    css`
      border-radius: ${avatarShapes[props.shape]};
      height: ${avatarSizes[props.size]};
      width: ${avatarSizes[props.size]};
    `}

  ${props =>
    props.backgroundUrl &&
    css`
      background-image: url(${props.backgroundUrl});
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: ${props.backgroundSize};
    `}
`;
