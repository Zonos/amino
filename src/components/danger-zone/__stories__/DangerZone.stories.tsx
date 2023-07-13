import type { Meta, StoryFn } from '@storybook/react';

import type { CardProps } from 'src/components/card/Card';
import { DangerZone } from 'src/components/danger-zone/DangerZone';

const DangerZoneMeta: Meta = {
  component: DangerZone,
};

export default DangerZoneMeta;

const Template: StoryFn<CardProps> = ({
  actions,
  children,
  footerActions,
  label,
}: CardProps) => (
  <DangerZone actions={actions} footerActions={footerActions} label={label}>
    {children}
  </DangerZone>
);

export const BasicDangerZone = Template.bind({});
BasicDangerZone.args = {
  children: 'Danger zone contents',
  label: 'My danger zone',
};
