import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  MultiInput,
  type MultiInputProps,
} from 'src/components/input/MultiInput';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

const MultiInputMeta: Meta = {
  argTypes: {
    tagValidation: {
      control: {
        type: 'boolean',
      },
      description: 'Enable or disable tag validation',
    },
  },
  component: MultiInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=8536-6023&node-type=frame&t=ewUS1Ga25z210DP5-0',
    },
  },
};

export default MultiInputMeta;

const Template: StoryFn<MultiInputProps> = ({
  inputValue,
  setInputValue,
  setTags,
  tags,
  tagValidation,
  ...props
}) => {
  const [hasValidationError, setHasValidationError] = useState(false);

  return (
    <VStack>
      <MultiInput
        {...props}
        inputValue={inputValue}
        setHasValidationError={setHasValidationError}
        setInputValue={setInputValue}
        setTags={setTags}
        tagValidation={tagValidation}
        tags={tags}
      />
      {hasValidationError && (
        <Text color={hasValidationError && 'red600'}>
          Some tags are invalid
        </Text>
      )}
      <Text>Current tags: {tags.join(', ')}</Text>
      <Text>Current input: {inputValue}</Text>
    </VStack>
  );
};

const ParentComponent: StoryFn<MultiInputProps> = args => {
  const { tags: initalTags } = args;
  const [tags, setTags] = useState(initalTags || []);
  const [inputValue, setInputValue] = useState('');
  return (
    <Template
      {...args}
      inputValue={inputValue}
      setInputValue={setInputValue}
      setTags={setTags}
      tags={tags}
    />
  );
};

export const BasicMultiInput = ParentComponent.bind({});
BasicMultiInput.args = {
  tags: ['example', 'tags'],
};

export const MultiInputWithEmailValidation = ParentComponent.bind({});
MultiInputWithEmailValidation.args = {
  tagValidation: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  tags: ['test@zonos.com', 'bad-email'],
};
