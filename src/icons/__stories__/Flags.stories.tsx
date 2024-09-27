import { useState } from 'react';

import type { Meta } from '@storybook/react';
import clsx from 'clsx';

import { Input } from 'src/components/input/Input';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { type FlagIconProps, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import * as flags from 'src/icons/flags/_FlagIndex';
import { SearchIcon } from 'src/icons/SearchIcon';

import styles from './Flags.stories.module.scss';

const meta: Meta = {
  component: FlagIcon,
};

export default meta;

const getSize = (iconScale: 'small' | 'medium' | 'large') => {
  switch (iconScale) {
    case 'small':
      return 16;
    case 'medium':
      return 20;
    case 'large':
      return 32;
    default:
      return 20;
  }
};

const getBorderRadius = (iconScale: 'small' | 'medium' | 'large') => {
  switch (iconScale) {
    case 'large':
      return 11;
    default:
      return undefined;
  }
};

type FlagType = (typeof flags)[keyof typeof flags] & {
  __docgenInfo?: {
    displayName?: string;
  };
  deprecated?: boolean;
};

export const Flags = ({ iconScale }: FlagIconProps) => {
  const [filter, setFilter] = useState('');
  const iicons = Object.values<FlagType>(flags)
    .map(icon => ({
      deprecated: !!icon.deprecated,
      icon,
      iconName: icon.__docgenInfo?.displayName || '',
    }))
    .filter(icon => icon.iconName);

  const size = getSize(iconScale);

  return (
    <VStack>
      <Input
        onChange={e => setFilter(e.target.value)}
        placeholder="Search..."
        size="lg"
        type="search"
        value={filter}
        valuePrefix={<SearchIcon color="gray600" size={24} />}
      />
      <div className={styles.styledWrapper}>
        {iicons
          .filter(({ iconName }) =>
            filter
              ? iconName.toLowerCase().includes(filter.toLowerCase())
              : true,
          )
          .map(({ deprecated, icon: IconComponent, iconName }) => {
            const isDeprecated = deprecated;
            return (
              <div
                key={iconName}
                className={clsx(
                  styles.styledIcon,
                  isDeprecated && styles.deprecated,
                )}
              >
                <IconComponent
                  borderRadius={getBorderRadius(iconScale)}
                  height={size}
                  width={size}
                />
                <div>{iconName}</div>
                {isDeprecated && <Text type="small-header">(Deprecated)</Text>}
              </div>
            );
          })}
      </div>
    </VStack>
  );
};

export const Single = ({ code = 'US' }: FlagIconProps) => (
  <FlagIcon code={code} iconScale="large" />
);
