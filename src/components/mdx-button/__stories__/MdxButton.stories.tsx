import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { MdxButton as MdxButtonComponent } from '../MdxButton';

const MdxButtonMeta: Meta = {
  component: MdxButtonComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=81%3A1128&t=erzegCytT9AfSn9f-0',
    },
  },
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    href: {
      type: 'string',
    },
    iconRight: {
      type: 'boolean',
    },
    loading: {
      type: 'boolean',
    },
    loadingText: {
      type: 'string',
    },
    tabIndex: {
      type: 'number',
    },
  },
};

export default MdxButtonMeta;

const VWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const ButtonRowLabel = styled(Text)`
  border-bottom: 1px solid black;
  margin-bottom: ${theme.space8};
`;

export const MdxButton: ComponentStory<typeof MdxButtonComponent> = () => (
  <VWrapper>
    <ButtonRowLabel type="bold-subheader">MdxButton examples</ButtonRowLabel>
    <div>
      <MdxButtonComponent intent="primary" href="/">
        Primary button
      </MdxButtonComponent>
      <MdxButtonComponent intent="outline" href="/">
        Outline button
      </MdxButtonComponent>
      <MdxButtonComponent href="https://zonos.com">
        Default button
      </MdxButtonComponent>
    </div>
  </VWrapper>
);
