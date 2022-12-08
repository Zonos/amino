import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Spinner,
  SpinnerColor,
  SpinnerProps,
} from 'src/components/spinner/Spinner';
import styled from 'styled-components';

const SpinnerMeta: Meta = {
  component: Spinner,
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
    <Spinner size={size && size - 10} color={color} {...props} />
    <Spinner size={size} color={color} {...props} />
    <Spinner size={size && size + 10} color={color} {...props} />
  </Wrapper>
);

export const BasicSpinner = Template.bind({});
BasicSpinner.args = {
  size: 32,
};
