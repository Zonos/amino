import { useState } from 'react';

import type { Meta } from '@storybook/react';
import clsx from 'clsx';

import { SearchInput } from 'src/components/input/SearchInput';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import * as icons from 'src/icons/_IconIndex';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

import styles from './Icons.stories.module.scss';

const IconsMeta: Meta = {
  component: icons.MailDuotoneIcon,
};

export default IconsMeta;

// Check if string contain keyword of the sub icon type or not
type IconsType = (typeof icons)[keyof typeof icons] & {
  deprecated?: boolean;
  displayName?: string;
};

export const Icons = ({
  color,
  inlineBlock,
  secondaryColor,
  size,
}: IconProps & { secondaryColor?: Color }) => {
  const [filter, setFilter] = useState('');
  const iicons = Object.values<IconsType>(icons)
    .map(icon => ({
      deprecated: !!icon.deprecated,
      icon,
      iconName: icon.displayName || '',
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
                  /Solid/.test(iconName) && 'solid',
                  /Duotone/.test(iconName) && 'duotone',
                )}
              >
                <IconComponent
                  color={color}
                  inlineBlock={inlineBlock}
                  secondaryColor={secondaryColor}
                  size={size}
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

const productIcons = Object.values<IconsType>(icons)
  .filter(icon => icon.displayName?.includes('ColorIcon'))
  .map(icon => ({
    deprecated: !!icon.deprecated,
    icon,
    iconName: icon.displayName || '',
  }));

export const Products = () => (
  <div className={styles.styledWrapper}>
    {productIcons.map(({ icon: IconComponent, iconName }) => (
      <div key={iconName} className={styles.styledIcon}>
        <IconComponent size={50} />
        <div>{iconName}</div>
      </div>
    ))}
  </div>
);
