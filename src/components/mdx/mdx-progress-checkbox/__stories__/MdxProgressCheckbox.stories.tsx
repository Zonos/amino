import type { Meta, StoryFn } from '@storybook/react';
import {
  type Props,
  MdxProgressCheckbox as MdxProgressCheckboxComponent,
} from 'src/components/mdx/mdx-progress-checkbox/MdxProgressCheckbox';

const MdxProgressCheckboxMeta: Meta = {
  component: MdxProgressCheckboxComponent,
};

export default MdxProgressCheckboxMeta;

const Template: StoryFn<Props> = ({ children, pathname }: Props) => (
  <>
    <MdxProgressCheckboxComponent
      checkboxKey="first"
      pathname={pathname}
      xlabel="First checkbox"
    >
      {children}
    </MdxProgressCheckboxComponent>

    <br />

    <MdxProgressCheckboxComponent
      checkboxKey="second"
      pathname={pathname}
      xlabel="Second checkbox"
    >
      {children}
    </MdxProgressCheckboxComponent>
  </>
);

export const MdxProgressCheckbox = Template.bind({});
MdxProgressCheckbox.args = {
  children:
    'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  pathname: 'amino-progress-checkbox',
};
