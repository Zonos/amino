import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Skeleton, type SkeletonProps } from 'src/components/skeleton/Skeleton';
import { VStack } from 'src/components/stack/VStack';

const SkeletonMeta: Meta = {
  title: 'Amino/Skeleton',
  component: Skeleton,
};

export default SkeletonMeta;

const Template: Story<SkeletonProps> = ({ width, height }: SkeletonProps) => (
  <VStack>
    <Skeleton width={width} height={height} />
    <Skeleton width={width} height={height} />
    <Skeleton width={width} height={height} />
  </VStack>
);

export const BasicSkeleton = Template.bind({});
BasicSkeleton.args = {
  width: 500,
  height: 10,
};
