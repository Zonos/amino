import { ReactNode } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Card as CardComponent } from 'src/components/card/Card';
import { Skeleton, SkeletonProps } from 'src/components/skeleton/Skeleton';
import { GridSpacing } from 'src/components/stack/GridSpacing';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
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

export const Basic = Template.bind({});
Basic.args = {
  width: 500,
  height: 20,
};

const StyledCard = styled(CardComponent)`
  max-width: 600px;
`;

export const Card: Story<
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

Card.args = {
  height: 30,
};

const StyledSkeletonWithChildren = styled(Skeleton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WithChildren: Story = () => (
  <StyledSkeletonWithChildren width={400} height={100}>
    <Text type="subheader" color="gray600">
      Generating report...
    </Text>
  </StyledSkeletonWithChildren>
);
