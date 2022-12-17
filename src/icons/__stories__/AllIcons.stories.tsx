import { useState } from 'react';

import { Meta } from '@storybook/react/types-6-0';
import { SearchInput } from 'src/components/input/SearchInput';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import * as icons from 'src/icons/IconIndex';
import { theme } from 'src/styles/constants/theme';
import { IconProps } from 'src/types/IconProps';
import styled from 'styled-components';

import { IconBase } from '../icon-base/_IconBase';

const IconsMeta: Meta = {
  component: IconBase,
};

export default IconsMeta;

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: ${theme.spaceDouble};
  grid-column-gap: ${theme.space};
  padding-bottom: 20px;
`;

const StyledIcon = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${theme.v3ShadowBase};
  padding: ${theme.spaceHalf};
  svg {
    color: ${theme.grayD40};
  }
  &.deprecated {
    div {
      text-decoration: line-through;
    }
  }
`;

// Check if string contain keyword of the sub icon type or not
type IconsType = typeof icons[keyof typeof icons] & {
  deprecated?: boolean;
  displayName?: string;
};

export const AllIcons = ({ size }: IconProps) => {
  const [filter, setFilter] = useState('');
  const iicons = Object.values<IconsType>(icons)
    .map(icon => ({
      icon,
      iconName: icon.displayName || '',
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
                <IconComponent size={30} />
                <div>{iconName}</div>
                {isDeprecated && <Text type="small-header">(Deprecated)</Text>}
              </StyledIcon>
            );
          })}
      </StyledWrapper>
    </VStack>
  );
};
