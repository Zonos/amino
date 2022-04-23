import React, { useState } from 'react';

import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { SearchInput } from '~/src/components/Input/SearchInput';
import { VStack } from '~/src/components/Stack';
import { Text } from '~/src/components/Text';
import * as icons from '~/src/icons';
import { type IconProps } from '~/src/types';

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
type IconsType = typeof icons[keyof typeof icons] & { deprecated?: boolean };

export const AllIcons = ({ size }: IconProps) => {
  const [filter, setFilter] = useState('');
  const iicons = Object.values<IconsType>(icons)
    .map(icon => ({
      icon,
      iconName: icon.name,
      deprecated: !!icon.deprecated,
    }))
    .filter(icon => icon.iconName);

  return (
    <VStack>
      <SearchInput onChange={e => setFilter(e.target.value)} value={filter} />
      <StyledWrapper>
        {iicons
          .filter(({ iconName }) =>
            filter
              ? iconName.toLowerCase().includes(filter.toLowerCase())
              : true
          )
          .map(({ icon: IconComponent, iconName, deprecated }) => {
            const isDeprecated = deprecated;
            return (
              <StyledIcon
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
    </VStack>
  );
};
