import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { RestState, RestStateProps } from '../components/RestState';

const RestStateMeta: Meta = {
  title: 'Amino/RestState',
  component: RestState,
};

export default RestStateMeta;

const Template: Story<RestStateProps> = ({
  label,
  subtitle,
  action,
  icon,
}: RestStateProps) => (
  <RestState label={label} subtitle={subtitle} action={action} icon={icon} />
);

export const BasicRestState = Template.bind({});
BasicRestState.args = {
  label: 'Exanple Rest State',
  subtitle: 'Exanple Rest State',
};
