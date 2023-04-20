import { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { VStack } from 'src/components/stack/VStack';
import { theme } from 'src/styles/constants/theme';
import { emojiFileNames } from 'src/utils/emojiFileNames';
import styled from 'styled-components';

import { Emoji as EmojiComponent } from '../Emoji';

const EmojiMeta: Meta = {
  component: EmojiComponent,
};

export default EmojiMeta;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: stretch;
  padding-bottom: 20px;
  flex-wrap: wrap;
  max-width: 100%;
`;

const StyledIcon = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${theme.v3ShadowBase};
  padding: ${theme.space16};
  flex: 1;
  min-width: 200px;
  max-width: 200px;
  &.deprecated {
    div {
      text-decoration: line-through;
    }
  }
`;

const Template: Story = () => {
  const [count, setCount] = useState(50);
  return (
    <VStack>
      <StyledWrapper>
        {emojiFileNames.slice(0, count).map(obj => (
          <StyledIcon>
            <EmojiComponent code={obj.emoji} />
          </StyledIcon>
        ))}
        {count < emojiFileNames.length && (
          <button onClick={() => setCount(prev => prev + 50)} type="button">
            <StyledIcon>...</StyledIcon>
          </button>
        )}
      </StyledWrapper>
    </VStack>
  );
};

export const Emoji = Template.bind({});
