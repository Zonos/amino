import type { Meta, StoryFn } from '@storybook/react';
import {
  type SpinnerColor,
  type SpinnerProps,
  Spinner as SpinnerComponent,
} from 'src/components/spinner/Spinner';
import styled from 'styled-components';

const SpinnerMeta: Meta = {
  component: SpinnerComponent,
};

export default SpinnerMeta;

const Wrapper = styled.div<{ color?: SpinnerColor }>`
  width: min-content;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Template: StoryFn<SpinnerProps> = ({
  color,
  size,
  ...props
}: SpinnerProps) => (
  <Wrapper color={color}>
    <SpinnerComponent color={color} size={size && size - 10} {...props} />
    <SpinnerComponent color={color} size={size} {...props} />
    <SpinnerComponent color={color} size={size && size + 10} {...props} />
  </Wrapper>
);

export const Spinner = Template.bind({});
Spinner.args = {
  size: 32,
};
