import { lazy, Suspense, useState } from 'react';

import type { Meta } from '@storybook/react';

import { Input } from 'src/components/input/Input';
import { VStack } from 'src/components/stack/VStack';
import { iconsList, iconsListProducts } from 'src/icons/__stories__/IconsList';
import { MailDuotoneIcon } from 'src/icons/MailDuotoneIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

import styles from './Icons.stories.module.scss';

const IconsMeta: Meta = {
  component: MailDuotoneIcon,
};

export default IconsMeta;

export const Icons = ({
  color,
  inlineBlock,
  secondaryColor,
  size,
}: IconProps & { secondaryColor?: Color }) => {
  const [filter, setFilter] = useState('');
  const iicons = iconsList
    .slice(0, 10)
    .map(icon => ({
      iconName: icon,
    }))
    .filter(icon => icon.iconName);

  console.log(iconsList, { iicons });
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
          .map(({ iconName }) => {
            const IconComponent = lazy(
              () => import(`src/icons/${iconName}.tsx`),
            );

            console.log({ IconComponent });

            return (
              <Suspense fallback={<div>Loading...</div>} key={iconName}>
                <IconComponent
                  color={color}
                  inlineBlock={inlineBlock}
                  secondaryColor={secondaryColor}
                  size={size}
                />
              </Suspense>
            );
          })}
      </div>
    </VStack>
  );
};

// const productIcons = iconsListProducts
//   .filter(icon => icon.includes('ColorIcon'))
//   .map(icon => ({
//     icon,
//     iconName: icon || '',
//   }));

// export const Products = () => (
//   <div className={styles.styledWrapper}>
//     {productIcons.map(({ icon: IconComponent, iconName }) => (
//       <div key={iconName} className={styles.styledIcon}>
//         <IconComponent size={50} />
//         <div>{iconName}</div>
//       </div>
//     ))}
//   </div>
// );
