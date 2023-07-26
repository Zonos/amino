import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import {
  type SpinnerProps,
  Spinner as SpinnerComponent,
} from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';

const SpinnerMeta: Meta = {
  component: SpinnerComponent,
};

export default SpinnerMeta;

const Wrapper = styled.div`
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
  <Wrapper>
    <SpinnerComponent color={color} size={size && size - 10} {...props} />
    <SpinnerComponent color={color} size={size} {...props} />
    <SpinnerComponent color={color} size={size && size + 10} {...props} />
  </Wrapper>
);

export const Spinner = Template.bind({});
Spinner.args = {
  size: 32,
};

const ScrollableWrapper = styled.div`
  border: ${theme.border};
  margin: 100px;
  display: flex;
  overflow: scroll;
`;

export const InsideContainer: StoryFn<SpinnerProps> = ({
  color,
  size,
  ...props
}: SpinnerProps) => (
  <ScrollableWrapper>
    <SpinnerComponent color={color} size={60} {...props} />
  </ScrollableWrapper>
);

export const White: StoryFn<SpinnerProps> = ({
  color: _color,
  size,
  ...props
}: SpinnerProps) => (
  <>
    {[theme.gray1200, theme.blue600, theme.red600, theme.green600].map(
      color => (
        <div
          style={{
            backgroundColor: color,
          }}
        >
          <SpinnerComponent color="white" size={60} {...props} />
        </div>
      ),
    )}
  </>
);
