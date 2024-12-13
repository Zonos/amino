import type { Meta, StoryFn } from '@storybook/react';

import { VStack } from 'src/components/stack/VStack';
import { Text, textOptions, type TextProps } from 'src/components/text/Text';

import styles from './Typography.stories.module.scss';

const content = 'The quick brown fox jumps over the lazy';

const meta: Meta = {
  component: Text,
};

export default meta;

const Template: StoryFn<TextProps> = props => (
  <VStack spacing={8}>
    {textOptions.map(option => (
      <VStack key={option.type} className={styles.styledVStack}>
        <Text type={option.type} {...props}>
          {content}
        </Text>
        <div className={styles.label}>{option.label}</div>
        <div>{`<Text type="${option.type}">${content}</Text>`}</div>
        <div>
          <div>font-size: var(--amino-font-size-{option.size});</div>
          <div>font-weight: var(--amino-font-weight-{option.weight});</div>
          <div>line-height: var(--amino-line-height-{option.size});</div>
        </div>
      </VStack>
    ))}
  </VStack>
);

export const TextTypes: StoryFn<TextProps> = props => (
  <VStack spacing={8}>
    {textOptions.map(option => (
      <div key={option.type}>
        <div className={styles.textSizesLabel}>{option.type}</div>
        <Text type={option.type} {...props}>
          {content}
        </Text>
      </div>
    ))}
  </VStack>
);

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
