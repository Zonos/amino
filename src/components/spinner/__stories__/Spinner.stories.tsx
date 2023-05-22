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
  size,
  color,
  ...props
}: SpinnerProps) => (
  <Wrapper color={color}>
    <SpinnerComponent size={size && size - 10} color={color} {...props} />
    <SpinnerComponent size={size} color={color} {...props} />
    <SpinnerComponent size={size && size + 10} color={color} {...props} />
  </Wrapper>
);

export const Spinner = Template.bind({});
Spinner.args = {
  size: 32,
};
