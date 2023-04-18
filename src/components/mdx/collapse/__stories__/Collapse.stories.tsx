import { Meta, Story } from '@storybook/react/types-6-0';

import { Collapse, Props } from '../Collapse';

const CollapseMeta: Meta = {
  component: Collapse,
};

export default CollapseMeta;

const Template: Story<Props> = ({ stepNumber, collapse, children }: Props) => (
  <Collapse collapse={collapse} stepNumber={stepNumber}>
    {children}
  </Collapse>
);

export const BasicCollapse = Template.bind({});
BasicCollapse.args = {
  collapse: true,
  stepNumber: 2,
};
