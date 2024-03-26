import { useState } from 'react';

import type { Meta } from '@storybook/react';
import clsx from 'clsx';

import { SearchInput } from 'src/components/input/SearchInput';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { type FlagIconProps, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import * as flags from 'src/icons/flags/_FlagIndex';
import type { IconProps } from 'src/types/IconProps';

import styles from './Flags.stories.module.scss';

const meta: Meta = {
  component: FlagIcon,
};

export default meta;

type FlagType = (typeof flags)[keyof typeof flags] & {
  __docgenInfo?: {
    displayName?: string;
  };
  deprecated?: boolean;
};

export const Flags = ({ size }: IconProps) => {
  const [filter, setFilter] = useState('');
  const iicons = Object.values<FlagType>(flags)
    .map(icon => ({
      deprecated: !!icon.deprecated,
      icon,
      iconName: icon.__docgenInfo?.displayName || '',
    }))
    .filter(icon => icon.iconName);
  return (
    <VStack>
      <SearchInput onChange={e => setFilter(e.target.value)} value={filter} />
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
                <IconComponent height={size || 20} width={size || 20} />
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
