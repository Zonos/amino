import type { ReactNode } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Card as CardComponent } from 'src/components/card/Card';
import { Skeleton, type SkeletonProps } from 'src/components/skeleton/Skeleton';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import type { GridSpacing } from 'src/types/GridSpacing';

import styles from './Skeleton.stories.module.scss';

const SkeletonMeta: Meta = {
  args: {
    numberOfChildren: 4,
  },
  component: Skeleton,
};

export default SkeletonMeta;

type StoryProps = SkeletonProps & {
  numberOfChildren: number;
  spacing: GridSpacing;
};

const Template: StoryFn<
  StoryProps & { renderChild: (key: number) => ReactNode }
> = ({ height, numberOfChildren, spacing, width }) => (
  <VStack spacing={spacing}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Skeleton key={n} height={height} width={width} />
    ))}
  </VStack>
);

export const Basic = Template.bind({});
Basic.args = {
  height: 20,
  width: 500,
};

export const Card: StoryFn<
  StoryProps & { renderChild: (key: number) => ReactNode }
> = ({ height, numberOfChildren, spacing, width }) => (
  <CardComponent
    className={styles.styledCard}
    footerActions={<Skeleton height={30} width={60} />}
    label="A Card"
  >
    <VStack spacing={spacing}>
      {[...Array(numberOfChildren).keys()].map(n => (
        <Skeleton key={n} height={height} width={width} />
      ))}
    </VStack>
  </CardComponent>
);

Card.args = {
  height: 30,
};

export const WithChildren: StoryFn = () => (
  <Skeleton
    className={styles.styledSkeletonWithChildren}
    height={100}
    width={400}
  >
    <Text color="gray600" type="subheader">
      Generating report...
    </Text>
  </Skeleton>
);
