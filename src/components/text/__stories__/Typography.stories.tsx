import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { VStack } from 'src/components/stack/VStack';
import { type TextProps, Text, textOptions } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';

const StyledVStack = styled(VStack)`
  background-color: white;
  border: 1px solid ${theme.gray200};
  padding: ${theme.space16};
  margin-bottom: ${theme.space24};
  width: 640px;
  border-radius: 16px;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.gray300};
  padding: ${theme.space8};
  border-radius: 5px;
  width: 200px;
`;

const content = 'The quick brown fox jumps over the lazy';

const StyleMeta: Meta = {
  component: Text,
};

export default StyleMeta;

const Template: StoryFn<TextProps> = props => (
  <VStack spacing={8}>
    {textOptions.map(option => (
      <StyledVStack key={option.type}>
        <Text type={option.type} {...props}>
          {content}
        </Text>
        <Label>{option.label}</Label>
        <div>{`<Text type="${option.type}">${content}</Text>`}</div>
        <div>
          <div>font-size: var(--amino-font-size-{option.size});</div>
          <div>font-weight: var(--amino-font-weight-{option.weight});</div>
          <div>line-height: var(--amino-line-height-{option.size});</div>
        </div>
      </StyledVStack>
    ))}
  </VStack>
);

const TextSizesLabel = styled.div`
  margin-right: 10px;
  font-size: 14px;
`;

const TemplateTextSizes: StoryFn<TextProps> = props => (
  <VStack spacing={8}>
    {textOptions.map(option => (
      <div key={option.type}>
        <TextSizesLabel>{option.type}</TextSizesLabel>
        <Text type={option.type} {...props}>
          {content}
        </Text>
      </div>
    ))}
  </VStack>
);

export const TextTypes = TemplateTextSizes.bind({});

export const TextExample = Template.bind({});
TextExample.args = {};
export const TextBlue = Template.bind({});
TextBlue.args = { color: 'blue600' };
export const TextCyan = Template.bind({});
TextCyan.args = { color: 'cyan600' };
export const TextGray = Template.bind({});
TextGray.args = { color: 'gray600' };
export const TextGreen = Template.bind({});
TextGreen.args = { color: 'green600' };
export const TextOrange = Template.bind({});
TextOrange.args = { color: 'orange600' };
export const TextPurple = Template.bind({});
TextPurple.args = { color: 'purple600' };
export const TextRed = Template.bind({});
TextRed.args = { color: 'red600' };
