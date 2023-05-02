import { Meta, Story } from '@storybook/react/types-6-0';
import {
  MdxProgressCheckbox as MdxProgressCheckboxComponent,
  Props,
} from 'src/components/mdx-progress-checkbox/MdxProgressCheckbox';

const MdxProgressCheckboxMeta: Meta = {
  component: MdxProgressCheckboxComponent,
};

export default MdxProgressCheckboxMeta;

const Template: Story<Props> = ({ pathname, children }: Props) => (
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
