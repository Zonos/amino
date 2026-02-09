import { lazy, Suspense, useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';

import { Input } from 'src/components/input/Input';
import { VStack } from 'src/components/stack/VStack';
import { flagIconsList } from 'src/icons/__stories__/FlagsList';
import { FlagIcon, type FlagIconProps } from 'src/icons/flag-icon/FlagIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import { cn } from 'src/utils/cn';

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

export const Flags = ({ iconScale }: FlagIconProps) => {
  const [iconsToLoad, setIconsToLoad] = useState<string[]>([]);
  const [filter, setFilter] = useState('');

  // This is a hack to prevent the server from overloading when requesting all the icons
  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-console
      console.info('Loading more icons...');
      setIconsToLoad(prevIcons => {
        const newIcons = flagIconsList.slice(0, prevIcons.length + 50);
        if (newIcons.length >= flagIconsList.length) {
          clearInterval(interval);
        }
        return newIcons;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [iconsToLoad.length]);

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
      <div className="grid w-full grid-cols-3 gap-x-6 gap-y-10 pb-5">
        {iconsToLoad
          .filter(iconName =>
            filter
              ? iconName.toLowerCase().includes(filter.toLowerCase())
              : true,
          )
          .map(iconName => {
            const IconComponent = lazy(() =>
              import(`src/icons/flags/${iconName}.tsx`).then(module => ({
                default: module[iconName],
              })),
            );

            return (
              <div
                key={iconName}
                className={cn(
                  'flex flex-col justify-center items-center shadow-(--amino-v3-shadow-base) p-4',
                )}
              >
                <Suspense key={iconName} fallback={<div>Loading...</div>}>
                  <IconComponent
                    borderRadius={getBorderRadius(iconScale)}
                    height={size}
                    width={size}
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

export const Single = ({ code = 'US' }: FlagIconProps) => (
  <FlagIcon code={code} iconScale="large" />
);
