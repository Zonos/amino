import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';

import { MdxCodeBlock as MdxCodeBlockComponent } from '../MdxCodeBlock';

const MdxCodeBlockMeta: Meta = {
  component: MdxCodeBlockComponent,
};

export default MdxCodeBlockMeta;

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

export const MdxCodeBlock: ComponentStory<
  typeof MdxCodeBlockComponent
> = () => (
  <MdxCodeBlockComponent xlabel="JSON Example" type="JSON">
    <pre>
      <code>{codeContent}</code>
    </pre>
  </MdxCodeBlockComponent>
);
