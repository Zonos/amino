import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Spinner as SpinnerComponent,
  SpinnerColor,
  SpinnerProps,
} from 'src/components/spinner/Spinner';
import styled from 'styled-components';

const SpinnerMeta: Meta = {
  component: SpinnerComponent,
};

export default SpinnerMeta;

const Wrapper = styled.div<{ color?: SpinnerColor }>`
  width: min-content;
  background-color: ${p => (p.color === 'white' ? 'black' : 'white')};
  border-radius: 5px;
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 20px;
`;

const Template: Story<SpinnerProps> = ({
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
