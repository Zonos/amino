import { lazy, Suspense, useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';
import clsx from 'clsx';

import { Input } from 'src/components/input/Input';
import { VStack } from 'src/components/stack/VStack';
import { commonIconsList } from 'src/icons/__stories__/IconsList';
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
  const [iconsToLoad, setIconsToLoad] = useState<string[]>([]);
  const [filter, setFilter] = useState('');

  // This is a hack to prevent the server from overloading when requesting all the icons
  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-console
      console.info('Loading more icons...');
      setIconsToLoad(prevIcons => {
        const newIcons = commonIconsList.slice(0, prevIcons.length + 50);
        if (newIcons.length >= commonIconsList.length) {
          clearInterval(interval);
        }
        return newIcons;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [iconsToLoad.length]);

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
        {iconsToLoad
          .filter(iconName =>
            filter
              ? iconName.toLowerCase().includes(filter.toLowerCase())
              : true,
          )
          .map(iconName => {
            const IconComponent = lazy(() =>
              import(`src/icons/${iconName}.tsx`).then(module => ({
                default: module[iconName],
              })),
            );

            return (
              <div
                key={iconName}
                className={clsx(
                  styles.styledIcon,
                  /Solid/.test(iconName) && 'solid',
                  /Duotone/.test(iconName) && 'duotone',
                )}
              >
                <Suspense key={iconName} fallback={<div>Loading...</div>}>
                  <IconComponent
                    color={color}
                    inlineBlock={inlineBlock}
                    secondaryColor={secondaryColor}
                    size={size}
                  />
                </Suspense>
                <div>{iconName}</div>
              </div>
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
