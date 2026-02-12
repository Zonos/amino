import type { Meta, StoryFn } from '@storybook/react';

import {
  Spinner as SpinnerComponent,
  type SpinnerProps,
} from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';

const SpinnerMeta: Meta = {
  component: SpinnerComponent,
};

export default SpinnerMeta;

const Template: StoryFn<SpinnerProps> = ({
  color,
  size,
  ...props
}: SpinnerProps) => (
  <div className="flex w-min items-center gap-5 rounded-[5px] p-2.5">
    <SpinnerComponent color={color} size={size && size - 10} {...props} />
    <SpinnerComponent color={color} size={size} {...props} />
    <SpinnerComponent color={color} size={size && size + 10} {...props} />
  </div>
);

export const Spinner = Template.bind({});
Spinner.args = {
  size: 32,
};

export const InsideContainer: StoryFn<SpinnerProps> = ({
  color,
  size,
  ...props
}: SpinnerProps) => (
  <div className="m-25 flex overflow-scroll border border-amino">
    <SpinnerComponent color={color} size={60} {...props} />
  </div>
);

export const White: StoryFn<SpinnerProps> = ({
  color: _color,
  size,
  ...props
}: SpinnerProps) => (
  <>
    {[theme.gray1000, theme.blue600, theme.red600, theme.green600].map(
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
