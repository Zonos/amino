import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { VStack } from 'src/components/stack/VStack';
import { Text, textOptions, TextProps } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledVStack = styled(VStack)`
  background-color: white;
  border: 1px solid ${theme.grayL60};
  padding: ${theme.spaceHalf};
  margin-bottom: ${theme.space};
  width: 640px;
  border-radius: 16px;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.grayL40};
  padding: ${theme.spaceQuarter};
  border-radius: 5px;
  width: 200px;
`;

const content = 'The quick brown fox jumps over the lazy';

const StyleMeta: Meta = {
  title: 'Amino/Typography',
};

export default StyleMeta;

const Template: Story<TextProps> = props => (
  <VStack spacing="space-quarter">
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

const TemplateTextSizes: Story<TextProps> = props => (
  <VStack spacing="space-quarter">
    {textOptions.map(option => (
      <div>
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
TextBlue.args = { color: 'blue-base' };
export const TextCyan = Template.bind({});
TextCyan.args = { color: 'cyan-base' };
export const TextGray = Template.bind({});
TextGray.args = { color: 'gray-base' };
export const TextGreen = Template.bind({});
TextGreen.args = { color: 'green-base' };
export const TextOrange = Template.bind({});
TextOrange.args = { color: 'orange-base' };
export const TextPurple = Template.bind({});
TextPurple.args = { color: 'purple-base' };
export const TextRed = Template.bind({});
TextRed.args = { color: 'red-base' };
export const TextYellow = Template.bind({});
TextYellow.args = { color: 'yellow-base' };
