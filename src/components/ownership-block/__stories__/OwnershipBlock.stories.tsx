import type { Meta, StoryFn } from '@storybook/react';

import {
  type Props,
  OwnershipBlock as OwnershipBlockComponent,
} from 'src/components/ownership-block/OwnershipBlock';

const OwnershipBlockMeta: Meta = {
  component: OwnershipBlockComponent,
};

export default OwnershipBlockMeta;

const Template: StoryFn<Props> = ({
  docChampion,
  docEngineer,
  docOwner,
  docWriter,
  isLoading,
  themeOverride,
}) => (
  <OwnershipBlockComponent
    docChampion={docChampion}
    docEngineer={docEngineer}
    docOwner={docOwner}
    docWriter={docWriter}
    isLoading={isLoading}
    themeOverride={themeOverride}
  />
);

export const OwnershipBlock = Template.bind({});
OwnershipBlock.args = {
  docChampion: { id: '1', name: 'Doc Champion' },
  docEngineer: { id: '2', name: 'Doc Engineer' },
  docOwner: { id: '3', name: 'Doc Owner' },
  docWriter: { id: '4', name: 'Doc Writer' },
  isLoading: false,
};

export const OwnershipBlockLoading = Template.bind({});
OwnershipBlockLoading.args = {
  docChampion: { id: '1', name: 'Doc Champion' },
  docEngineer: { id: '2', name: 'Doc Engineer' },
  docOwner: { id: '3', name: 'Doc Owner' },
  docWriter: { id: '4', name: 'Doc Writer' },
  isLoading: true,
};
