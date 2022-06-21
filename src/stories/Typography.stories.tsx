import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { VStack } from 'src/components/stack/VStack';
import { Text, textOptions } from 'src/components/text/Text';
import styled from 'styled-components';

const StyledVStack = styled(VStack)`
  background-color: white;
  border: 1px solid var(--amino-gray-200);
  padding: var(--amino-space-half);
  margin-bottom: var(--amino-space);
  width: 640px;
  border-radius: 16px;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  background: var(--amino-gray-300);
  padding: var(--amino-space-quarter);
  border-radius: 5px;
  width: 200px;
`;

const content = 'The quick brown fox jumps over the lazy';

const Typography = () => {
  return (
    <VStack spacing="space-quarter">
      {textOptions.map(option => (
        <StyledVStack key={option.size}>
          <Text type={option.size}>{content}</Text>
          <Label>{option.label}</Label>
          <div>{`<Text size="${option.size}">${content}</Text>`}</div>
          <div>
            <div>font-size: var(--amino-font-size-{option.size});</div>
            <div>font-weight: var(--amino-font-weight-{option.weight});</div>
            <div>line-height: var(--amino-line-height-{option.size});</div>
          </div>
        </StyledVStack>
      ))}
    </VStack>
  );
};

const StyleMeta: Meta = {
  title: 'Amino/Typography',
};

export default StyleMeta;

const TypographyTemplate: Story = () => <Typography />;

export const TextExample = TypographyTemplate.bind({});
