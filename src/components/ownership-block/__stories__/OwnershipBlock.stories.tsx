import type { Meta, StoryFn } from '@storybook/react';

import {
  type Props,
  OwnershipBlock as OwnershipBlockComponent,
} from '../OwnershipBlock';

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
}) => (
  <OwnershipBlockComponent
    docChampion={docChampion}
    docEngineer={docEngineer}
    docOwner={docOwner}
    docWriter={docWriter}
    isLoading={isLoading}
  />
);

export const OwnershipBlock = Template.bind({});
OwnershipBlock.args = {
  docChampion: { name: 'Doc Champion', id: '1' },
  docEngineer: { name: 'Doc Engineer', id: '2' },
  docOwner: { name: 'Doc Owner', id: '3' },
  docWriter: { name: 'Doc Writer', id: '4' },
  isLoading: false,
};

export const OwnershipBlockLoading = Template.bind({});
OwnershipBlockLoading.args = {
  docChampion: { name: 'Doc Champion', id: '1' },
  docEngineer: { name: 'Doc Engineer', id: '2' },
  docOwner: { name: 'Doc Owner', id: '3' },
  docWriter: { name: 'Doc Writer', id: '4' },
  isLoading: true,
};
