import { Meta, Story } from '@storybook/react/types-6-0';
import {
  MdxVideoGuide as MdxVideoGuideComponent,
  Props,
} from 'src/components/mdx-video-guide/MdxVideoGuide';
import styled from 'styled-components';

const MdxVideoGuideMeta: Meta = {
  component: MdxVideoGuideComponent,
};

export default MdxVideoGuideMeta;

const Wrapper = styled.div`
  height: auto;
  width: 360px;
  margin: 0 auto;
`;

const Template: Story<Props> = ({ url, xtitle }: Props) => (
  <Wrapper>
    <MdxVideoGuideComponent url={url} xtitle={xtitle} />
  </Wrapper>
);

export const MdxVideoGuide = Template.bind({});
MdxVideoGuide.args = {
  url: 'https://www.youtube.com/watch?v=6pNYGeZGxF0',
  xtitle: 'Learn how to create a tiered shipping option in Zonos Dashboard',
};
