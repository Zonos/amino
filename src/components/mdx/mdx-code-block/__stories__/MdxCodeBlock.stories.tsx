import type { Meta, StoryFn } from '@storybook/react';

import {
  type Props,
  MdxCodeBlock as MdxCodeBlockComponent,
} from '../MdxCodeBlock';

const MdxCodeBlockMeta: Meta = {
  component: MdxCodeBlockComponent,
};

export default MdxCodeBlockMeta;

const Template: StoryFn<Props> = ({
  children,
  maxHeight,
  themeOverride,
  type,
  xlabel,
}: Props) => (
  <MdxCodeBlockComponent
    maxHeight={maxHeight}
    themeOverride={themeOverride}
    type={type}
    xlabel={xlabel}
  >
    {children}
  </MdxCodeBlockComponent>
);

const codeContent = JSON.stringify(
  {
    itemToClassify: [
      {
        category: "women's clothing",
        imageUrl: 'https://zonos.com/images/cozygloves.png',
        name: "Cozy Design Women's Knitted Gloves with Roll Up Cuffs for Winter",
      },
    ],
  },
  null,
  '  '
);

export const MdxCodeBlock = Template.bind({});
MdxCodeBlock.args = {
  children: (
    <pre>
      <code>{codeContent}</code>
    </pre>
  ),
  maxHeight: undefined,
  type: 'JSON',
  xlabel: 'JSON Example',
};
