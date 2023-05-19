import type { Meta, StoryFn } from '@storybook/react';
import {
  type Props,
  MdxCopyValue as MdxCopyValueComponent,
} from 'src/components/mdx/mdx-copy-value/MdxCopyValue';
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

const Template: StoryFn<Props> = ({ text }: Props) => (
  <Wrapper>
    <MdxCopyValueComponent text={text} />
  </Wrapper>
);

export const MdxCopyValue = Template.bind({});
MdxCopyValue.args = {
  text: 'Copy this text',
};