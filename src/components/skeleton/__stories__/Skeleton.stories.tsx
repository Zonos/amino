import type { ReactNode } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Card as CardComponent } from 'src/components/card/Card';
import { type SkeletonProps, Skeleton } from 'src/components/skeleton/Skeleton';
import type { GridSpacing } from 'src/components/stack/GridSpacing';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import styled from 'styled-components';

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

const StyledCard = styled(CardComponent)`
  max-width: 600px;
`;

export const Card: StoryFn<
  StoryProps & { renderChild: (key: number) => ReactNode }
> = ({ height, numberOfChildren, spacing, width }) => (
  <StyledCard
    footerActions={<Skeleton height={30} width={60} />}
    label="A Card"
  >
    <VStack spacing={spacing}>
      {[...Array(numberOfChildren).keys()].map(n => (
        <Skeleton key={n} height={height} width={width} />
      ))}
    </VStack>
  </StyledCard>
);

Card.args = {
  height: 30,
};

const StyledSkeletonWithChildren = styled(Skeleton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WithChildren: StoryFn = () => (
  <StyledSkeletonWithChildren height={100} width={400}>
    <Text color="gray600" type="subheader">
      Generating report...
    </Text>
  </StyledSkeletonWithChildren>
);
