import { ReactNode } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Card } from 'src/components/card/Card';
import { Skeleton, SkeletonProps } from 'src/components/skeleton/Skeleton';
import { GridSpacing } from 'src/components/stack/GridSpacing';
import { VStack } from 'src/components/stack/VStack';
import styled from 'styled-components';

const SkeletonMeta: Meta = {
  component: Skeleton,
  args: {
    numberOfChildren: 4,
  },
  argTypes: {
    height: {
      type: 'number',
    },
    width: {
      type: 'number',
    },
  },
};

export default SkeletonMeta;

type StoryProps = SkeletonProps & {
  numberOfChildren: number;
  spacing: GridSpacing;
};

const Template: Story<
  StoryProps & { renderChild: (key: number) => ReactNode }
> = ({ numberOfChildren, spacing, width, height }) => (
  <VStack spacing={spacing}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Skeleton key={n} width={width} height={height} />
    ))}
  </VStack>
);

export const BasicSkeleton = Template.bind({});
BasicSkeleton.args = {
  width: 500,
  height: 20,
  spacing: 'space',
};

const StyledCard = styled(Card)`
  max-width: 600px;
`;

export const CardSkeleton: Story<
  StoryProps & { renderChild: (key: number) => ReactNode }
> = ({ numberOfChildren, spacing, width, height }) => (
  <StyledCard
    label="A Card"
    footerActions={<Skeleton width={60} height={30} />}
  >
    <VStack spacing={spacing}>
      {[...Array(numberOfChildren).keys()].map(n => (
        <Skeleton key={n} width={width} height={height} />
      ))}
    </VStack>
  </StyledCard>
);

CardSkeleton.args = {
  height: 30,
  spacing: 'space',
};
