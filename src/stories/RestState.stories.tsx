import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import {
  type RestStateProps,
  RestState,
} from '~/src/components/RestState/RestState';

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
  label: 'Example Rest State',
  subtitle: 'Example Rest State',
  icon: '',
};
