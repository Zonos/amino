import { ReactNode } from 'react';

import styled from 'styled-components';

import { AvatarBase, AvatarProps } from './AvatarBase';

export type IconAvatarProps = {
  icon: ReactNode;
} & AvatarProps;

const StyledAvatarBase = styled(AvatarBase)<Omit<IconAvatarProps, 'icon'>>`
  svg {
    width: 50%;
    height: 50%;
  }
`;

export const IconAvatar = ({
  icon,
  shape = 'round',
  size = 32,
  bordered = false,
}: IconAvatarProps) => (
  <StyledAvatarBase shape={shape} size={size} bordered={bordered}>
    {icon}
  </StyledAvatarBase>
);
