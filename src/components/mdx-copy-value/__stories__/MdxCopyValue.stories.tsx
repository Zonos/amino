import { Meta, Story } from '@storybook/react/types-6-0';
import {
  MdxCopyValue as MdxCopyValueComponent,
  Props,
} from 'src/components/mdx-copy-value/MdxCopyValue';
import styled from 'styled-components';

const MdxCopyValueMeta: Meta = {
  component: MdxCopyValueComponent,
};

export default MdxCopyValueMeta;

const Wrapper = styled.div`
  height: auto;
  width: 360px;
  margin: 0 auto;
`;

const Template: Story<Props> = ({ text }: Props) => (
  <Wrapper>
    <MdxCopyValueComponent text={text} />
  </Wrapper>
);

export const MdxCopyValue = Template.bind({});
MdxCopyValue.args = {
  text: 'Copy this text',
};
