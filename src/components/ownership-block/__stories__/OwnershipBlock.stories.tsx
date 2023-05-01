import { Meta, Story } from '@storybook/react/types-6-0';

import {
  OwnershipBlock as OwnershipBlockComponent,
  Props,
} from '../OwnershipBlock';

const OwnershipBlockMeta: Meta = {
  component: OwnershipBlockComponent,
};

export default OwnershipBlockMeta;

const Template: Story<Props> = ({
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
