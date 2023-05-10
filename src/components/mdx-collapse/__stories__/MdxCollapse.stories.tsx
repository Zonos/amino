import { Meta, Story } from '@storybook/react/types-6-0';

import { MdxCollapse, Props } from '../MdxCollapse';

const MdxCollapseMeta: Meta = {
  component: MdxCollapse,
};

export default MdxCollapseMeta;

const Template: Story<Props> = ({ stepNumber, collapse }: Props) => (
  <MdxCollapse collapse={collapse} stepNumber={stepNumber}>
    <h2>H2 label</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quae velit
      tenetur aliquid aspernatur totam corporis, sapiente, nobis quas atque
      cumque et asperiores corrupti neque architecto nostrum ullam! Voluptas,
      vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quae
      velit tenetur aliquid aspernatur totam corporis, sapiente, nobis quas
      atque cumque et asperiores corrupti neque architecto nostrum ullam!
      Voluptas, vel.
    </p>
  </MdxCollapse>
);

export const OpenWithSteps = Template.bind({});
OpenWithSteps.args = {
  collapse: false,
  stepNumber: 1,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapse: true,
};