import { useState } from 'react';

import type { Meta } from '@storybook/react';
import styled from 'styled-components';

import { SearchInput } from 'src/components/input/SearchInput';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { type FlagIconProps, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import * as flags from 'src/icons/flags/_FlagIndex';
import { theme } from 'src/styles/constants/theme';
import type { IconProps } from 'src/types/IconProps';

const meta: Meta = {
  component: FlagIcon,
};

export default meta;

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: ${theme.space40};
  grid-column-gap: ${theme.space24};
  padding-bottom: 20px;
`;

const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${theme.v3ShadowBase};
  padding: ${theme.space16};
  &.deprecated {
    div {
      text-decoration: line-through;
    }
  }
`;

// Check if string contain keyword of the sub icon type or not
type IconsType = (typeof flags)[keyof typeof flags] & {
  deprecated?: boolean;
  displayName?: string;
};

export const Flags = ({ size }: IconProps) => {
  const [filter, setFilter] = useState('');
  const iicons = Object.values<IconsType>(flags)
    .map(icon => ({
      deprecated: !!icon.deprecated,
      icon,
      iconName: icon.displayName || '',
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
              : true,
          )
          .map(({ deprecated, icon: IconComponent, iconName }) => {
            const isDeprecated = deprecated;
            return (
              <StyledIcon key={iconName}>
                <IconComponent height={size || 20} width={size || 20} />
                <div>{iconName}</div>
                {isDeprecated && <Text type="small-header">(Deprecated)</Text>}
              </StyledIcon>
            );
          })}
      </StyledWrapper>
    </VStack>
  );
};

export const Single = ({ code = 'US' }: FlagIconProps) => (
  <FlagIcon code={code} iconScale="large" />
);
