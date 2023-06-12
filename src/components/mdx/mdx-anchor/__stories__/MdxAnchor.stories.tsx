import type { Meta, StoryFn } from '@storybook/react';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import {
  type MdxAnchorProps,
  MdxAnchor as MdxAnchorComponent,
} from '../MdxAnchor';

const MdxAnchorMeta: Meta = {
  component: MdxAnchorComponent,
};

export default MdxAnchorMeta;

const Wrapper = styled.div`
  height: auto;
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

const Template: StoryFn<MdxAnchorProps> = ({
  className,
  internalPaths,
}: MdxAnchorProps) => (
  <Wrapper>
    <MdxAnchorComponent
      className={className}
      href="/"
      internalPaths={internalPaths}
      title="Valid internal anchor example"
    >
      Valid internal anchor example
    </MdxAnchorComponent>

    <MdxAnchorComponent
      className={className}
      href="/invalid-path"
      internalPaths={internalPaths}
      title="Invalid internal anchor example"
    >
      <RedText>
        Invalid internal anchor example (check console warnings)
      </RedText>
    </MdxAnchorComponent>

    <MdxAnchorComponent
      className={className}
      href="https://zonos.com"
      internalPaths={internalPaths}
      title="External anchor example"
    >
      External anchor example
    </MdxAnchorComponent>
  </Wrapper>
);

export const MdxAnchor = Template.bind({});
MdxAnchor.args = {
  internalPaths: ['/'],
};
