import React from 'react';

import { DynamicIcon, DynamicIconType } from 'src/icons/icon-base/DynamicIcon';
import styled, { css } from 'styled-components';

import avatarimg from './avatar.svg';

const avatarSizes = {
  sm: 'var(--amino-size-sm)',
  md: 'var(--amino-size-md)',
  lg: 'var(--amino-size-lg)',
  xl: 'var(--amino-size-xl)',
} as const;

const iconSizes: { [key in AvatarSize]: number } = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

const avatarShapes = {
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

export type IconAvatarProps = {
  icon: DynamicIconType;
} & AvatarProps;

export type ImageAvatarProps = {
  imageUrl: string;
} & AvatarProps;

const BaseAvatar = styled.div<
  AvatarProps & { backgroundUrl?: string; backgroundSize?: string }
>`
  background-color: var(--amino-gray-l80);
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

export const IconAvatar = ({ icon, shape, size }: IconAvatarProps) => (
  <BaseAvatar shape={shape} size={size}>
    <DynamicIcon type={icon} size={iconSizes[size]} />
  </BaseAvatar>
);

export const UserAvatar = ({ size, shape }: AvatarProps) => (
  <BaseAvatar
    shape={shape}
    size={size}
    backgroundUrl={`${avatarimg}`}
    backgroundSize="80%"
  />
);

export const ImageAvatar = ({ size, shape, imageUrl }: ImageAvatarProps) => (
  <BaseAvatar
    shape={shape}
    size={size}
    backgroundUrl={imageUrl}
    backgroundSize="cover"
  />
);
