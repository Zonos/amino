import type { Meta, StoryFn } from '@storybook/react';
import {
  type Props,
  MdxProgressCheckbox as MdxProgressCheckboxComponent,
} from 'src/components/mdx/mdx-progress-checkbox/MdxProgressCheckbox';

const MdxProgressCheckboxMeta: Meta = {
  component: MdxProgressCheckboxComponent,
};

export default MdxProgressCheckboxMeta;

const Template: StoryFn<Props> = ({ pathname, children }: Props) => (
  <>
    <MdxProgressCheckboxComponent
      pathname={pathname}
      checkboxKey="first"
      xlabel="First checkbox"
    >
      {children}
    </MdxProgressCheckboxComponent>

    <br />

    <MdxProgressCheckboxComponent
      pathname={pathname}
      checkboxKey="second"
      xlabel="Second checkbox"
    >
      {children}
    </MdxProgressCheckboxComponent>
  </>
);

export const MdxProgressCheckbox = Template.bind({});
MdxProgressCheckbox.args = {
  pathname: 'amino-progress-checkbox',
  children:
    'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
};
