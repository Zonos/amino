import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Text } from 'components/Text';
import * as icons from 'icons';
import { IconProps } from 'types';

const IconsMeta: Meta = {
  title: 'Amino/Icons',
};

export default IconsMeta;

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: var(--amino-space-double);
  grid-column-gap: var(--amino-space);
  padding-bottom: 20px;
`;

const StyledIcon = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: var(--amino-shadow-small);
  padding: var(--amino-space-half);
  svg {
    color: var(--amino-gray-700);
  }
  &.duotone {
    svg {
      color: var(--amino-gray-300);
    }
  }
  &.deprecated {
    div {
      text-decoration: line-through;
    }
  }
`;

// Check if string contain keyword of the sub icon type or not
const hasSubtype = (iconName: string) => /Solid|Duotone/i.test(iconName);

export const AllIcons = ({ size }: IconProps) => {
  const iicons = Object.values(icons)
    .map(icon => ({
      icon,
      iconName: icon.name,
    }))
    .filter(icon => icon.iconName);

  return (
    <StyledWrapper>
      {iicons.map(({ icon: IconComponent, iconName }, index) => {
        const nextIcon = iicons[index + 1];
        const isDeprecated =
          !hasSubtype(iconName) && nextIcon && !hasSubtype(nextIcon.iconName);
        return (
          <StyledIcon
            // eslint-disable-next-line react/no-array-index-key
            key={iconName}
            size={size}
            className={[
              isDeprecated ? 'deprecated' : '',
              /Solid/.test(iconName) ? 'solid' : '',
              /Duotone/.test(iconName) ? 'duotone' : '',
            ].join(' ')}
          >
            <IconComponent size={30}>
              <></>
            </IconComponent>
            <div>{iconName}</div>
            {isDeprecated && <Text type="smallheader">(Deprecated)</Text>}
          </StyledIcon>
        );
      })}
    </StyledWrapper>
  );
};
