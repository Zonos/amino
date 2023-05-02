import { Meta, Story } from '@storybook/react/types-6-0';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { MdxAnchor as MdxAnchorComponent, MdxAnchorProps } from '../MdxAnchor';

const MdxAnchorMeta: Meta = {
  component: MdxAnchorComponent,
};

export default MdxAnchorMeta;

const Wrapper = styled.div`
  height: auto;
  width: 800px;
  margin: 0 auto;

  a {
    display: block;
    margin: 32px 0;
    color: ${theme.primary};
  }
`;

const RedText = styled.span`
  color: ${theme.error};
`;

const Template: Story<MdxAnchorProps> = ({
  className,
  internalPaths,
}: MdxAnchorProps) => (
  <Wrapper>
    <MdxAnchorComponent
      className={className}
      href="/"
      title="Valid internal anchor example"
      internalPaths={internalPaths}
    >
      Valid internal anchor example
    </MdxAnchorComponent>

    <MdxAnchorComponent
      className={className}
      href="/invalid-path"
      title="Invalid internal anchor example"
      internalPaths={internalPaths}
    >
      <RedText>
        Invalid internal anchor example (check console warnings)
      </RedText>
    </MdxAnchorComponent>

    <MdxAnchorComponent
      className={className}
      href="https://zonos.com"
      title="External anchor example"
      internalPaths={internalPaths}
    >
      External anchor example
    </MdxAnchorComponent>
  </Wrapper>
);

export const MdxAnchor = Template.bind({});
MdxAnchor.args = {
  internalPaths: ['/'],
};
